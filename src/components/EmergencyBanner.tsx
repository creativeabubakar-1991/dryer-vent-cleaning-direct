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

        {/* Right Call & Booking CTA */}
        <div className="flex items-center justify-between w-full lg:w-auto gap-3 sm:gap-6 ml-auto">
          <div className="hidden sm:flex items-center gap-1.5 text-gray-400 text-[11px]">
            <Clock className="w-3.5 h-3.5 text-orange-400" />
            <span>Avg Arrival: <strong className="text-white">45-75 Mins</strong></span>
          </div>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center gap-2 font-bold text-white hover:text-orange-400 transition"
          >
            <Phone className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
            <span className="text-[11px] leading-tight text-left hidden sm:inline">
              <span className="text-gray-400 font-normal block text-[10px]">Call Us 24/7</span>
              {siteConfig.phone}
            </span>
            <span className="sm:hidden text-xs font-bold text-orange-400">
              Call 24/7: {siteConfig.phone}
            </span>
          </a>

          <a
            href="#estimate-calculator"
            className="rounded bg-orange-600 hover:bg-orange-500 text-white font-bold px-3 py-1.5 text-[11px] uppercase tracking-wide transition shadow-sm"
          >
            Book Free Inspection
          </a>
        </div>
      </div>
    </div>
  );
}
