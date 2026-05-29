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
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80"
        eyebrow="Contact"
        title={<>Reach an <span style={{ color: "var(--color-accent)" }}>engineer</span> directly.</>}
        subtitle="Phone, email, or the form on this page. We reply within one business day."
        height="short"
      />

      <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
              Get in touch
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-3">
              We answer the phone.
            </h2>
            <p style={{ color: "var(--color-muted)" }}>
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
            style={{ borderColor: "var(--color-border)" }}
          >
            <iframe
              src="https://www.google.com/maps?q=20+Butterick+Rd,+Etobicoke,+ON+M8W+3Z8&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Change Energy Engineering office map"
            />
          </div>
        </div>

        <ContactForm />
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
        className="h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-white"
        style={{ background: "var(--color-primary)" }}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "var(--color-muted)" }}>{label}</p>
        <p className="font-semibold" style={{ color: "var(--color-text)" }}>{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{Body}</a> : Body;
}
