import Link from "next/link";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer
      className="border-t mt-24"
      style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span
              className="h-9 w-9 rounded-full flex items-center justify-center font-bold text-white"
              style={{ background: "var(--color-primary)" }}
            >
              CE
            </span>
            <span className="font-heading font-semibold text-lg">Change Energy</span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            {site.tagline}
          </p>
        </div>

        <div>
          <p className="font-heading font-semibold mb-3">Company</p>
          <ul className="space-y-2 text-sm" style={{ color: "var(--color-muted)" }}>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-heading font-semibold mb-3">Capabilities</p>
          <ul className="space-y-2 text-sm" style={{ color: "var(--color-muted)" }}>
            <li>Hydrogen Infrastructure</li>
            <li>CNG / LNG Refuelling</li>
            <li>Project Management</li>
            <li>Regulatory Compliance</li>
          </ul>
        </div>

        <div>
          <p className="font-heading font-semibold mb-3">Reach Us</p>
          <ul className="space-y-3 text-sm" style={{ color: "var(--color-muted)" }}>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span>{site.address.line1}<br />{site.address.line2}<br />{site.address.city}</span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneCall size={14} /> <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} /> <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="border-t py-5 text-center text-xs"
        style={{ borderColor: "var(--color-border)", color: "var(--color-muted)" }}
      >
        © {new Date().getFullYear()} Change Energy Engineering Inc. All rights reserved.
      </div>
    </footer>
  );
}
