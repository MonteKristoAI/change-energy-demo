import { Mail, MapPin, PhoneCall, Clock } from "lucide-react";
import { site } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Change Energy Engineering",
  description: "Reach Change Energy Engineering by phone, email, or web form. Etobicoke, Ontario.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/contact-bg.jpg"
        eyebrow="Contact"
        title={<>Reach an <span style={{ color: "var(--color-accent)" }}>engineer</span> directly.</>}
        subtitle="Phone, email, or the form on this page. We reply within one business day."
        height="short"
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/contact-bg.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/72" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, rgba(4,17,34,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(4,17,34,0.65) 100%)",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-start text-white">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10" style={{ background: "var(--color-accent)" }} />
                <p className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--color-accent)" }}>
                  Get in touch
                </p>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold leading-[1.05] mb-3">
                We <span style={{ color: "var(--color-accent)" }}>answer the phone.</span>
              </h2>
              <p className="text-white/80 max-w-md">
                Most engagements start with a 20-minute scoping call. Tell us what you are trying to build and we will tell you whether we are the right firm for it.
              </p>
            </div>

            <div className="space-y-5">
              <ContactItem icon={<PhoneCall size={16} />} label="Phone" value={site.phone} href={site.phoneHref} />
              <ContactItem icon={<Mail size={16} />} label="Email" value={site.email} href={`mailto:${site.email}`} />
              <ContactItem
                icon={<MapPin size={16} />}
                label="Office"
                value={`${site.address.line1}, ${site.address.line2}, ${site.address.city}`}
              />
              <ContactItem icon={<Clock size={16} />} label="Hours" value="Mon to Fri, 8:30 to 17:30 ET" />
            </div>

            <div
              className="rounded-3xl overflow-hidden border aspect-[4/3]"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
            >
              <iframe
                src="https://www.google.com/maps?q=20+Butterick+Rd,+Etobicoke,+ON+M8W+3Z8&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.2) contrast(1.05)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Change Energy Engineering office map"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const Body = (
    <div className="flex items-start gap-4">
      <div
        className="h-11 w-11 rounded-full flex items-center justify-center shrink-0 text-white border"
        style={{
          background: "color-mix(in oklab, var(--color-primary) 80%, transparent)",
          borderColor: "rgba(255,255,255,0.15)",
        }}
      >
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] mb-1 font-semibold" style={{ color: "var(--color-accent)" }}>
          {label}
        </p>
        <p className="font-semibold text-white">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className="block group hover:opacity-90">{Body}</a> : Body;
}
