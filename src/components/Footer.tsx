import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cream-deep pt-20 pb-28 md:pb-10 border-t border-forest/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] bg-forest px-8 sm:px-14 py-14 text-center relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald/20 blur-3xl" />
          <h2 className="relative font-display text-3xl sm:text-5xl text-cream leading-tight">
            Ready to build a better future?
          </h2>
          <p className="relative mt-4 text-cream/60 max-w-xl mx-auto">
            Start your journey today with an investment as small as Rs.500. Zero
            transaction fees, complete transparency.
          </p>
          <a
            href="#calculator"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-700 text-forest-deep hover:bg-gold-soft transition-all hover:gap-3"
          >
            Get started free <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* links */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid place-items-center h-9 w-11">
                <img src="/brand/fundline-icon.png" alt="Fundline logo" className="h-full w-full object-contain" />
              </span>
              <span className="font-display text-xl text-forest">
                Fund<span className="text-gold">line</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
              Your financial partner for mutual funds, insurance, NPS and beyond — all
              under one roof.
            </p>
          </div>

          {[
            { h: "Products", l: ["Mutual Funds", "Health Insurance", "NPS", "P2P Lending", "Invoice Discounting"] },
            { h: "Company", l: ["Why Fundline", "Partners", "Mobile App", "Trust & Compliance"] },
          ].map((col) => (
            <div key={col.h}>
              <h4 className="font-700 text-forest text-sm uppercase tracking-wider">{col.h}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.l.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-muted hover:text-forest transition-colors">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-700 text-forest text-sm uppercase tracking-wider">Get in touch</h4>
            <p className="mt-4 text-sm text-muted">Connect with us via mail, call or WhatsApp.</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a
                  href="mailto:fundline20@gmail.com"
                  className="flex items-center gap-2.5 hover:text-forest transition-colors"
                >
                  <Mail size={16} className="text-emerald" /> fundline20@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918777737378"
                  className="flex items-center gap-2.5 hover:text-forest transition-colors"
                >
                  <Phone size={16} className="text-emerald" /> +91 87777 37378
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919614143466"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-forest transition-colors"
                >
                  <MessageCircle size={16} className="text-emerald" /> +91 96141 43466
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-forest/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Fundline · ARN 171447 · Ayanesh Talukder. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Mutual fund investments are subject to market risks.
          </p>
        </div>
      </div>
    </footer>
  );
}
