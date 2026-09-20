import React from "react";
import Link from "next/link";
import { Flame, ShieldAlert, ArrowRight, CheckCircle2, TrendingDown } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function FemaFireCallout() {
  return (
    <section className="bg-red-50/40 border-b border-red-200/70 py-10 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-6 items-center">
        {/* Left Alert Badge & Stats */}
        <div className="md:col-span-8 space-y-3 text-left">
          <div className="inline-flex items-center gap-2 bg-red-100 border border-red-300 px-3.5 py-1 rounded-full text-xs font-bold text-red-800">
            <Flame className="w-3.5 h-3.5 text-red-600 animate-pulse" />
            <span>FEMA &amp; US Fire Administration Alert</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
            2,900+ Home Dryer Fires Reported Every Year in the U.S.
          </h2>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            According to the <strong>US Fire Administration (USFA)</strong>, failure to clean lint is the <strong>#1 leading factor (34%)</strong> in residential clothes dryer fires, resulting in over $35 million in annual property loss. Standard lint screens only trap ~50% of lint—the remainder coats your interior metal pipe walls, creating a tinderbox.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-700 pt-1">
            <span className="flex items-center gap-1 text-emerald-700 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Restores 100% CFM Airflow
            </span>
            <span className="flex items-center gap-1 text-emerald-700 font-semibold">
              <TrendingDown className="w-3.5 h-3.5" />
              Saves ~$24/Mo on Electric Bills
            </span>
            <span className="flex items-center gap-1 text-emerald-700 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Satisfies HOA &amp; Home Insurance Rules
            </span>
          </div>
        </div>

        {/* Right CTA Box */}
        <div className="md:col-span-4 bg-white border border-red-200 rounded-2xl p-6 text-center space-y-3 shadow-md">
          <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">
            Prevent Dryer Fires Today
          </div>
          <div className="text-2xl font-black text-slate-900">
            Free Phone Estimates
          </div>
          <p className="text-[11px] text-slate-600">
            Full rotary brushing, HEPA containment, and airflow CFM testing included.
          </p>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="block w-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wide py-3 rounded-xl shadow-xs transition"
          >
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
