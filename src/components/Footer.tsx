import React from "react";
import Link from "next/link";
import { Wind, Phone, ShieldCheck, Award, MapPin, Mail, Clock, Flame } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import servicesData from "@/data/services.json";
import statesData from "@/data/states.json";
import citiesData from "@/data/cities.json";

export default function Footer() {
  const topStates = statesData.slice(0, 10);
  const topCities = citiesData.slice(0, 10);

  return (
    <footer className="bg-[#050912] text-gray-300 border-t border-white/10 pt-16 pb-24 lg:pb-12 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10 text-left">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-orange-600 flex items-center justify-center text-white font-black shadow-md">
                <Wind className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                {siteConfig.name}
              </span>
            </Link>

            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              America&apos;s direct network of CDET-certified dryer vent cleaning, rapid lint removal, and fire safety specialists. Protecting residential homes, multi-story buildings, and commercial laundromats across all 50 states.
            </p>

            <div className="space-y-2 pt-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{siteConfig.licensing.cdet}</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-400 shrink-0" />
                <span>{siteConfig.licensing.csia}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{siteConfig.licensing.insurance}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>National HQ: {siteConfig.headquarters.street}, {siteConfig.headquarters.city}, {siteConfig.headquarters.state} {siteConfig.headquarters.zip}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                <span>{siteConfig.operatingHours.days}: {siteConfig.operatingHours.hours}</span>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              Core Services
            </h3>
            <ul className="space-y-2 text-xs text-gray-400">
              {servicesData.slice(0, 6).map((srv) => (
                <li key={srv.slug}>
                  <Link href={`/services/${srv.slug}/`} className="hover:text-orange-400 transition">
                    {srv.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Metro Dispatch Hubs */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Metro Hubs
            </h3>
            <ul className="space-y-2 text-xs text-gray-400">
              {topCities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/dryer-vent-cleaning-${c.slug}/`} className="hover:text-orange-400 transition">
                    {c.city}, {c.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nationwide States & Contact */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              State Hubs
            </h3>
            <ul className="space-y-2 text-xs text-gray-400">
              {topStates.map((st) => (
                <li key={st.slug}>
                  <Link href={`/locations/${st.slug}/`} className="hover:text-orange-400 transition">
                    {st.name} Dryer Vent Cleaners
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations/" className="text-orange-400 font-bold hover:underline">
                  View All 50 States →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Emergency On-Call: <strong className="text-white">{siteConfig.phone}</strong></span>
            <span>·</span>
            <span>IRC M1502 Code Compliant</span>
            <span>·</span>
            <span>NFPA 211 Fire Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
