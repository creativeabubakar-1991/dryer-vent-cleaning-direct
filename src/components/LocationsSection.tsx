import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import statesData from "@/data/states.json";
import citiesData from "@/data/cities.json";

export default function LocationsSection() {
  return (
    <section id="locations" className="bg-white py-16 px-4 border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-orange-100 border border-orange-200 px-3.5 py-1 rounded-full text-xs font-bold text-orange-700 uppercase tracking-wide">
            Nationwide Coverage
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Certified Dryer Vent Technicians in All 50 States
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Direct technician dispatch with local service vans equipped for residential homes, townhouses, multistory apartment complexes, and commercial laundromats.
          </p>
        </div>

        {/* Featured Metro Hubs */}
        <div className="space-y-4 text-left">
          <div className="text-xs uppercase font-bold text-slate-500 tracking-wider flex items-center justify-between border-b border-slate-200 pb-2">
            <span>Featured Metro Dispatch Hubs</span>
            <span className="text-orange-600 font-semibold">Same-Day Service Available</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {citiesData.map((c) => (
              <Link
                key={c.slug}
                href={`/dryer-vent-cleaning-${c.slug}/`}
                className="bg-slate-50 hover:bg-orange-50/50 border border-slate-200 hover:border-orange-400 rounded-xl p-3 text-left transition group shadow-xs"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-orange-600 transition">
                  <MapPin className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span className="truncate">{c.city}, {c.state}</span>
                </div>
                <div className="text-[10px] text-emerald-700 font-medium mt-1 truncate">
                  {c.response_time}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All 50 States Interactive Grid */}
        <div className="space-y-4 text-left pt-4">
          <div className="text-xs uppercase font-bold text-slate-500 tracking-wider flex items-center justify-between border-b border-slate-200 pb-2">
            <span>Browse All 50 States</span>
            <span className="text-xs text-slate-500">4,000+ Licensed Technicians</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
            {statesData.map((st) => (
              <Link
                key={st.slug}
                href={`/locations/${st.slug}/`}
                className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 rounded-lg px-3 py-2 text-xs flex items-center justify-between text-slate-700 hover:text-slate-900 transition shadow-xs"
              >
                <span className="font-semibold">{st.name}</span>
                <span className="text-[10px] text-slate-400 font-bold">{st.abbr}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
