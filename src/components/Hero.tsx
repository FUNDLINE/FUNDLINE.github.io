import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import GrowthChart from "./GrowthChart";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream to-cream-deep" />
        <div className="absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-emerald/10 blur-3xl" />
        <div className="absolute top-1/3 -left-52 h-[30rem] w-[30rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute inset-0 paper-grain opacity-60" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/60 px-4 py-1.5 text-xs font-700 uppercase tracking-widest text-forest/70 backdrop-blur"
          >
            <Sparkles size={14} className="text-gold" />
            Your Financial Partner
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-forest"
          >
            Grow your money
            <br />
            <span className="italic text-emerald">with intention.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Plan for a better future with our financial advisory services. We evaluate
            every investment option and craft the optimal plan — mutual funds,
            insurance, NPS and more, all under one roof.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#tools"
              className="group inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 font-700 text-cream shadow-xl shadow-forest/25 hover:bg-forest-deep transition-all hover:gap-3"
            >
              Calculate my SIP
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#partners"
              className="inline-flex items-center gap-2 rounded-full border border-forest/20 px-7 py-3.5 font-700 text-forest hover:bg-forest/5 transition-colors"
            >
              Explore partners
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3 text-sm text-muted">
            <ShieldCheck size={18} className="text-emerald" />
            AMFI-registered distributor · ARN 171447 · Starts from{" "}
            <span className="font-mono font-500 text-forest">Rs.500</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <GrowthChart />
        </motion.div>
      </div>
    </section>
  );
}
