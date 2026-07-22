import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Heart, Palmtree, Home, PiggyBank, ShieldAlert } from "lucide-react";
import Slider from "./Slider";
import { requiredSip, futureCost, formatShort, formatINR } from "../lib/finance";

type Goal = {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  points: string[];
  defaultCost: number;
  defaultYears: number;
  inflation: number;
};

const goals: Goal[] = [
  {
    id: "education",
    label: "Child's Education",
    icon: GraduationCap,
    points: ["Plan early to meet the goal", "Start small and step up over time", "Make your child's dream come true"],
    defaultCost: 3000000,
    defaultYears: 15,
    inflation: 10,
  },
  {
    id: "wedding",
    label: "Wedding",
    icon: Heart,
    points: ["A once-in-a-lifetime celebration", "Achieved by saving small amounts regularly", "Step-up SIP is a great option"],
    defaultCost: 2500000,
    defaultYears: 12,
    inflation: 8,
  },
  {
    id: "retirement",
    label: "Retirement",
    icon: Palmtree,
    points: ["Start early when your career begins", "Account for inflation & lifestyle", "Build enough for medical needs"],
    defaultCost: 30000000,
    defaultYears: 25,
    inflation: 6,
  },
  {
    id: "home",
    label: "Dream Home",
    icon: Home,
    points: ["Factor in inflation-adjusted cost", "Start a dedicated SIP for this goal", "May help save tax under old regime"],
    defaultCost: 8000000,
    defaultYears: 10,
    inflation: 7,
  },
  {
    id: "tax",
    label: "Save Tax",
    icon: PiggyBank,
    points: ["Plan how much you need to save", "ELSS invests in equities", "Tax saving also builds future wealth"],
    defaultCost: 150000,
    defaultYears: 3,
    inflation: 0,
  },
  {
    id: "emergency",
    label: "Emergency Fund",
    icon: ShieldAlert,
    points: ["Save 6+ months of expenses", "Meet exigencies without borrowing", "Cushions job loss or a pay cut"],
    defaultCost: 600000,
    defaultYears: 3,
    inflation: 5,
  },
];

export default function GoalPlanner() {
  const [active, setActive] = useState(0);
  const goal = goals[active];

  const [cost, setCost] = useState(goal.defaultCost);
  const [years, setYears] = useState(goal.defaultYears);
  const rate = 12;

  // reset inputs when switching goal
  function selectGoal(i: number) {
    setActive(i);
    setCost(goals[i].defaultCost);
    setYears(goals[i].defaultYears);
  }

  const { target, sip } = useMemo(() => {
    const t = futureCost(cost, years, goal.inflation);
    return { target: t, sip: requiredSip(t, years, rate) };
  }, [cost, years, goal.inflation]);

  return (
    <section id="goals" className="relative py-24 sm:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-700 uppercase tracking-[0.25em] text-gold">Goal Planners</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-tight text-forest">
            It's always a good time to invest and plan.
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Pick a life goal, tell us the cost and timeline, and we'll show the monthly SIP
            needed — adjusted for inflation.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2.5">
          {goals.map((g, i) => (
            <button
              key={g.id}
              onClick={() => selectGoal(i)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-700 border transition-all ${
                active === i
                  ? "bg-forest border-forest text-cream shadow-lg shadow-forest/20"
                  : "bg-white border-forest/12 text-forest hover:bg-forest/5"
              }`}
            >
              <g.icon size={16} className={active === i ? "text-gold" : "text-emerald"} />
              {g.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={goal.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="mt-8 grid lg:grid-cols-2 gap-6"
          >
            {/* left: description + controls */}
            <div className="rounded-3xl bg-white border border-forest/10 p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center h-12 w-12 rounded-2xl bg-forest text-gold">
                  <goal.icon size={24} />
                </span>
                <h3 className="font-display text-2xl text-forest">{goal.label}</h3>
              </div>
              <ul className="mt-5 space-y-2">
                {goal.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 space-y-6">
                <Slider label={goal.id === "tax" ? "Amount to invest (today)" : "Cost today"} value={cost} min={50000} max={goal.id === "retirement" ? 100000000 : 20000000} step={50000} onChange={setCost} format={formatShort} />
                <Slider label="Years to goal" value={years} min={1} max={40} step={1} onChange={setYears} format={(v) => `${v} yr`} />
              </div>
            </div>

            {/* right: result */}
            <div className="rounded-3xl bg-gradient-to-br from-forest-mid to-forest text-cream p-7 sm:p-10 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gold/15 blur-3xl" />
              {goal.inflation > 0 && (
                <div className="relative">
                  <p className="text-cream/50 text-xs">Inflation-adjusted target ({goal.inflation}% p.a.)</p>
                  <p className="font-display text-3xl text-cream mt-1">{formatShort(target)}</p>
                </div>
              )}
              <div className="relative mt-6">
                <p className="text-cream/50 text-xs">You need to invest</p>
                <p className="font-display text-5xl sm:text-6xl text-gold mt-1">{formatINR(sip)}</p>
                <p className="text-cream/60 mt-1">per month for {years} years</p>
              </div>
              <div className="relative mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-forest-deep/50 border border-forest-mid/40 px-4 py-3">
                  <p className="text-cream/50 text-xs">Total invested</p>
                  <p className="font-display text-lg">{formatShort(sip * years * 12)}</p>
                </div>
                <div className="rounded-xl bg-forest-deep/50 border border-forest-mid/40 px-4 py-3">
                  <p className="text-cream/50 text-xs">Growth @12%</p>
                  <p className="font-display text-lg">{formatShort(target - sip * years * 12)}</p>
                </div>
              </div>
              <a
                href={`https://wa.me/919614143466?text=${encodeURIComponent(
                  `I'd like to build my ${goal.label} goal.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-6 py-3.5 font-700 text-forest-deep hover:bg-gold-soft transition-colors"
              >
                Build my {goal.label} goal
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
