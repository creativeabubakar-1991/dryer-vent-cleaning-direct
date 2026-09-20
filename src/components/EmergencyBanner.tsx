import React from "react";
import { Phone, ShieldCheck, Flame, Clock } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function EmergencyBanner() {
  return (
    <div className="bg-[#060b14] border-b border-white/10 text-xs text-gray-300 py-1.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Badges */}
        <div className="hidden lg:flex items-center gap-4 text-xs font-medium text-gray-300">
          <span className="inline-flex items-center gap-1.5 text-white font-semibold">
            <span className="text-sm">🇺🇸</span> Proudly American
          </span>
          <span className="text-gray-600">|</span>
          <span className="inline-flex items-center gap-1 text-gray-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Chamber of Commerce Verified
          </span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-300">Nationwide 50-State Network</span>
          <span className="text-gray-600">|</span>
          <span className="inline-flex items-center gap-1 text-amber-300">
            <Flame className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
            CDET &amp; CSIA Certified
          </span>
        </div>

        {/* Right Call & Trust */}
        <div className="flex items-center justify-between w-full lg:w-auto gap-4 sm:gap-6 ml-auto">
          <div className="hidden sm:flex items-center gap-1.5 text-slate-400 text-[11px]">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Avg Arrival: <strong className="text-white">45-75 Mins</strong></span>
          </div>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition"
          >
            <Phone className="w-3.5 h-3.5 fill-amber-400 text-amber-400 animate-pulse" />
            <span>24/7 Live Line: <strong className="text-white underline">{siteConfig.phone}</strong></span>
          </a>
        </div>
      </div>
    </div>
  );
}
