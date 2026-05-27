"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-3xl border p-6 md:p-10 shadow-xl space-y-4"
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
          <h3 className="font-heading text-2xl font-bold mb-2">Send us a message</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <input
              required
              placeholder="Full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="rounded-xl border px-4 py-3 text-sm outline-none"
              style={{ background: "var(--color-bg)", borderColor: "var(--color-border)", color: "var(--color-text)" }}
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-xl border px-4 py-3 text-sm outline-none"
              style={{ background: "var(--color-bg)", borderColor: "var(--color-border)", color: "var(--color-text)" }}
            />
          </div>
          <input
            required
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-xl border px-4 py-3 text-sm outline-none"
            style={{ background: "var(--color-bg)", borderColor: "var(--color-border)", color: "var(--color-text)" }}
          />
          <textarea
            placeholder="Message (optional)"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full rounded-xl border px-4 py-3 text-sm outline-none resize-none"
            style={{ background: "var(--color-bg)", borderColor: "var(--color-border)", color: "var(--color-text)" }}
          />
          <button
            type="submit"
            className="w-full rounded-full px-6 py-3 text-sm font-semibold text-white inline-flex items-center justify-center gap-2"
            style={{ background: "var(--color-primary)" }}
          >
            Send message <Send size={14} />
          </button>
        </>
      )}
    </form>
  );
}
