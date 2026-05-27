"use client";

import { useState } from "react";
import { Check, ChevronRight, ChevronLeft } from "lucide-react";
import { services } from "@/data/site";

const urgencies = [
  { id: "asap", label: "ASAP", note: "Within 1 week" },
  { id: "month", label: "This month", note: "Within 4 weeks" },
  { id: "quarter", label: "This quarter", note: "Planning ahead" },
  { id: "scoping", label: "Scoping", note: "Exploring options" },
];

export function BookingCard() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState<string | null>(null);
  const [urgency, setUrgency] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [done, setDone] = useState(false);

  const canNext = (step === 0 && service) || (step === 1 && urgency);
  const submit = () => setDone(true);

  return (
    <div
      className="rounded-3xl border p-6 md:p-10 shadow-xl"
      style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
    >
      {!done && (
        <>
          <div className="flex items-center gap-2 mb-8">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-2 flex-1">
                <div
                  className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold transition"
                  style={{
                    background: i <= step ? "var(--color-primary)" : "var(--color-bg)",
                    color: i <= step ? "#fff" : "var(--color-muted)",
                    border: `1px solid var(--color-border)`,
                  }}
                >
                  {i < step ? <Check size={14} /> : i + 1}
                </div>
                {i < 2 && (
                  <div
                    className="h-[2px] flex-1 rounded"
                    style={{ background: i < step ? "var(--color-primary)" : "var(--color-border)" }}
                  />
                )}
              </div>
            ))}
          </div>

          {step === 0 && (
            <div>
              <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "var(--color-muted)" }}>Step 1 of 3</p>
              <h3 className="font-heading text-2xl font-bold mb-5">Which service do you need?</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => setService(s.slug)}
                    className="text-left rounded-xl border px-4 py-3 transition hover:border-current"
                    style={{
                      borderColor: service === s.slug ? "var(--color-primary)" : "var(--color-border)",
                      background: service === s.slug ? "color-mix(in oklab, var(--color-primary) 10%, transparent)" : "var(--color-bg)",
                    }}
                  >
                    <p className="font-semibold text-sm">{s.title}</p>
                    <p className="text-xs mt-1" style={{ color: "var(--color-muted)" }}>{s.short}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "var(--color-muted)" }}>Step 2 of 3</p>
              <h3 className="font-heading text-2xl font-bold mb-5">How urgent is this?</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {urgencies.map((u) => (
                  <button
                    key={u.id}
                    onClick={() => setUrgency(u.id)}
                    className="text-left rounded-xl border px-4 py-4 transition"
                    style={{
                      borderColor: urgency === u.id ? "var(--color-primary)" : "var(--color-border)",
                      background: urgency === u.id ? "color-mix(in oklab, var(--color-primary) 10%, transparent)" : "var(--color-bg)",
                    }}
                  >
                    <p className="font-semibold">{u.label}</p>
                    <p className="text-xs mt-1" style={{ color: "var(--color-muted)" }}>{u.note}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "var(--color-muted)" }}>Step 3 of 3</p>
              <h3 className="font-heading text-2xl font-bold mb-5">Your details</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl border px-4 py-3 text-sm outline-none"
                  style={{ background: "var(--color-bg)", borderColor: "var(--color-border)", color: "var(--color-text)" }}
                />
                <input
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-xl border px-4 py-3 text-sm outline-none"
                  style={{ background: "var(--color-bg)", borderColor: "var(--color-border)", color: "var(--color-text)" }}
                />
                <input
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="rounded-xl border px-4 py-3 text-sm outline-none sm:col-span-2"
                  style={{ background: "var(--color-bg)", borderColor: "var(--color-border)", color: "var(--color-text)" }}
                />
                <textarea
                  placeholder="Message (optional)"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="rounded-xl border px-4 py-3 text-sm outline-none sm:col-span-2 resize-none"
                  style={{ background: "var(--color-bg)", borderColor: "var(--color-border)", color: "var(--color-text)" }}
                />
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition disabled:opacity-30"
              style={{ background: "var(--color-bg)", color: "var(--color-text)", border: `1px solid var(--color-border)` }}
            >
              <ChevronLeft size={14} /> Back
            </button>
            {step < 2 ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                disabled={!canNext}
                className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white transition disabled:opacity-40"
                style={{ background: "var(--color-primary)" }}
              >
                Continue <ChevronRight size={14} />
              </button>
            ) : (
              <button
                onClick={submit}
                disabled={!form.name || !form.email || !form.phone}
                className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white transition disabled:opacity-40"
                style={{ background: "var(--color-primary)" }}
              >
                Request quote <ChevronRight size={14} />
              </button>
            )}
          </div>
        </>
      )}

      {done && (
        <div className="text-center py-10">
          <div
            className="h-14 w-14 mx-auto rounded-full flex items-center justify-center mb-4"
            style={{ background: "var(--color-primary)", color: "#fff" }}
          >
            <Check size={26} />
          </div>
          <h3 className="font-heading text-2xl font-bold mb-2">Request received</h3>
          <p className="max-w-md mx-auto" style={{ color: "var(--color-muted)" }}>
            One of our engineers will reach out within one business day to scope the work.
          </p>
        </div>
      )}
    </div>
  );
}
