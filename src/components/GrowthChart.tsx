import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight } from "lucide-react";

// Static illustrative growth curve for the hero card
const points = [12, 28, 22, 40, 36, 55, 68, 62, 82, 95];
const W = 460;
const H = 220;
const max = 100;

function buildPath(pts: number[], close = false) {
  const step = W / (pts.length - 1);
  let d = "";
  pts.forEach((p, i) => {
    const x = i * step;
    const y = H - (p / max) * H;
    d += i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
  });
  if (close) d += ` L ${W} ${H} L 0 ${H} Z`;
  return d;
}

export default function GrowthChart() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald/20 to-gold/20 blur-2xl -z-10" />
      <div className="rounded-[1.75rem] bg-forest p-6 sm:p-8 shadow-2xl shadow-forest/40 border border-forest-mid/40">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-cream/60 text-sm font-600">Portfolio value</p>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-display text-4xl text-cream">₹8,42,600</span>
              <span className="inline-flex items-center gap-1 text-emerald-300 text-sm font-700 bg-emerald/20 rounded-full px-2 py-0.5">
                <ArrowUpRight size={14} /> 18.4%
              </span>
            </div>
          </div>
          <span className="grid place-items-center h-10 w-10 rounded-xl bg-gold/15 text-gold">
            <TrendingUp size={20} />
          </span>
        </div>

        <div className="mt-6 relative">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto overflow-visible">
            <defs>
              <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c8a24a" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#c8a24a" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[0.25, 0.5, 0.75].map((g) => (
              <line
                key={g}
                x1="0"
                x2={W}
                y1={H * g}
                y2={H * g}
                stroke="#ffffff"
                strokeOpacity="0.06"
                strokeDasharray="4 6"
              />
            ))}
            <motion.path
              d={buildPath(points, true)}
              fill="url(#fillGrad)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
            <motion.path
              d={buildPath(points)}
              fill="none"
              stroke="#d9be7f"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.6, duration: 1.6, ease: "easeInOut" }}
            />
            {points.map((p, i) => {
              const step = W / (points.length - 1);
              return (
                <motion.circle
                  key={i}
                  cx={i * step}
                  cy={H - (p / max) * H}
                  r="4"
                  fill="#0f3d2e"
                  stroke="#d9be7f"
                  strokeWidth="2.5"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + i * 0.06, type: "spring", stiffness: 300 }}
                />
              );
            })}
          </svg>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { k: "Invested", v: "₹6.4L" },
            { k: "Returns", v: "₹2.0L" },
            { k: "XIRR", v: "14.2%" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl bg-forest-deep/60 border border-forest-mid/40 px-3 py-3">
              <p className="text-cream/50 text-xs font-600">{s.k}</p>
              <p className="text-cream font-700 font-mono mt-0.5">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
