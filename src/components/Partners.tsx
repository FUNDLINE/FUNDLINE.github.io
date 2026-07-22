import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { partnerGroups, type Logo } from "../data";

function LogoTile({ logo, i, accent }: { logo: Logo; i: number; accent: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: Math.min(i * 0.03, 0.5), duration: 0.4 }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col items-center gap-2.5 rounded-2xl border border-forest/8 bg-white p-4 hover:border-forest/20 hover:shadow-[0_18px_40px_-22px_rgba(15,61,46,0.4)] transition-all"
      title={logo.name}
    >
      {logo.src ? (
        <>
          <div
            className="grid place-items-center h-16 w-full rounded-xl overflow-hidden"
            style={{ background: logo.bg ?? "transparent" }}
          >
            <img
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              className="max-h-11 max-w-[85%] object-contain"
            />
          </div>
          <span className="text-[11px] leading-tight font-600 text-muted text-center line-clamp-2">
            {logo.name}
          </span>
        </>
      ) : (
        <div
          className="grid place-items-center h-16 w-full rounded-xl"
          style={{ background: `${accent}12` }}
        >
          <span
            className="font-display text-base font-600 tracking-wide text-center"
            style={{ color: accent }}
          >
            {logo.name}
          </span>
        </div>
      )}
    </motion.div>
  );
}

export default function Partners() {
  const [active, setActive] = useState(0);
  const group = partnerGroups[active];

  return (
    <section id="partners" className="relative py-24 sm:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-700 uppercase tracking-[0.25em] text-gold">Our Ecosystem</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-tight text-forest">
              A curated network of trusted partners.
            </h2>
          </div>
          <p className="text-muted max-w-sm">
            From mutual funds to invoice discounting — we bring the country's leading
            financial institutions under a single, transparent roof.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-[280px_1fr] gap-6">
          {/* category list */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 lg:sticky lg:top-24 lg:self-start">
            {partnerGroups.map((g, i) => (
              <button
                key={g.label}
                onClick={() => setActive(i)}
                className={`shrink-0 text-left rounded-2xl px-5 py-4 border transition-all ${
                  active === i
                    ? "bg-forest border-forest text-cream shadow-lg shadow-forest/20"
                    : "bg-white/60 border-forest/10 text-forest hover:bg-white"
                }`}
              >
                <span className="block font-display text-lg leading-tight">{g.label}</span>
                <span className={`text-xs font-600 ${active === i ? "text-cream/60" : "text-muted"}`}>
                  {g.logos.length} partner{g.logos.length > 1 ? "s" : ""}
                </span>
              </button>
            ))}
          </div>

          {/* partner grid */}
          <div className="rounded-3xl bg-white/70 border border-forest/10 p-6 sm:p-8 min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full" style={{ background: group.accent }} />
                  <h3 className="font-display text-2xl text-forest">{group.label}</h3>
                  <span className="ml-auto font-mono text-sm text-forest/40">
                    {group.logos.length.toString().padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted max-w-xl">{group.blurb}</p>

                <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3.5">
                  {group.logos.map((l, i) => (
                    <LogoTile key={l.name} logo={l} i={i} accent={group.accent} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
