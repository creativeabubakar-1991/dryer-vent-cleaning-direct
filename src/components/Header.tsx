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
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a1120] border-b border-white/10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo & Trust Credentials */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:scale-105 transition">
              <Wind className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black tracking-tight text-white leading-tight flex items-center gap-1">
                <span>DRYER VENT</span>
                <span className="text-orange-500">DIRECT</span>
              </div>
              <p className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">
                Certified Lint &amp; Fire Safety Network
              </p>
            </div>
          </Link>

          {/* CDET Certified National Partner Badge */}
          <div className="hidden md:flex items-center gap-1.5 border-l border-white/15 pl-3 py-0.5">
            <span className="inline-flex items-center gap-1 bg-white/5 border border-white/10 rounded px-2 py-1 text-[11px] font-bold text-amber-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              CDET Certified #4921
            </span>
          </div>
        </div>

        {/* Desktop Mega Navigation */}
        <nav className="hidden xl:flex items-center gap-1 text-xs font-semibold text-gray-200">
          {/* 1. Dryer Vent Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-orange-400 hover:bg-white/5 transition">
              <span>Dryer Vent</span>
              <ChevronDown className="w-3 h-3 text-gray-400 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute left-0 top-full w-80 pt-2 transition-all duration-200 shadow-2xl z-50">
              <div className="bg-[#0c1424] border border-white/15 rounded-xl p-3 shadow-2xl text-left">
                <div className="text-[10px] font-bold uppercase tracking-wider text-orange-400 px-2 py-1 border-b border-white/10 mb-1.5">
                  Exhaust Cleaning &amp; Upgrades
                </div>
                <Link
                  href="/services/residential-dryer-vent-cleaning/"
                  className="block px-2.5 py-2 rounded-lg hover:bg-white/5 hover:text-orange-400 text-gray-200 transition"
                >
                  <div className="font-bold text-white text-xs">Residential Vent Cleaning</div>
                  <div className="text-[11px] text-gray-400 font-normal">Rotary brush &amp; HEPA extraction</div>
                </Link>
                <Link
                  href="/services/rooftop-dryer-vent-cleaning/"
                  className="block px-2.5 py-2 rounded-lg hover:bg-white/5 hover:text-orange-400 text-gray-200 transition"
                >
                  <div className="font-bold text-white text-xs">Rooftop Vent Cleaning</div>
                  <div className="text-[11px] text-gray-400 font-normal">2-story roof access &amp; cap service</div>
                </Link>
                <Link
                  href="/services/dryer-vent-repair-replacement/"
                  className="block px-2.5 py-2 rounded-lg hover:bg-white/5 hover:text-orange-400 text-gray-200 transition"
                >
                  <div className="font-bold text-white text-xs">Repair &amp; Metal Replacement</div>
                  <div className="text-[11px] text-gray-400 font-normal">UL 2158A code-compliant rigid duct</div>
                </Link>
                <Link
                  href="/services/dryer-vent-rerouting/"
                  className="block px-2.5 py-2 rounded-lg hover:bg-white/5 hover:text-orange-400 text-gray-200 transition"
                >
                  <div className="font-bold text-white text-xs">Vent Rerouting &amp; Optimization</div>
                  <div className="text-[11px] text-gray-400 font-normal">Shortening long &amp; dangerous pipe runs</div>
                </Link>
                <Link
                  href="/services/bird-nest-pest-guard-installation/"
                  className="block px-2.5 py-2 rounded-lg hover:bg-white/5 hover:text-orange-400 text-gray-200 transition"
                >
                  <div className="font-bold text-white text-xs">Bird Nest Removal &amp; Pest Guards</div>
                  <div className="text-[11px] text-gray-400 font-normal">Steel animal-proof hood covers</div>
                </Link>
                <Link
                  href="/services/dryer-booster-fan-installation/"
                  className="block px-2.5 py-2 rounded-lg hover:bg-white/5 hover:text-orange-400 text-gray-200 transition"
                >
                  <div className="font-bold text-white text-xs">Booster Fan Installation</div>
                  <div className="text-[11px] text-gray-400 font-normal">DEDPV ventilators for runs &gt; 35 ft</div>
                </Link>
              </div>
            </div>
          </div>

          {/* 2. Fire Safety & Diagnostics */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-orange-400 hover:bg-white/5 transition">
              <Flame className="w-3.5 h-3.5 text-orange-500" />
              <span>Fire Safety</span>
              <ChevronDown className="w-3 h-3 text-gray-400 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute left-0 top-full w-80 pt-2 transition-all duration-200 shadow-2xl z-50">
              <div className="bg-[#0c1424] border border-white/15 rounded-xl p-3 shadow-2xl text-left">
                <div className="text-[10px] font-bold uppercase tracking-wider text-orange-400 px-2 py-1 border-b border-white/10 mb-1.5">
                  FEMA Fire Prevention Diagnostics
                </div>
                <Link
                  href="/symptoms/dryer-takes-two-cycles-to-dry/"
                  className="block px-2.5 py-2 rounded-lg hover:bg-white/5 hover:text-orange-400 text-gray-200 transition"
                >
                  <div className="font-bold text-white text-xs">Dryer Takes 2 Cycles to Dry</div>
                  <div className="text-[11px] text-gray-400 font-normal">Airflow backpressure diagnosis</div>
                </Link>
                <Link
                  href="/symptoms/dryer-hot-to-touch-burning-smell/"
                  className="block px-2.5 py-2 rounded-lg hover:bg-white/5 hover:text-orange-400 text-gray-200 transition"
                >
                  <div className="font-bold text-white text-xs text-red-400 flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3 text-red-500" />
                    Burning Smell &amp; Overheating
                  </div>
                  <div className="text-[11px] text-gray-400 font-normal">Immediate fire hazard warning</div>
                </Link>
                <Link
                  href="/symptoms/dryer-error-code-d80-d90/"
                  className="block px-2.5 py-2 rounded-lg hover:bg-white/5 hover:text-orange-400 text-gray-200 transition"
                >
                  <div className="font-bold text-white text-xs">LG / Samsung Error D80 / D90</div>
                  <div className="text-[11px] text-gray-400 font-normal">Flow Sense 80%-90% duct clog</div>
                </Link>
                <Link
                  href="/symptoms/water-dripping-from-dryer-vent/"
                  className="block px-2.5 py-2 rounded-lg hover:bg-white/5 hover:text-orange-400 text-gray-200 transition"
                >
                  <div className="font-bold text-white text-xs">Water Dripping from Vent</div>
                  <div className="text-[11px] text-gray-400 font-normal">Moisture condensation traps</div>
                </Link>
              </div>
            </div>
          </div>

          {/* 3. Air Duct Cleaning */}
          <Link
            href="/services/air-duct-cleaning/"
            className="px-3 py-2 rounded-lg hover:text-orange-400 hover:bg-white/5 transition"
          >
            Air Ducts
          </Link>

          {/* 4. Commercial */}
          <Link
            href="/services/commercial-dryer-vent-cleaning/"
            className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-orange-400 hover:bg-white/5 transition"
          >
            <Building2 className="w-3.5 h-3.5 text-gray-400" />
            <span>Commercial</span>
          </Link>

          {/* 5. Locations Mega Dropdown (50 States & Metros) */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-orange-400 hover:bg-white/5 transition">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>Locations</span>
              <ChevronDown className="w-3 h-3 text-gray-400 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute left-1/2 -translate-x-1/2 top-full w-[540px] pt-2 transition-all duration-200 shadow-2xl z-50">
              <div className="bg-[#0c1424] border border-white/15 rounded-xl p-4 shadow-2xl text-left">
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Nationwide Direct Service (50 States)
                  </span>
                  <Link href="/locations/" className="text-orange-400 hover:underline text-[11px] font-bold">
                    View All States →
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <div className="font-bold text-orange-400 mb-1 text-[11px]">Texas Hubs</div>
                    <Link href="/dryer-vent-cleaning-dallas-tx/" className="block py-1 text-gray-300 hover:text-white">Dallas, TX</Link>
                    <Link href="/dryer-vent-cleaning-houston-tx/" className="block py-1 text-gray-300 hover:text-white">Houston, TX</Link>
                    <Link href="/locations/texas/" className="block py-1 text-orange-400 font-medium">All Texas →</Link>
                  </div>
                  <div>
                    <div className="font-bold text-orange-400 mb-1 text-[11px]">Florida Hubs</div>
                    <Link href="/dryer-vent-cleaning-orlando-fl/" className="block py-1 text-gray-300 hover:text-white">Orlando, FL</Link>
                    <Link href="/dryer-vent-cleaning-tampa-fl/" className="block py-1 text-gray-300 hover:text-white">Tampa, FL</Link>
                    <Link href="/dryer-vent-cleaning-miami-fl/" className="block py-1 text-gray-300 hover:text-white">Miami, FL</Link>
                    <Link href="/locations/florida/" className="block py-1 text-orange-400 font-medium">All Florida →</Link>
                  </div>
                  <div>
                    <div className="font-bold text-orange-400 mb-1 text-[11px]">Major Metros</div>
                    <Link href="/dryer-vent-cleaning-atlanta-ga/" className="block py-1 text-gray-300 hover:text-white">Atlanta, GA</Link>
                    <Link href="/dryer-vent-cleaning-charlotte-nc/" className="block py-1 text-gray-300 hover:text-white">Charlotte, NC</Link>
                    <Link href="/dryer-vent-cleaning-chicago-il/" className="block py-1 text-gray-300 hover:text-white">Chicago, IL</Link>
                    <Link href="/dryer-vent-cleaning-los-angeles-ca/" className="block py-1 text-gray-300 hover:text-white">Los Angeles, CA</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Fire Risk Calculator Anchor */}
          <a
            href="#estimate-calculator"
            className="px-3 py-2 rounded-lg text-amber-400 hover:text-amber-300 hover:bg-white/5 font-bold transition"
          >
            Cost Estimator
          </a>
        </nav>

        {/* Right CTA Call & Booking */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 hover:border-orange-500/50 rounded-lg px-3 py-2 text-white hover:text-orange-400 transition"
          >
            <Phone className="w-4 h-4 text-orange-500 fill-orange-500" />
            <div className="text-left text-xs leading-tight">
              <span className="text-[10px] text-gray-400 block font-medium">24/7 Dispatch</span>
              <span className="font-extrabold tracking-wide">{siteConfig.phone}</span>
            </div>
          </a>

          <a
            href="#estimate-calculator"
            className="hidden md:inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs uppercase tracking-wide px-4 py-2.5 rounded-lg shadow-lg shadow-orange-600/25 hover:scale-[1.02] transition"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Free Inspection</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 rounded-lg border border-white/15 text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#0a1120] border-t border-white/10 px-4 py-4 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center justify-center gap-2 bg-orange-600 text-white font-bold text-xs py-2.5 rounded-lg"
            >
              <Phone className="w-4 h-4 fill-white" />
              Call 24/7
            </a>
            <a
              href="#estimate-calculator"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-1.5 bg-white/10 text-white font-bold text-xs py-2.5 rounded-lg"
            >
              Cost Estimator
            </a>
          </div>

          <div className="border-t border-white/10 pt-2 space-y-1 text-sm font-semibold text-gray-200">
            <div className="text-xs uppercase font-bold text-orange-400 pt-2 pb-1">Dryer Vent Services</div>
            <Link
              href="/services/residential-dryer-vent-cleaning/"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-gray-300 hover:text-white"
            >
              Residential Dryer Vent Cleaning
            </Link>
            <Link
              href="/services/rooftop-dryer-vent-cleaning/"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-gray-300 hover:text-white"
            >
              Rooftop Dryer Vent Cleaning
            </Link>
            <Link
              href="/services/dryer-vent-repair-replacement/"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-gray-300 hover:text-white"
            >
              Duct Repair &amp; Metal Replacement
            </Link>
            <Link
              href="/services/bird-nest-pest-guard-installation/"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-gray-300 hover:text-white"
            >
              Bird Nest Removal &amp; Pest Guards
            </Link>
            <Link
              href="/services/air-duct-cleaning/"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-gray-300 hover:text-white"
            >
              Air Duct Cleaning &amp; Sanitization
            </Link>
            <Link
              href="/services/commercial-dryer-vent-cleaning/"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-gray-300 hover:text-white"
            >
              Commercial Laundromat Service
            </Link>

            <div className="text-xs uppercase font-bold text-red-400 pt-3 pb-1">Fire Warnings &amp; Error Codes</div>
            <Link
              href="/symptoms/dryer-hot-to-touch-burning-smell/"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-red-300 hover:text-white"
            >
              Burning Smell &amp; Overheating Urgent
            </Link>
            <Link
              href="/symptoms/dryer-takes-two-cycles-to-dry/"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-gray-300 hover:text-white"
            >
              Dryer Takes 2 Cycles to Dry
            </Link>
            <Link
              href="/symptoms/dryer-error-code-d80-d90/"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-gray-300 hover:text-white"
            >
              Error Code D80 / D90 Clog
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
