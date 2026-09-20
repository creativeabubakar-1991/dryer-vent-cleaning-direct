"use client";

import React from "react";
import { Phone, Flame, Zap } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function MobileStickyCallBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-[#070c18]/95 backdrop-blur-md border-t border-white/15 p-2.5 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <div className="flex-1 text-left pl-1">
          <div className="flex items-center gap-1.5 text-[10px] uppercase font-black text-orange-400">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span>24/7 Priority Dispatch</span>
          </div>
          <div className="text-xs font-bold text-white leading-tight">
            Same-Day Lint &amp; Fire Safety
          </div>
        </div>

        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-xs uppercase tracking-wide py-3 px-3 rounded-xl shadow-lg shadow-orange-600/30 active:scale-95 transition"
        >
          <Phone className="w-4 h-4 fill-white shrink-0" />
          <span>Call: {siteConfig.phone}</span>
        </a>
      </div>
    </div>
  );
}
