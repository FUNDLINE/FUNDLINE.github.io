import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Why Us", href: "#why" },
  { label: "Compare", href: "#compare" },
  { label: "Calculators", href: "#tools" },
  { label: "Goals", href: "#goals" },
  { label: "Risk", href: "#risk" },
  { label: "Partners", href: "#partners" },
  { label: "Products", href: "#products" },
  { label: "Download", href: "#app" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  function goTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    setOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      // wait a tick so the closing menu doesn't fight the scroll
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      history.replaceState(null, "", href);
    }
  }

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        // section counts as active once its top passes just below the nav
        if (el.getBoundingClientRect().top <= 140) current = id;
      }
      // snap to the last item when the page is scrolled to the very bottom
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        current = ids[ids.length - 1];
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-cream/85 backdrop-blur-xl border-b border-forest/10 shadow-[0_10px_40px_-20px_rgba(15,61,46,0.4)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-[72px] flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group shrink-0">
            <span className="grid place-items-center h-10 w-12 group-hover:scale-105 transition-transform">
              <img
                src="/brand/fundline-icon.png"
                alt="Fundline logo"
                className="h-full w-full object-contain"
              />
            </span>
            <span className="font-display text-2xl font-600 tracking-tight text-forest">
              Fund<span className="text-gold">line</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-0.5">
            {links.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative px-3.5 py-2 text-sm font-600 transition-colors ${
                    isActive ? "text-forest" : "text-forest/60 hover:text-forest"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3.5 right-3.5 -bottom-0.5 h-0.5 bg-gold rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#tools"
              className="hidden sm:inline-flex items-center rounded-full bg-forest px-5 py-2.5 text-sm font-700 text-cream hover:bg-forest-deep transition-colors shadow-lg shadow-forest/20"
            >
              Start investing
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden grid place-items-center h-10 w-10 rounded-lg text-forest"
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-cream border-b border-forest/10"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {links.map((l) => {
                const isActive = active === l.href.slice(1);
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => goTo(e, l.href)}
                    className={`flex items-center gap-2.5 py-3 px-3 rounded-lg font-600 transition-colors ${
                      isActive
                        ? "bg-forest/8 text-forest"
                        : "text-forest/70 hover:bg-forest/5"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-colors ${
                        isActive ? "bg-gold" : "bg-transparent"
                      }`}
                    />
                    {l.label}
                  </a>
                );
              })}
              <a
                href="#tools"
                onClick={(e) => goTo(e, "#tools")}
                className="mt-2 text-center rounded-full bg-forest px-5 py-3 font-700 text-cream"
              >
                Start investing
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
