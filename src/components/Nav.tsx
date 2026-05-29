"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-5 inset-x-0 z-40 px-4">
      <div className="max-w-6xl mx-auto">
        <nav
          className="rounded-full border backdrop-blur-xl pl-5 pr-3 py-2.5 flex items-center justify-between transition-all duration-300 shadow-2xl"
          style={{
            background: scrolled
              ? "rgba(11, 28, 46, 0.92)"
              : "rgba(11, 28, 46, 0.55)",
            borderColor: "rgba(255,255,255,0.12)",
          }}
        >
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src={site.logoUrl}
              alt="Change Energy"
              className="h-10 md:h-12 w-auto object-contain shrink-0 transition-transform group-hover:scale-[1.04]"
              style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.4))" }}
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link relative px-4 py-2.5 text-[15px] font-medium transition-colors"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                <span className="relative z-10">{l.label}</span>
                <span
                  aria-hidden
                  className="nav-underline absolute left-1/2 -translate-x-1/2 bottom-1.5 h-[2px] w-0 rounded-full transition-all duration-300"
                  style={{ background: "var(--color-accent)" }}
                />
              </Link>
            ))}
          </div>

          <a
            href={site.phoneHref}
            className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.03] hover:shadow-lg"
            style={{ background: "var(--color-primary)" }}
          >
            <PhoneCall size={15} /> Call Us
          </a>

          <button
            className="md:hidden h-11 w-11 rounded-full flex items-center justify-center text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open && (
          <div
            className="md:hidden mt-2 rounded-3xl border p-4 backdrop-blur-xl shadow-xl"
            style={{ background: "rgba(11, 28, 46, 0.95)", borderColor: "rgba(255,255,255,0.12)" }}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-medium hover:bg-white/10 transition text-white"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="mt-3 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white"
              style={{ background: "var(--color-primary)" }}
            >
              <PhoneCall size={15} /> {site.phone}
            </a>
          </div>
        )}
      </div>

      <style>{`
        .nav-link:hover .nav-underline { width: calc(100% - 1.5rem); }
        .nav-link:hover { color: var(--color-accent) !important; }
      `}</style>
    </div>
  );
}
