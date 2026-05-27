import { Calendar } from "lucide-react";
import { posts } from "@/data/site";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Blog | Change Energy Engineering",
  description: "Field notes on hydrogen infrastructure, CNG and LNG refuelling, regulatory rationale, and the energy transition.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2400&q=80"
        eyebrow="Field Notes"
        title="What we learn building alternative fuel infrastructure, written down."
        subtitle="Short, practical pieces from the people doing the engineering."
        height="short"
      />

      <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article
            key={p.slug}
            className="rounded-3xl border overflow-hidden flex flex-col"
            style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
          >
            <div className="relative aspect-[16/10]">
              <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-3 text-xs mb-3" style={{ color: "var(--color-muted)" }}>
                <Calendar size={12} /> {p.date}
                <span>•</span>
                <span>{p.author}</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 leading-tight">{p.title}</h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--color-muted)" }}>{p.excerpt}</p>
              <p className="mt-4 text-xs uppercase tracking-wider font-semibold" style={{ color: "var(--color-primary)" }}>
                Coming soon
              </p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
