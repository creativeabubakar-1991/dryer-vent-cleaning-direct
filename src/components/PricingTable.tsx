import React from "react";
import { Check, Phone, ShieldCheck, Flame } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function PricingTable() {
  const tiers = [
    {
      name: "Standard Residential",
      price: "Free Estimate",
      range: "Standard single-story clean",
      description: "Ideal for ground-floor laundry rooms venting through a side exterior wall under 15 feet.",
      popular: false,
      features: [
        "Full rotary brush line scrubbing",
        "HEPA negative-air lint extraction",
        "Lint screen & blower wheel check",
        "Exterior damper flap inspection",
        "Before & after airflow CFM test",
        "30-day lint-free guarantee",
      ],
    },
    {
      name: "Deep Clean + Pest Guard",
      price: "Free Estimate",
      range: "Most Popular Residential Package",
      description: "Complete rotary scrub plus installation of a heavy-duty steel exterior pest exclusion hood.",
      popular: true,
      features: [
        "Everything in Standard Clean",
        "Heavy-duty animal pest guard install",
        "Borescope camera line inspection",
        "Dryer transition hose safety check",
        "Thermal high-limit sensor audit",
        "Prevents birds, squirrels & bees",
      ],
    },
    {
      name: "Rooftop & Multilevel",
      price: "Free Estimate",
      range: "2-Story & Townhouse Vertical Runs",
      description: "Full roof-access service for dryer ducts venting upward through attics to roof terminations.",
      popular: false,
      features: [
        "OSHA safety harness roof access",
        "Rooftop damper hood clearout",
        "Dual-direction rotary brush scrub",
        "Flashing & seal weather check",
        "Heavy condensation sludge removal",
        "Attic insulation verification",
      ],
    },
  ];

  return (
    <section id="pricing" className="bg-[#070c18] py-16 px-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-bold text-gray-300 uppercase tracking-wide">
            Transparent Estimates
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Clear, Upfront Estimates — No Hidden Fees
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Get an instant free phone quote with upfront pricing. No bait-and-switch fees or surprise charges on arrival.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {tiers.map((t, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${
                t.popular
                  ? "bg-[#0f1b33] border-2 border-orange-500 shadow-2xl shadow-orange-600/15 relative"
                  : "bg-[#0c1424] border border-white/10"
              }`}
            >
              {t.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-600 to-amber-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{t.name}</h3>
                  <div className="text-[11px] text-gray-400 mt-0.5">{t.range}</div>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-black text-white">{t.price}</span>
                  <span className="text-xs text-gray-400">by phone</span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">{t.description}</p>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  {t.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className={`block w-full text-center font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition shadow-md flex items-center justify-center gap-2 ${
                    t.popular
                      ? "bg-orange-600 hover:bg-orange-500 text-white"
                      : "bg-white/10 hover:bg-white/15 text-white"
                  }`}
                >
                  <Phone className="w-3.5 h-3.5 fill-white" />
                  <span>Call for Free Quote: {siteConfig.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
