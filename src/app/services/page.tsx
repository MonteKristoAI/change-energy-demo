import Link from "next/link";
import { Fragment } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { BookingCard } from "@/components/BookingCard";
import { SectionRails, CurveDivider } from "@/components/Rails";

export const metadata = {
  title: "Services | Change Energy Engineering",
  description:
    "Comprehensive project support, fuel system supply chain design, codes and approvals, performance assessment, hydrogen and personnel training. Strategic engineering for the low-carbon economy.",
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

      {/* Section intro */}
      <section className="relative py-20 overflow-hidden">
        <SectionRails side="left" />
        <SectionRails side="right" accent />

        <div className="relative max-w-7xl mx-auto px-4 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10" style={{ background: "var(--color-primary)" }} />
            <p className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--color-primary)" }}>
              Capabilities · 06
            </p>
          </div>
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <h2 className="md:col-span-7 font-heading text-3xl md:text-5xl font-bold leading-[1.02]">
              Six practice areas,{" "}
              <span style={{ color: "var(--color-primary)" }}>one continuous team.</span>
            </h2>
            <p className="md:col-span-5 text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
              We do not bid on every project. We engage where our depth in hydrogen, CNG, and LNG changes the outcome — for the operator, the lender, and the AHJ.
            </p>
          </div>
        </div>

        {/* Services list with curve dividers between */}
        <div className="relative max-w-7xl mx-auto px-4">
          {services.map((s, i) => {
            const reverse = i % 2 === 1;
            const num = String(i + 1).padStart(2, "0");
            return (
              <Fragment key={s.slug}>
                <article id={s.slug} className="grid md:grid-cols-12 gap-8 md:gap-14 items-center py-14 md:py-20">
                  <div className={`md:col-span-7 ${reverse ? "md:order-2" : ""}`}>
                    <div className="relative">
                      {/* offset accent frame */}
                      <div
                        className={`absolute ${reverse ? "-top-4 -right-4 left-4 bottom-4" : "-top-4 -left-4 right-4 bottom-4"} rounded-3xl border-2 hidden md:block`}
                        style={{ borderColor: "var(--color-primary)", opacity: 0.25 }}
                      />
                      <div className="relative aspect-[5/3] rounded-3xl overflow-hidden shadow-2xl">
                        <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.35) 100%)",
                          }}
                        />
                        <span
                          className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.3em] font-bold px-3 py-1.5 rounded-full border backdrop-blur-md text-white"
                          style={{ borderColor: "rgba(255,255,255,0.25)", background: "rgba(0,0,0,0.4)" }}
                        >
                          {s.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
                    <p
                      className="font-heading font-bold leading-none mb-4"
                      style={{
                        fontSize: "3rem",
                        color: "color-mix(in oklab, var(--color-primary) 28%, transparent)",
                      }}
                    >
                      {num}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
                      Service {num}
                    </p>
                    <h3 className="font-heading text-3xl md:text-[2.2rem] font-bold leading-tight mb-5">
                      {s.title}
                    </h3>
                    <p className="leading-relaxed mb-6 text-[15px]" style={{ color: "var(--color-muted)" }}>{s.long}</p>
                    <ul className="space-y-2.5 mb-7">
                      {[
                        "Senior P.Eng engineers signed on every deliverable",
                        "Designed for the load profile you actually operate",
                        "Regulator-ready documentation from day one",
                      ].map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "var(--color-primary)" }} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="#booking"
                      className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:gap-3"
                      style={{ background: "var(--color-primary)" }}
                    >
                      Request scope
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
                {i < services.length - 1 && <CurveDivider accent={i % 2 === 0} />}
              </Fragment>
            );
          })}
        </div>
      </section>

      {/* BOOKING */}
      <section
        id="booking"
        className="relative border-t overflow-hidden"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="absolute inset-0 z-0">
          <img src="/booking-bg.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/65" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(4,17,34,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(4,17,34,0.55) 100%)",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2 text-white">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10" style={{ background: "var(--color-accent)" }} />
              <p className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--color-accent)" }}>
                Get Started
              </p>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold leading-[1.05] mb-4">
              Three steps to a{" "}
              <span style={{ color: "var(--color-accent)" }}>scoped engagement.</span>
            </h2>
            <p className="text-white/80 max-w-md">
              Pick the service, tell us how soon, leave your details. A senior engineer replies within one business day.
            </p>
          </div>
          <div className="md:col-span-3">
            <BookingCard />
          </div>
        </div>
      </section>
    </>
  );
}
