import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, ShieldCheck, Flame, ArrowRight, CheckCircle2 } from "lucide-react";
import { getAllStates, getStateBySlug, getAllCities } from "@/lib/data";
import { siteConfig } from "@/config/site.config";
import { generateBreadcrumbSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ state: string }>;
}

export async function generateStaticParams() {
  const states = getAllStates();
  return states.map((st) => ({
    state: st.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const stateData = getStateBySlug(stateSlug);

  if (!stateData) {
    return { title: "State Not Found" };
  }

  const title = `Dryer Vent Cleaning ${stateData.name} | Certified Statewide Network | ${siteConfig.name}`;
  const description = `Certified dryer vent cleaning, rapid lint removal, and fire prevention across ${stateData.name}. Same-day dispatch to all major ${stateData.name} metros. Call ${siteConfig.phone}.`;
  const canonicalUrl = `${siteConfig.domain}/locations/${stateData.slug}/`;

  return {
    title,
    description: description.slice(0, 155),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description: description.slice(0, 155),
      url: canonicalUrl,
      type: "website",
      siteName: siteConfig.name,
    },
  };
}

export default async function StatePage({ params }: PageProps) {
  const { state: stateSlug } = await params;
  const stateData = getStateBySlug(stateSlug);
  const allCities = getAllCities();

  if (!stateData) {
    notFound();
  }

  // Filter cities in this state
  const stateCities = allCities.filter(
    (c) => c.state.toLowerCase() === stateData.abbr.toLowerCase()
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: `${siteConfig.domain}/` },
    { name: "Locations", url: `${siteConfig.domain}/locations/` },
    { name: stateData.name, url: `${siteConfig.domain}/locations/${stateData.slug}/` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-[#070c18] text-gray-200">
        {/* Breadcrumb */}
        <div className="border-b border-white/10 bg-[#0c1424] py-2.5 px-4 text-xs text-gray-400">
          <div className="max-w-7xl mx-auto flex items-center gap-2">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/locations/" className="hover:text-white transition">Locations</Link>
            <span>/</span>
            <span className="text-orange-400 font-semibold">{stateData.name}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="py-12 lg:py-16 px-4 border-b border-white/10 text-left">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-400">
                <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                <span>Statewide Certified Network · {stateData.name}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                Certified Dryer Vent Cleaning in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                  {stateData.name}
                </span>
              </h1>

              <p className="text-gray-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Direct technician dispatch across {stateData.name}. Professional rotary brush scrubbing, commercial HEPA negative-air containment, and USFA fire safety compliance from capital city {stateData.capital} to all surrounding suburbs.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 max-w-lg text-xs sm:text-sm text-gray-200 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Flat-Rate Starting at $99</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Regional Hazard: {stateData.fire_risk}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>CDET Certified Technicians</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>$2,000,000 Liability Insurance</span>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-xl shadow-orange-600/30 transition"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call {stateData.name} Dispatch: {siteConfig.phone}</span>
                </a>
              </div>
            </div>

            {/* Quick Card */}
            <div className="lg:col-span-4 bg-[#0c1424] border border-white/15 rounded-2xl p-6 space-y-3">
              <div className="text-[10px] uppercase font-bold text-orange-400">Statewide Dispatch</div>
              <div className="text-xl font-bold text-white">{stateData.name} ({stateData.abbr})</div>
              <div className="text-xs text-gray-400">
                <strong>Regional Fire Hazard:</strong> {stateData.fire_risk}
              </div>
              <div className="text-xs text-gray-400">
                <strong>State Capital Hub:</strong> {stateData.capital}
              </div>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="block text-center bg-orange-600 hover:bg-orange-500 text-white font-black text-xs uppercase tracking-wide py-3 rounded-lg shadow-md transition mt-2"
              >
                Call: {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Cities in this state */}
        <section className="py-12 px-4 text-left">
          <div className="max-w-7xl mx-auto space-y-6">
            <h2 className="text-xl sm:text-2xl font-black text-white">
              {stateData.name} Service Cities &amp; Metros
            </h2>

            {stateCities.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {stateCities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/dryer-vent-cleaning-${c.slug}/`}
                    className="bg-[#0c1424] hover:bg-[#101b31] border border-white/10 hover:border-orange-500/50 rounded-xl p-4 text-left transition group"
                  >
                    <div className="flex items-center gap-1.5 font-bold text-white group-hover:text-orange-400 text-sm">
                      <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                      <span>{c.city}</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{c.county}</div>
                    <div className="text-[11px] text-emerald-400 font-semibold mt-2">
                      Arrival: {c.response_time}
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-[#0c1424] border border-white/10 rounded-xl p-6 text-sm text-gray-300">
                <p>
                  We dispatch technicians across all municipalities in {stateData.name}. Call{" "}
                  <a href={`tel:${siteConfig.phoneRaw}`} className="text-orange-400 font-bold underline">
                    {siteConfig.phone}
                  </a>{" "}
                  with your zip code for immediate same-day scheduling.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
