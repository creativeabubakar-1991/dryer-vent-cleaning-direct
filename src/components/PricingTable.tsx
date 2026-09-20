import React from "react";
import { PhoneCall, Truck, ShieldCheck, Phone, Zap, Clock, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function PricingTable() {
  const steps = [
    {
      num: "01",
      icon: <PhoneCall className="w-6 h-6 text-orange-600" />,
      title: "Call Our Live Dispatch Desk",
      description: "Speak directly to an on-duty CDET specialist. No phone trees, zero hold times, and no online forms to fill.",
      badge: "Instant Connection",
    },
    {
      num: "02",
      icon: <Truck className="w-6 h-6 text-amber-600" />,
      title: "Fast Local Technician Arrival",
      description: "A fully equipped service truck is dispatched to your door within 45-75 minutes with high-velocity rotary brushes & HEPA containment.",
      badge: "Same-Day Arrival",
    },
    {
      num: "03",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "Total Lint & Fire Hazard Cleared",
      description: "We clean your entire duct line, test airflow CFM velocity with digital meters, and provide a 30-day lint-free guarantee.",
      badge: "100% Guaranteed",
    },
  ];

  return (
    <section id="how-it-works" className="bg-slate-50 py-16 lg:py-20 px-4 border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-12 text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-orange-100 border border-orange-200 px-3.5 py-1 rounded-full text-xs font-bold text-orange-700 uppercase tracking-wide">
            Fast · Simple · Direct
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            How Our Same-Day Dispatch Works
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Skip the delay of web forms and email quotes. We connect you directly with certified on-call specialists ready to roll to your door today.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 hover:border-orange-400 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200 group shadow-xs"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:scale-110 transition">
                    {s.icon}
                  </div>
                  <span className="text-2xl font-black text-slate-200 group-hover:text-orange-200 transition">
                    {s.num}
                  </span>
                </div>

                <div>
                  <span className="inline-block text-[10px] font-bold text-orange-700 uppercase tracking-wider bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded mb-2">
                    {s.badge}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition">
                    {s.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1.5 transition"
                >
                  <Phone className="w-3.5 h-3.5 fill-orange-600" />
                  <span>Call to Dispatch →</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Central High-Converting Call Box */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden text-center text-white">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="h-2 w-2 rounded-full bg-emerald-300 animate-ping" />
              <span>Live Technicians Ready Nationwide</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              One Call Solves Your Dryer Vent Problem Today
            </h3>

            <p className="text-xs sm:text-sm text-orange-100 max-w-lg mx-auto">
              Don’t let a clogged vent overheat your dryer or risk a house fire. Tap below to speak with our live dispatch desk right now.
            </p>

            <div className="pt-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-white text-orange-700 hover:bg-orange-50 font-black text-base sm:text-xl uppercase tracking-wider px-8 sm:px-12 py-5 rounded-2xl shadow-xl transition transform hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <PhoneCall className="w-6 h-6 fill-orange-700 animate-bounce shrink-0" />
                <span>Call Now: {siteConfig.phone}</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-orange-100 pt-2 font-medium">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <span>Zero Hold Time</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <span>Direct Live Operator</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <span>Same-Day Priority Arrival</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
