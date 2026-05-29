import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { posts } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { SectionRails, CurveDivider } from "@/components/Rails";

export const metadata = {
  title: "Blog | Change Energy Engineering",
  description: "Field notes on hydrogen infrastructure, CNG and LNG refuelling, regulatory rationale, and the energy transition.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2400&q=80"
        eyebrow="Field Notes"
        title={<>What we learn building alternative fuel infrastructure, <span style={{ color: "var(--color-accent)" }}>written down.</span></>}
        subtitle="Short, practical pieces from the people doing the engineering."
        height="short"
      />

      <section className="relative py-20 overflow-hidden">
        <SectionRails side="left" accent />
        <SectionRails side="right" />

        <div className="relative max-w-6xl mx-auto px-4">
          {/* header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10" style={{ background: "var(--color-primary)" }} />
                <p className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--color-primary)" }}>
                  Latest Posts
                </p>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold leading-[1.05]">
                Notes from the{" "}
                <span style={{ color: "var(--color-primary)" }}>field engineers.</span>
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
              Three pieces below. Each one is the kind of thing a senior engineer wishes their younger self had read.
            </p>
          </div>

          {/* Featured post on dark gradient bg */}
          <article
            className="relative rounded-3xl overflow-hidden grid md:grid-cols-2 shadow-2xl border mb-12"
            style={{
              background: "linear-gradient(135deg, #041122 0%, #0b1c2e 60%, #122739 100%)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            <div className="relative h-72 md:h-auto md:min-h-[440px]">
              <img src={featured.image} alt={featured.title} className="absolute inset-0 w-full h-full object-cover" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 70%, rgba(4,17,34,0.95) 100%)",
                }}
              />
              <span
                className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.3em] font-bold px-3 py-1.5 rounded-full border backdrop-blur-md text-white"
                style={{ borderColor: "rgba(255,255,255,0.25)", background: "rgba(0,0,0,0.4)" }}
              >
                Featured
              </span>
            </div>
            <div className="p-8 md:p-12 flex flex-col">
              <div className="flex items-center gap-3 text-xs mb-5 text-white/60">
                <Calendar size={12} /> {featured.date}
                <span>•</span>
                <span>{featured.author}</span>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-5 leading-tight text-white">
                {featured.title}
              </h3>
              <p className="leading-relaxed mb-7 text-white/75 text-[15px]">{featured.excerpt}</p>
              <p className="mt-auto text-xs uppercase tracking-[0.2em] font-bold" style={{ color: "var(--color-accent)" }}>
                Coming soon — demo content
              </p>
            </div>
          </article>

          <CurveDivider />

          {/* Other posts grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {rest.map((p, i) => (
              <article
                key={p.slug}
                className="group rounded-3xl border overflow-hidden flex flex-col transition hover:-translate-y-1 hover:shadow-xl"
                style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span
                    className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.3em] font-bold px-3 py-1.5 rounded-full backdrop-blur-md text-white"
                    style={{ background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.2)" }}
                  >
                    0{i + 2}
                  </span>
                </div>
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs mb-3" style={{ color: "var(--color-muted)" }}>
                    <Calendar size={12} /> {p.date}
                    <span>•</span>
                    <span>{p.author}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3 leading-tight">{p.title}</h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--color-muted)" }}>{p.excerpt}</p>
                  <p className="mt-5 text-[10px] uppercase tracking-[0.3em] font-bold" style={{ color: "var(--color-primary)" }}>
                    Coming soon
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div
            className="mt-16 rounded-3xl border p-8 md:p-10 grid md:grid-cols-12 gap-6 items-center"
            style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
          >
            <div className="md:col-span-7">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2" style={{ color: "var(--color-primary)" }}>
                Stay in the loop
              </p>
              <h3 className="font-heading text-2xl md:text-3xl font-bold leading-tight">
                Get new field notes delivered when they publish.
              </h3>
            </div>
            <Link
              href="/contact"
              className="md:col-span-5 md:justify-self-end group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:gap-3"
              style={{ background: "var(--color-primary)" }}
            >
              Subscribe
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
