"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I know if my dryer vent needs to be cleaned?",
      a: "The most common warning signs include: clothes taking 2 or more cycles to dry, the dryer cabinet feeling burning hot to the touch, a burning lint smell during cycles, outdoor vent flaps barely opening, or digital error codes (like LG Flow Sense or Samsung D80/D90). If it has been more than 12 months since your last cleaning, service is strongly recommended.",
    },
    {
      q: "Can I clean my dryer vent myself with a vacuum kit?",
      a: "DIY vacuum kits typically only reach 5 to 10 feet. If your dryer vent has 90-degree elbows or exceeds 15 feet (especially rooftop or crawlspace runs), DIY rods frequently become disconnected and stuck inside the wall, or push lint into an impenetrable compaction block. Professional rotary whips with high-CFM HEPA negative pressure clean the entire duct length without interior mess.",
    },
    {
      q: "How long does professional dryer vent cleaning take?",
      a: "A standard residential dryer vent cleaning takes approximately 45 to 60 minutes. Complex rooftop vents or installations requiring rigid metal duct repairs or booster fan servicing typically require 75 to 90 minutes.",
    },
    {
      q: "Do you clean from inside the home or outside?",
      a: "Both. Our certified technicians service dryer vents from both ends. We connect our commercial HEPA containment system at the indoor transition point to capture all fibers, while running rotary agitation brushes through the exterior terminal to ensure the outdoor hood and damper flap operate freely.",
    },
    {
      q: "Are thin foil or plastic flexible hoses safe?",
      a: "No. Flexible vinyl (plastic) and unlisted foil accordion hoses are illegal under modern International Residential Code (IRC M1502). They sag, trap lint, and melt rapidly during a lint fire. We replace hazardous flex hoses with UL 2158A semi-rigid or rigid smooth metal ducting.",
    },
    {
      q: "How much money does a clean dryer vent save on electric bills?",
      a: "A clogged dryer takes 90 minutes instead of 40 minutes per cycle, doubling energy consumption. On average, cleaning a restricted vent saves typical households between $18 and $24 per month ($216 - $288 annually) in electricity or natural gas.",
    },
  ];

  return (
    <section id="faq" className="bg-[#0c1424] py-16 px-4 border-b border-white/10">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full text-xs font-bold text-orange-400 uppercase tracking-wide">
            Got Questions?
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm">
            Everything you need to know about certified dryer vent cleaning, building codes, and fire safety.
          </p>
        </div>

        <div className="space-y-3 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#070c18] border border-white/10 rounded-xl overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left font-bold text-sm text-white hover:text-orange-400 transition"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-orange-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
