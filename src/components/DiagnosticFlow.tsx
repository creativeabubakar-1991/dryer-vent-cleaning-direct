import React from "react";
import Link from "next/link";
import { AlertTriangle, Clock, Flame, Droplets, Wind, ArrowRight } from "lucide-react";
import symptomsData from "@/data/symptoms.json";
import { siteConfig } from "@/config/site.config";

export default function DiagnosticFlow() {
  return (
    <section className="bg-[#0c1424] py-16 px-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-red-500/10 border border-red-500/30 px-3 py-1 rounded-full text-xs font-bold text-red-400 uppercase tracking-wide">
            Clog Warning Signs
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Is Your Dryer Showing These Warning Signs?
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Never ignore an overheating dryer or clothes that take multiple cycles. These are direct indicators of restricted exhaust airflow and dangerous lint buildup.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {symptomsData.map((sym) => (
            <div
              key={sym.slug}
              className="bg-[#070c18] border border-white/10 hover:border-red-500/50 rounded-2xl p-6 flex flex-col justify-between transition group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                    {sym.fire_risk}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition">
                  {sym.title}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {sym.meta_description}
                </p>

                <div className="text-xs text-gray-300 pt-2 border-t border-white/5 space-y-1">
                  <div>
                    <strong className="text-gray-400 font-medium">Cause:</strong> {sym.primary_cause}
                  </div>
                  <div>
                    <strong className="text-gray-400 font-medium">Action:</strong> {sym.recommended_action}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href={`/symptoms/${sym.slug}/`}
                  className="text-xs font-bold text-orange-400 hover:underline flex items-center gap-1"
                >
                  <span>Troubleshooting Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>

                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="text-[11px] font-bold bg-white/10 hover:bg-white/15 text-white px-3 py-1.5 rounded-lg transition"
                >
                  Call Tech
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
