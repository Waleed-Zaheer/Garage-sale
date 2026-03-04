import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { IconCar, IconPhone, IconMenu, IconX, IconSun, IconMoon } from "@/components/icons";
import { Container } from "@/components/layout/Container";
import { BUSINESS, NAV_LINKS } from "@/data";

export function Navbar({ scrolled, dark, setDark }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-md border-b shadow-sm bg-[var(--bg)]/95 border-[var(--border)]"
          : "bg-transparent border-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between py-3 sm:py-4 gap-4">

          {/* ── Logo ─────────────────────────────────────────── */}
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-9 h-9 bg-amber-500 flex items-center justify-center flex-shrink-0">
              <IconCar className="w-5 h-5 text-zinc-900" />
            </div>
            <div>
              <p
                className="font-display text-[var(--text)] leading-none"
                style={{ fontSize: "clamp(13px, 2.5vw, 19px)", letterSpacing: "0.06em" }}
              >
                {BUSINESS.name}
              </p>
              <p className="text-amber-500 text-[9px] sm:text-[10px] tracking-widest uppercase leading-none mt-0.5 hidden sm:block">
                {BUSINESS.tagline}
              </p>
            </div>
          </a>

          {/* ── Desktop nav links ─────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-semibold tracking-widest uppercase text-[var(--muted)] hover:text-amber-500 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* ── Controls ──────────────────────────────────────── */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Theme toggle */}
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              className={cn(
                "w-9 h-9 flex items-center justify-center border transition-all rounded-none",
                "text-[var(--muted)] hover:text-amber-500 hover:border-amber-500",
                "bg-[var(--card)] border-[var(--border)]"
              )}
            >
              {dark ? <IconSun /> : <IconMoon />}
            </button>

            {/* Call CTA — desktop */}
            <a href={`tel:${BUSINESS.phone}`} className="hidden sm:block">
              <Button size="sm">
                <IconPhone className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Call Us Now</span>
                <span className="md:hidden">Call</span>
              </Button>
            </a>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden text-[var(--text)] p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <IconX /> : <IconMenu />}
            </button>
          </div>
        </div>
      </Container>

      {/* ── Mobile drawer ─────────────────────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--border)] bg-[var(--bg)] px-5 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="text-xl font-display tracking-widest text-[var(--text)] hover:text-amber-500 transition-colors"
            >
              {link}
            </a>
          ))}
          <a href={`tel:${BUSINESS.phone}`} className="mt-2">
            <Button className="w-full">
              <IconPhone className="w-4 h-4" />
              Call Us — {BUSINESS.phoneDisplay}
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
}
