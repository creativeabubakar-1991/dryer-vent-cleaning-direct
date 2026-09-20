import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ShieldCheck } from "lucide-react";
import statesData from "@/data/states.json";
import citiesData from "@/data/cities.json";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: `Dryer Vent Cleaning Locations | All 50 US States | ${siteConfig.name}`,
  description: `Find certified dryer vent cleaning specialists in your area. Nationwide same-day dispatch across all 50 states: ${siteConfig.phone}.`,
};

export default function LocationsIndexPage() {
  return (
    <div className="bg-[#070c18] text-gray-200 py-12 px-4 text-left">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-400">
            <span>Nationwide Coverage Directory</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Certified Dryer Vent Cleaning Locations
          </h1>
          <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
            Browse our nationwide network of certified dryer exhaust technicians. We dispatch to single-family homes, townhouses, condominiums, and commercial facilities across all 50 states.
          </p>
        </div>

        {/* Featured Metros */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">
            Top Metro Service Hubs
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {citiesData.map((c) => (
              <Link
                key={c.slug}
                href={`/dryer-vent-cleaning-${c.slug}/`}
                className="bg-[#0c1424] hover:bg-[#101b31] border border-white/10 rounded-xl p-3.5 transition group"
              >
                <div className="font-bold text-white group-hover:text-orange-400 text-sm">
                  {c.city}, {c.state}
                </div>
                <div className="text-[11px] text-gray-400 mt-1">{c.response_time}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* 50 States */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">
            All 50 US States
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {statesData.map((st) => (
              <Link
                key={st.slug}
                href={`/locations/${st.slug}/`}
                className="bg-[#0c1424] hover:bg-[#101b31] border border-white/10 rounded-xl p-3.5 transition group"
              >
                <div className="font-bold text-white group-hover:text-orange-400 text-sm">
                  {st.name}
                </div>
                <div className="text-[10px] text-orange-400 font-bold mt-1 uppercase">
                  {st.abbr} Network
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
