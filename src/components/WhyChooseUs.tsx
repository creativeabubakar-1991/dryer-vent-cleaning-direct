import React from "react";
import { ShieldCheck, Wind, Gauge, DollarSign, Award, ThumbsUp } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Award className="w-6 h-6 text-orange-400" />,
      title: "CDET & CSIA Certified Specialists",
      description: "Our technicians hold official Certified Dryer Exhaust Technician credentials, trained in IRC M1502 residential fire codes and commercial duct airflow mechanics.",
    },
    {
      icon: <Wind className="w-6 h-6 text-amber-400" />,
      title: "Industrial Rotary Brush & HEPA Containment",
      description: "We use high-torque forward/reverse rotary whips and 3-stage HEPA negative-air collectors. All lint is contained safely in our equipment—zero dust or fibers inside your home.",
    },
    {
      icon: <Gauge className="w-6 h-6 text-emerald-400" />,
      title: "Digital Airflow CFM Verification",
      description: "We test your exhaust airflow velocity with calibrated anemometers before and after cleaning, guaranteeing factory-spec CFM output and faster dry times.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      title: "Transparent Flat-Rate Pricing",
      description: "No hidden ladder fees, no mileage surcharges, and no surprise add-ons. You receive a clear, upfront quote before any work begins.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
      title: "$2,000,000 Liability Insurance",
      description: "Complete peace of mind. Every technician in our network carries comprehensive commercial liability and property damage insurance.",
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-orange-400" />,
      title: "100% Lint-Free 30-Day Guarantee",
      description: "If your clothes do not dry noticeably faster within 30 days of service, our technician will return and re-inspect your exhaust line completely free of charge.",
    },
  ];

  return (
    <section className="bg-[#0c1424] py-16 px-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-bold text-gray-300 uppercase tracking-wide">
            The Dryer Vent Direct Difference
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Why America Chooses Dryer Vent Cleaning Direct
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Unlike general handymen who push lint further down the pipe with shop vacs, we deploy certified exhaust specialists equipped with industrial rotary containment systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="bg-[#070c18] border border-white/10 rounded-2xl p-6 space-y-3 hover:border-orange-500/40 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                {pt.icon}
              </div>
              <h3 className="text-base font-bold text-white">{pt.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{pt.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
