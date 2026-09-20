"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  Flame,
  ArrowRight,
  Calculator,
  AlertTriangle,
  Wind,
  Check,
  Clock,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function HeroSection() {
  // Calculator state
  const [zipOrAddress, setZipOrAddress] = useState("");
  const [ventLocation, setVentLocation] = useState("wall");
  const [homeStories, setHomeStories] = useState("1-story");
  const [calculated, setCalculated] = useState(false);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipOrAddress.trim().length > 0) {
      setCalculated(true);
    }
  };

  const isRooftop = ventLocation === "roof" || homeStories === "2-story";
  const estimatedPrice = "Free Phone Quote";
  const riskScore = isRooftop ? "High Fire Risk (Long Vertical Run)" : "Moderate to High Lint Risk";

  return (
    <section className="relative overflow-hidden bg-[#070c18] pt-8 pb-16 lg:py-16 border-b border-white/10">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Column: Hero Copy & Authority */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Pulsing Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-xs font-bold text-orange-400">
            <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
            <span>CDET &amp; CSIA Certified Dryer Exhaust Network</span>
          </div>

          {/* H1 Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight">
            Certified, Professional <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Dryer Vent Cleaners
            </span>{" "}
            <br />
            Residential &amp; Commercial, Nationwide
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed">
            Dryer Vents · Fire Prevention · Air Ducts · Rooftop Exhaust. <br />
            Eliminating dangerous lint buildup, cutting drying cycles in half, and protecting homes across all 50 states.
          </p>

          {/* 4 Trust Checks */}
          <div className="grid sm:grid-cols-2 gap-2.5 max-w-lg pt-1">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>CDET Certified Technicians</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Licensed &amp; Insured ($2M Liability)</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>50 States Nationwide Network</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Lint-Free Guarantee</span>
            </div>
          </div>

          {/* Dual Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#estimate-calculator"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-xl shadow-orange-600/30 hover:scale-[1.02] transition"
            >
              <span>Book Your Free Vent Inspection</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl hover:scale-[1.02] transition"
            >
              <Phone className="w-4 h-4 text-orange-400 fill-orange-400" />
              <span>Call {siteConfig.phone}</span>
            </a>
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

        {/* Right Column: Interactive "Dryer Fire Risk & Cost Estimator" Widget */}
        <div id="estimate-calculator" className="lg:col-span-5 scroll-mt-24">
          <div className="bg-[#0c1424] border border-white/15 rounded-2xl p-6 sm:p-7 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div>
                <h2 className="text-base sm:text-lg font-black text-white uppercase tracking-tight flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-500 animate-pulse" />
                  <span>CHECK FIRE RISK &amp; COSTS</span>
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">
                  Enter your address or zip code to see local pricing &amp; risk rating.
                </p>
              </div>
              <span className="text-[10px] font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30 px-2 py-0.5 rounded">
                Instant
              </span>
            </div>

            <form onSubmit={handleCalculate} className="space-y-3.5 text-left">
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">
                  Full Address or Zip Code
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 75201, 32801, or Street Address"
                  value={zipOrAddress}
                  onChange={(e) => setZipOrAddress(e.target.value)}
                  className="w-full bg-[#070c18] border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1">
                    Exhaust Exit
                  </label>
                  <select
                    value={ventLocation}
                    onChange={(e) => setVentLocation(e.target.value)}
                    className="w-full bg-[#070c18] border border-white/20 rounded-lg px-2.5 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500 transition"
                  >
                    <option value="wall">Side Wall Exit (Ground)</option>
                    <option value="roof">Rooftop Exit (Vertical)</option>
                    <option value="crawlspace">Basement / Crawlspace</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1">
                    Home Style
                  </label>
                  <select
                    value={homeStories}
                    onChange={(e) => setHomeStories(e.target.value)}
                    className="w-full bg-[#070c18] border border-white/20 rounded-lg px-2.5 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500 transition"
                  >
                    <option value="1-story">1-Story Single Family</option>
                    <option value="2-story">2-Story / Multilevel</option>
                    <option value="condo">Townhouse / Condo</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg shadow-orange-600/30 transition flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                <span>Estimate Cleaning Cost &amp; Fire Risk</span>
              </button>
            </form>

            {/* Calculated Output Box */}
            {calculated && (
              <div className="mt-4 bg-orange-950/40 border border-orange-500/40 rounded-xl p-4 text-left space-y-2.5 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-orange-300 uppercase tracking-wide">
                    Service Estimate:
                  </span>
                  <span className="text-sm font-black text-emerald-400">Free Phone Quote Available</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-300 font-medium">Lint Fire Hazard:</span>
                  <span className="font-bold text-amber-400">{riskScore}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-300 font-medium">Airflow Boost:</span>
                  <span className="font-bold text-emerald-400">+140% Dryer Efficiency</span>
                </div>

                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="mt-2 block text-center bg-orange-600 hover:bg-orange-500 text-white font-black text-xs uppercase tracking-wide py-2.5 rounded-lg shadow-md transition"
                >
                  ⚡ Call For Instant Free Quote: {siteConfig.phone}
                </a>
              </div>
            )}

            {/* Micro Trust Points */}
            <div className="mt-5 grid grid-cols-4 gap-2 text-center pt-3 border-t border-white/10">
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
