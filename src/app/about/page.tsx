import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { team } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { SectionRails, HorizontalRails } from "@/components/Rails";

export const metadata = {
  title: "About | Change Energy Engineering",
  description:
    "A senior team of professional engineers focused on hydrogen, CNG, and LNG infrastructure for the low-carbon economy.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/about-image.jpg"
        eyebrow="About Us"
        title={<>Strategic engineering for the <span style={{ color: "var(--color-accent)" }}>Low Carbon Economy.</span></>}
        subtitle="A senior firm of professional engineers focused on hydrogen, CNG, and LNG. For more than 30 years, we have helped clients plan and execute major fuel system transitions."
        height="short"
      />

      {/* MISSION SECTION */}
      <section className="relative py-24 overflow-hidden">
        <SectionRails side="left" />
        <SectionRails side="right" accent />

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10" style={{ background: "var(--color-primary)" }} />
                <p className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--color-primary)" }}>
                  Our mission
                </p>
              </div>
              <h2 className="font-heading text-3xl md:text-[2.6rem] font-bold leading-[1.05]">
                Thirty years of fuel system transitions,{" "}
                <span style={{ color: "var(--color-primary)" }}>distilled into one practice.</span>
              </h2>
            </div>
            <div className="md:col-span-7 space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--color-muted)" }}>
              <p>
                Change Energy is a strategic engineering firm focused on the Low Carbon Economy. Strategic engineering is the design and assessment of systems specific to supporting new business initiatives — the success of which will scale up clean energy and low-carbon operations.
              </p>
              <p>
                Strategic engineering identifies the missing technologies and logistical gaps where business opportunities lie. In our vision, clean energy innovations are succeeding in a competitive fuels marketplace.
              </p>
              <p>
                Our strategy is to support clients and partners who develop the supply chain infrastructure, end-use, and logistics solutions crucial to progressive decarbonization. Our corporate structure facilitates investment in the projects we serve, ensuring a sharp focus on commercial viability.
              </p>
            </div>
          </div>

          {/* Stats strip */}
          <div
            className="mt-16 rounded-2xl border grid grid-cols-2 md:grid-cols-4 overflow-hidden"
            style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
          >
            {[
              { v: "30+", l: "Years in low-carbon engineering" },
              { v: "100%", l: "P.Eng signed deliverables" },
              { v: "6", l: "Practice areas" },
              { v: "7", l: "Senior team members" },
            ].map((s, i) => (
              <div
                key={s.l}
                className="p-6 md:p-7 text-center"
                style={{
                  borderLeft: i > 0 ? `1px solid var(--color-border)` : "none",
                  borderTop: i >= 2 ? `1px solid var(--color-border)` : "none",
                }}
              >
                <p className="font-heading text-3xl md:text-4xl font-bold" style={{ color: "var(--color-primary)" }}>{s.v}</p>
                <p className="text-xs uppercase tracking-wider mt-1" style={{ color: "var(--color-muted)" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section
        className="relative py-24 border-t overflow-hidden"
        style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
      >
        <HorizontalRails position="top" />
        <HorizontalRails position="bottom" accent />

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10" style={{ background: "var(--color-primary)" }} />
              <p className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--color-primary)" }}>
                Meet Our Team
              </p>
              <span className="h-px w-10" style={{ background: "var(--color-primary)" }} />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-[1.02]">
              The engineers <span style={{ color: "var(--color-primary)" }}>behind the work.</span>
            </h2>
            <p className="mt-5 text-base" style={{ color: "var(--color-muted)" }}>
              A senior practice of P.Eng credentialed engineers, government relations leadership, and strategic advisors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {team.map((m) => (
              <article
                key={m.name}
                className="group relative rounded-2xl border overflow-hidden transition hover:-translate-y-1 hover:shadow-xl"
                style={{ background: "var(--color-bg)", borderColor: "var(--color-border)" }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-24"
                    style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)" }}
                  />
                  <span
                    className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.2em] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm text-white"
                    style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.2)" }}
                  >
                    {m.title.includes("P.Eng") ? "P.Eng" : m.title.includes("Chair") ? "Chair" : "Team"}
                  </span>
                </div>
                <div className="p-5">
                  <p className="font-heading font-bold text-lg leading-tight">{m.name}</p>
                  <p
                    className="text-[11px] uppercase tracking-[0.15em] mt-1 mb-3 font-semibold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {m.title}
                  </p>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-muted)" }}>{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 py-24 text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="h-px w-10" style={{ background: "var(--color-primary)" }} />
          <p className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--color-primary)" }}>
            Get in touch
          </p>
          <span className="h-px w-10" style={{ background: "var(--color-primary)" }} />
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-5">
          Ready to <span style={{ color: "var(--color-primary)" }}>scope a project?</span>
        </h2>
        <p className="mb-8" style={{ color: "var(--color-muted)" }}>
          Tell us what you are trying to build. An engineer will reply within one business day.
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:gap-3"
          style={{ background: "var(--color-primary)" }}
        >
          Contact us
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
    </>
  );
}
