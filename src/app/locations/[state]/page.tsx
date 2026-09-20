import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, ShieldCheck, Flame, ArrowRight, CheckCircle2, AlertTriangle, Clock, Wrench, HelpCircle } from "lucide-react";
import { getAllStates, getStateBySlug, getAllCities } from "@/lib/data";
import { siteConfig } from "@/config/site.config";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { generateStateFaqs } from "@/lib/stateFaqs";

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

  const faqs = generateStateFaqs(stateData, stateCities);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: `${siteConfig.domain}/` },
    { name: "Locations", url: `${siteConfig.domain}/locations/` },
    { name: stateData.name, url: `${siteConfig.domain}/locations/${stateData.slug}/` },
  ]);

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Statewide Certified Network · {stateData.name} Dispatch Active</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                Certified Dryer Vent Cleaning in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                  {stateData.name}
                </span>
              </h1>

              <p className="text-gray-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Direct technician dispatch across {stateData.name}. Professional rotary brush scrubbing, commercial HEPA negative-air containment, and USFA fire safety compliance from capital city {stateData.capital} to all surrounding counties and suburbs.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 max-w-lg text-xs sm:text-sm text-gray-200 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free Estimates by Phone</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Regional Hazard: {stateData.fire_risk}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>CDET Certified Specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>$2,000,000 Liability Insurance</span>
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-sm uppercase tracking-wider px-7 py-4 rounded-xl shadow-xl shadow-orange-600/30 transition transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  <Phone className="w-5 h-5 fill-white animate-pulse" />
                  <span>Call {stateData.name} Dispatch: {siteConfig.phone}</span>
                </a>
              </div>
            </div>

            {/* Quick Card */}
            <div className="lg:col-span-4 bg-[#0c1424] border border-white/15 rounded-2xl p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-orange-400 tracking-wider">Statewide Live Hub</span>
                <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Dispatching Now
                </span>
              </div>
              <div className="text-2xl font-black text-white">{stateData.name} ({stateData.abbr})</div>
              
              <div className="space-y-2 text-xs text-gray-300 border-t border-b border-white/10 py-3">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-gray-400">Regional Fire Hazard:</span>
                  <span className="font-semibold text-right text-orange-300">{stateData.fire_risk}</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-gray-400">Capital Dispatch Center:</span>
                  <span className="font-semibold text-white">{stateData.capital}</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-gray-400">Standard Pricing:</span>
                  <span className="font-bold text-emerald-400">100% Free Phone Estimate</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-gray-400">Response Speed:</span>
                  <span className="font-semibold text-white">Same-Day / 60-90 Min</span>
                </div>
              </div>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="block text-center bg-orange-600 hover:bg-orange-500 text-white font-black text-xs uppercase tracking-wide py-3.5 rounded-xl shadow-md transition"
              >
                📞 Speak with {stateData.name} Specialist
              </a>
              <p className="text-[11px] text-center text-gray-400">No forms · No obligations · Direct phone dispatch</p>
            </div>
          </div>
        </section>

        {/* State Fire Safety & Code Analysis Section */}
        <section className="py-12 px-4 border-b border-white/10 text-left bg-[#090f1d]">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="max-w-3xl space-y-2">
              <div className="text-xs uppercase font-black tracking-wider text-orange-400">Local Fire Hazard Assessment</div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Why Dryer Vent Safety Is Critical in {stateData.name}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Residential clothes dryer fires are one of the most preventable structural fire hazards in {stateData.name}. According to the US Fire Administration (USFA), failure to clean lint accounts for 34% of all dryer fires, causing millions of dollars in residential property damage annually.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-2">
              <div className="bg-[#0c1424] border border-white/10 rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-orange-400 font-bold text-sm">
                  <Flame className="w-5 h-5" />
                  <span>Climate Risk Factor</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  In {stateData.name}, local weather extremes—<strong>{stateData.fire_risk}</strong>—adversely impact exhaust airflow. Lint clumps quickly inside long duct runs or freezes against exterior louvered caps, causing heat backpressure directly into appliance heating coils.
                </p>
              </div>

              <div className="bg-[#0c1424] border border-white/10 rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Wrench className="w-5 h-5" />
                  <span>IRC Section M1502 Compliance</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  All residential vents in {stateData.name} must comply with IRC Section M1502 guidelines: 4-inch diameter rigid metal piping, max 35-foot developed length, and complete absence of screws penetrating the duct interior that catch lint fibers.
                </p>
              </div>

              <div className="bg-[#0c1424] border border-white/10 rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Certified HEPA Extraction</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Our {stateData.name} crews utilize forward and reverse spinning rotary brushes alongside industrial high-CFM negative-air vacuums to clean from dryer collar to outdoor termination with zero mess inside your home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cities in this state */}
        <section className="py-12 px-4 border-b border-white/10 text-left">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="text-xs uppercase font-black tracking-wider text-orange-400">Coverage Areas</div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  {stateData.name} Service Cities &amp; Metros
                </h2>
              </div>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="text-xs text-orange-400 hover:text-orange-300 font-bold flex items-center gap-1"
              >
                <span>Don't see your town? Call for same-day dispatch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {stateCities.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {stateCities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/dryer-vent-cleaning-${c.slug}/`}
                    className="bg-[#0c1424] hover:bg-[#101b31] border border-white/10 hover:border-orange-500/50 rounded-xl p-4 text-left transition group shadow-md"
                  >
                    <div className="flex items-center gap-1.5 font-bold text-white group-hover:text-orange-400 text-sm">
                      <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                      <span>{c.city}</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{c.county}</div>
                    <div className="text-[11px] text-emerald-400 font-semibold mt-2 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>Arrival: {c.response_time}</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-[#0c1424] border border-white/10 rounded-xl p-6 text-sm text-gray-300 space-y-3">
                <p>
                  We dispatch certified technicians across all municipalities and rural communities in {stateData.name}.
                </p>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase px-4 py-2.5 rounded-lg transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {siteConfig.phone} for Immediate Dispatch</span>
                </a>
              </div>
            )}
          </div>
        </section>

        {/* State FAQs Section */}
        <section className="py-12 px-4 border-b border-white/10 text-left bg-[#090f1d]">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="space-y-2 text-center sm:text-left">
              <div className="text-xs uppercase font-black tracking-wider text-orange-400 flex items-center gap-1 justify-center sm:justify-start">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {stateData.name} Dryer Vent Cleaning FAQs
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm">
                Expert answers regarding fire codes, cleaning frequency, and service dispatch across {stateData.name}.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-[#0c1424] border border-white/10 rounded-xl p-5 space-y-2.5"
                >
                  <h3 className="text-sm sm:text-base font-bold text-white flex items-start gap-2.5">
                    <span className="text-orange-400 font-mono font-black text-sm">Q{idx + 1}:</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-6 border-l border-white/10">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Call Box */}
        <section className="py-12 px-4 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-950/40 via-[#0c1424] to-[#0c1424] border border-orange-500/30 rounded-2xl p-8 sm:p-12 space-y-6 shadow-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Same-Day Appointments Available Across {stateData.name}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Protect Your {stateData.name} Home From Dryer Vent Fires
            </h2>

            <p className="text-gray-300 text-sm max-w-xl mx-auto leading-relaxed">
              Don't wait for your dryer to overheat or smell like burning lint. Speak with our certified {stateData.name} dispatch coordinator for a free quote and instant scheduling.
            </p>

            <div className="pt-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 hover:from-orange-500 hover:to-amber-400 text-white font-black text-sm sm:text-base uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-orange-600/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5 fill-white animate-pulse" />
                <span>Call Live Dispatch: {siteConfig.phone}</span>
              </a>
            </div>

            <div className="text-xs text-gray-400 flex flex-wrap justify-center gap-4 pt-2">
              <span>✓ 100% Free Phone Estimate</span>
              <span>✓ CDET Certified Techs</span>
              <span>✓ 24/7 Emergency Response</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
