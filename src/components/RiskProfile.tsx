import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldQuestion, RotateCcw, ArrowRight, Check } from "lucide-react";

type Option = { text: string; score: number };
type Question = { q: string; options: Option[] };

const questions: Question[] = [
  {
    q: "What is your primary investment goal?",
    options: [
      { text: "Preserve my capital — safety first", score: 1 },
      { text: "Steady income with modest growth", score: 2 },
      { text: "Balanced growth over the long term", score: 3 },
      { text: "Maximise growth, I can handle swings", score: 4 },
    ],
  },
  {
    q: "How long can you stay invested?",
    options: [
      { text: "Less than 3 years", score: 1 },
      { text: "3 – 5 years", score: 2 },
      { text: "5 – 10 years", score: 3 },
      { text: "More than 10 years", score: 4 },
    ],
  },
  {
    q: "If your portfolio dropped 20% in a month, you would:",
    options: [
      { text: "Sell everything to avoid more loss", score: 1 },
      { text: "Sell a part and wait", score: 2 },
      { text: "Hold and stay the course", score: 3 },
      { text: "Invest more — it's on sale", score: 4 },
    ],
  },
  {
    q: "How would you describe your investing knowledge?",
    options: [
      { text: "Beginner — still learning the basics", score: 1 },
      { text: "Some understanding of funds & markets", score: 2 },
      { text: "Fairly confident and experienced", score: 3 },
      { text: "Very experienced, I track markets closely", score: 4 },
    ],
  },
  {
    q: "What share of your income can you invest?",
    options: [
      { text: "A small, fixed amount", score: 1 },
      { text: "Around 10 – 20%", score: 2 },
      { text: "Around 20 – 40%", score: 3 },
      { text: "40%+ — I have surplus to deploy", score: 4 },
    ],
  },
];

const profiles = [
  {
    min: 5,
    max: 8,
    name: "Conservative",
    color: "#5c8a6f",
    desc: "Capital protection is your priority. A portfolio tilted toward debt, liquid and hybrid funds suits you best.",
    mix: "70% Debt · 20% Hybrid · 10% Equity",
  },
  {
    min: 9,
    max: 12,
    name: "Moderately Conservative",
    color: "#7a9a5c",
    desc: "You want stability with a little growth. A debt-heavy blend with some equity exposure fits your comfort.",
    mix: "55% Debt · 25% Hybrid · 20% Equity",
  },
  {
    min: 13,
    max: 15,
    name: "Moderate",
    color: "#c8a24a",
    desc: "You seek balanced growth and can tolerate moderate ups and downs. A balanced equity-debt mix works well.",
    mix: "50% Equity · 30% Hybrid · 20% Debt",
  },
  {
    min: 16,
    max: 18,
    name: "Moderately Aggressive",
    color: "#1f7a5a",
    desc: "You're focused on long-term growth and can ride out volatility. An equity-led portfolio suits you.",
    mix: "70% Equity · 20% Hybrid · 10% Debt",
  },
  {
    min: 19,
    max: 20,
    name: "Aggressive",
    color: "#0f3d2e",
    desc: "You aim to maximise wealth and are comfortable with high volatility. A high-equity, multi-cap portfolio fits.",
    mix: "85% Equity · 10% Hybrid · 5% Debt",
  },
];

export default function RiskProfile() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const done = step >= questions.length;
  const total = answers.reduce((a, b) => a + b, 0);
  const profile = profiles.find((p) => total >= p.min && total <= p.max) ?? profiles[2];
  const progress = (Math.min(step, questions.length) / questions.length) * 100;

  function answer(score: number) {
    const next = [...answers];
    next[step] = score;
    setAnswers(next);
    setStep((s) => s + 1);
  }

  function reset() {
    setStep(0);
    setAnswers([]);
  }

  return (
    <section id="risk" className="relative py-24 sm:py-32 bg-cream-deep paper-grain">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="inline-flex items-center gap-2 text-xs font-700 uppercase tracking-[0.25em] text-gold">
            <ShieldQuestion size={14} /> Know yourself
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-tight text-forest">
            Check your risk profile.
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Answer five quick questions and we'll match you to the right model portfolio.
          </p>
        </div>

        <div className="mt-12 rounded-3xl bg-white border border-forest/10 p-7 sm:p-10 shadow-[0_30px_70px_-40px_rgba(15,61,46,0.4)]">
          {/* progress */}
          {!done && (
            <div className="mb-8">
              <div className="flex justify-between text-xs font-600 text-muted mb-2">
                <span>Question {step + 1} of {questions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-2 rounded-full bg-forest/10 overflow-hidden">
                <motion.div
                  className="h-full bg-gold rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-display text-2xl sm:text-3xl text-forest leading-snug">
                  {questions[step].q}
                </h3>
                <div className="mt-6 grid gap-3">
                  {questions[step].options.map((o) => (
                    <button
                      key={o.text}
                      onClick={() => answer(o.score)}
                      className="group flex items-center justify-between gap-4 rounded-2xl border border-forest/12 bg-cream/50 px-5 py-4 text-left hover:border-forest hover:bg-forest hover:text-cream transition-all"
                    >
                      <span className="font-600">{o.text}</span>
                      <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition -translate-x-2 group-hover:translate-x-0" />
                    </button>
                  ))}
                </div>
                {step > 0 && (
                  <button
                    onClick={() => setStep((s) => s - 1)}
                    className="mt-6 text-sm font-600 text-muted hover:text-forest"
                  >
                    ← Back
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  className="inline-grid place-items-center h-16 w-16 rounded-full text-cream mb-5"
                  style={{ background: profile.color }}
                >
                  <Check size={30} />
                </motion.span>
                <p className="text-muted text-sm">Your risk profile is</p>
                <h3 className="font-display text-4xl sm:text-5xl mt-1" style={{ color: profile.color }}>
                  {profile.name}
                </h3>
                <p className="mt-4 text-muted max-w-xl mx-auto leading-relaxed">{profile.desc}</p>

                <div className="mt-6 inline-flex flex-wrap justify-center gap-2">
                  {profile.mix.split(" · ").map((m) => (
                    <span key={m} className="rounded-full bg-forest/8 px-4 py-2 text-sm font-700 text-forest">
                      {m}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a
                    href={`https://wa.me/919614143466?text=${encodeURIComponent(
                      `My risk profile is ${profile.name}. Please suggest a model portfolio.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 font-700 text-cream hover:bg-forest-deep transition-colors"
                  >
                    Get my model portfolio <ArrowRight size={18} />
                  </a>
                  <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 rounded-full border border-forest/20 px-6 py-3.5 font-700 text-forest hover:bg-forest/5 transition-colors"
                  >
                    <RotateCcw size={16} /> Retake
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
