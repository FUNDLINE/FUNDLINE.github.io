import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PieChart,
  ShieldPlus,
  Landmark,
  HandCoins,
  Receipt,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import { productContent } from "../productData";

const icons = [PieChart, ShieldPlus, Landmark, HandCoins, Receipt, Briefcase];

export default function Products() {
  const [active, setActive] = useState(0);
  const product = productContent[active];

  return (
    <section id="products" className="relative py-24 sm:py-32 bg-cream-deep paper-grain">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-700 uppercase tracking-[0.25em] text-gold">
            Products & Knowledge
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-tight text-forest">
            Understand every avenue before you invest.
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Explore what each product is, why it matters and how it can work for you —
            explained simply, so you always invest with clarity.
          </p>
        </div>

        {/* tabs */}
        <div className="mt-12 flex flex-wrap gap-2.5">
          {productContent.map((p, i) => {
            const Icon = icons[i];
            return (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-700 border transition-all ${
                  active === i
                    ? "bg-forest border-forest text-cream shadow-lg shadow-forest/20"
                    : "bg-white border-forest/12 text-forest hover:bg-forest/5"
                }`}
              >
                <Icon size={17} className={active === i ? "text-gold" : "text-emerald"} />
                {p.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid lg:grid-cols-[1fr_1.15fr] gap-6"
          >
            {/* intro card */}
            <div className="rounded-3xl bg-forest text-cream p-8 sm:p-10 relative overflow-hidden self-start lg:sticky lg:top-24">
              <div className="absolute -top-16 -right-16 h-52 w-52 rounded-full bg-emerald/20 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-gold/15 blur-3xl" />
              <p className="relative text-xs font-700 uppercase tracking-[0.2em] text-gold">
                {product.tagline}
              </p>
              <h3 className="relative mt-3 font-display text-3xl sm:text-4xl leading-tight">
                What is {product.label.replace(" Lending", "").replace(" Services", "")}?
              </h3>
              <p className="relative mt-5 text-cream/75 leading-relaxed">{product.intro}</p>

              {product.chips && (
                <div className="relative mt-8 space-y-5">
                  {product.chips.map((c) => (
                    <div key={c.title}>
                      <p className="text-cream/50 text-xs font-700 uppercase tracking-wider mb-2.5">
                        {c.title}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {c.items.map((it) => (
                          <span
                            key={it}
                            className="rounded-full bg-forest-deep/60 border border-forest-mid/50 px-3 py-1.5 text-xs font-600 text-cream/85"
                          >
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* detail accordion */}
            <div className="space-y-3">
              {product.sections.map((s, i) => (
                <Accordion key={s.heading} section={s} defaultOpen={i === 0} index={i} />
              ))}

              <a
                href={`https://wa.me/919614143466?text=${encodeURIComponent(
                  `I'd like to know more about ${product.label}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 font-700 text-forest-deep hover:bg-gold-soft transition-all hover:gap-3 mt-2"
              >
                Talk to an advisor about {product.label}
                <ChevronRight size={18} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function Accordion({
  section,
  defaultOpen,
  index,
}: {
  section: { heading: string; body?: string; bullets?: string[] };
  defaultOpen: boolean;
  index: number;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      className="rounded-2xl bg-white border border-forest/10 overflow-hidden"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="flex items-center gap-3">
          <span className="font-mono text-xs text-forest/30">
            {(index + 1).toString().padStart(2, "0")}
          </span>
          <span className="font-display text-lg sm:text-xl text-forest leading-snug">
            {section.heading}
          </span>
        </span>
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          className="grid place-items-center h-8 w-8 rounded-full bg-forest/5 text-forest shrink-0"
        >
          <ChevronRight size={16} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">
              {section.body && (
                <p className="text-muted leading-relaxed">{section.body}</p>
              )}
              {section.bullets && (
                <ul className="mt-3 space-y-2">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-muted">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
