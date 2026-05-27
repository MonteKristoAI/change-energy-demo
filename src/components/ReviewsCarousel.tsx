"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "@/data/site";

export function ReviewsCarousel() {
  const [idx, setIdx] = useState(0);
  const perPage = 3;
  const maxIdx = Math.max(0, reviews.length - perPage);
  const visible = reviews.slice(idx, idx + perPage);

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-5">
        {visible.map((r, i) => (
          <div
            key={r.name + i}
            className="rounded-2xl border p-6 transition hover:-translate-y-1"
            style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div
                className="h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold text-white"
                style={{ background: "var(--color-primary)" }}
              >
                G
              </div>
              <div>
                <p className="text-sm font-semibold">{r.name}</p>
                <p className="text-[11px]" style={{ color: "var(--color-muted)" }}>{r.role}</p>
              </div>
            </div>
            <div className="flex gap-0.5 mb-3" style={{ color: "var(--color-accent)" }}>
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} size={14} fill="currentColor" stroke="none" />
              ))}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>
              {r.body}
            </p>
            <p className="mt-4 text-[11px]" style={{ color: "var(--color-muted)" }}>
              Verified Google review
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 mt-8">
        <button
          onClick={() => setIdx((v) => Math.max(0, v - 1))}
          disabled={idx === 0}
          aria-label="Previous reviews"
          className="h-10 w-10 rounded-full border flex items-center justify-center disabled:opacity-30 transition"
          style={{ borderColor: "var(--color-border)", color: "var(--color-text)" }}
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex gap-1.5">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-2 rounded-full transition-all"
              style={{
                width: idx === i ? 24 : 8,
                background: idx === i ? "var(--color-primary)" : "var(--color-border)",
              }}
            />
          ))}
        </div>
        <button
          onClick={() => setIdx((v) => Math.min(maxIdx, v + 1))}
          disabled={idx === maxIdx}
          aria-label="Next reviews"
          className="h-10 w-10 rounded-full border flex items-center justify-center disabled:opacity-30 transition"
          style={{ borderColor: "var(--color-border)", color: "var(--color-text)" }}
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
