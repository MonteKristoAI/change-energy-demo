"use client";

import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "@/data/site";

export function ReviewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [progress, setProgress] = useState(0);

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    setProgress(el.scrollLeft / Math.max(1, el.scrollWidth - el.clientWidth));
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-review-card]");
    const step = card ? card.offsetWidth + 20 : 360;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 reviews-track"
        style={{ scrollBehavior: "smooth" }}
      >
        {reviews.map((r, i) => (
          <article
            key={r.name + i}
            data-review-card
            className="snap-start shrink-0 w-[88%] sm:w-[60%] md:w-[44%] lg:w-[31%] rounded-2xl border p-6 transition-transform hover:-translate-y-1"
            style={{
              background: "rgba(255, 255, 255, 0.98)",
              borderColor: "rgba(0,0,0,0.06)",
              boxShadow: "0 20px 50px -20px rgba(0,0,0,0.45)",
              color: "#1f2937",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              {/* Google G */}
              <span
                className="h-10 w-10 rounded-full flex items-center justify-center font-bold text-base shrink-0"
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  fontFamily: "Arial, sans-serif",
                  color: "#1f2937",
                }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.26 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.83z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.07.56 4.21 1.65l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.83C6.71 7.31 9.14 5.38 12 5.38z"/>
                </svg>
              </span>
              <div className="min-w-0">
                <p className="text-[15px] font-semibold truncate">{r.name}</p>
                <p className="text-[11px] text-gray-500 truncate">{r.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} size={15} fill="#fbbc04" stroke="none" />
              ))}
              <span className="ml-2 text-[11px] text-gray-500">a month ago</span>
            </div>

            <p className="text-[14px] leading-relaxed text-gray-700">{r.body}</p>
          </article>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-2 flex items-center justify-between gap-4">
        <div className="flex-1 h-1 rounded-full bg-white/20 overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${Math.max(8, progress * 100)}%`, background: "var(--color-accent)" }}
          />
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => scrollBy(-1)}
            disabled={!canPrev}
            aria-label="Previous reviews"
            className="h-11 w-11 rounded-full border flex items-center justify-center transition disabled:opacity-30 hover:scale-105"
            style={{ borderColor: "rgba(255,255,255,0.3)", background: "rgba(0,0,0,0.3)", color: "#fff" }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scrollBy(1)}
            disabled={!canNext}
            aria-label="Next reviews"
            className="h-11 w-11 rounded-full border flex items-center justify-center transition disabled:opacity-30 hover:scale-105"
            style={{ borderColor: "rgba(255,255,255,0.3)", background: "rgba(0,0,0,0.3)", color: "#fff" }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <style>{`
        .reviews-track::-webkit-scrollbar { display: none; }
        .reviews-track { scrollbar-width: none; }
      `}</style>
    </div>
  );
}
