import { Button } from "@/components/ui/button";
import { IconPhone } from "@/components/icons";
import { Container } from "@/components/layout/Container";
import { BUSINESS, STATS } from "@/data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[var(--bg)]"
    >
      {/* ── Grid background ────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line,rgba(245,158,11,0.06)) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line,rgba(245,158,11,0.06)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Diagonal amber slash ───────────────────────────────── */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-[0.06]"
        style={{ background: "linear-gradient(135deg, transparent 40%, #f59e0b 100%)" }}
      />
      <div className="absolute right-0 top-0 w-1.5 h-full bg-amber-500/40 pointer-events-none" />

      {/* ── Large watermark text ───────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 select-none pointer-events-none overflow-hidden leading-none font-display"
        style={{
          fontSize: "clamp(70px, 18vw, 270px)",
          color: "var(--watermark, rgba(0,0,0,0.04))",
        }}
      >
        REPAIRS
      </div>

      {/* ── Content ────────────────────────────────────────────── */}
      <Container className="relative z-10 pt-28 sm:pt-36 pb-20">
        <div className="max-w-3xl">
          {/* Location badge */}
          <span className="inline-flex items-center rounded-full bg-amber-500/20 text-amber-500 border border-amber-500/40 px-3 py-1 text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-6">
            📍 {BUSINESS.address}
          </span>

          {/* Headline */}
          <h1
            className="font-display text-[var(--text)] mb-5"
            style={{
              fontSize: "clamp(48px, 9.5vw, 118px)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
            }}
          >
            YOUR CAR.
            <br />
            <span className="text-amber-500">OUR PASSION.</span>
          </h1>

          {/* Sub-text */}
          <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl text-[var(--muted)] font-body">
            Birmingham's friendliest all-in-one destination — expert car repairs &amp; MOTs,
            hand car wash &amp; valet, and a cracking café for breakfast and lunch.
            All under one roof in Small Heath.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href={`tel:${BUSINESS.phone}`} className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">
                <IconPhone className="w-4 h-4" />
                Book a Service
              </Button>
            </a>
            <a href="#pricing" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Pricing
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-10 border-t border-[var(--border)]">
            {STATS.map((s) => (
              <div key={s.label}>
                <p
                  className="font-display text-amber-500"
                  style={{ fontSize: "clamp(28px, 4vw, 40px)", letterSpacing: "0.04em" }}
                >
                  {s.num}
                </p>
                <p className="text-[10px] sm:text-xs tracking-widest uppercase mt-0.5 text-[var(--muted)]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* ── Bottom fade ────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none bg-gradient-to-t from-[var(--bg)] to-transparent" />
    </section>
  );
}
