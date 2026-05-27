"use client";

import { useState } from "react";
import { MessageCircle, X, Sun, Moon, Trees, Send } from "lucide-react";
import { useTheme, type Theme } from "./ThemeProvider";

const themes: { id: Theme; label: string; Icon: typeof Sun; swatch: string }[] = [
  { id: "light", label: "Light", Icon: Sun, swatch: "#ffffff" },
  { id: "dark", label: "Midnight", Icon: Moon, swatch: "#0b1c2e" },
  { id: "forest", label: "Forest", Icon: Trees, swatch: "#0a1a14" },
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        aria-label="Open assistant"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-105"
        style={{ background: "var(--color-primary)", color: "#fff" }}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[340px] rounded-2xl border shadow-2xl overflow-hidden"
          style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
        >
          <div
            className="px-4 py-3 flex items-center gap-3 border-b"
            style={{ borderColor: "var(--color-border)", background: "var(--color-primary)" }}
          >
            <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-white">
              <MessageCircle size={16} />
            </div>
            <div className="text-white">
              <p className="text-sm font-semibold">Change Energy Assistant</p>
              <p className="text-[11px] opacity-80">Typically replies in under a minute</p>
            </div>
          </div>

          <div className="p-4 space-y-3 max-h-[260px] overflow-y-auto" style={{ color: "var(--color-text)" }}>
            <div className="rounded-2xl rounded-tl-sm px-3 py-2 text-sm w-fit max-w-[85%]" style={{ background: "var(--color-bg)" }}>
              Hi! I can help with project scoping, code questions, or pricing. What are you exploring?
            </div>
            <div className="rounded-2xl rounded-tl-sm px-3 py-2 text-sm w-fit max-w-[85%]" style={{ background: "var(--color-bg)" }}>
              Want to change the look? Pick a theme below.
            </div>
          </div>

          <div className="px-4 pb-3">
            <p className="text-[11px] uppercase tracking-wider mb-2" style={{ color: "var(--color-muted)" }}>
              Theme
            </p>
            <div className="flex gap-2">
              {themes.map(({ id, label, Icon, swatch }) => (
                <button
                  key={id}
                  onClick={() => setTheme(id)}
                  className="flex-1 rounded-lg border px-2 py-2 text-xs flex flex-col items-center gap-1 transition"
                  style={{
                    borderColor: theme === id ? "var(--color-primary)" : "var(--color-border)",
                    background: theme === id ? "var(--color-primary)" : "transparent",
                    color: theme === id ? "#fff" : "var(--color-text)",
                  }}
                >
                  <span className="h-5 w-5 rounded-full border" style={{ background: swatch, borderColor: "var(--color-border)" }} />
                  <span className="flex items-center gap-1"><Icon size={11} />{label}</span>
                </button>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="border-t flex items-center gap-2 p-3"
            style={{ borderColor: "var(--color-border)" }}
          >
            <input
              placeholder="Type a message…"
              className="flex-1 rounded-full px-4 py-2 text-sm outline-none border"
              style={{
                background: "var(--color-bg)",
                borderColor: "var(--color-border)",
                color: "var(--color-text)",
              }}
            />
            <button
              type="submit"
              aria-label="Send"
              className="h-9 w-9 rounded-full flex items-center justify-center"
              style={{ background: "var(--color-primary)", color: "#fff" }}
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
