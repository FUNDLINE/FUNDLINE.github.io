import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Landmark, Building, Gem, LineChart, PieChart } from "lucide-react";
import Slider from "./Slider";
import { sipFutureValue, formatShort } from "../lib/finance";

const instruments = [
  { name: "Savings Bank", rate: 3, icon: Landmark, color: "#8a9a91" },
  { name: "Fixed Deposit", rate: 6, icon: Building, color: "#5c8a6f" },
  { name: "Gold", rate: 9, icon: Gem, color: "#c8a24a" },
  { name: "Sensex", rate: 11, icon: LineChart, color: "#1f7a5a" },
  { name: "Mutual Fund", rate: 13, icon: PieChart, color: "#0f3d2e" },
];

export default function ReturnsCompare() {
  const [monthly, setMonthly] = useState(5000);
  const [years, setYears] = useState(25);

  const rows = useMemo(() => {
    const data = instruments.map((ins) => ({
      ...ins,
      value: sipFutureValue(monthly, years, ins.rate),
    }));
    const max = Math.max(...data.map((d) => d.value));
    return data.map((d) => ({ ...d, pct: (d.value / max) * 100 }));
  }, [monthly, years]);

  return (
    <section id="compare" className="relative py-24 sm:py-32 bg-forest-deep overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-1/4 h-80 w-80 rounded-full bg-emerald/15 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-700 uppercase tracking-[0.25em] text-gold">
            The cost of playing it safe
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-tight text-cream">
            How we work in your best interest.
          </h2>
          <p className="mt-4 text-cream/60 leading-relaxed">
            The same monthly investment grows very differently depending on where you put
            it. See what disciplined investing in equity can do over the long run.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-12 items-start">
          <div className="rounded-3xl bg-forest border border-forest-mid/50 p-7 space-y-7 lg:sticky lg:top-24">
            <Slider label="Monthly investment" value={monthly} min={1000} max={100000} step={1000} onChange={setMonthly} format={formatShort} theme="dark" />
            <Slider label="Time period" value={years} min={5} max={40} step={1} onChange={setYears} format={(v) => `${v} yr`} theme="dark" />
            <div className="rounded-2xl bg-forest-deep/60 border border-forest-mid/50 p-4">
              <p className="text-cream/50 text-xs">You invest a total of</p>
              <p className="font-display text-2xl text-cream mt-1">
                {formatShort(monthly * years * 12)}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {rows.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center gap-2.5 text-cream font-600">
                    <span className="grid place-items-center h-9 w-9 rounded-lg" style={{ background: r.color }}>
                      <r.icon size={17} />
                    </span>
                    {r.name}
                    <span className="text-cream/40 text-xs font-mono">@{r.rate}%</span>
                  </span>
                  <span className="font-display text-xl sm:text-2xl text-cream">{formatShort(r.value)}</span>
                </div>
                <div className="h-4 w-full rounded-full bg-forest/40 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: r.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${r.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 55, damping: 16 }}
                  />
                </div>
              </motion.div>
            ))}
            <p className="text-cream/40 text-xs pt-2">
              *Illustrative long-term category averages. Returns are not guaranteed and are
              subject to market risk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
