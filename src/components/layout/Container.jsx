import { cn } from "@/lib/utils";

/**
 * Responsive container — constrains content width and adds horizontal padding.
 *
 * size:
 *   "sm"  → max-w-3xl
 *   "md"  → max-w-5xl
 *   "lg"  → max-w-7xl  (default)
 *   "full"→ no max-width
 */
export function Container({ children, className, size = "lg" }) {
  const maxWidths = {
    sm:   "max-w-3xl",
    md:   "max-w-5xl",
    lg:   "max-w-7xl",
    full: "max-w-none",
  };

  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        maxWidths[size],
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Section wrapper — sets vertical padding and background.
 */
export function Section({ children, className, id }) {
  return (
    <section id={id} className={cn("py-20 sm:py-24 lg:py-32", className)}>
      {children}
    </section>
  );
}

/**
 * SectionHeader — consistent heading block used in every section.
 */
export function SectionHeader({ badge, title, highlight, subtitle, className }) {
  return (
    <div className={cn("mb-10 sm:mb-14", className)}>
      {badge && (
        <span className="inline-flex items-center rounded-full bg-amber-500/20 text-amber-500 border border-amber-500/40 px-3 py-1 text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-4">
          {badge}
        </span>
      )}
      <h2
        className="font-display text-[var(--text)] leading-none"
        style={{ fontSize: "clamp(32px, 6vw, 72px)", letterSpacing: "0.04em" }}
      >
        {title}{" "}
        {highlight && <span className="text-amber-500">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-[var(--muted)] font-body">
          {subtitle}
        </p>
      )}
    </div>
  );
}
