import { cn } from "@/lib/utils";
import { IconWrench, IconDroplets, IconCoffee, IconCar } from "@/components/icons";
import { Container, Section, SectionHeader } from "@/components/layout/Container";

const FEATURES = [
  { label: "Family Owned", sub: "Local & proud" },
  { label: "All Makes",    sub: "No car turned away" },
  { label: "Fully Insured",sub: "Peace of mind" },
];

const TILES = [
  { label: "Workshop Bay",     Icon: IconWrench,   bg: "bg-amber-500",   text: "text-zinc-900" },
  { label: "Hand Car Wash",    Icon: IconDroplets, bg: "bg-[var(--bg3)]",text: "text-sky-500"   },
  { label: "Brum Bites Café",  Icon: IconCoffee,   bg: "bg-[var(--bg3)]",text: "text-orange-500"},
  { label: "Same-Day Service", Icon: IconCar,      bg: "bg-[var(--bg3)]",text: "text-amber-500" },
];

export function About() {
  return (
    <Section id="about" className="bg-[var(--bg)] relative overflow-hidden">
      {/* Decorative rotated square */}
      <div className="absolute top-12 right-12 w-48 sm:w-64 h-48 sm:h-64 bg-amber-500/5 rotate-12 pointer-events-none" />

      <Container>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ── Text ─────────────────────────────────────────── */}
          <div>
            <SectionHeader
              badge="About Us"
              title="ROOTED IN"
              highlight="SMALL HEATH"
            />
            {/* Extra subtitle line under heading */}
            <p
              className="font-display text-[var(--text)] -mt-8 mb-6"
              style={{ fontSize: "clamp(28px, 4.5vw, 56px)", letterSpacing: "0.04em", lineHeight: 1.05 }}
            >
              SINCE DAY ONE.
            </p>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed text-[var(--muted)] font-body">
              <p>
                A&amp;M Auto Repairs started as a family-run workshop on Wright Street and has
                grown into one of Small Heath's most trusted names in automotive care — a full
                mechanical workshop, hand car wash, and our own café all under one roof.
              </p>
              <p>
                Every vehicle that comes through our gates is treated with respect. Whether it's
                a quick wash or a major engine repair, our team brings the same dedication to
                every single job — we never cut corners.
              </p>
              <p>
                Waiting for your car? Grab a seat in our café and enjoy a full English or a
                freshly brewed coffee. Great hospitality matters just as much as great mechanics.
              </p>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-6 mt-8">
              {FEATURES.map((f) => (
                <div key={f.label} className="flex items-start gap-3">
                  <div className="w-1 h-9 bg-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-xs tracking-widest uppercase text-[var(--text)]">{f.label}</p>
                    <p className="text-xs mt-0.5 text-[var(--muted)]">{f.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Tile grid ────────────────────────────────────── */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {TILES.map(({ label, Icon, bg, text }) => (
              <div
                key={label}
                className={cn(
                  "aspect-square flex flex-col items-center justify-center gap-2 sm:gap-3 p-4",
                  "transition-transform duration-300 hover:scale-105 cursor-default",
                  bg, text
                )}
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                <span
                  className="font-display text-center leading-tight text-xs sm:text-sm"
                  style={{ letterSpacing: "0.08em" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
