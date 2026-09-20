"use client";

import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  Flame,
  Clock,
  Sparkles,
  Wind,
  Check,
  PhoneCall,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#070c18] pt-8 pb-16 lg:py-20 border-b border-white/10">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Column: Hero Copy & Authority */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Pulsing Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1.5 text-xs font-bold text-orange-400">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span>24/7 National Dispatch Active · CDET &amp; CSIA Certified</span>
          </div>

          {/* H1 Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight">
            Certified, Professional <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Dryer Vent Cleaners
            </span>{" "}
            <br />
            Nationwide Same-Day Dispatch
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed">
            Eliminate hazardous lint buildup, stop burning smells, and protect your home from dryer fires. Direct connection to certified technicians across all 50 states with zero hold times.
          </p>

          {/* 4 Trust Checks */}
          <div className="grid sm:grid-cols-2 gap-2.5 max-w-lg pt-1">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>CDET Certified Technicians</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Same-Day Local Arrival (45-75 Mins)</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Licensed &amp; Insured ($2M Liability)</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Lint-Free &amp; Airflow Guarantee</span>
            </div>
          </div>

          {/* Primary High-Urgency Call Trigger */}
          <div className="pt-3 space-y-2">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-sm sm:text-base uppercase tracking-wider px-8 py-4 rounded-2xl shadow-2xl shadow-orange-600/40 hover:scale-[1.02] active:scale-[0.98] transition border border-white/20 w-full sm:w-auto"
            >
              <PhoneCall className="w-5 h-5 fill-white animate-bounce shrink-0" />
              <span>Call Dispatch Now: {siteConfig.phone}</span>
            </a>

            <div className="flex items-center gap-2 text-xs text-gray-400 pl-1">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Tap to call · 24/7 Live Operators · Zero forms or waiting</span>
            </div>
          </div>

          {/* US Flag Network Badge */}
          <div className="inline-flex items-center gap-4 border border-white/10 bg-white/5 rounded-xl px-4 py-2.5">
            <span className="text-2xl">🇺🇸</span>
            <div className="text-left border-r border-white/10 pr-4">
              <div className="text-[10px] uppercase font-bold text-gray-400 leading-tight">
                Nationwide <br /> Cleaners Network
              </div>
            </div>
            <div className="text-left">
              <div className="text-lg font-black text-orange-400 leading-none">
                50 <span className="text-xs text-white font-bold">STATES</span>
              </div>
              <div className="text-[10px] text-gray-300 font-semibold tracking-wide">
                4,000+ CERTIFIED SPECIALISTS
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Ultra-Attractive Direct Phone Dispatch Hero Card */}
        <div className="lg:col-span-5">
          <div className="bg-[#0c1424] border-2 border-orange-500/60 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-orange-600/20 relative text-left overflow-hidden">
            {/* Ambient Corner Glow */}
            <div className="absolute -top-20 -right-20 w-44 h-44 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Header Badge */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-black tracking-wider uppercase text-emerald-400">
                  Technicians On-Duty Right Now
                </span>
              </div>
              <span className="text-[10px] font-bold bg-orange-500/20 text-orange-400 border border-orange-500/40 px-2 py-0.5 rounded">
                Live 24/7
              </span>
            </div>

            <div className="space-y-2 mb-6">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                Need Same-Day Dryer Vent Service?
              </h2>
              <p className="text-xs sm:text-sm text-gray-300">
                Skip online forms and waiting for callbacks. Speak directly with a certified technician right now for immediate same-day dispatch.
              </p>
            </div>

            {/* PRIMARY CALL BOX: GIANT NUMBER & TAP-TO-CALL */}
            <div className="bg-gradient-to-b from-orange-950/60 to-[#070c18] border-2 border-orange-500 rounded-2xl p-6 text-center shadow-xl mb-6 space-y-3 relative overflow-hidden">
              <div className="text-[11px] font-bold text-orange-300 uppercase tracking-widest flex items-center justify-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>Direct Dispatch · Zero Hold Time</span>
              </div>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="block text-3xl sm:text-4xl font-black text-white hover:text-orange-400 transition tracking-tight py-1"
              >
                {siteConfig.phone}
              </a>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="w-full bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-sm uppercase tracking-wider py-4 px-6 rounded-xl shadow-xl shadow-orange-600/40 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer border border-white/20"
              >
                <Phone className="w-5 h-5 fill-white animate-pulse" />
                <span>Tap to Call On-Duty Specialist</span>
              </a>

              <div className="text-[11px] text-gray-400 flex items-center justify-center gap-1.5 pt-1">
                <Clock className="w-3.5 h-3.5 text-orange-400" />
                <span>Average Arrival: <strong className="text-white">45-75 Minutes</strong></span>
              </div>
            </div>

            {/* Micro Trust Points */}
            <div className="grid grid-cols-4 gap-2 text-center pt-2 border-t border-white/10">
              <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <span className="text-[9px] font-semibold text-gray-300 leading-tight block">
                  IRC M1502 Code
                </span>
              </div>
              <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                <Clock className="w-4 h-4 text-orange-400 mx-auto mb-1" />
                <span className="text-[9px] font-semibold text-gray-300 leading-tight block">
                  Same-Day Priority
                </span>
              </div>
              <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                <Wind className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                <span className="text-[9px] font-semibold text-gray-300 leading-tight block">
                  Rotary + HEPA
                </span>
              </div>
              <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                <Sparkles className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                <span className="text-[9px] font-semibold text-gray-300 leading-tight block">
                  CFM Airflow Test
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
