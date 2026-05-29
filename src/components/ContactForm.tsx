"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";

export function ContactForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const inputCls = "rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 transition";
  const inputStyle = {
    background: "var(--color-bg)",
    borderColor: "var(--color-border)",
    color: "var(--color-text)",
  } as const;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-3xl border p-6 md:p-9 shadow-xl space-y-4"
      style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
    >
      {sent ? (
        <div className="text-center py-6">
          <div
            className="h-14 w-14 mx-auto rounded-full flex items-center justify-center mb-4"
            style={{ background: "var(--color-primary)", color: "#fff" }}
          >
            <Check size={26} />
          </div>
          <h3 className="font-heading text-2xl font-bold mb-2">Message sent</h3>
          <p style={{ color: "var(--color-muted)" }}>An engineer will reply within one business day.</p>
        </div>
      ) : (
        <>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-1" style={{ color: "var(--color-primary)" }}>
              Get in touch
            </p>
            <h3 className="font-heading text-2xl font-bold mb-2">Send us a message</h3>
            <p className="text-sm mb-5" style={{ color: "var(--color-muted)" }}>
              We reply within one business day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="firstName" className="text-[11px] uppercase tracking-wider font-semibold" style={{ color: "var(--color-muted)" }}>
                First name *
              </label>
              <input
                id="firstName"
                required
                placeholder="Jane"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                className={inputCls}
                style={inputStyle}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="lastName" className="text-[11px] uppercase tracking-wider font-semibold" style={{ color: "var(--color-muted)" }}>
                Last name *
              </label>
              <input
                id="lastName"
                required
                placeholder="Doe"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className={inputCls}
                style={inputStyle}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-[11px] uppercase tracking-wider font-semibold" style={{ color: "var(--color-muted)" }}>
              Email *
            </label>
            <input
              id="email"
              required
              type="email"
              placeholder="jane@company.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={`w-full ${inputCls}`}
              style={inputStyle}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-[11px] uppercase tracking-wider font-semibold" style={{ color: "var(--color-muted)" }}>
              Phone <span className="lowercase text-[10px]">(optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+1 (905) 000-0000"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={`w-full ${inputCls}`}
              style={inputStyle}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-[11px] uppercase tracking-wider font-semibold" style={{ color: "var(--color-muted)" }}>
              Message <span className="lowercase text-[10px]">(optional)</span>
            </label>
            <textarea
              id="message"
              placeholder="Tell us what you are scoping…"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`w-full resize-none ${inputCls}`}
              style={inputStyle}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full px-6 py-3.5 text-sm font-semibold text-white inline-flex items-center justify-center gap-2 transition hover:gap-3 hover:shadow-lg"
            style={{ background: "var(--color-primary)" }}
          >
            Send message <Send size={14} />
          </button>
        </>
      )}
    </form>
  );
}
