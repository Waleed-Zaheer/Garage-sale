import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { IconStar } from "@/components/icons";
import { Container, Section, SectionHeader } from "@/components/layout/Container";
import { REVIEWS } from "@/data";

function StarRow({ count }) {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-amber-500">
          <IconStar filled={i < count} />
        </span>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <Section id="reviews" className="bg-[var(--bg2)]">
      <Container>
        <SectionHeader badge="Customer Reviews" title="WHAT BRUM" highlight="SAYS." />

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {REVIEWS.map((review) => (
            <Card
              key={review.name}
              className={cn(
                "p-6 sm:p-8 transition-colors duration-300",
                "hover:border-amber-500/50"
              )}
            >
              <CardContent className="p-0">
                <StarRow count={review.stars} />

                <blockquote className="text-sm sm:text-base leading-relaxed italic text-[var(--text)] font-body mb-5 sm:mb-6">
                  "{review.text}"
                </blockquote>

                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                  {/* Avatar initial */}
                  <div className="w-9 h-9 bg-amber-500 flex items-center justify-center text-zinc-900 font-bold text-sm flex-shrink-0">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[var(--text)]">{review.name}</p>
                    <p className="text-xs text-[var(--muted)]">Small Heath, Birmingham</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
