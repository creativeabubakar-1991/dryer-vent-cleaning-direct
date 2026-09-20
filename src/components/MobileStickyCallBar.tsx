"use client";

import React from "react";
import { Phone, PhoneCall } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function MobileStickyCallBar() {
  return (
    <aside
      aria-label="Emergency Call Bar"
      className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-white/95 backdrop-blur-xl border-t-2 border-orange-500 p-2.5 shadow-[0_-8px_25px_rgba(0,0,0,0.15)]"
    >
      <div className="max-w-md mx-auto">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="w-full bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-sm uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-xl flex items-center justify-between active:scale-[0.98] transition border border-orange-500"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center shrink-0 animate-bounce">
              <PhoneCall className="w-5 h-5 fill-white text-white" />
            </span>
            <div className="text-left leading-tight">
              <div className="text-[10px] uppercase font-bold text-orange-100 flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-300 animate-ping" />
                <span>Tap to Call Live Dispatch</span>
              </div>
              <div className="text-base font-black text-white tracking-tight">
                {siteConfig.phone}
              </div>
            </div>
          </div>

          <div className="bg-black/20 border border-white/20 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-tight">
            Avg 45m
          </div>
        </a>
      </div>
    </aside>
  );
}
