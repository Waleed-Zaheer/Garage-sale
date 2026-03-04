import { useState } from "react";
import { cn } from "@/lib/utils";
import { IconWrench, IconDroplets, IconCoffee } from "@/components/icons";
import { Container, Section, SectionHeader } from "@/components/layout/Container";
import { PRICES, BUSINESS } from "@/data";

const TABS = [
  { key: "workshop", label: "Workshop", Icon: IconWrench },
  { key: "wash",     label: "Car Wash", Icon: IconDroplets },
  { key: "cafe",     label: "Café",     Icon: IconCoffee },
];

export function Pricing() {
  const [activeTab, setActiveTab] = useState("workshop");

  return (
    <Section id="pricing" className="bg-[var(--bg2)]">
      <Container>
        <SectionHeader
          badge="Transparent Pricing"
          title="NO HIDDEN FEES,"
          highlight="EVER."
        />

        {/* ── Tabs ───────────────────────────────────────────── */}
        <div className="flex border border-[var(--border)] w-full sm:w-fit mb-8 sm:mb-10 overflow-hidden">
          {TABS.map(({ key, label, Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={cn(
                "flex items-center justify-center gap-1.5 flex-1 sm:flex-none",
                "px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-bold tracking-widest uppercase",
                "transition-all duration-200",
                activeTab === key
                  ? "bg-amber-500 text-zinc-900"
                  : "text-[var(--muted)] hover:text-amber-500 hover:bg-[var(--bg3)]"
              )}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* ── Price grid ─────────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
          {PRICES[activeTab].map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between px-6 sm:px-8 py-5 bg-[var(--bg)] hover:bg-[var(--bg2)] transition-colors duration-200"
            >
              <span className="font-medium text-sm sm:text-base text-[var(--text)] font-body">
                {item.name}
              </span>
              <span
                className="font-display text-amber-500 ml-4 flex-shrink-0"
                style={{ fontSize: "clamp(18px, 3vw, 24px)", letterSpacing: "0.04em" }}
              >
                {item.price}
              </span>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-xs mt-4 text-[var(--muted)] tracking-wide font-body">
          * Prices are indicative and may vary by vehicle size and condition.{" "}
          <a href={`tel:${BUSINESS.phone}`} className="text-amber-500 hover:underline">
            Call us for a free quote.
          </a>
        </p>
      </Container>
    </Section>
  );
}
