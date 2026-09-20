import React from "react";
import { PhoneCall, Truck, ShieldCheck, Phone, Zap, Clock, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function PricingTable() {
  const steps = [
    {
      num: "01",
      icon: <PhoneCall className="w-6 h-6 text-orange-400" />,
      title: "Call Our Live Dispatch Desk",
      description: "Speak directly to an on-duty CDET specialist. No phone trees, zero hold times, and no online forms to fill.",
      badge: "Instant Connection",
    },
    {
      num: "02",
      icon: <Truck className="w-6 h-6 text-amber-400" />,
      title: "Fast Local Technician Arrival",
      description: "A fully equipped service truck is dispatched to your door within 45-75 minutes with high-velocity rotary brushes & HEPA containment.",
      badge: "Same-Day Arrival",
    },
    {
      num: "03",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Total Lint & Fire Hazard Cleared",
      description: "We clean your entire duct line, test airflow CFM velocity with digital meters, and provide a 30-day lint-free guarantee.",
      badge: "100% Guaranteed",
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#070c18] py-16 lg:py-20 px-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto space-y-12 text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/30 px-3.5 py-1 rounded-full text-xs font-bold text-orange-400 uppercase tracking-wide">
            Fast · Simple · Direct
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            How Our Same-Day Dispatch Works
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Skip the delay of web forms and email quotes. We connect you directly with certified on-call specialists ready to roll to your door today.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-[#0c1424] border border-white/10 hover:border-orange-500/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-600/10 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition">
                    {s.icon}
                  </div>
                  <span className="text-2xl font-black text-white/20 group-hover:text-orange-500/40 transition">
                    {s.num}
                  </span>
                </div>

                <div>
                  <span className="inline-block text-[10px] font-bold text-orange-400 uppercase tracking-wider bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded mb-2">
                    {s.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition">
                    {s.title}
                  </h3>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="text-xs font-bold text-orange-400 hover:text-amber-300 flex items-center gap-1.5 transition"
                >
                  <Phone className="w-3.5 h-3.5 fill-orange-400" />
                  <span>Call to Dispatch →</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Central High-Converting Call Box */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-orange-950/70 via-[#0c1424] to-orange-950/70 border-2 border-orange-500 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-orange-600/25 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 border border-orange-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Live Technicians Ready Nationwide</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              One Call Solves Your Dryer Vent Problem Today
            </h3>

            <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto">
              Don’t let a clogged vent overheat your dryer or risk a house fire. Tap below to speak with our live dispatch desk right now.
            </p>

            <div className="pt-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-base sm:text-xl uppercase tracking-wider px-8 sm:px-12 py-5 rounded-2xl shadow-2xl shadow-orange-600/50 hover:scale-[1.03] active:scale-[0.98] transition border border-white/20 w-full sm:w-auto"
              >
                <PhoneCall className="w-6 h-6 fill-white animate-bounce shrink-0" />
                <span>Call Now: {siteConfig.phone}</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400 pt-2">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Hold Time</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Direct Live Operator</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Same-Day Priority Arrival</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
