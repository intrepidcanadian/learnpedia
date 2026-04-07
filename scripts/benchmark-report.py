#!/usr/bin/env python3
"""
Combined benchmark report: merges quantitative metrics with LLM rubric scores.

Usage:
    python3 scripts/benchmark-report.py
    python3 scripts/benchmark-report.py --compare baselines/llm-scores-YYYY-MM-DD.json
"""

import json
import os
import sys
import glob
from datetime import datetime

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
BASELINE_DIR = os.path.join(SCRIPT_DIR, "baselines")


def load_latest(pattern):
    files = sorted(glob.glob(os.path.join(BASELINE_DIR, pattern)))
    if not files:
        return None
    with open(files[-1]) as f:
        return json.load(f)


def main():
    quant = load_latest("baseline-*.json")
    llm = load_latest("llm-scores-*.json")

    if not quant or not llm:
        print("Missing baseline files. Run benchmark-content.py --json first, then save LLM scores.")
        return

    # Merge by slug
    quant_by_slug = {a["slug"]: a for a in quant["articles"]}
    llm_by_slug = {a["slug"]: a for a in llm["articles"]}

    all_slugs = sorted(set(list(quant_by_slug.keys()) + list(llm_by_slug.keys())))

    merged = []
    for slug in all_slugs:
        q = quant_by_slug.get(slug, {})
        l = llm_by_slug.get(slug, {})
        merged.append({
            "slug": slug,
            "category": l.get("category", q.get("category", "?")),
            "quant_score": q.get("quant_score", 0),
            "llm_score": l.get("weighted_score", 0),
            "word_count": q.get("word_count", 0),
            "prompts": q.get("prompt_examples", 0),
            "xrefs": q.get("cross_references", 0),
            "accuracy": l.get("accuracy", 0),
            "completeness": l.get("completeness", 0),
            "ai_specific": l.get("ai_specific", 0),
            "top_gap": l.get("top_gap", ""),
        })

    # Combined score: 40% quantitative (normalized to 5) + 60% LLM
    for m in merged:
        q_norm = (m["quant_score"] / 100) * 5
        m["combined"] = round(q_norm * 0.4 + m["llm_score"] * 0.6, 2)

    # Sort by combined score ascending (worst first for priority)
    merged.sort(key=lambda x: x["combined"])

    # Print report
    print(f"\n{'=' * 90}")
    print(f"  COMBINED CONTENT BENCHMARK — {datetime.now().strftime('%Y-%m-%d')}")
    print(f"  Quantitative: {quant['timestamp'][:10]}  |  LLM Judge: {llm['timestamp']}")
    print(f"{'=' * 90}")

    avg_combined = sum(m["combined"] for m in merged) / len(merged)
    avg_llm = sum(m["llm_score"] for m in merged) / len(merged)
    avg_quant = sum(m["quant_score"] for m in merged) / len(merged)

    print(f"\n  Articles: {len(merged)}")
    print(f"  Avg combined score: {avg_combined:.2f}/5.00")
    print(f"  Avg LLM score:      {avg_llm:.2f}/5.00")
    print(f"  Avg quant score:    {avg_quant:.0f}/100")

    # Rating distribution
    excellent = sum(1 for m in merged if m["combined"] >= 4.5)
    good = sum(1 for m in merged if 3.5 <= m["combined"] < 4.5)
    needs_work = sum(1 for m in merged if 2.5 <= m["combined"] < 3.5)
    poor = sum(1 for m in merged if m["combined"] < 2.5)
    print(f"\n  Excellent (4.5+): {excellent}  |  Good (3.5-4.4): {good}  |  Needs Work (2.5-3.4): {needs_work}  |  Poor (<2.5): {poor}")

    # Category averages
    cats = {}
    for m in merged:
        cat = m["category"]
        if cat not in cats:
            cats[cat] = []
        cats[cat].append(m["combined"])

    print(f"\n  {'Category':<25} {'Avg':>6} {'Articles':>9}")
    print(f"  {'─' * 42}")
    for cat in sorted(cats, key=lambda c: sum(cats[c]) / len(cats[c])):
        avg = sum(cats[cat]) / len(cats[cat])
        print(f"  {cat:<25} {avg:>5.2f} {len(cats[cat]):>9}")

    # Full table
    print(f"\n{'─' * 90}")
    print(f"  {'Article':<40} {'Cat':<20} {'Quant':>5} {'LLM':>5} {'Comb':>5} {'Rating':<10}")
    print(f"  {'─' * 86}")
    for m in merged:
        rating = "Excellent" if m["combined"] >= 4.5 else "Good" if m["combined"] >= 3.5 else "Needs Work" if m["combined"] >= 2.5 else "Poor"
        print(f"  {m['slug']:<40} {m['category']:<20} {m['quant_score']:>5.0f} {m['llm_score']:>5.1f} {m['combined']:>5.2f} {rating:<10}")

    # Priority improvements
    print(f"\n{'─' * 90}")
    print(f"\n  TOP 10 IMPROVEMENT PRIORITIES (lowest combined score):")
    print(f"  {'─' * 86}")
    for i, m in enumerate(merged[:10], 1):
        print(f"  {i:>2}. {m['slug']:<38} ({m['combined']:.2f})  {m['top_gap']}")

    # Dimension weaknesses
    print(f"\n{'─' * 90}")
    print(f"\n  WEAKEST DIMENSIONS (avg < 4.0 across all articles):")
    print(f"  {'─' * 86}")
    dims = ["accuracy", "completeness", "ai_specific"]
    for d in ["accuracy", "completeness", "prompts_dim", "ai_specific"]:
        key = d if d != "prompts_dim" else "prompts"  # quant prompts vs llm prompts
        # Use LLM scores for dimensions
        if d == "prompts_dim":
            vals = [llm_by_slug[s].get("prompts", 0) for s in llm_by_slug]
            label = "prompts"
        else:
            vals = [llm_by_slug[s].get(d, 0) for s in llm_by_slug]
            label = d
        avg = sum(vals) / len(vals) if vals else 0
        if avg < 4.0:
            worst = sorted(llm_by_slug.values(), key=lambda x: x.get(label if d != "prompts_dim" else "prompts", 5))[:5]
            slugs = ", ".join(w["slug"] for w in worst)
            print(f"  {label:<15} avg {avg:.1f}  — worst: {slugs}")

    print()


if __name__ == "__main__":
    main()
