// Decorative artistic SVG rails — vertical (side), horizontal (top/bottom), and inline divider

export function SectionRails({
  side,
  accent = false,
}: {
  side: "left" | "right";
  accent?: boolean;
}) {
  const isLeft = side === "left";
  const color = accent ? "var(--color-accent)" : "var(--color-primary)";
  const gradId = `rail-glow-${side}-${accent ? "a" : "p"}`;

  return (
    <div
      className={`hidden lg:block absolute inset-y-0 ${isLeft ? "left-0" : "right-0"} w-[clamp(140px,16vw,300px)] pointer-events-none z-0 overflow-hidden`}
      aria-hidden
    >
      <svg
        viewBox="0 0 220 1000"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        style={{ color, transform: isLeft ? "none" : "scaleX(-1)" }}
      >
        <defs>
          <radialGradient id={gradId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
            <stop offset="60%" stopColor="currentColor" stopOpacity="0.06" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="80" cy="240" rx="180" ry="160" fill={`url(#${gradId})`} />
        <ellipse cx="40" cy="720" rx="200" ry="180" fill={`url(#${gradId})`} />
        <path d="M -20 -40 C 140 120, 30 280, 110 420 S 20 700, 130 880 S 60 1080, 200 1060" stroke="currentColor" strokeWidth="1.5" fill="none" strokeOpacity="0.35" className="rail-curve rail-curve-1" />
        <path d="M 60 -20 C -20 200, 160 320, 40 500 S 180 760, 30 1040" stroke="currentColor" strokeWidth="1" fill="none" strokeOpacity="0.25" className="rail-curve rail-curve-2" />
        <path d="M 120 0 C 40 180, 180 360, 80 580 S -20 880, 160 1040" stroke="currentColor" strokeWidth="1.2" fill="none" strokeOpacity="0.18" className="rail-curve rail-curve-3" />
        <path d="M -30 80 C 200 200, 20 460, 150 640 S 0 920, 180 1100" stroke="currentColor" strokeWidth="0.8" fill="none" strokeOpacity="0.22" strokeDasharray="2 6" className="rail-curve rail-curve-4" />
        <circle cx="55" cy="180" r="3" fill="currentColor" fillOpacity="0.55" className="rail-dot rail-dot-1" />
        <circle cx="95" cy="460" r="2" fill="currentColor" fillOpacity="0.4" className="rail-dot rail-dot-2" />
        <circle cx="40" cy="780" r="3.5" fill="currentColor" fillOpacity="0.5" className="rail-dot rail-dot-3" />
        <circle cx="130" cy="900" r="1.5" fill="currentColor" fillOpacity="0.6" className="rail-dot rail-dot-1" />
      </svg>
      <style>{`
        @keyframes railDrift1 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes railDrift2 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(10px); } }
        @keyframes railDrift3 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes railFloat { 0%, 100% { transform: translate(0,0); opacity: 0.55; } 50% { transform: translate(2px,-6px); opacity: 0.85; } }
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

export function HorizontalRails({
  position,
  accent = false,
}: {
  position: "top" | "bottom";
  accent?: boolean;
}) {
  const color = accent ? "var(--color-accent)" : "var(--color-primary)";
  const gradId = `hrail-glow-${position}-${accent ? "a" : "p"}`;
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
        style={{ color, transform: isTop ? "none" : "scaleY(-1)" }}
      >
        <defs>
          <radialGradient id={gradId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
            <stop offset="60%" stopColor="currentColor" stopOpacity="0.06" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="280" cy="80" rx="240" ry="100" fill={`url(#${gradId})`} />
        <ellipse cx="900" cy="50" rx="220" ry="90" fill={`url(#${gradId})`} />
        <ellipse cx="1200" cy="100" rx="200" ry="90" fill={`url(#${gradId})`} />
        <path d="M -40 110 C 220 30, 460 180, 720 90 S 1180 50, 1450 130" stroke="currentColor" strokeWidth="1.5" fill="none" strokeOpacity="0.4" className="hrail-curve hrail-curve-1" />
        <path d="M -40 70 C 180 160, 480 40, 700 130 S 1100 200, 1450 80" stroke="currentColor" strokeWidth="1" fill="none" strokeOpacity="0.28" className="hrail-curve hrail-curve-2" />
        <path d="M -40 160 C 260 90, 520 200, 800 130 S 1200 60, 1450 170" stroke="currentColor" strokeWidth="1.2" fill="none" strokeOpacity="0.22" className="hrail-curve hrail-curve-3" />
        <path d="M -40 40 C 300 130, 600 20, 880 110 S 1280 180, 1450 30" stroke="currentColor" strokeWidth="0.8" fill="none" strokeOpacity="0.25" strokeDasharray="3 7" className="hrail-curve hrail-curve-4" />
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
        @keyframes hrailFloat { 0%, 100% { transform: translate(0,0); opacity: 0.55; } 50% { transform: translate(-6px,2px); opacity: 0.85; } }
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

// Inline divider used between repeating blocks (e.g. between services)
export function CurveDivider({ accent = false }: { accent?: boolean }) {
  const color = accent ? "var(--color-accent)" : "var(--color-primary)";
  return (
    <div className="relative w-full h-20 md:h-28 overflow-hidden pointer-events-none my-2" aria-hidden>
      <svg
        viewBox="0 0 1400 120"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        style={{ color }}
      >
        <path
          d="M -20 65 C 200 10, 460 110, 720 55 S 1180 5, 1430 75"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeOpacity="0.45"
        />
        <path
          d="M -20 85 C 260 30, 520 130, 780 75 S 1200 25, 1430 95"
          stroke="currentColor"
          strokeWidth="0.9"
          fill="none"
          strokeOpacity="0.28"
          strokeDasharray="3 6"
        />
        <circle cx="700" cy="60" r="4" fill="currentColor" fillOpacity="0.85" />
        <circle cx="700" cy="60" r="10" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" />
        <circle cx="200" cy="50" r="2" fill="currentColor" fillOpacity="0.6" />
        <circle cx="1180" cy="70" r="2" fill="currentColor" fillOpacity="0.6" />
      </svg>
    </div>
  );
}
