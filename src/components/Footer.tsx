import Link from "next/link";
import { Mail, MapPin, PhoneCall, ArrowUpRight } from "lucide-react";

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}
import { site } from "@/data/site";

export function Footer() {
  const NAVY = "rgba(11, 28, 46, 0.97)";

  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ background: NAVY, marginTop: "0" }}
    >
      {/* artistic flowing SVG background */}
      <div className="absolute inset-0 pointer-events-none opacity-50" aria-hidden>
        <svg viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
          <defs>
            <radialGradient id="footer-glow-1" cx="20%" cy="40%" r="50%">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="footer-glow-2" cx="85%" cy="20%" r="40%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.18" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
            </radialGradient>
          </defs>

          <ellipse cx="280" cy="240" rx="380" ry="280" fill="url(#footer-glow-1)" />
          <ellipse cx="1190" cy="120" rx="320" ry="240" fill="url(#footer-glow-2)" />

          <path
            d="M -50 380 C 200 250, 450 480, 700 360 S 1100 220, 1500 340"
            stroke="var(--color-primary)"
            strokeWidth="1.5"
            fill="none"
            strokeOpacity="0.4"
          />
          <path
            d="M -50 480 C 250 350, 500 560, 750 440 S 1150 320, 1500 420"
            stroke="var(--color-accent)"
            strokeWidth="1"
            fill="none"
            strokeOpacity="0.3"
          />
          <path
            d="M -50 280 C 300 180, 550 320, 800 220 S 1200 120, 1500 240"
            stroke="var(--color-primary)"
            strokeWidth="0.8"
            fill="none"
            strokeOpacity="0.25"
            strokeDasharray="3 6"
          />

          {/* floating dots */}
          <circle cx="180" cy="320" r="3" fill="var(--color-accent)" fillOpacity="0.6" />
          <circle cx="640" cy="180" r="2" fill="var(--color-primary)" fillOpacity="0.5" />
          <circle cx="1080" cy="380" r="3" fill="var(--color-accent)" fillOpacity="0.55" />
          <circle cx="980" cy="80" r="1.5" fill="var(--color-primary)" fillOpacity="0.7" />
        </svg>
      </div>

      {/* top accent divider */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--color-primary) 30%, var(--color-accent) 70%, transparent 100%)",
          opacity: 0.5,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-10">
        {/* Big CTA strip on top */}
        <div className="mb-16 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold mb-3" style={{ color: "var(--color-accent)" }}>
              Engineering · Hydrogen · Natural Gas
            </p>
            <h3 className="font-heading text-3xl md:text-4xl font-bold leading-[1.05]">
              Ready to start a project?
            </h3>
            <p className="mt-3 text-white/70 max-w-md">
              Tell us what you are scoping. We will respond within one business day.
            </p>
          </div>
          <div className="md:col-span-5 flex md:justify-end">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-semibold text-white transition hover:scale-[1.03]"
              style={{ background: "var(--color-primary)" }}
            >
              Request a quote
              <span className="h-7 w-7 rounded-full bg-white/15 flex items-center justify-center transition-transform group-hover:rotate-45">
                <ArrowUpRight size={14} />
              </span>
            </Link>
          </div>
        </div>

        {/* divider */}
        <div className="h-px w-full bg-white/10 mb-12" />

        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <img
                src={site.logoUrl}
                alt="Change Energy"
                className="h-12 w-auto"
                style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.4))" }}
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/70 max-w-xs">
              {site.tagline}
            </p>
            <a
              href="https://www.linkedin.com/company/change-energy-services-inc-/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-xs uppercase tracking-wider font-semibold text-white/70 hover:text-white"
            >
              <LinkedinIcon size={14} /> Follow on LinkedIn
            </a>
          </div>

          <div className="md:col-span-2">
            <p className="font-heading font-semibold mb-4 text-sm">Company</p>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-heading font-semibold mb-4 text-sm">Capabilities</p>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>Hydrogen Infrastructure</li>
              <li>CNG / LNG Refuelling</li>
              <li>Project Management</li>
              <li>Codes & Approvals</li>
              <li>Performance Assessment</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-heading font-semibold mb-4 text-sm">Reach Us</p>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "var(--color-accent)" }} />
                <span>{site.address.line1}<br />{site.address.line2}<br />{site.address.city}</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall size={14} style={{ color: "var(--color-accent)" }} />
                <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} style={{ color: "var(--color-accent)" }} />
                <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Change Energy Engineering Inc. All rights reserved.</p>
          <p>Strategic engineering for the Low Carbon Economy.</p>
        </div>
      </div>
    </footer>
  );
}
