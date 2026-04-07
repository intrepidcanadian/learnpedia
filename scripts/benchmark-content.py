#!/usr/bin/env python3
"""
Content quality benchmark for learnpedia wiki.

Measures quantitative metrics across all content articles.
Run after each review pass to track improvements.

Usage:
    python3 scripts/benchmark-content.py                    # full report
    python3 scripts/benchmark-content.py --json             # JSON output
    python3 scripts/benchmark-content.py --compare FILE     # compare against previous JSON baseline
"""

import os
import re
import json
import sys
import glob
from datetime import datetime

CONTENT_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "content")
BASELINE_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "baselines")


def parse_frontmatter(text):
    """Extract YAML frontmatter as a dict."""
    if not text.startswith("---"):
        return {}, text
    parts = text.split("---", 2)
    if len(parts) < 3:
        return {}, text
    fm = {}
    for line in parts[1].strip().split("\n"):
        if ":" in line:
            key, val = line.split(":", 1)
            val = val.strip().strip('"')
            if val.startswith("\n") or val == "":
                continue
            fm[key.strip()] = val
    # Parse related as list
    if "related" not in fm:
        related_match = re.search(r'related:\s*\n((?:\s+-\s+.+\n?)+)', parts[1])
        if related_match:
            fm["related"] = [
                line.strip().lstrip("- ").strip()
                for line in related_match.group(1).strip().split("\n")
                if line.strip()
            ]
    body = parts[2].strip()
    return fm, body


def count_prompt_examples(body):
    """Count backtick-quoted prompt examples."""
    # Match inline code that looks like prompts (contains quotes or prompt-like language)
    inline = re.findall(r'`"[^`]{10,}"`', body)
    # Match code blocks
    blocks = re.findall(r'```[\s\S]*?```', body)
    block_prompts = []
    for b in blocks:
        content = b.strip("`").strip()
        # Only count blocks that look like prompts (contain quotes or descriptive language)
        if '"' in content or "shot" in content.lower() or "camera" in content.lower():
            block_prompts.append(b)
    return len(inline) + len(block_prompts)


def count_cross_references(body):
    """Count wiki cross-references [text](/wiki/slug)."""
    return len(re.findall(r'\[([^\]]+)\]\(/wiki/([^)]+)\)', body))


def count_tables(body):
    """Count markdown tables."""
    # A table has at least a header row and separator row
    return len(re.findall(r'\|.+\|\n\|[-| :]+\|', body))


def count_sections(body):
    """Count ## and ### headings."""
    h2 = len(re.findall(r'^## ', body, re.MULTILINE))
    h3 = len(re.findall(r'^### ', body, re.MULTILINE))
    return h2, h3


def count_platform_mentions(body):
    """Count mentions of specific AI video platforms."""
    platforms = [
        "Seedance", "Runway", "Kling", "Sora", "Pika", "Minimax",
        "Luma", "Veo", "Vidu", "Wan", "Hailuo"
    ]
    mentions = {}
    for p in platforms:
        count = len(re.findall(r'\b' + p + r'\b', body, re.IGNORECASE))
        if count > 0:
            mentions[p] = count
    return mentions


def analyze_article(filepath):
    """Analyze a single article and return metrics."""
    with open(filepath, "r") as f:
        text = f.read()

    fm, body = parse_frontmatter(text)
    words = len(body.split())
    h2, h3 = count_sections(body)
    prompts = count_prompt_examples(body)
    xrefs = count_cross_references(body)
    tables = count_tables(body)
    platforms = count_platform_mentions(body)
    related = fm.get("related", [])
    if isinstance(related, str):
        related = [related]

    # Derive slug from filepath
    slug = os.path.splitext(os.path.basename(filepath))[0]
    category = os.path.basename(os.path.dirname(filepath))

    return {
        "slug": slug,
        "category": category,
        "title": fm.get("title", slug),
        "word_count": words,
        "sections_h2": h2,
        "sections_h3": h3,
        "prompt_examples": prompts,
        "cross_references": xrefs,
        "tables": tables,
        "related_articles": len(related),
        "platforms_mentioned": len(platforms),
        "platform_details": platforms,
    }


def compute_quantitative_score(metrics):
    """Compute a 0-100 quantitative health score from metrics."""
    score = 0

    # Word count: 300-1500 is ideal range
    wc = metrics["word_count"]
    if wc < 200:
        score += 5
    elif wc < 400:
        score += 10
    elif wc <= 1500:
        score += 20
    else:
        score += 15  # too long

    # Sections: at least 3 h2s
    score += min(metrics["sections_h2"] * 4, 20)

    # Prompt examples: at least 3
    score += min(metrics["prompt_examples"] * 5, 20)

    # Cross-references: at least 2
    score += min(metrics["cross_references"] * 4, 16)

    # Tables: at least 1
    score += min(metrics["tables"] * 4, 12)

    # Platform mentions: at least 2 platforms
    score += min(metrics["platforms_mentioned"] * 3, 12)

    return min(score, 100)


