import { motion } from "framer-motion";
import { Award, Users, Landmark, Wallet, HeartHandshake } from "lucide-react";
import { stats } from "../data";
import Counter from "./Counter";

const icons = [Award, Users, HeartHandshake, Landmark, Wallet];

export default function Stats() {
  return (
    <section className="relative py-12 sm:py-14 bg-forest text-cream overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-emerald/15 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-xs font-700 uppercase tracking-[0.25em] text-gold">
            Trusted by thousands
          </p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl leading-tight">
            A track record built on relationships.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 [&>*:last-child]:max-sm:col-span-2">
          {stats.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="rounded-2xl bg-forest-deep/50 border border-forest-mid/50 p-5 text-center"
              >
                <span className="inline-grid place-items-center h-10 w-10 rounded-xl bg-gold/15 text-gold mb-3">
                  <Icon size={20} />
                </span>
                <div className="font-display text-3xl sm:text-4xl text-cream">
                  <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm font-600 text-cream/60">{s.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
