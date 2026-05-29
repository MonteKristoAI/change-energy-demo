"use client";

import { useState, useEffect, useRef } from "react";
import { Palette, Sun, Moon, Trees, Check } from "lucide-react";
import { useTheme, type Theme } from "./ThemeProvider";

const themes: { id: Theme; label: string; Icon: typeof Sun; swatch: string }[] = [
  { id: "light", label: "Light", Icon: Sun, swatch: "#ffffff" },
  { id: "dark", label: "Midnight", Icon: Moon, swatch: "#0b1c2e" },
  { id: "forest", label: "Forest", Icon: Trees, swatch: "#1f4a37" },
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (open && wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div ref={wrapperRef} className="fixed bottom-6 right-6 z-50">
      <button
        aria-label="Change theme"
        onClick={() => setOpen((v) => !v)}
        className="h-14 w-14 rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-105"
        style={{ background: "var(--color-primary)", color: "#fff" }}
      >
        <Palette size={22} />
      </button>

      {open && (
        <div
          className="absolute bottom-16 right-0 w-56 rounded-2xl border shadow-2xl overflow-hidden backdrop-blur-xl"
          style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
        >
          <div
            className="px-4 py-3 border-b"
            style={{ borderColor: "var(--color-border)" }}
          >
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: "var(--color-muted)" }}>
              Theme
            </p>
            <p className="text-sm font-semibold mt-0.5" style={{ color: "var(--color-text)" }}>
              Choose your look
            </p>
          </div>
          <div className="p-2">
            {themes.map(({ id, label, Icon, swatch }) => {
              const active = theme === id;
              return (
                <button
                  key={id}
                  onClick={() => setTheme(id)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition text-left"
                  style={{
                    background: active ? "color-mix(in oklab, var(--color-primary) 15%, transparent)" : "transparent",
                    color: "var(--color-text)",
                  }}
                >
                  <span
                    className="h-7 w-7 rounded-full border shrink-0 flex items-center justify-center"
                    style={{ background: swatch, borderColor: "var(--color-border)" }}
                  >
                    <Icon size={12} style={{ color: id === "light" ? "#0b1c2e" : "#fff" }} />
                  </span>
                  <span className="flex-1 text-sm font-medium">{label}</span>
                  {active && <Check size={15} style={{ color: "var(--color-primary)" }} />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
