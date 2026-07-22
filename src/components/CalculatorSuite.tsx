import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, TrendingUp, Coins, ArrowDownUp, Trophy, Home, Repeat } from "lucide-react";
import Slider from "./Slider";
import {
  formatINR,
  formatShort,
  sipFutureValue,
  lumpsumFutureValue,
  swpResult,
  stepUpSipFV,
  requiredSip,
  emi,
} from "../lib/finance";

type TabId = "sip" | "lumpsum" | "stepup" | "swp" | "crorepati" | "emi";

const tabs: { id: TabId; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
  { id: "sip", label: "SIP", icon: Repeat },
  { id: "lumpsum", label: "Lumpsum", icon: Coins },
  { id: "stepup", label: "Step-up SIP", icon: TrendingUp },
  { id: "swp", label: "SWP", icon: ArrowDownUp },
  { id: "crorepati", label: "Crorepati", icon: Trophy },
  { id: "emi", label: "EMI", icon: Home },
];

function ResultRow({ k, v, accent }: { k: string; v: string; accent?: boolean }) {
  return (
    <div className="flex items-baseline justify-between border-b border-forest/8 py-3 last:border-0">
      <span className="text-sm text-muted">{k}</span>
      <span className={`font-display text-xl ${accent ? "text-emerald" : "text-forest"}`}>{v}</span>
    </div>
  );
}

