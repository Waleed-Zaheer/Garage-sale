import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { IconCheck, IconWrench, IconDroplets, IconCoffee } from "@/components/icons";
import { Container, Section, SectionHeader } from "@/components/layout/Container";
import { SERVICES } from "@/data";

// Map service id → icon component
const SERVICE_ICONS = {
  workshop: IconWrench,
  wash:     IconDroplets,
  cafe:     IconCoffee,
};

export function Services() {
  return (
    <Section id="services" className="bg-[var(--bg)]">
      <Container>
        <SectionHeader
          badge="What We Offer"
          title="THREE SERVICES,"
          highlight="ONE STOP."
          subtitle="Get your car fixed, cleaned, and your belly filled — all without leaving our yard in Small Heath."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-0">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[service.id];
            return (
              <Card
                key={service.id}
                className={cn(
                  "border-t-4 p-6 sm:p-8 transition-all duration-300",
                  "hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10",
                  service.topColor,
                  // kill right border on lg except last
                  "lg:border-r-0 lg:last:border-r"
                )}
              >
                {/* Icon */}
                <div className={cn("w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-5", service.iconBg, service.accent)}>
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                {/* Title */}
                <h3
                  className={cn("font-display mb-3 text-[var(--text)]", service.accent.replace("text-", ""))}
                  style={{ fontSize: "clamp(18px, 3vw, 24px)", letterSpacing: "0.06em" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-5 text-[var(--muted)] font-body">
                  {service.desc}
                </p>

                {/* Items */}
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className={cn("flex items-center gap-2 text-sm", service.accent)}>
                      <IconCheck />
                      <span className="text-[var(--text)] font-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
