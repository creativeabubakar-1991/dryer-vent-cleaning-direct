import React from "react";
import Link from "next/link";
import { AlertTriangle, Clock, Flame, Droplets, Wind, ArrowRight, Phone } from "lucide-react";
import symptomsData from "@/data/symptoms.json";
import { siteConfig } from "@/config/site.config";

export default function DiagnosticFlow() {
  return (
    <section className="bg-white py-16 px-4 border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-red-50 border border-red-200 px-3.5 py-1 rounded-full text-xs font-bold text-red-700 uppercase tracking-wide">
            Clog Warning Signs
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Is Your Dryer Showing These Warning Signs?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Never ignore an overheating dryer or clothes that take multiple cycles. These are direct indicators of restricted exhaust airflow and dangerous lint buildup.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {symptomsData.map((sym) => (
            <div
              key={sym.slug}
              className="bg-slate-50 border border-slate-200 hover:border-red-400 rounded-2xl p-6 flex flex-col justify-between transition group shadow-xs hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-red-100 border border-red-200 flex items-center justify-center text-red-600">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-red-700 bg-red-100/80 px-2 py-0.5 rounded border border-red-200">
                    {sym.fire_risk}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition">
                  {sym.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {sym.meta_description}
                </p>

                <div className="text-xs text-slate-700 pt-2 border-t border-slate-200 space-y-1">
                  <div>
                    <strong className="text-slate-900 font-semibold">Cause:</strong> {sym.primary_cause}
                  </div>
                  <div>
                    <strong className="text-slate-900 font-semibold">Action:</strong> {sym.recommended_action}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between">
                <Link
                  href={`/symptoms/${sym.slug}/`}
                  className="text-xs font-bold text-slate-700 hover:text-red-600 flex items-center gap-1"
                >
                  <span>Troubleshooting Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>

                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="text-xs font-bold bg-red-600 hover:bg-red-500 text-white px-3.5 py-1.5 rounded-lg transition flex items-center gap-1 shadow-xs"
                >
                  <Phone className="w-3 h-3 fill-white" />
                  <span>Call Emergency</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