def print_report(results, compare_data=None):
    """Print a formatted report."""
    print(f"\n{'=' * 80}")
    print(f"  CONTENT QUALITY BENCHMARK — {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print(f"{'=' * 80}\n")

    # Group by category
    by_category = {}
    for r in results:
        cat = r["category"]
        if cat not in by_category:
            by_category[cat] = []
        by_category[cat].append(r)

    # Summary stats
    total_words = sum(r["word_count"] for r in results)
    total_prompts = sum(r["prompt_examples"] for r in results)
    total_xrefs = sum(r["cross_references"] for r in results)
    avg_score = sum(r["quant_score"] for r in results) / len(results)

    print(f"  Articles: {len(results)}")
    print(f"  Total words: {total_words:,}")
    print(f"  Total prompt examples: {total_prompts}")
    print(f"  Total cross-references: {total_xrefs}")
    print(f"  Avg quantitative score: {avg_score:.1f}/100")

    if compare_data:
        prev_avg = sum(a.get("quant_score", 0) for a in compare_data) / len(compare_data)
        delta = avg_score - prev_avg
        direction = "+" if delta > 0 else ""
        print(f"  Delta from baseline: {direction}{delta:.1f}")

    print(f"\n{'─' * 80}")

    # Per-category breakdown
    for cat in sorted(by_category.keys()):
        articles = sorted(by_category[cat], key=lambda x: x["quant_score"])
        cat_avg = sum(a["quant_score"] for a in articles) / len(articles)
        print(f"\n  {cat.upper().replace('-', ' ')} (avg: {cat_avg:.0f}/100)")
        print(f"  {'─' * 70}")
        print(f"  {'Article':<45} {'Words':>6} {'Prompts':>8} {'XRefs':>6} {'Score':>6}")
        print(f"  {'─' * 70}")
        for a in articles:
            delta_str = ""
            if compare_data:
                prev = next((p for p in compare_data if p["slug"] == a["slug"]), None)
                if prev:
                    d = a["quant_score"] - prev.get("quant_score", 0)
                    if d != 0:
                        delta_str = f" ({'+' if d > 0 else ''}{d:.0f})"
            print(f"  {a['slug']:<45} {a['word_count']:>6} {a['prompt_examples']:>8} {a['cross_references']:>6} {a['quant_score']:>5.0f}{delta_str}")

    # Bottom 5
    print(f"\n{'─' * 80}")
    print(f"\n  LOWEST SCORING (priority for improvement):")
    print(f"  {'─' * 70}")
    bottom = sorted(results, key=lambda x: x["quant_score"])[:5]
    for i, a in enumerate(bottom, 1):
        gaps = []
        if a["prompt_examples"] < 2:
            gaps.append("needs prompt examples")
        if a["cross_references"] < 2:
            gaps.append("needs cross-references")
        if a["tables"] == 0:
            gaps.append("needs tables")
        if a["platforms_mentioned"] < 2:
            gaps.append("needs platform mentions")
        if a["word_count"] < 400:
            gaps.append("too short")
        print(f"  {i}. {a['slug']} ({a['quant_score']:.0f}/100) — {', '.join(gaps) if gaps else 'low overall'}")

    print()


def main():
    args = sys.argv[1:]
    json_mode = "--json" in args
    compare_file = None
    if "--compare" in args:
        idx = args.index("--compare")
        if idx + 1 < len(args):
            compare_file = args[idx + 1]

    # Find all articles
    articles = glob.glob(os.path.join(CONTENT_DIR, "**", "*.md"), recursive=True)
    # Exclude storyboard (it's a project file, not a reference article)
    articles = [a for a in articles if "starcraft" not in a]

    results = []
    for filepath in sorted(articles):
        metrics = analyze_article(filepath)
        metrics["quant_score"] = compute_quantitative_score(metrics)
        results.append(metrics)

    # Load comparison data
    compare_data = None
    if compare_file and os.path.exists(compare_file):
        with open(compare_file) as f:
            compare_data = json.load(f)["articles"]

    if json_mode:
        output = {
            "timestamp": datetime.now().isoformat(),
            "article_count": len(results),
            "avg_quant_score": sum(r["quant_score"] for r in results) / len(results),
            "articles": results,
        }
        # Save to baselines dir
        os.makedirs(BASELINE_DIR, exist_ok=True)
        baseline_path = os.path.join(
            BASELINE_DIR,
            f"baseline-{datetime.now().strftime('%Y-%m-%d')}.json"
        )
        with open(baseline_path, "w") as f:
            json.dump(output, f, indent=2)
        print(json.dumps(output, indent=2))
        print(f"\nSaved to {baseline_path}", file=sys.stderr)
    else:
        print_report(results, compare_data)


if __name__ == "__main__":
    main()
