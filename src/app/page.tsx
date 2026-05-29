import Link from "next/link";
import { ArrowRight, ArrowUpRight, PhoneCall, Calendar, Star } from "lucide-react";
import { site, services, team, posts, whyUs } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { BookingCard } from "@/components/BookingCard";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { ContactForm } from "@/components/ContactForm";

export default function HomePage() {
  const featured = services.slice(0, 4);
  const featuredPost = posts[0];

  return (
    <>
      {/* HERO */}
      <PageHero
        image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2400&q=80"
        eyebrow="Low Carbon Infrastructure"
        title={
          <>
            Engineered systems for the{" "}
            <span style={{ color: "var(--color-accent)" }}>energy transition.</span>
          </>
        }
        subtitle="A strategic engineering consulting firm focused on the Low Carbon Economy. For more than 30 years, we have helped clients plan and execute major fuel system transitions."
      >
        <Link
          href="#booking"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
          style={{ background: "var(--color-primary)" }}
        >
          Get a free quote <ArrowRight size={14} />
        </Link>
        <a
          href={site.phoneHref}
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold backdrop-blur border border-white/30 text-white hover:bg-white/10"
        >
          <PhoneCall size={14} /> Call us
        </a>
      </PageHero>

      {/* SERVICES */}
      <section className="relative py-24 overflow-hidden">
        <SectionRails side="left" />
        <SectionRails side="right" accent />

        <div className="relative max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10" style={{ background: "var(--color-primary)" }} />
              <p className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--color-primary)" }}>
                Capabilities
              </p>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-[1.05]">
              Engineering that <span style={{ color: "var(--color-primary)" }}>survives operations.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
            Six practice areas, one continuous team from feasibility through commissioning. The same engineers carry your project end-to-end.
          </p>
        </div>

        <div className="grid md:grid-cols-3 grid-rows-2 gap-5 md:h-[600px]">
          <ServiceCard service={featured[0]} index={1} className="md:col-span-2 md:row-span-1 md:h-auto h-72" emphasis />
          <ServiceCard service={featured[1]} index={2} className="md:row-span-2 h-80 md:h-auto" vertical />
          <ServiceCard service={featured[2]} index={3} className="md:col-span-1 h-72 md:h-auto" />
          <ServiceCard service={featured[3]} index={4} className="md:col-span-1 h-72 md:h-auto" />
        </div>

        {/* Stats strip */}
        <div
          className="mt-10 rounded-2xl border grid grid-cols-2 md:grid-cols-4 overflow-hidden"
          style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
        >
          {[
            { v: "30+", l: "Years in low-carbon engineering" },
            { v: "100%", l: "P.Eng signed deliverables" },
            { v: "6", l: "Practice areas" },
            { v: "1:1", l: "Senior engineer to project ratio" },
          ].map((s, i) => (
            <div
              key={s.l}
              className={`stat-cell p-6 md:p-7 text-center stat-${i}`}
            >
              <p className="font-heading text-3xl md:text-4xl font-bold" style={{ color: "var(--color-primary)" }}>{s.v}</p>
              <p className="text-xs uppercase tracking-wider mt-1" style={{ color: "var(--color-muted)" }}>{s.l}</p>
            </div>
          ))}
          <style>{`
            .stat-cell { border-color: var(--color-border); }
            /* mobile: 2 cols — cells 1,3 left border; cells 2,3 top border */
            .stat-1, .stat-3 { border-left: 1px solid var(--color-border); }
            .stat-2, .stat-3 { border-top: 1px solid var(--color-border); }
            @media (min-width: 768px) {
              /* desktop: 4 cols — cells 1,2,3 left border; no top borders */
              .stat-0 { border-left: none; border-top: none; }
              .stat-1, .stat-2, .stat-3 { border-left: 1px solid var(--color-border); border-top: none; }
            }
          `}</style>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border transition-all hover:gap-3"
            style={{ borderColor: "var(--color-border)", color: "var(--color-text)" }}
          >
            View all services
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        </div>
      </section>

      {/* WHY US */}
      <section
        className="border-y"
        style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 py-24">
          {/* asymmetric header */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end mb-16">
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10" style={{ background: "var(--color-primary)" }} />
                <p className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--color-primary)" }}>
                  Why Change Energy
                </p>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.02]">
                Three reasons operators keep us on the file{" "}
                <span style={{ color: "var(--color-primary)" }}>for the long run.</span>
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
                We do not bid on every project. We engage where our depth in hydrogen and natural gas changes the outcome — for the operator, the lender, and the AHJ.
              </p>
            </div>
          </div>

          {/* 3 differentiator cards */}
          <div className="grid md:grid-cols-3 gap-5">
            {whyUs.map((w, i) => (
              <article
                key={w.title}
                className="group relative rounded-3xl border p-7 md:p-8 flex flex-col transition hover:-translate-y-1"
                style={{ background: "var(--color-bg)", borderColor: "var(--color-border)" }}
              >
                {/* big numeric marker at top */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="font-heading font-bold leading-none"
                    style={{ fontSize: "3.4rem", color: "color-mix(in oklab, var(--color-primary) 22%, transparent)" }}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className="h-px w-12 transition-all duration-500 group-hover:w-20"
                    style={{ background: "var(--color-primary)" }}
                  />
                </div>

                <p className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
                  {w.eyebrow.split(" — ")[1]}
                </p>
                <h3 className="font-heading text-xl md:text-[1.4rem] font-bold mb-4 leading-tight" style={{ color: "var(--color-text)" }}>
                  {w.title}
                </h3>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {w.body}
                </p>
              </article>
            ))}
          </div>

          {/* closing pull quote */}
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-8" style={{ background: "var(--color-primary)" }} />
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--color-primary)" }}>
                Our position
              </span>
              <span className="h-px w-8" style={{ background: "var(--color-primary)" }} />
            </div>
            <p className="font-heading text-xl md:text-2xl leading-snug italic" style={{ color: "var(--color-text)" }}>
              &ldquo;We do not have a sales team. The engineers who scope your project are the ones who will engineer it. Everything else is a downstream consequence of that choice.&rdquo;
            </p>
            <p className="mt-5 text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: "var(--color-muted)" }}>
              — Change Energy Engineering
            </p>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/booking-bg.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, rgba(4,17,34,0.55) 0%, rgba(0,0,0,0.2) 50%, rgba(4,17,34,0.5) 100%)",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-20 grid md:grid-cols-5 gap-10 md:gap-14 items-center">
          <div className="md:col-span-2 text-white">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10" style={{ background: "var(--color-accent)" }} />
              <p className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--color-accent)" }}>
                Request a Quote
              </p>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold leading-[1.05] mb-5 text-white">
              Three steps.<br />
              <span style={{ color: "var(--color-accent)" }}>One engineer</span> on the other end.
            </h2>
            <p className="text-base text-white/80 leading-relaxed mb-8 max-w-md">
              Tell us what you need, how soon you need it, and where to reach you. We will scope the rest.
            </p>

            <ul className="space-y-3 text-sm">
              {[
                "Senior engineer replies within one business day",
                "Initial scoping call is free of charge",
                "No sales team — engineers all the way down",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/85">
                  <span
                    className="h-1.5 w-1.5 rounded-full mt-2 shrink-0"
                    style={{ background: "var(--color-accent)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <BookingCard />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        className="relative border-y overflow-hidden"
        style={{ background: "var(--color-bg)", borderColor: "var(--color-border)" }}
      >
        <SectionRails side="left" />
        <SectionRails side="right" accent />

        <div className="relative max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10" style={{ background: "var(--color-primary)" }} />
              <p className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--color-primary)" }}>
                About Us
              </p>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-[1.02] mb-6">
              Strategic engineering for{" "}
              <span style={{ color: "var(--color-primary)" }}>the low-carbon economy.</span>
            </h2>
            <p className="leading-relaxed mb-4 text-[15px]" style={{ color: "var(--color-muted)" }}>
              Change Energy is a strategic engineering firm focused on the Low Carbon Economy. Strategic engineering is the design and assessment of systems specific to supporting new business initiatives — the success of which will scale up clean energy and low-carbon operations.
            </p>
            <p className="leading-relaxed mb-6 text-[15px]" style={{ color: "var(--color-muted)" }}>
              Our strategy is to support clients and partners who develop the supply chain infrastructure, end-use, and logistics solutions crucial to progressive decarbonization. Our corporate structure facilitates investment in the projects we serve, keeping a sharp focus on commercial viability.
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:gap-3"
              style={{ background: "var(--color-primary)" }}
            >
              About Change Energy
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="relative">
            {/* decorative offset frame */}
            <div
              className="absolute -top-4 -left-4 right-4 bottom-4 rounded-3xl border-2 hidden md:block"
              style={{ borderColor: "var(--color-primary)", opacity: 0.25 }}
            />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/about-image.jpg"
                alt="Change Energy engineers reviewing technical drawings at an industrial facility"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* badge overlay bottom-left */}
              <div
                className="absolute bottom-5 left-5 right-5 rounded-2xl backdrop-blur-md p-4 border"
                style={{
                  background: "rgba(11, 28, 46, 0.7)",
                  borderColor: "rgba(255,255,255,0.12)",
                }}
              >
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold" style={{ color: "var(--color-accent)" }}>
                  Established
                </p>
                <p className="text-white text-2xl font-heading font-bold mt-1">30+ years in low-carbon engineering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="relative py-24 overflow-hidden">
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
                style={{
                  background: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-24"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
                    }}
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
                  <p
                    className="text-[13px] leading-relaxed"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {m.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/reviews-bg.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/65" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(4,17,34,0.7) 0%, rgba(4,17,34,0.2) 30%, rgba(4,17,34,0.2) 70%, rgba(4,17,34,0.85) 100%)",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 text-white">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10" style={{ background: "var(--color-accent)" }} />
                <p className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--color-accent)" }}>
                  Google Reviews
                </p>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold leading-[1.05]">
                What clients say after the project{" "}
                <span style={{ color: "var(--color-accent)" }}>closes.</span>
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="flex items-center justify-end gap-1 text-[#fbbc04]">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" stroke="none" />
                  ))}
                  <span className="ml-2 text-white font-bold text-sm">5.0</span>
                </div>
                <p className="text-xs uppercase tracking-wider mt-1 text-white/70">
                  Verified on Google
                </p>
              </div>
            </div>
          </div>

          <ReviewsCarousel />

          <div className="mt-10 flex justify-center">
            <a
              href={site.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:gap-3 hover:scale-[1.02]"
              style={{ background: "var(--color-primary)" }}
            >
              Leave a Google review
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="relative py-24 overflow-hidden">
        <SectionRails side="left" accent />
        <SectionRails side="right" />

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10" style={{ background: "var(--color-primary)" }} />
                <p className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--color-primary)" }}>
                  From the Field
                </p>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold leading-[1.05]">
                Field notes from the{" "}
                <span style={{ color: "var(--color-primary)" }}>energy transition.</span>
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
              Practical pieces from the engineers doing the work. No marketing fluff.
            </p>
          </div>

          {/* Featured card on dark background (contrasts vs body bg) */}
          <article
            className="relative rounded-3xl overflow-hidden grid md:grid-cols-2 shadow-2xl border"
            style={{
              background: "linear-gradient(135deg, #041122 0%, #0b1c2e 60%, #122739 100%)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            <div className="relative h-72 md:h-auto md:min-h-[420px]">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 md:bg-gradient-to-r"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.0) 70%, rgba(4,17,34,0.95) 100%)",
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
                <Calendar size={12} /> {featuredPost.date}
                <span>•</span>
                <span>{featuredPost.author}</span>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-5 leading-tight text-white">
                {featuredPost.title}
              </h3>
              <p className="leading-relaxed mb-7 text-white/75 text-[15px]">{featuredPost.excerpt}</p>
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white self-start mt-auto transition hover:gap-3"
                style={{ background: "var(--color-primary)" }}
              >
                Read the full story
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>

          <div className="mt-10 flex justify-center">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border transition-all hover:gap-3"
              style={{ borderColor: "var(--color-border)", color: "var(--color-text)" }}
            >
              Read all blogs
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative border-t overflow-hidden" style={{ borderColor: "var(--color-border)" }}>
        <div className="absolute inset-0 z-0">
          <img
            src="/contact-bg.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(4,17,34,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(4,17,34,0.7) 100%)",
            }}
          />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 py-20 md:py-24">
          <div className="text-center mb-10 text-white">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10" style={{ background: "var(--color-accent)" }} />
              <p className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--color-accent)" }}>
                Contact
              </p>
              <span className="h-px w-10" style={{ background: "var(--color-accent)" }} />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-[1.02] text-white">
              Start the{" "}
              <span style={{ color: "var(--color-accent)" }}>conversation.</span>
            </h2>
            <p className="mt-4 text-white/75 max-w-md mx-auto">
              Tell us what you are scoping. A senior engineer will reply within one business day.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  service,
  index,
  className = "",
  emphasis = false,
  vertical = false,
}: {
  service: (typeof services)[number];
  index: number;
  className?: string;
  emphasis?: boolean;
  vertical?: boolean;
}) {
  const num = String(index).padStart(2, "0");
  return (
    <Link
      href={`/services#${service.slug}`}
      className={`group relative rounded-3xl overflow-hidden border ${className}`}
      style={{ borderColor: "rgba(255,255,255,0.08)", background: "#0a0a0a" }}
    >
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-90"
      />
      {/* base black tint */}
      <div className="absolute inset-0 bg-black/45 transition-colors duration-500 group-hover:bg-black/35" />
      {/* bottom-up gradient — pure black */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0.95) 100%)",
        }}
      />

      {/* top row: number + tag */}
      <div className="absolute top-5 left-6 right-6 z-10 flex items-start justify-between">
        <span
          className="font-heading font-bold text-white/85 leading-none"
          style={{ fontSize: emphasis ? "3rem" : "1.6rem" }}
        >
          {num}
        </span>
        <span
          className="text-[10px] uppercase tracking-[0.25em] font-bold px-3 py-1.5 rounded-full border backdrop-blur-md"
          style={{
            color: "var(--color-accent)",
            borderColor: "rgba(255,255,255,0.25)",
            background: "rgba(0,0,0,0.4)",
          }}
        >
          {service.tag}
        </span>
      </div>

      {/* hover arrow top-right (replaces tag on hover via translate) */}
      <div
        className="absolute top-5 right-6 z-20 h-10 w-10 rounded-full flex items-center justify-center transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
        style={{ background: "var(--color-primary)", color: "#fff" }}
      >
        <ArrowUpRight size={16} />
      </div>

      <div className="relative h-full w-full p-6 md:p-8 flex flex-col justify-end">
        <h3
          className={`font-heading font-bold text-white leading-[1.1] transition-transform duration-500 group-hover:-translate-y-1 ${emphasis ? "text-3xl md:text-[2.4rem]" : "text-2xl"}`}
        >
          {service.title}
        </h3>
        <p
          className={`mt-3 text-sm text-white/85 leading-relaxed max-w-md transition-all duration-500 ${vertical || emphasis ? "max-h-32 opacity-100" : "max-h-0 md:max-h-0 opacity-0 md:opacity-0 md:group-hover:max-h-32 md:group-hover:opacity-100 max-h-32 opacity-100"}`}
        >
          {service.short}
        </p>
        <div className="mt-5 flex items-center gap-2 text-white">
          <span className="h-px w-8 transition-all duration-500 group-hover:w-14" style={{ background: "var(--color-accent)" }} />
          <span className="text-xs uppercase tracking-[0.2em] font-semibold">Explore</span>
        </div>
      </div>
    </Link>
  );
}

