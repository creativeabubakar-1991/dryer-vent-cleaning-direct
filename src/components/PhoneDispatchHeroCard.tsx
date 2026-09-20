"use client";

import React, { useState } from "react";
import { Phone, Clock, ShieldCheck, Flame, CheckCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";

interface PhoneDispatchHeroCardProps {
  cityName?: string;
  defaultService?: string;
}

export default function PhoneDispatchHeroCard({
  cityName = "Nationwide",
  defaultService = "Emergency Clogged Dryer Vent Cleaning",
}: PhoneDispatchHeroCardProps) {
  const [showCallback, setShowCallback] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [callbackData, setCallbackData] = useState({ name: "", phone: "" });

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0c1424] border-2 border-orange-500/40 rounded-3xl p-6 sm:p-7 text-white shadow-2xl relative overflow-hidden text-left">
      {/* Background ambient lighting */}
      <div className="absolute -top-20 -right-20 w-44 h-44 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Status Header */}
      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
          </span>
          <span className="text-xs font-black tracking-wider uppercase text-orange-400">
            Live Dispatch Active
          </span>
        </div>
        <span className="text-[11px] font-semibold text-gray-400">
          {cityName} Hub
        </span>
      </div>

      <div className="space-y-1 mb-5">
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
          Need Emergency Vent Service or Instant Pricing?
        </h3>
        <p className="text-xs sm:text-sm text-gray-300">
          Skip online waiting. Speak directly with an on-duty CDET technician for immediate arrival time and guaranteed flat rates.
        </p>
      </div>

      {/* PRIMARY CALL BOX: GIANT NUMBER & TAP-TO-CALL */}
      <div className="bg-gradient-to-b from-orange-950/40 to-[#070c18] border-2 border-orange-500 rounded-2xl p-5 text-center shadow-lg mb-5 space-y-3">
        <div className="text-[11px] font-bold text-orange-300 uppercase tracking-wider">
          Direct Dispatch Line • Zero Hold Time
        </div>

        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="block text-2xl sm:text-3xl font-black text-white hover:text-orange-400 transition tracking-tight"
        >
          {siteConfig.phone}
        </a>

        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-sm uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-xl shadow-orange-600/30 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span>Tap to Call Certified Dispatch</span>
        </a>

        <div className="text-[11px] text-gray-400 flex items-center justify-center gap-1">
          <Clock className="w-3.5 h-3.5 text-orange-400" />
          <span>Average Arrival: <strong>45-75 Minutes</strong></span>
        </div>
      </div>

      {/* Trust Checklist */}
      <ul className="space-y-2 mb-5 text-xs text-gray-200">
        <li className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Starting at $99 Flat Rate (No Hidden Fees)</span>
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Rotary Brush + 3-Stage HEPA Vacuum Containment</span>
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Digital CFM Airflow Velocity Verification</span>
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>$2,000,000 General Liability Insured</span>
        </li>
      </ul>

      {/* Secondary Quick Callback Toggle */}
      {!submitted ? (
        <div>
          {!showCallback ? (
            <button
              onClick={() => setShowCallback(true)}
              className="text-xs text-gray-400 hover:text-white underline underline-offset-4 transition block text-center w-full"
            >
              Cannot call right now? Request a 15-minute callback →
            </button>
          ) : (
            <form onSubmit={handleCallbackSubmit} className="space-y-2 pt-3 border-t border-white/10">
              <div className="text-xs font-bold text-gray-300">Request Quick Callback:</div>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={callbackData.name}
                  onChange={(e) => setCallbackData({ ...callbackData, name: e.target.value })}
                  className="bg-[#070c18] border border-white/20 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={callbackData.phone}
                  onChange={(e) => setCallbackData({ ...callbackData, phone: e.target.value })}
                  className="bg-[#070c18] border border-white/20 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs py-2 rounded-lg transition"
              >
                Send Callback Request
              </button>
            </form>
          )}
        </div>
      ) : (
        <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center text-xs text-emerald-400">
          ✓ Callback requested! We will call <strong>{callbackData.phone}</strong> shortly.
        </div>
      )}
    </div>
  );
}
