import { motion } from "framer-motion";
import { ScrollText, CalendarCheck } from "lucide-react";
import { certifications } from "../data";

const certMeta: Record<string, string> = {
  IRDA: "Insurance Regulatory and Development Authority",
  AMFI: "Association of Mutual Funds in India",
};

export default function Trust() {
  return (
    <section id="trust" className="relative py-24 sm:py-32 bg-forest text-cream overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 h-96 w-96 rounded-full bg-emerald/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-700 uppercase tracking-[0.25em] text-gold">Trust & Compliance</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-tight">
            Certified, regulated, and fully accountable.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {certifications.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-5 rounded-3xl bg-forest-deep/60 border border-forest-mid/50 p-7"
            >
              <span className="grid place-items-center h-16 w-16 rounded-2xl bg-white shrink-0 p-2.5">
                <img src={c.src} alt={c.name} className="max-h-full max-w-full object-contain" />
              </span>
              <div>
                <p className="font-display text-2xl text-gold">{c.name}</p>
                <p className="text-cream/70 text-sm mt-1">{certMeta[c.name]}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 space-y-4"
        >
          {/* identity row */}
          <div className="grid sm:grid-cols-3 gap-px rounded-3xl overflow-hidden bg-forest-mid/40 border border-forest-mid/50">
            {[
              { k: "ARN", v: "171447" },
              { k: "ARN Name", v: "Ayanesh Talukder" },
              { k: "Registration", v: "AMFI MF Distributor & SIFD" },
            ].map((r) => (
              <div key={r.k} className="bg-forest-deep/40 px-6 py-6">
                <p className="text-cream/50 text-xs font-600 uppercase tracking-wider">{r.k}</p>
                <p className="mt-1.5 font-display text-lg text-cream">{r.v}</p>
              </div>
            ))}
          </div>

          {/* validity row */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { k: "ARN Validity", v: "08.07.2028" },
              { k: "SIF Validity", v: "08.06.2028" },
            ].map((r) => (
              <div
                key={r.k}
                className="flex items-center gap-4 rounded-2xl bg-forest-deep/40 border border-forest-mid/50 px-6 py-5"
              >
                <span className="grid place-items-center h-12 w-12 rounded-xl bg-gold/15 text-gold shrink-0">
                  <CalendarCheck size={22} />
                </span>
                <div>
                  <p className="text-cream/50 text-xs font-600 uppercase tracking-wider">{r.k}</p>
                  <p className="mt-0.5 font-display text-xl text-cream">
                    Valid till {r.v}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 flex items-start gap-3 rounded-2xl border border-forest-mid/40 bg-forest-deep/30 px-6 py-5"
        >
          <ScrollText size={20} className="text-gold shrink-0 mt-0.5" />
          <p className="text-sm text-cream/60 leading-relaxed">
            Mutual fund investments are subject to market risks. Please read all
            scheme-related documents carefully before investing. AMFI Registered Mutual
            Fund Distributor (ARN) and SIF Distributor (SIFD).
          </p>
        </motion.div>
      </div>
    </section>
  );
}
