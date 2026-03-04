import { useTheme }    from "@/hooks/useTheme";
import { useScrolled } from "@/hooks/useScrolled";

import { Navbar }   from "@/components/layout/Navbar";
import { Footer }   from "@/components/layout/Footer";

import { Hero }     from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Pricing }  from "@/components/sections/Pricing";
import { About }    from "@/components/sections/About";
import { Reviews }  from "@/components/sections/Reviews";
import { Contact }  from "@/components/sections/Contact";

export default function App() {
  const { dark, setDark } = useTheme();
  const scrolled = useScrolled(60);

  return (
    <>
      {/*
        CSS custom properties for dark/light watermark text —
        Tailwind can't reference arbitrary colours in pseudo-elements,
        so we set them here and read them in Hero.jsx.
      */}
      <style>{`
        :root        { --watermark: rgba(0,0,0,0.04);   --bg3: #f1f5f9; }
        :root.dark   { --watermark: rgba(255,255,255,0.025); --bg3: #27272a; }
      `}</style>

      <Navbar scrolled={scrolled} dark={dark} setDark={setDark} />

      <main>
        <Hero />
        <Services />
        <Pricing />
        <About />
        <Reviews />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
