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
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  height?: "tall" | "short";
}) {
  const tallClass =
    height === "tall"
      ? "min-h-screen min-h-[100svh]"
      : "min-h-[70vh] min-h-[70svh]";

  return (
    <section className={`relative ${tallClass} w-full flex items-center justify-center overflow-hidden`}>
      <div className="absolute inset-0 anim-zoom">
        <img
          src={image}
          alt=""
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* solid black overlay — base */}
      <div className="absolute inset-0 bg-black/65" />
      {/* radial vignette to push focus to center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-32 w-full text-center">
        {eyebrow && (
          <p
            className="uppercase tracking-[0.3em] text-xs font-semibold mb-5 inline-block px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-sm"
            style={{ color: "var(--color-accent)" }}
          >
            {eyebrow}
          </p>
        )}
        <h1 className="font-heading text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mx-auto max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-9 flex flex-wrap items-center justify-center gap-3">{children}</div>}
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      </div>
    </section>
  );
}
