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
    <div className="fixed top-4 inset-x-0 z-40 px-4">
      <div className="max-w-6xl mx-auto">
        <nav
          className="rounded-full border backdrop-blur-xl px-3 py-2 flex items-center justify-between transition-all duration-300 shadow-lg"
          style={{
            background: scrolled ? "var(--color-surface)" : "color-mix(in oklab, var(--color-surface) 70%, transparent)",
            borderColor: "var(--color-border)",
          }}
        >
          <Link href="/" className="flex items-center gap-2 pl-3">
            <span
              className="h-8 w-8 rounded-full flex items-center justify-center font-bold text-white text-sm"
              style={{ background: "var(--color-primary)" }}
            >
              CE
            </span>
            <span className="font-heading font-semibold tracking-tight" style={{ color: "var(--color-text)" }}>
              Change Energy
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-full text-sm font-medium transition hover:opacity-100"
                style={{ color: "var(--color-text)", opacity: 0.75 }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <a
            href={site.phoneHref}
            className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            style={{ background: "var(--color-primary)" }}
          >
            <PhoneCall size={14} /> Call Us
          </a>

          <button
            className="md:hidden h-9 w-9 rounded-full flex items-center justify-center"
            style={{ color: "var(--color-text)" }}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <div
            className="md:hidden mt-2 rounded-2xl border p-4 backdrop-blur-xl"
            style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium"
                style={{ color: "var(--color-text)" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="mt-2 flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white"
              style={{ background: "var(--color-primary)" }}
            >
              <PhoneCall size={14} /> {site.phone}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
