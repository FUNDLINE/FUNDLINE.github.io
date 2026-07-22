import { partnerGroups } from "../data";

// Pull a representative spread of real partner logos for the trust strip
const strip = partnerGroups
  .flatMap((g) => g.logos)
  .filter((l) => !l.bg) // keep transparent/clean logos for the light band
  .slice(0, 24);

export default function LogoMarquee() {
  return (
    <section className="bg-cream border-y border-forest/10 py-8 overflow-hidden">
      <p className="text-center text-xs font-700 uppercase tracking-[0.25em] text-muted mb-6">
        Trusted partners across the financial ecosystem
      </p>
      <div className="relative">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...strip, ...strip].map((l, i) => (
            <div key={i} className="mx-8 flex items-center shrink-0">
              <img
                src={l.src}
                alt={l.name}
                loading="lazy"
                className="h-9 w-auto max-w-[140px] object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
              />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream to-transparent" />
      </div>
    </section>
  );
}