function SectionRails({
  side,
  accent = false,
}: {
  side: "left" | "right";
  label?: string;
  accent?: boolean;
}) {
  const isLeft = side === "left";
  const color = accent ? "var(--color-accent)" : "var(--color-primary)";
  const gradId = `rail-glow-${side}`;

  return (
    <div
      className={`hidden lg:block absolute inset-y-0 ${isLeft ? "left-0" : "right-0"} w-[clamp(140px,16vw,300px)] pointer-events-none z-0 overflow-hidden`}
      aria-hidden
    >
      <svg
        viewBox="0 0 220 1000"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        style={{
          color,
          transform: isLeft ? "none" : "scaleX(-1)",
        }}
      >
        <defs>
          <radialGradient id={gradId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
            <stop offset="60%" stopColor="currentColor" stopOpacity="0.06" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* soft glow blobs */}
        <ellipse cx="80" cy="240" rx="180" ry="160" fill={`url(#${gradId})`} />
        <ellipse cx="40" cy="720" rx="200" ry="180" fill={`url(#${gradId})`} />

        {/* flowing bezier curves */}
        <path
          d="M -20 -40 C 140 120, 30 280, 110 420 S 20 700, 130 880 S 60 1080, 200 1060"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeOpacity="0.35"
          className="rail-curve rail-curve-1"
        />
        <path
          d="M 60 -20 C -20 200, 160 320, 40 500 S 180 760, 30 1040"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          strokeOpacity="0.25"
          className="rail-curve rail-curve-2"
        />
        <path
          d="M 120 0 C 40 180, 180 360, 80 580 S -20 880, 160 1040"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
          strokeOpacity="0.18"
          className="rail-curve rail-curve-3"
        />
        <path
          d="M -30 80 C 200 200, 20 460, 150 640 S 0 920, 180 1100"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          strokeOpacity="0.22"
          strokeDasharray="2 6"
          className="rail-curve rail-curve-4"
        />

        {/* accent floating dots */}
        <circle cx="55" cy="180" r="3" fill="currentColor" fillOpacity="0.55" className="rail-dot rail-dot-1" />
        <circle cx="95" cy="460" r="2" fill="currentColor" fillOpacity="0.4" className="rail-dot rail-dot-2" />
        <circle cx="40" cy="780" r="3.5" fill="currentColor" fillOpacity="0.5" className="rail-dot rail-dot-3" />
        <circle cx="130" cy="900" r="1.5" fill="currentColor" fillOpacity="0.6" className="rail-dot rail-dot-1" />
      </svg>

      <style>{`
        @keyframes railDrift1 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes railDrift2 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(10px); } }
        @keyframes railDrift3 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes railFloat { 0%, 100% { transform: translate(0, 0); opacity: 0.55; } 50% { transform: translate(2px, -6px); opacity: 0.85; } }
        .rail-curve-1 { animation: railDrift1 14s ease-in-out infinite; transform-origin: center; }
        .rail-curve-2 { animation: railDrift2 18s ease-in-out infinite; transform-origin: center; }
        .rail-curve-3 { animation: railDrift3 22s ease-in-out infinite; transform-origin: center; }
        .rail-curve-4 { animation: railDrift1 26s ease-in-out infinite reverse; transform-origin: center; }
        .rail-dot { animation: railFloat 6s ease-in-out infinite; transform-origin: center; }
        .rail-dot-2 { animation-delay: 1.5s; }
        .rail-dot-3 { animation-delay: 3s; }
      `}</style>
    </div>
  );
}

