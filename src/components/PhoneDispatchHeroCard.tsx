"use client";

import React, { useState } from "react";
import { Phone, Clock, ShieldCheck, Zap, Award, CheckCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";

interface PhoneDispatchHeroCardProps {
  cityName?: string;
  defaultService?: string;
}

export default function PhoneDispatchHeroCard({
  cityName = "Greeley & Front Range",
  defaultService = "Tesla Wall Connector & Level 2 Installation",
}: PhoneDispatchHeroCardProps) {
  const [showCallback, setShowCallback] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [callbackData, setCallbackData] = useState({ name: "", phone: "" });

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-7 text-slate-900 dark:text-white shadow-2xl relative overflow-hidden transition-colors duration-200">
      {/* Background ambient lighting */}
      <div className="absolute -top-20 -right-20 w-44 h-44 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Status Header */}
      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-black tracking-wider uppercase text-emerald-600 dark:text-emerald-400">
            Live Electrician On-Call
          </span>
        </div>
        <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
          {cityName} Hub
        </span>
      </div>

      <div className="space-y-1 mb-5">
        <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white tracking-tight leading-snug">
          Need an Instant Quote or Same-Day Service?
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          Skip online forms. Speak directly with an on-duty Master Electrician for instant pricing and rebate confirmation.
        </p>
      </div>

      {/* PRIMARY CALL BOX: GIANT NUMBER & TAP-TO-CALL */}
      <div className="bg-gradient-to-b from-emerald-50 to-emerald-100/60 dark:from-slate-950 dark:to-slate-800/80 border-2 border-emerald-500 rounded-2xl p-5 text-center shadow-lg mb-5 space-y-3">
        <div className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
          Direct Line • Zero Hold Time
        </div>

        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="block text-3xl sm:text-4xl font-black text-slate-950 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition tracking-tight"
        >
          {siteConfig.phone}
        </a>

        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 px-6 rounded-xl text-base sm:text-lg shadow-xl shadow-emerald-500/30 transition transform hover:-translate-y-0.5 active:scale-95 group"
        >
          <Phone className="w-5 h-5 fill-current group-hover:rotate-12 transition-transform" />
          <span>Tap to Call On-Duty Electrician</span>
        </a>

        <div className="flex items-center justify-center gap-2 text-[11px] text-slate-600 dark:text-slate-400 font-medium">
          <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Average arrival window: <strong>45–75 mins</strong></span>
        </div>
      </div>

      {/* 4 REASONS TO CALL RIGHT NOW */}
      <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300 mb-5">
        <div className="flex items-start gap-2.5">
          <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <span><strong>Instant 2-Minute Estimate:</strong> Upfront pricing for Tesla &amp; Level 2 installs.</span>
        </div>
        <div className="flex items-start gap-2.5">
          <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <span><strong>$500 Rebate Check:</strong> Instant Xcel Energy &amp; PVREA qualification verification.</span>
        </div>
        <div className="flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <span><strong>$150 Diagnostic Credit:</strong> 100% credited toward repair invoice upon approval.</span>
        </div>
      </div>

      {/* SECONDARY CALLBACK OPTION (COLLAPSIBLE FOR NON-CALLERS) */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
        {!showCallback && !submitted && (
          <button
            onClick={() => setShowCallback(true)}
            className="w-full text-center text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold py-1.5 transition flex items-center justify-center gap-1"
          >
            <span>Can&apos;t call right now? Request a quick callback</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        )}

        {showCallback && !submitted && (
          <form onSubmit={handleCallbackSubmit} className="space-y-2.5 pt-2">
            <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
              Leave your details for an immediate technician callback:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={callbackData.name}
                onChange={(e) => setCallbackData({ ...callbackData, name: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
              />
              <input
                type="tel"
                required
                placeholder="Phone Number"
                value={callbackData.phone}
                onChange={(e) => setCallbackData({ ...callbackData, phone: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 bg-slate-900 dark:bg-slate-800 hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:text-slate-950 text-white font-bold py-2 px-3 rounded-lg text-xs transition"
              >
                Request Call in 15 Mins
              </button>
              <button
                type="button"
                onClick={() => setShowCallback(false)}
                className="px-2.5 py-2 text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {submitted && (
          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-300 dark:border-emerald-600/40 text-center text-xs space-y-1">
            <div className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center justify-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Callback Request Received!</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-[11px]">
              Our Master Electrician will call <strong>{callbackData.phone}</strong> shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
