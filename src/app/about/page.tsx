import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { team } from "@/data/site";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "About | Change Energy Engineering",
  description:
    "A senior team of professional engineers focused on hydrogen, CNG, and LNG infrastructure for the low-carbon economy.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2400&q=80"
        eyebrow="About Us"
        title={<>Built by engineers who refused to deliver work they <span style={{ color: "var(--color-accent)" }}>could not stand behind.</span></>}
        subtitle="Change Energy Engineering was founded to do alternative fuels infrastructure the way it should be done. Senior engineers from concept through commissioning, the same names on the cover sheet and the punch list."
        height="short"
      />

      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
              Our story
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-6">
              Thirty years of fuel system transitions, distilled into one practice.
            </h2>
          </div>
          <div className="space-y-4" style={{ color: "var(--color-muted)" }}>
            <p>
              Change Energy Services is an engineering consulting firm focused on the Low Carbon Economy. For more than 30 years, we have helped clients plan and execute major fuel system transitions within their operations, to achieve desired economic and environmental outcomes.
            </p>
            <p>
              We provide comprehensive project support from initial conception to final commissioning. The same senior engineers stay on the file from scoping through start-up, which is why the work doesn't lose context when it matters most.
            </p>
            <p>
              Three decades inside hydrogen, CNG, and LNG infrastructure show up in what we flag, what we de-risk, and what we refuse to engineer because we have seen it fail before. That depth is the firm.
            </p>
          </div>
        </div>
      </section>

      <section
        className="border-y"
        style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
              Our team
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-[1.05]">The engineers on your project.</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {team.map((m) => (
              <div key={m.name} className="group">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 relative">
                  <img src={m.photo} alt={m.name} className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <p className="font-heading font-semibold text-lg">{m.name}</p>
                <p className="text-xs mb-2" style={{ color: "var(--color-primary)" }}>{m.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-5">Ready to scope a project?</h2>
        <p className="mb-8" style={{ color: "var(--color-muted)" }}>
          Tell us what you are trying to build. An engineer will reply within one business day.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
          style={{ background: "var(--color-primary)" }}
        >
          Contact us <ArrowRight size={14} />
        </Link>
      </section>
    </>
  );
}
