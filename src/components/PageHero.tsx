import { ReactNode } from "react";

export function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  children,
  height = "tall",
}: {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  height?: "tall" | "short";
}) {
  return (
    <section
      className={`relative ${height === "tall" ? "min-h-[88vh]" : "min-h-[58vh]"} flex items-center overflow-hidden`}
    >
      <div className="absolute inset-0 anim-zoom">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0" style={{ background: "var(--color-overlay)" }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--color-bg) 10%, transparent) 0%, color-mix(in oklab, var(--color-bg) 0%, transparent) 50%, color-mix(in oklab, var(--color-bg) 70%, transparent) 100%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-4 pt-32 pb-16 w-full">
        {eyebrow && (
          <p className="uppercase tracking-[0.25em] text-xs font-semibold mb-4 text-white/80">{eyebrow}</p>
        )}
        <h1 className="font-heading text-white text-4xl md:text-6xl font-bold leading-[1.05] max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg text-white/85 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
