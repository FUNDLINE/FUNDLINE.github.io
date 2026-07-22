const items = [
  "Zero transaction fee",
  "Goal-based investing",
  "Starts from Rs.500",
  "All products, one roof",
  "Retirement planning",
  "Tax-smart portfolios",
  "Paperless & instant",
  "Superior risk-adjusted returns",
];

export default function Marquee() {
  return (
    <div className="relative bg-forest py-4 overflow-hidden border-y border-forest-mid/40">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center">
            <span className="mx-6 font-display italic text-lg text-cream/85">{t}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-forest to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-forest to-transparent" />
    </div>
  );
}
