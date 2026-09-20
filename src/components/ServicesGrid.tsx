import React from "react";
import Link from "next/link";
import {
  Wind,
  ShieldAlert,
  Wrench,
  Compass,
  Bird,
  Fan,
  Building2,
  Sparkles,
  ArrowRight,
  Check,
  Phone,
} from "lucide-react";
import servicesData from "@/data/services.json";
import { siteConfig } from "@/config/site.config";

const iconMap: Record<string, React.ReactNode> = {
  "residential-dryer-vent-cleaning": <Wind className="w-5 h-5 text-orange-600" />,
  "rooftop-dryer-vent-cleaning": <ShieldAlert className="w-5 h-5 text-amber-600" />,
  "dryer-vent-repair-replacement": <Wrench className="w-5 h-5 text-orange-600" />,
  "dryer-vent-rerouting": <Compass className="w-5 h-5 text-blue-600" />,
  "bird-nest-pest-guard-installation": <Bird className="w-5 h-5 text-emerald-600" />,
  "dryer-booster-fan-installation": <Fan className="w-5 h-5 text-amber-600" />,
  "commercial-dryer-vent-cleaning": <Building2 className="w-5 h-5 text-purple-600" />,
  "air-duct-cleaning": <Sparkles className="w-5 h-5 text-cyan-600" />,
};

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-slate-50 py-16 px-4 border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-orange-100 border border-orange-200 px-3.5 py-1 rounded-full text-xs font-bold text-orange-700 uppercase tracking-wide">
            Certified Services Catalog
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Complete Dryer Vent, Airflow &amp; Fire Safety Solutions
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            From emergency rotary lint removal to code-compliant rigid duct replacements and multi-story rooftop terminations, our certified technicians handle every exhaust challenge.
          </p>
        </div>

        {/* Grid of 8 Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesData.map((srv) => (
            <div
              key={srv.slug}
              className="bg-white border border-slate-200 hover:border-orange-400 rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200 text-left group shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:scale-110 transition">
                    {iconMap[srv.slug] || <Wind className="w-5 h-5 text-orange-600" />}
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                    {srv.average_cost}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition">
                  {srv.name}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {srv.hero_description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Key Symptoms Cleared:
                  </div>
                  {srv.symptoms.slice(0, 2).map((sym, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                      <Check className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{sym}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <Link
                  href={`/services/${srv.slug}/`}
                  className="text-xs font-bold text-slate-600 hover:text-orange-600 flex items-center gap-1 transition"
                >
                  <span>Details &amp; Code</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>

                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="bg-orange-600 hover:bg-orange-500 text-white text-[11px] font-black px-3.5 py-1.5 rounded-lg transition shadow-xs flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 fill-white" />
                  <span>Call to Dispatch</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
