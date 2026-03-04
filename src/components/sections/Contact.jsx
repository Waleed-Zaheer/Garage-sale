import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { IconMapPin, IconPhone, IconClock } from "@/components/icons";
import { Container, Section, SectionHeader } from "@/components/layout/Container";
import { BUSINESS, HOURS } from "@/data";

export function Contact() {
  const today = new Date().toLocaleDateString("en-GB", { weekday: "long" });

  return (
    <Section id="contact" className="bg-[var(--bg)]">
      <Container>
        <SectionHeader badge="Find Us" title="COME AND" highlight="SEE US." />

        <div className="grid md:grid-cols-3 gap-8 sm:gap-10">

          {/* ── Info column ──────────────────────────────────── */}
          <div className="space-y-7">

            {/* Address */}
            <InfoRow icon={<IconMapPin />} label="Address">
              <address className="not-italic text-sm leading-relaxed text-[var(--text)] font-body">
                95 Wright St,<br />
                Small Heath,<br />
                Birmingham B10 9SP
              </address>
            </InfoRow>

            {/* Phone */}
            <InfoRow icon={<IconPhone />} label="Phone">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="text-amber-500 font-semibold hover:underline text-sm sm:text-base font-body"
              >
                {BUSINESS.phoneDisplay}
              </a>
            </InfoRow>

            {/* Hours */}
            <InfoRow icon={<IconClock />} label="Opening Hours">
              <div className="w-full space-y-1">
                {HOURS.map((h) => {
                  const isToday = h.day === today;
                  return (
                    <div
                      key={h.day}
                      className={cn(
                        "flex justify-between gap-3 text-xs sm:text-sm px-1.5 py-0.5 rounded-sm font-body",
                        isToday ? "bg-amber-500/10" : ""
                      )}
                    >
                      <span className={cn("font-medium text-[var(--text)]", isToday && "text-amber-500")}>
                        {h.day}{isToday && " ★"}
                      </span>
                      <span className={isToday ? "text-amber-500 font-semibold" : "text-emerald-500 font-medium"}>
                        {h.time}
                      </span>
                    </div>
                  );
                })}
              </div>
            </InfoRow>

            {/* CTA */}
            <a href={`tel:${BUSINESS.phone}`} className="block pt-2">
              <Button className="w-full text-xs sm:text-sm">
                <IconPhone className="w-4 h-4" />
                Call Us Now — {BUSINESS.phoneDisplay}
              </Button>
            </a>
          </div>

          {/* ── Map card ─────────────────────────────────────── */}
          <div className="md:col-span-2">
            <div
              className={cn(
                "w-full h-64 sm:h-80 md:h-full min-h-72 flex flex-col items-center justify-center",
                "relative overflow-hidden",
                "border border-[var(--border)] bg-[var(--card)]"
              )}
            >
              {/* Grid decoration */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Content */}
              <div className="relative z-10 text-center px-6">
                <div className="w-12 h-12 bg-amber-500 text-zinc-900 flex items-center justify-center mx-auto mb-3">
                  <IconMapPin className="w-6 h-6" />
                </div>
                <p
                  className="font-display text-[var(--text)] mb-1"
                  style={{ fontSize: "clamp(16px, 2.5vw, 22px)", letterSpacing: "0.06em" }}
                >
                  A&amp;M AUTO REPAIRS
                </p>
                <p className="text-xs sm:text-sm text-[var(--muted)] mb-5 font-body">
                  {BUSINESS.address}
                </p>
                <a href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer">
                  <Button size="sm">
                    <IconMapPin className="w-3.5 h-3.5" />
                    Open in Google Maps
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ── Helper ────────────────────────────────────────────────────────────────────
function InfoRow({ icon, label, children }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-amber-500/20 text-amber-500 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-[10px] tracking-widest uppercase mb-1.5 text-[var(--muted)]">{label}</p>
        {children}
      </div>
    </div>
  );
}
