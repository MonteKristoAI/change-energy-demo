import Link from "next/link";
import {
  ArrowRight,
  PhoneCall,
  Compass,
  Atom,
  Flame,
  ClipboardList,
  ShieldCheck,
  GraduationCap,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { site, services, team, posts, whyUs } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { BookingCard } from "@/components/BookingCard";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { ContactForm } from "@/components/ContactForm";

const iconMap = { Compass, Atom, Flame, ClipboardList, ShieldCheck, GraduationCap };

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
        subtitle="Change Energy designs, delivers, and commissions hydrogen, CNG, and LNG infrastructure for operators that need it to actually work. 150+ deployments worldwide."
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
      <section className="max-w-6xl mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
              Capabilities
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold max-w-xl leading-[1.05]">
              Engineering that survives operations.
            </h2>
          </div>
          <p className="max-w-md" style={{ color: "var(--color-muted)" }}>
            Four practice areas, one continuous team from feasibility through commissioning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 grid-rows-2 gap-5 md:h-[560px]">
          {/* Large left card */}
          <ServiceCard service={featured[0]} className="md:col-span-2 md:row-span-1 md:h-auto h-72" emphasis />
          {/* Vertical right */}
          <ServiceCard service={featured[1]} className="md:row-span-2 h-80 md:h-auto" vertical />
          {/* Two bottom cards */}
          <ServiceCard service={featured[2]} className="md:col-span-1 h-72 md:h-auto" />
          <ServiceCard service={featured[3]} className="md:col-span-1 h-72 md:h-auto" />
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border"
            style={{ borderColor: "var(--color-border)", color: "var(--color-text)" }}
          >
            View all services <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* WHY US */}
      <section
        className="border-y"
        style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
              Why Change Energy
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-[1.05]">
              The firm operators trust when the project has to clear an AHJ.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {whyUs.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border p-6 flex gap-4"
                style={{ background: "var(--color-bg)", borderColor: "var(--color-border)" }}
              >
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-white"
                  style={{ background: "var(--color-primary)" }}
                >
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-1">{w.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>{w.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="max-w-4xl mx-auto px-4 py-24">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
            Request a Quote
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-[1.05]">
            Three steps. One engineer on the other end.
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "var(--color-muted)" }}>
            Tell us what you need, how soon you need it, and where to reach you. We will scope the rest.
          </p>
        </div>
        <BookingCard />
      </section>

      {/* ABOUT */}
      <section
        className="border-y"
        style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
              About Us
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-[1.05] mb-5">
              Two decades of low-carbon infrastructure, packed into one team.
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: "var(--color-muted)" }}>
              Change Energy Engineering was founded by professional engineers who had spent careers inside the alternative fuels industry watching the same mistakes repeat.
            </p>
            <p className="leading-relaxed mb-6" style={{ color: "var(--color-muted)" }}>
              We started the firm to do the work the way it should be done: small senior team, real depth in hydrogen and natural gas, the same people from concept through commissioning.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
              style={{ background: "var(--color-primary)" }}
            >
              About us <ArrowRight size={14} />
            </Link>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
              alt="Engineering team at hydrogen refuelling site"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
            Meet Our Team
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-[1.05]">The engineers behind the work.</h2>
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
      </section>

      {/* REVIEWS */}
      <section
        className="border-y"
        style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
              Reviews
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-[1.05]">What clients say after a project closes.</h2>
          </div>
          <ReviewsCarousel />
          <div className="mt-10 flex justify-center">
            <a
              href={site.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
              style={{ background: "var(--color-primary)" }}
            >
              Leave a review <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
              From the field
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold max-w-xl leading-[1.05]">Field notes from the energy transition.</h2>
          </div>
        </div>
        <div
          className="rounded-3xl border overflow-hidden grid md:grid-cols-2 shadow-xl"
          style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
        >
          <div className="relative h-72 md:h-auto">
            <img src={featuredPost.image} alt={featuredPost.title} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="p-8 md:p-12 flex flex-col">
            <div className="flex items-center gap-3 text-xs mb-4" style={{ color: "var(--color-muted)" }}>
              <Calendar size={12} /> {featuredPost.date}
              <span>•</span>
              <span>{featuredPost.author}</span>
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 leading-tight">{featuredPost.title}</h3>
            <p className="leading-relaxed mb-6" style={{ color: "var(--color-muted)" }}>{featuredPost.excerpt}</p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white self-start mt-auto"
              style={{ background: "var(--color-primary)" }}
            >
              Read all story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border"
            style={{ borderColor: "var(--color-border)", color: "var(--color-text)" }}
          >
            Read all blogs <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <section
        className="border-t"
        style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
      >
        <div className="max-w-3xl mx-auto px-4 py-24">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
              Contact
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-[1.05]">Start the conversation.</h2>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  service,
  className = "",
  emphasis = false,
  vertical = false,
}: {
  service: (typeof services)[number];
  className?: string;
  emphasis?: boolean;
  vertical?: boolean;
}) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Compass;
  return (
    <Link
      href={`/services#${service.slug}`}
      className={`group relative rounded-3xl overflow-hidden border ${className}`}
      style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
    >
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            vertical || emphasis
              ? "linear-gradient(180deg, rgba(11,28,46,0.1) 0%, rgba(11,28,46,0.85) 100%)"
              : "linear-gradient(180deg, rgba(11,28,46,0.1) 30%, rgba(11,28,46,0.85) 100%)",
        }}
      />
      <div className={`relative h-full w-full p-6 md:p-8 flex flex-col ${vertical ? "justify-end" : "justify-end"}`}>
        <div
          className="h-11 w-11 rounded-full flex items-center justify-center mb-4 text-white"
          style={{ background: "var(--color-primary)" }}
        >
          <Icon size={18} />
        </div>
        <h3 className={`font-heading font-bold text-white leading-tight ${emphasis ? "text-3xl md:text-4xl" : "text-2xl"}`}>
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-white/85 max-w-md">{service.short}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white">
          Learn more <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
