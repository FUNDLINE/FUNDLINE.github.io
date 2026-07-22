import { motion } from "framer-motion";
import {
  Wallet,
  SlidersHorizontal,
  Target,
  Layers,
  Coins,
  Compass,
  Sunset,
  TrendingUp,
} from "lucide-react";
import { features, quickStats } from "../data";
import Counter from "./Counter";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  wallet: Wallet,
  sliders: SlidersHorizontal,
  target: Target,
  layers: Layers,
  coins: Coins,
  compass: Compass,
  sunset: Sunset,
  trending: TrendingUp,
};

export default function Features() {
  return (
    <section id="why" className="relative py-24 sm:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-forest/10 border border-forest/10 mb-20">
          {quickStats.map((s) => (
            <div key={s.label} className="bg-cream px-6 py-8 text-center">
              <div className="font-display text-4xl sm:text-5xl text-forest">
                <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm font-600 text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-700 uppercase tracking-[0.25em] text-gold"
          >
            Why Fundline
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-3 font-display text-4xl sm:text-5xl leading-tight text-forest"
          >
            Everything you need to invest with confidence.
          </motion.h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => {
            const Icon = iconMap[f.icon];
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 4) * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl bg-white border border-forest/8 p-6 shadow-[0_1px_0_rgba(15,61,46,0.04)] hover:shadow-[0_24px_50px_-24px_rgba(15,61,46,0.35)] transition-shadow"
              >
                <span className="grid place-items-center h-12 w-12 rounded-xl bg-forest/5 text-forest group-hover:bg-forest group-hover:text-gold transition-colors">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 font-display text-xl text-forest leading-snug">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
                <span className="absolute top-6 right-6 font-mono text-xs text-forest/20">
                  0{i + 1}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
