export default function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
  theme = "light",
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
  theme?: "light" | "dark";
}) {
  const pct = ((value - min) / (max - min)) * 100;
  const dark = theme === "dark";
  return (
    <div>
      <div className="flex items-center justify-between mb-2.5">
        <label className={`text-sm font-600 ${dark ? "text-cream/70" : "text-muted"}`}>
          {label}
        </label>
        <span
          className={`font-mono text-sm font-500 rounded-lg px-3 py-1 ${
            dark ? "text-gold bg-forest-deep/70" : "text-forest bg-forest/8"
          }`}
        >
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer accent-gold"
        style={{
          background: `linear-gradient(to right, #c8a24a ${pct}%, ${
            dark ? "rgba(255,255,255,0.12)" : "rgba(15,61,46,0.12)"
          } ${pct}%)`,
        }}
      />
    </div>
  );
}
