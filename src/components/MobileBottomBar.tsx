import { useEffect, useState } from "react";
import { Home, Calculator, Target, Handshake, MessageCircle } from "lucide-react";

const items = [
  { label: "Home", href: "#top", id: "top", icon: Home },
  { label: "Tools", href: "#tools", id: "tools", icon: Calculator },
  { label: "Goals", href: "#goals", id: "goals", icon: Target },
  { label: "Partners", href: "#partners", id: "partners", icon: Handshake },
];

export default function MobileBottomBar() {
  const [active, setActive] = useState<string>("top");

  useEffect(() => {
    const ids = items.map((i) => i.id);
    const onScroll = () => {
      let current = "top";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 160) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-50">
      <div className="mx-3 mb-3 rounded-2xl bg-forest/95 backdrop-blur-xl border border-forest-mid/50 shadow-[0_-8px_30px_-10px_rgba(15,61,46,0.5)]">
        <div className="grid grid-cols-5 items-center px-1.5 py-2">
          {items.map((it) => {
            const isActive = active === it.id;
            return (
              <a
                key={it.id}
                href={it.href}
                className="flex flex-col items-center gap-1 py-1.5 rounded-xl transition-colors"
              >
                <span
                  className={`grid place-items-center h-9 w-9 rounded-xl transition-all ${
                    isActive ? "bg-gold text-forest-deep" : "text-cream/70"
                  }`}
                >
                  <it.icon size={19} strokeWidth={2.2} />
                </span>
                <span
                  className={`text-[10px] font-700 transition-colors ${
                    isActive ? "text-gold" : "text-cream/55"
                  }`}
                >
                  {it.label}
                </span>
              </a>
            );
          })}

          {/* WhatsApp quick action */}
          <a
            href={`https://wa.me/919614143466?text=${encodeURIComponent(
              "Hi, I'd like to know more about investing with Fundline."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-1.5"
          >
            <span className="grid place-items-center h-9 w-9 rounded-xl bg-emerald text-cream shadow-lg">
              <MessageCircle size={19} strokeWidth={2.2} />
            </span>
            <span className="text-[10px] font-700 text-cream/55">Chat</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
