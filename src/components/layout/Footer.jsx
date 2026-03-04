import { cn } from "@/lib/utils";
import { IconCar } from "@/components/icons";
import { Container } from "@/components/layout/Container";
import { BUSINESS } from "@/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg2)] py-8 sm:py-10">
      <Container>
        {/* ── Main row ───────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 bg-amber-500 flex items-center justify-center">
              <IconCar className="w-5 h-5 text-zinc-900" />
            </div>
            <span
              className="font-display text-[var(--text)] text-sm tracking-widest uppercase"
              style={{ letterSpacing: "0.06em" }}
            >
              {BUSINESS.name}
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-center text-[var(--muted)] leading-relaxed">
            © {new Date().getFullYear()} {BUSINESS.name} · {BUSINESS.address}
          </p>

          {/* Links */}
          <div className="flex gap-5 text-xs tracking-widest uppercase text-[var(--muted)]">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms</a>
          </div>
        </div>

        {/* ── CodeBee credit ─────────────────────────────────── */}
        <div className="border-t border-[var(--border)] pt-5 flex items-center justify-center">
          <p className="text-xs sm:text-sm text-[var(--muted)] text-center">
            Designed &amp; engineered with precision by{" "}
            <a
              href="https://codebee.tech"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[var(--text)] hover:text-amber-500 transition-colors duration-200"
            >
              Code
            </a>
            {" "}🐝{" "}
            <a
              href="https://codebee.tech"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[var(--text)] hover:text-amber-500 transition-colors duration-200"
            >
              Bee
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
