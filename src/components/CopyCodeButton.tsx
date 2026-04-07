"use client";

import { useEffect } from "react";

export default function CopyCodeButton() {
  useEffect(() => {
    function addCopyButtons() {
      const codeBlocks = document.querySelectorAll(".wiki-content pre");
      codeBlocks.forEach((pre) => {
        if (pre.querySelector(".copy-btn")) return;
        const btn = document.createElement("button");
        btn.className = "copy-btn";
        btn.textContent = "Copy";
        btn.addEventListener("click", () => {
          const code = pre.querySelector("code");
          if (code) {
            navigator.clipboard.writeText(code.textContent || "");
            btn.textContent = "Copied!";
            btn.classList.add("copied");
            setTimeout(() => {
              btn.textContent = "Copy";
              btn.classList.remove("copied");
            }, 2000);
          }
        });
        (pre as HTMLElement).style.position = "relative";
        pre.appendChild(btn);
      });
    }

    // Run after content renders
    const timeout = setTimeout(addCopyButtons, 100);
    return () => clearTimeout(timeout);
  }, []);

  return null;
}