function HorizontalRails({
  position,
  accent = false,
}: {
  position: "top" | "bottom";
  accent?: boolean;
}) {
  const color = accent ? "var(--color-accent)" : "var(--color-primary)";
  const gradId = `hrail-glow-${position}`;
  const isTop = position === "top";

  return (
    <div
      className={`absolute inset-x-0 ${isTop ? "top-0" : "bottom-0"} h-[clamp(120px,16vw,220px)] pointer-events-none z-0 overflow-hidden`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1400 220"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        style={{
          color,
          transform: isTop ? "none" : "scaleY(-1)",
        }}
      >
        <defs>
          <radialGradient id={gradId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
            <stop offset="60%" stopColor="currentColor" stopOpacity="0.06" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* soft glow blobs along the rail */}
        <ellipse cx="280" cy="80" rx="240" ry="100" fill={`url(#${gradId})`} />
        <ellipse cx="900" cy="50" rx="220" ry="90" fill={`url(#${gradId})`} />
        <ellipse cx="1200" cy="100" rx="200" ry="90" fill={`url(#${gradId})`} />

        {/* horizontal flowing bezier curves */}
        <path
          d="M -40 110 C 220 30, 460 180, 720 90 S 1180 50, 1450 130"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeOpacity="0.4"
          className="hrail-curve hrail-curve-1"
        />
        <path
          d="M -40 70 C 180 160, 480 40, 700 130 S 1100 200, 1450 80"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          strokeOpacity="0.28"
          className="hrail-curve hrail-curve-2"
        />
        <path
          d="M -40 160 C 260 90, 520 200, 800 130 S 1200 60, 1450 170"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
          strokeOpacity="0.22"
          className="hrail-curve hrail-curve-3"
        />
        <path
          d="M -40 40 C 300 130, 600 20, 880 110 S 1280 180, 1450 30"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          strokeOpacity="0.25"
          strokeDasharray="3 7"
          className="hrail-curve hrail-curve-4"
        />

        {/* floating accent dots along the curves */}
        <circle cx="180" cy="90" r="3" fill="currentColor" fillOpacity="0.55" className="hrail-dot hrail-dot-1" />
        <circle cx="520" cy="140" r="2" fill="currentColor" fillOpacity="0.5" className="hrail-dot hrail-dot-2" />
        <circle cx="820" cy="80" r="3.5" fill="currentColor" fillOpacity="0.55" className="hrail-dot hrail-dot-3" />
        <circle cx="1140" cy="140" r="2" fill="currentColor" fillOpacity="0.65" className="hrail-dot hrail-dot-1" />
        <circle cx="1320" cy="60" r="1.5" fill="currentColor" fillOpacity="0.5" className="hrail-dot hrail-dot-2" />
      </svg>

      <style>{`
        @keyframes hrailDrift1 { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(-14px); } }
        @keyframes hrailDrift2 { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(12px); } }
        @keyframes hrailDrift3 { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(-10px); } }
        @keyframes hrailFloat { 0%, 100% { transform: translate(0, 0); opacity: 0.55; } 50% { transform: translate(-6px, 2px); opacity: 0.85; } }
        .hrail-curve-1 { animation: hrailDrift1 16s ease-in-out infinite; transform-origin: center; }
        .hrail-curve-2 { animation: hrailDrift2 20s ease-in-out infinite; transform-origin: center; }
        .hrail-curve-3 { animation: hrailDrift3 24s ease-in-out infinite; transform-origin: center; }
        .hrail-curve-4 { animation: hrailDrift1 28s ease-in-out infinite reverse; transform-origin: center; }
        .hrail-dot { animation: hrailFloat 6s ease-in-out infinite; transform-origin: center; }
        .hrail-dot-2 { animation-delay: 1.5s; }
        .hrail-dot-3 { animation-delay: 3s; }
      `}</style>
    </div>
  );
}
