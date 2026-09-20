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
  "residential-dryer-vent-cleaning": <Wind className="w-5 h-5 text-orange-400" />,
  "rooftop-dryer-vent-cleaning": <ShieldAlert className="w-5 h-5 text-amber-400" />,
  "dryer-vent-repair-replacement": <Wrench className="w-5 h-5 text-orange-400" />,
  "dryer-vent-rerouting": <Compass className="w-5 h-5 text-blue-400" />,
  "bird-nest-pest-guard-installation": <Bird className="w-5 h-5 text-emerald-400" />,
  "dryer-booster-fan-installation": <Fan className="w-5 h-5 text-amber-400" />,
  "commercial-dryer-vent-cleaning": <Building2 className="w-5 h-5 text-purple-400" />,
  "air-duct-cleaning": <Sparkles className="w-5 h-5 text-cyan-400" />,
};

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-[#070c18] py-16 px-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full text-xs font-bold text-orange-400 uppercase tracking-wide">
            Certified Services Catalog
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Complete Dryer Vent, Airflow &amp; Fire Safety Solutions
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            From emergency rotary lint removal to code-compliant rigid duct replacements and multi-story rooftop terminations, our certified technicians handle every exhaust challenge.
          </p>
        </div>

        {/* Grid of 8 Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesData.map((srv) => (
            <div
              key={srv.slug}
              className="bg-[#0c1424] border border-white/10 hover:border-orange-500/50 rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-600/10 text-left group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition">
                    {iconMap[srv.slug] || <Wind className="w-5 h-5 text-orange-400" />}
                  </div>
                  <span className="text-xs font-black text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-md">
                    {srv.average_cost}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition">
                  {srv.name}
                </h3>

                <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                  {srv.hero_description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                    Key Symptoms Cleared:
                  </div>
                  {srv.symptoms.slice(0, 2).map((sym, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-gray-300">
                      <Check className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{sym}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <Link
                  href={`/services/${srv.slug}/`}
                  className="text-xs font-bold text-white hover:text-orange-400 flex items-center gap-1 transition"
                >
                  <span>Details &amp; Code</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>

                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="bg-orange-600 hover:bg-orange-500 text-white text-[11px] font-black px-3.5 py-1.5 rounded-lg transition shadow-md flex items-center gap-1"
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
