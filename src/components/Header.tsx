"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Wind,
  Phone,
  ChevronDown,
  Menu,
  X,
  ShieldCheck,
  Flame,
  AlertTriangle,
  Building2,
  MapPin,
  Clock,
} from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 border-b border-slate-200 backdrop-blur-md shadow-xs">
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:py-3 flex items-center justify-between gap-4">
        {/* Brand Logo & Trust Credentials */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition">
              <Wind className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black tracking-tight text-slate-900 leading-tight flex items-center gap-1">
                <span>DRYER VENT</span>
                <span className="text-orange-600">DIRECT</span>
              </div>
              <p className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">
                Certified Lint &amp; Fire Safety Network
              </p>
            </div>
          </Link>

          {/* CDET Certified National Partner Badge */}
          <div className="hidden md:flex items-center gap-1.5 border-l border-slate-200 pl-3 py-0.5">
            <span className="inline-flex items-center gap-1 bg-emerald-50 border border-emerald-200/80 rounded px-2 py-0.5 text-[11px] font-bold text-emerald-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              CDET Certified #4921
            </span>
          </div>
        </div>

        {/* Desktop Mega Navigation */}
        <nav className="hidden xl:flex items-center gap-1 text-xs font-bold text-slate-700">
          {/* 1. Dryer Vent Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-orange-600 hover:bg-slate-100 transition">
              <span>Dryer Vent</span>
              <ChevronDown className="w-3 h-3 text-slate-400 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute left-0 top-full w-80 pt-2 transition-all duration-200 shadow-xl z-50">
              <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-2xl text-left">
                <div className="text-[10px] font-bold uppercase tracking-wider text-orange-600 px-2 py-1 border-b border-slate-100 mb-1.5">
                  Exhaust Cleaning &amp; Upgrades
                </div>
                <Link
                  href="/services/residential-dryer-vent-cleaning/"
                  className="block px-2.5 py-2 rounded-lg hover:bg-orange-50/70 hover:text-orange-600 text-slate-800 transition"
                >
                  <div className="font-bold text-slate-900 text-xs">Residential Vent Cleaning</div>
                  <div className="text-[11px] text-slate-500 font-normal">Rotary brush &amp; HEPA extraction</div>
                </Link>
                <Link
                  href="/services/rooftop-dryer-vent-cleaning/"
                  className="block px-2.5 py-2 rounded-lg hover:bg-orange-50/70 hover:text-orange-600 text-slate-800 transition"
                >
                  <div className="font-bold text-slate-900 text-xs">Rooftop Vent Cleaning</div>
                  <div className="text-[11px] text-slate-500 font-normal">2-story roof access &amp; cap service</div>
                </Link>
                <Link
                  href="/services/dryer-vent-repair-replacement/"
                  className="block px-2.5 py-2 rounded-lg hover:bg-orange-50/70 hover:text-orange-600 text-slate-800 transition"
                >
                  <div className="font-bold text-slate-900 text-xs">Repair &amp; Metal Replacement</div>
                  <div className="text-[11px] text-slate-500 font-normal">UL 2158A code-compliant rigid duct</div>
                </Link>
                <Link
                  href="/services/dryer-vent-rerouting/"
                  className="block px-2.5 py-2 rounded-lg hover:bg-orange-50/70 hover:text-orange-600 text-slate-800 transition"
                >
                  <div className="font-bold text-slate-900 text-xs">Vent Rerouting &amp; Optimization</div>
                  <div className="text-[11px] text-slate-500 font-normal">Shortening long &amp; dangerous pipe runs</div>
                </Link>
                <Link
                  href="/services/bird-nest-pest-guard-installation/"
                  className="block px-2.5 py-2 rounded-lg hover:bg-orange-50/70 hover:text-orange-600 text-slate-800 transition"
                >
                  <div className="font-bold text-slate-900 text-xs">Bird Nest Removal &amp; Pest Guards</div>
                  <div className="text-[11px] text-slate-500 font-normal">Steel animal-proof hood covers</div>
                </Link>
                <Link
                  href="/services/dryer-booster-fan-installation/"
                  className="block px-2.5 py-2 rounded-lg hover:bg-orange-50/70 hover:text-orange-600 text-slate-800 transition"
                >
                  <div className="font-bold text-slate-900 text-xs">Booster Fan Installation</div>
                  <div className="text-[11px] text-slate-500 font-normal">DEDPV ventilators for runs &gt; 35 ft</div>
                </Link>
              </div>
            </div>
          </div>

          {/* 2. Fire Safety & Diagnostics */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-orange-600 hover:bg-slate-100 transition">
              <Flame className="w-3.5 h-3.5 text-orange-600" />
              <span>Fire Safety</span>
              <ChevronDown className="w-3 h-3 text-slate-400 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute left-0 top-full w-80 pt-2 transition-all duration-200 shadow-xl z-50">
              <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-2xl text-left">
                <div className="text-[10px] font-bold uppercase tracking-wider text-red-600 px-2 py-1 border-b border-slate-100 mb-1.5">
                  FEMA Fire Prevention Diagnostics
                </div>
                <Link
                  href="/symptoms/dryer-takes-two-cycles-to-dry/"
                  className="block px-2.5 py-2 rounded-lg hover:bg-red-50 hover:text-red-700 text-slate-800 transition"
                >
                  <div className="font-bold text-slate-900 text-xs">Dryer Takes 2 Cycles to Dry</div>
                  <div className="text-[11px] text-slate-500 font-normal">Airflow backpressure diagnosis</div>
                </Link>
                <Link
                  href="/symptoms/dryer-hot-to-touch-burning-smell/"
                  className="block px-2.5 py-2 rounded-lg hover:bg-red-50 hover:text-red-700 text-slate-800 transition"
                >
                  <div className="font-bold text-red-600 text-xs flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3 text-red-600" />
                    Burning Smell &amp; Overheating
                  </div>
                  <div className="text-[11px] text-slate-500 font-normal">Immediate fire hazard warning</div>
                </Link>
                <Link
                  href="/symptoms/dryer-error-code-d80-d90/"
                  className="block px-2.5 py-2 rounded-lg hover:bg-red-50 hover:text-red-700 text-slate-800 transition"
                >
                  <div className="font-bold text-slate-900 text-xs">LG / Samsung Error D80 / D90</div>
                  <div className="text-[11px] text-slate-500 font-normal">Flow Sense 80%-90% duct clog</div>
                </Link>
                <Link
                  href="/symptoms/water-dripping-from-dryer-vent/"
                  className="block px-2.5 py-2 rounded-lg hover:bg-red-50 hover:text-red-700 text-slate-800 transition"
                >
                  <div className="font-bold text-slate-900 text-xs">Water Dripping from Vent</div>
                  <div className="text-[11px] text-slate-500 font-normal">Moisture condensation traps</div>
                </Link>
              </div>
            </div>
          </div>

          {/* 3. Air Duct Cleaning */}
          <Link
            href="/services/air-duct-cleaning/"
            className="px-3 py-2 rounded-lg hover:text-orange-600 hover:bg-slate-100 transition"
          >
            Air Ducts
          </Link>

          {/* 4. Commercial */}
          <Link
            href="/services/commercial-dryer-vent-cleaning/"
            className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-orange-600 hover:bg-slate-100 transition"
          >
            <Building2 className="w-3.5 h-3.5 text-slate-400" />
            <span>Commercial</span>
          </Link>

          {/* 5. Locations Mega Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-orange-600 hover:bg-slate-100 transition">
              <MapPin className="w-3.5 h-3.5 text-orange-600" />
              <span>Locations</span>
              <ChevronDown className="w-3 h-3 text-slate-400 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute left-1/2 -translate-x-1/2 top-full w-[520px] pt-2 transition-all duration-200 shadow-xl z-50">
              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xl text-left">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Nationwide Direct Service (50 States)
                  </span>
                  <Link href="/locations/" className="text-orange-600 hover:underline text-[11px] font-bold">
                    View All States →
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <div className="font-bold text-orange-600 mb-1 text-[11px]">Texas Hubs</div>
                    <Link href="/dryer-vent-cleaning-dallas-tx/" className="block py-1 text-slate-600 hover:text-orange-600">Dallas, TX</Link>
                    <Link href="/dryer-vent-cleaning-houston-tx/" className="block py-1 text-slate-600 hover:text-orange-600">Houston, TX</Link>
                    <Link href="/locations/texas/" className="block py-1 text-orange-600 font-semibold">All Texas →</Link>
                  </div>
                  <div>
                    <div className="font-bold text-orange-600 mb-1 text-[11px]">Florida Hubs</div>
                    <Link href="/dryer-vent-cleaning-orlando-fl/" className="block py-1 text-slate-600 hover:text-orange-600">Orlando, FL</Link>
                    <Link href="/dryer-vent-cleaning-tampa-fl/" className="block py-1 text-slate-600 hover:text-orange-600">Tampa, FL</Link>
                    <Link href="/dryer-vent-cleaning-miami-fl/" className="block py-1 text-slate-600 hover:text-orange-600">Miami, FL</Link>
                    <Link href="/locations/florida/" className="block py-1 text-orange-600 font-semibold">All Florida →</Link>
                  </div>
                  <div>
                    <div className="font-bold text-orange-600 mb-1 text-[11px]">Major Metros</div>
                    <Link href="/dryer-vent-cleaning-atlanta-ga/" className="block py-1 text-slate-600 hover:text-orange-600">Atlanta, GA</Link>
                    <Link href="/dryer-vent-cleaning-charlotte-nc/" className="block py-1 text-slate-600 hover:text-orange-600">Charlotte, NC</Link>
                    <Link href="/dryer-vent-cleaning-chicago-il/" className="block py-1 text-slate-600 hover:text-orange-600">Chicago, IL</Link>
                    <Link href="/dryer-vent-cleaning-los-angeles-ca/" className="block py-1 text-slate-600 hover:text-orange-600">Los Angeles, CA</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Right CTA Call Button */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-xs sm:text-sm uppercase tracking-wider px-4 sm:px-5 py-2.5 rounded-xl shadow-lg shadow-orange-600/25 hover:scale-[1.02] active:scale-[0.98] transition border border-orange-500"
          >
            <Phone className="w-4 h-4 fill-white animate-bounce shrink-0" />
            <span>Call Now: {siteConfig.phone}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3 shadow-xl">
          <div className="grid grid-cols-1 gap-2">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center justify-center gap-2 bg-orange-600 text-white font-bold text-sm py-3 rounded-xl shadow-md"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call Live Dispatch: {siteConfig.phone}</span>
            </a>
          </div>

          <div className="border-t border-slate-100 pt-2 space-y-1 text-sm font-semibold text-slate-800">
            <div className="text-xs uppercase font-bold text-orange-600 pt-2 pb-1">Dryer Vent Services</div>
            <Link
              href="/services/residential-dryer-vent-cleaning/"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-slate-600 hover:text-orange-600"
            >
              Residential Dryer Vent Cleaning
            </Link>
            <Link
              href="/services/rooftop-dryer-vent-cleaning/"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-slate-600 hover:text-orange-600"
            >
              Rooftop Dryer Vent Cleaning
            </Link>
            <Link
              href="/services/dryer-vent-repair-replacement/"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-slate-600 hover:text-orange-600"
            >
              Duct Repair &amp; Metal Replacement
            </Link>
            <Link
              href="/services/bird-nest-pest-guard-installation/"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-slate-600 hover:text-orange-600"
            >
              Bird Nest Removal &amp; Pest Guards
            </Link>
            <Link
              href="/services/air-duct-cleaning/"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-slate-600 hover:text-orange-600"
            >
              Air Duct Cleaning &amp; Sanitization
            </Link>
            <Link
              href="/services/commercial-dryer-vent-cleaning/"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-slate-600 hover:text-orange-600"
            >
              Commercial Laundromat Service
            </Link>

            <div className="text-xs uppercase font-bold text-red-600 pt-3 pb-1">Fire Warnings &amp; Error Codes</div>
            <Link
              href="/symptoms/dryer-hot-to-touch-burning-smell/"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-red-600 hover:text-red-700"
            >
              Burning Smell &amp; Overheating Urgent
            </Link>
            <Link
              href="/symptoms/dryer-takes-two-cycles-to-dry/"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-slate-600 hover:text-orange-600"
            >
              Dryer Takes 2 Cycles to Dry
            </Link>
            <Link
              href="/symptoms/dryer-error-code-d80-d90/"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-slate-600 hover:text-orange-600"
            >
              Error Code D80 / D90 Clog
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