function Donut({ invested, gains }: { invested: number; gains: number }) {
  const total = invested + gains;
  const pct = total > 0 ? (gains / total) * 100 : 0;
  const C = 2 * Math.PI * 52;
  return (
    <div className="relative grid place-items-center">
      <svg width="150" height="150" viewBox="0 0 150 150" className="-rotate-90">
        <circle cx="75" cy="75" r="52" fill="none" stroke="#0f3d2e" strokeOpacity="0.12" strokeWidth="18" />
        <motion.circle
          cx="75"
          cy="75"
          r="52"
          fill="none"
          stroke="#c8a24a"
          strokeWidth="18"
          strokeLinecap="round"
          strokeDasharray={C}
          animate={{ strokeDashoffset: C - (C * pct) / 100 }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
        />
      </svg>
      <div className="absolute text-center">
        <p className="text-xs text-muted">Returns</p>
        <p className="font-display text-lg text-forest">{Math.round(pct)}%</p>
      </div>
    </div>
  );
}

export default function CalculatorSuite() {
  const [tab, setTab] = useState<TabId>("sip");

  // SIP
  const [sipMonthly, setSipMonthly] = useState(5000);
  const [sipYears, setSipYears] = useState(15);
  const [sipRate, setSipRate] = useState(12);

  // shared-ish state per calculator
  const [lump, setLump] = useState(500000);
  const [lumpYears, setLumpYears] = useState(10);
  const [lumpRate, setLumpRate] = useState(12);

  const [suMonthly, setSuMonthly] = useState(5000);
  const [suYears, setSuYears] = useState(15);
  const [suRate, setSuRate] = useState(12);
  const [suStep, setSuStep] = useState(10);

  const [swpCorpus, setSwpCorpus] = useState(2000000);
  const [swpWithdraw, setSwpWithdraw] = useState(15000);
  const [swpYears, setSwpYears] = useState(15);
  const [swpRate, setSwpRate] = useState(9);

  const [crTarget, setCrTarget] = useState(10000000);
  const [crYears, setCrYears] = useState(20);
  const [crRate, setCrRate] = useState(12);

  const [loanAmt, setLoanAmt] = useState(3000000);
  const [loanRate, setLoanRate] = useState(8.5);
  const [loanYears, setLoanYears] = useState(20);

  const sip = useMemo(() => {
    const future = sipFutureValue(sipMonthly, sipYears, sipRate);
    const invested = sipMonthly * sipYears * 12;
    const chart: { year: number; invested: number; value: number }[] = [];
    for (let y = 1; y <= sipYears; y++) {
      chart.push({
        year: y,
        invested: sipMonthly * y * 12,
        value: sipFutureValue(sipMonthly, y, sipRate),
      });
    }
    return { future, invested, gains: future - invested, chart };
  }, [sipMonthly, sipYears, sipRate]);

  const lumpFV = useMemo(() => lumpsumFutureValue(lump, lumpYears, lumpRate), [lump, lumpYears, lumpRate]);
  const su = useMemo(() => stepUpSipFV(suMonthly, suYears, suRate, suStep), [suMonthly, suYears, suRate, suStep]);
  const swp = useMemo(() => swpResult(swpCorpus, swpWithdraw, swpYears, swpRate), [swpCorpus, swpWithdraw, swpYears, swpRate]);
  const cr = useMemo(() => requiredSip(crTarget, crYears, crRate), [crTarget, crYears, crRate]);
  const loan = useMemo(() => emi(loanAmt, loanRate, loanYears) as { emi: number; total: number; interest: number }, [loanAmt, loanRate, loanYears]);

  return (
    <section id="tools" className="relative py-24 sm:py-32 bg-cream-deep paper-grain">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-700 uppercase tracking-[0.25em] text-gold">
            <Calculator size={14} /> Tools & Calculators
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-tight text-forest">
            A calculator for every money decision.
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            From your monthly SIP to lumpsum growth, step-up plans, withdrawals, loan EMIs
            and the exact SIP you need to hit a crore — model it all here.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2.5">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-700 border transition-all ${
                tab === t.id
                  ? "bg-forest border-forest text-cream shadow-lg shadow-forest/20"
                  : "bg-white border-forest/12 text-forest hover:bg-forest/5"
              }`}
            >
              <t.icon size={16} />
              {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="mt-8 grid lg:grid-cols-2 gap-6"
          >
            {/* controls */}
            <div className="rounded-3xl bg-white border border-forest/10 p-7 sm:p-8 space-y-7">
              {tab === "sip" && (
                <>
                  <Slider label="Monthly investment" value={sipMonthly} min={500} max={100000} step={500} onChange={setSipMonthly} format={formatINR} />
                  <Slider label="Time period" value={sipYears} min={1} max={35} step={1} onChange={setSipYears} format={(v) => `${v} yr`} />
                  <Slider label="Expected return (p.a.)" value={sipRate} min={4} max={20} step={0.5} onChange={setSipRate} format={(v) => `${v}%`} />
                  <div className="pt-1">
                    <div className="h-3 w-full rounded-full bg-forest/10 overflow-hidden flex">
                      <motion.div className="bg-forest/70 h-full" animate={{ width: `${(sip.invested / sip.future) * 100}%` }} transition={{ type: "spring", stiffness: 120, damping: 20 }} />
                      <motion.div className="bg-gold h-full" animate={{ width: `${(sip.gains / sip.future) * 100}%` }} transition={{ type: "spring", stiffness: 120, damping: 20 }} />
                    </div>
                    <div className="mt-3 flex justify-between text-xs text-muted">
                      <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-forest/70" /> Invested</span>
                      <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-gold" /> Est. returns</span>
                    </div>
                  </div>
                </>
              )}
              {tab === "lumpsum" && (
                <>
                  <Slider label="Total investment" value={lump} min={10000} max={10000000} step={10000} onChange={setLump} format={formatShort} />
                  <Slider label="Time period" value={lumpYears} min={1} max={35} step={1} onChange={setLumpYears} format={(v) => `${v} yr`} />
                  <Slider label="Expected return (p.a.)" value={lumpRate} min={4} max={20} step={0.5} onChange={setLumpRate} format={(v) => `${v}%`} />
                </>
              )}
              {tab === "stepup" && (
                <>
                  <Slider label="Monthly investment" value={suMonthly} min={500} max={100000} step={500} onChange={setSuMonthly} format={formatINR} />
                  <Slider label="Annual step-up" value={suStep} min={0} max={25} step={1} onChange={setSuStep} format={(v) => `${v}%`} />
                  <Slider label="Time period" value={suYears} min={1} max={35} step={1} onChange={setSuYears} format={(v) => `${v} yr`} />
                  <Slider label="Expected return (p.a.)" value={suRate} min={4} max={20} step={0.5} onChange={setSuRate} format={(v) => `${v}%`} />
                </>
              )}
              {tab === "swp" && (
                <>
                  <Slider label="Total investment" value={swpCorpus} min={100000} max={20000000} step={100000} onChange={setSwpCorpus} format={formatShort} />
                  <Slider label="Monthly withdrawal" value={swpWithdraw} min={1000} max={200000} step={1000} onChange={setSwpWithdraw} format={formatINR} />
                  <Slider label="Time period" value={swpYears} min={1} max={35} step={1} onChange={setSwpYears} format={(v) => `${v} yr`} />
                  <Slider label="Expected return (p.a.)" value={swpRate} min={4} max={18} step={0.5} onChange={setSwpRate} format={(v) => `${v}%`} />
                </>
              )}
              {tab === "crorepati" && (
                <>
                  <Slider label="Target corpus" value={crTarget} min={1000000} max={100000000} step={500000} onChange={setCrTarget} format={formatShort} />
                  <Slider label="Time to goal" value={crYears} min={1} max={40} step={1} onChange={setCrYears} format={(v) => `${v} yr`} />
                  <Slider label="Expected return (p.a.)" value={crRate} min={4} max={20} step={0.5} onChange={setCrRate} format={(v) => `${v}%`} />
                </>
              )}
              {tab === "emi" && (
                <>
                  <Slider label="Loan amount" value={loanAmt} min={100000} max={50000000} step={100000} onChange={setLoanAmt} format={formatShort} />
                  <Slider label="Interest rate (p.a.)" value={loanRate} min={5} max={20} step={0.1} onChange={setLoanRate} format={(v) => `${v}%`} />
                  <Slider label="Tenure" value={loanYears} min={1} max={30} step={1} onChange={setLoanYears} format={(v) => `${v} yr`} />
                </>
              )}
            </div>

            {/* results */}
            <div className="rounded-3xl bg-white border border-forest/10 p-7 sm:p-8">
              {tab === "sip" && (
                <div>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { k: "Invested", v: sip.invested, c: "text-forest" },
                      { k: "Est. returns", v: sip.gains, c: "text-gold" },
                      { k: "Total value", v: sip.future, c: "text-emerald" },
                    ].map((s) => (
                      <div key={s.k}>
                        <p className="text-muted text-xs font-600">{s.k}</p>
                        <p className={`mt-1 font-display text-lg sm:text-xl ${s.c}`}>{formatShort(s.v)}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-7 flex items-end gap-1.5 h-44">
                    {sip.chart.map((d) => (
                      <div key={d.year} className="flex-1 flex flex-col justify-end items-center group relative">
                        <div className="w-full flex flex-col justify-end" style={{ height: "100%" }}>
                          <motion.div className="w-full rounded-t-sm bg-gold" initial={{ height: 0 }} animate={{ height: `${((d.value - d.invested) / sip.future) * 100}%` }} transition={{ type: "spring", stiffness: 120, damping: 22 }} />
                          <motion.div className="w-full rounded-b-sm bg-forest/70" initial={{ height: 0 }} animate={{ height: `${(d.invested / sip.future) * 100}%` }} transition={{ type: "spring", stiffness: 120, damping: 22 }} />
                        </div>
                        <div className="pointer-events-none absolute -top-2 opacity-0 group-hover:opacity-100 transition -translate-y-full bg-forest text-cream text-xs font-700 rounded-lg px-2 py-1 shadow-lg whitespace-nowrap z-10">
                          Yr {d.year}: {formatShort(d.value)}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex justify-between text-xs text-muted font-mono">
                    <span>Year 1</span>
                    <span>Year {sipYears}</span>
                  </div>
                </div>
              )}
              {tab === "lumpsum" && (
                <div className="grid sm:grid-cols-[1fr_auto] gap-6 items-center">
                  <div className="w-full">
                    <ResultRow k="Invested amount" v={formatShort(lump)} />
                    <ResultRow k="Est. returns" v={formatShort(lumpFV - lump)} />
                    <ResultRow k="Total value" v={formatShort(lumpFV)} accent />
                  </div>
                  <Donut invested={lump} gains={lumpFV - lump} />
                </div>
              )}
              {tab === "stepup" && (
                <div className="grid sm:grid-cols-[1fr_auto] gap-6 items-center">
                  <div className="w-full">
                    <ResultRow k="Total invested" v={formatShort(su.invested)} />
                    <ResultRow k="Est. returns" v={formatShort(su.future - su.invested)} />
                    <ResultRow k="Total value" v={formatShort(su.future)} accent />
                  </div>
                  <Donut invested={su.invested} gains={su.future - su.invested} />
                </div>
              )}
              {tab === "swp" && (
                <div>
                  <ResultRow k="Total withdrawn" v={formatShort(swp.totalWithdrawn)} />
                  <ResultRow k="Balance remaining" v={formatShort(swp.finalBalance)} accent />
                  <ResultRow
                    k="Corpus lasts"
                    v={
                      swp.monthsLasted >= swpYears * 12
                        ? `Full ${swpYears} yr +`
                        : `${Math.floor(swp.monthsLasted / 12)}y ${swp.monthsLasted % 12}m`
                    }
                  />
                  <p className="mt-4 text-sm text-muted leading-relaxed">
                    {swp.finalBalance > 0
                      ? "Your corpus comfortably sustains these withdrawals for the full period — with money left over."
                      : "Your corpus is exhausted before the end of the period. Reduce withdrawals or increase the corpus."}
                  </p>
                </div>
              )}
              {tab === "crorepati" && (
                <div className="flex flex-col justify-center h-full text-center">
                  <p className="text-sm text-muted">To accumulate {formatShort(crTarget)} in {crYears} years, invest</p>
                  <p className="mt-2 font-display text-5xl text-emerald">{formatINR(cr)}</p>
                  <p className="mt-1 text-muted">every month</p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-cream border border-forest/8 py-4">
                      <p className="text-xs text-muted">You invest</p>
                      <p className="font-display text-lg text-forest">{formatShort(cr * crYears * 12)}</p>
                    </div>
                    <div className="rounded-xl bg-cream border border-forest/8 py-4">
                      <p className="text-xs text-muted">Market adds</p>
                      <p className="font-display text-lg text-forest">{formatShort(crTarget - cr * crYears * 12)}</p>
                    </div>
                  </div>
                </div>
              )}
              {tab === "emi" && (
                <div className="grid sm:grid-cols-[1fr_auto] gap-6 items-center">
                  <div className="w-full">
                    <ResultRow k="Monthly EMI" v={formatINR(loan.emi)} accent />
                    <ResultRow k="Principal" v={formatShort(loanAmt)} />
                    <ResultRow k="Total interest" v={formatShort(loan.interest)} />
                    <ResultRow k="Total payable" v={formatShort(loan.total)} />
                  </div>
                  <Donut invested={loanAmt} gains={loan.interest} />
                </div>
              )}

              <a
                href={
                  tab === "sip"
                    ? `https://wa.me/918777731378?text=${encodeURIComponent(
                        "Need help to choose right fund..."
                      )}`
                    : `https://wa.me/919614143466?text=${encodeURIComponent(
                        "I used your calculator and would like to start investing."
                      )}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 font-700 text-cream hover:bg-forest-deep transition-colors"
              >
                {tab === "sip" ? "Start this SIP" : "Invest towards this goal"}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
