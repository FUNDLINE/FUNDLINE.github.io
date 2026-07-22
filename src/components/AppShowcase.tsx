import { motion } from "framer-motion";
import { Smartphone, Check, ArrowLeftRight, Eye, FileCheck, Clock } from "lucide-react";
import { appFeatures } from "../data";

const featureIcons = [ArrowLeftRight, Eye, FileCheck, Clock];

export default function AppShowcase() {
  return (
    <section id="app" className="relative py-24 sm:py-32 bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="inline-flex items-center gap-2 text-xs font-700 uppercase tracking-[0.25em] text-gold">
            <Smartphone size={14} /> Personalized Mobile App
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-tight text-forest">
            Your entire portfolio, in your pocket.
          </h2>
          <p className="mt-4 text-muted leading-relaxed max-w-lg">
            Buy, sell and switch schemes, track performance and manage every fund —
            100% paperless, anytime, anywhere.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {appFeatures.map((f, i) => {
              const Icon = featureIcons[i];
              return (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 rounded-2xl bg-white border border-forest/8 px-4 py-4"
                >
                  <span className="grid place-items-center h-10 w-10 rounded-xl bg-forest/5 text-forest">
                    <Icon size={18} />
                  </span>
                  <span className="font-600 text-forest text-sm">{f}</span>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://apps.apple.com/sg/app/themfbox/id1594370380"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-forest px-5 py-3 text-cream font-700 hover:bg-forest-deep transition-colors"
            >
              Download for iOS
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=in.mymfbox"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-forest/20 px-5 py-3 text-forest font-700 hover:bg-forest/5 transition-colors"
            >
              Get it on Android
            </a>
          </div>
        </motion.div>

        {/* phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 -z-10 grid place-items-center">
            <div className="h-80 w-80 rounded-full bg-gradient-to-br from-emerald/20 to-gold/20 blur-3xl" />
          </div>

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[280px] rounded-[2.75rem] bg-forest p-3 shadow-2xl shadow-forest/40 border-[6px] border-forest-deep"
          >
            <div className="absolute top-3 left-1/2 -translate-x-1/2 h-5 w-24 rounded-b-2xl bg-forest-deep z-10" />
            <div className="rounded-[2rem] bg-cream overflow-hidden">
              <div className="bg-forest px-5 pt-8 pb-6 text-cream">
                <p className="text-cream/60 text-xs">Good morning 👋</p>
                <p className="font-display text-lg">Your wealth</p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-3xl">₹8,42,600</span>
                  <span className="text-emerald-300 text-xs font-700">+18.4%</span>
                </div>
              </div>
              <div className="p-4 space-y-3">
                {[
                  { n: "Quantum Long Term Equity", v: "₹2,10,400", up: "+12.1%" },
                  { n: "Star Health Cover", v: "₹5,00,000", up: "Active" },
                  { n: "ICICI NPS Tier 1", v: "₹1,32,200", up: "+9.4%" },
                ].map((r) => (
                  <div key={r.n} className="rounded-xl bg-white border border-forest/8 px-3 py-3">
                    <p className="text-forest font-700 text-xs leading-tight">{r.n}</p>
                    <div className="mt-1.5 flex items-center justify-between">
                      <span className="font-mono text-sm text-forest">{r.v}</span>
                      <span className="text-emerald text-xs font-700">{r.up}</span>
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-center gap-2 rounded-xl bg-gold py-3 text-forest-deep font-700 text-sm">
                  <Check size={16} /> Invest more
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
