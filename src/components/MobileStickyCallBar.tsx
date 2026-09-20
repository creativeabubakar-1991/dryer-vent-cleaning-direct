"use client";

import React from "react";
import { Phone, PhoneCall } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function MobileStickyCallBar() {
  return (
    <aside
      aria-label="Emergency Call Bar"
      className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-[#070c18]/95 backdrop-blur-xl border-t-2 border-orange-500 p-2 shadow-[0_-10px_30px_rgba(234,88,12,0.35)]"
    >
      <div className="max-w-md mx-auto">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="w-full bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 hover:from-orange-500 hover:to-amber-400 text-white font-black text-sm uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-2xl flex items-center justify-between active:scale-[0.98] transition border border-white/25"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center shrink-0 animate-bounce">
              <PhoneCall className="w-5 h-5 fill-white text-white" />
            </span>
            <div className="text-left leading-tight">
              <div className="text-[10px] uppercase font-bold text-amber-100 flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Tap to Call Live Dispatch</span>
              </div>
              <div className="text-base font-black text-white tracking-tight">
                {siteConfig.phone}
              </div>
            </div>
          </div>

          <div className="bg-black/30 border border-white/10 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-tight">
            Avg 45m
          </div>
        </a>
      </div>
    </aside>
  );
}
