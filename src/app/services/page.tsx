import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { BookingCard } from "@/components/BookingCard";

export const metadata = {
  title: "Services | Change Energy Engineering",
  description:
    "Hydrogen, CNG, LNG, project management, regulatory interpretation, training and troubleshooting. Strategic engineering across the alternative fuels lifecycle.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=2400&q=80"
        eyebrow="What We Do"
        title={<>Engineering services for the <span style={{ color: "var(--color-accent)" }}>low-carbon economy.</span></>}
        subtitle="Six practice areas, one continuous team. Below is what we cover, in the order most clients engage us."
        height="short"
      >
        <Link
          href="#booking"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
          style={{ background: "var(--color-primary)" }}
        >
          Request a quote <ArrowRight size={14} />
        </Link>
      </PageHero>

      <section className="max-w-6xl mx-auto px-4 py-20 space-y-20">
        {services.map((s, i) => {
          const reverse = i % 2 === 1;
          return (
            <div
              id={s.slug}
              key={s.slug}
              className="grid md:grid-cols-2 gap-10 md:gap-14 items-center"
            >
              <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ${reverse ? "md:order-2" : ""}`}>
                <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
                  Service {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-4">{s.title}</h2>
                <p className="leading-relaxed mb-5" style={{ color: "var(--color-muted)" }}>{s.long}</p>
                <ul className="space-y-2 mb-6">
                  {["Senior engineers signed on every deliverable", "Designed for the load profile you actually operate", "Regulator-ready documentation"].map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "var(--color-primary)" }} />
                      <span style={{ color: "var(--color-text)" }}>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#booking"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
                  style={{ background: "var(--color-primary)" }}
                >
                  Request scope <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      <section
        id="booking"
        className="border-t"
        style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
      >
        <div className="max-w-4xl mx-auto px-4 py-24">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
              Get Started
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-[1.05]">Three steps to a scoped engagement.</h2>
          </div>
          <BookingCard />
        </div>
      </section>
    </>
  );
}
