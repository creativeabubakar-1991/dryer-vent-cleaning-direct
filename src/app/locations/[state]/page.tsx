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

      <div className="bg-slate-50 text-slate-800">
        {/* Breadcrumb */}
        <div className="border-b border-slate-200 bg-white py-2.5 px-4 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto flex items-center gap-2">
            <Link href="/" className="hover:text-slate-900 transition">Home</Link>
            <span>/</span>
            <Link href="/locations/" className="hover:text-slate-900 transition">Locations</Link>
            <span>/</span>
            <span className="text-orange-600 font-semibold">{stateData.name}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="py-12 lg:py-16 px-4 bg-white border-b border-slate-200 text-left">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-xs font-bold text-orange-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Statewide Certified Network · {stateData.name} Dispatch Active</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
                Certified Dryer Vent Cleaning in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600">
                  {stateData.name}
                </span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
                Direct technician dispatch across {stateData.name}. Professional rotary brush scrubbing, commercial HEPA negative-air containment, and USFA fire safety compliance from capital city {stateData.capital} to all surrounding counties and suburbs.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 max-w-lg text-xs sm:text-sm text-slate-700 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free Estimates by Phone</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Regional Hazard: {stateData.fire_risk}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>CDET Certified Specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>$2,000,000 Liability Insurance</span>
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-sm uppercase tracking-wider px-7 py-4 rounded-xl shadow-lg shadow-orange-600/25 transition transform hover:-translate-y-0.5 active:translate-y-0 text-center border border-orange-500"
                >
                  <Phone className="w-5 h-5 fill-white animate-bounce" />
                  <span>Call {stateData.name} Dispatch: {siteConfig.phone}</span>
                </a>
              </div>
            </div>

            {/* Quick Card */}
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm text-left">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Statewide Live Hub</span>
                <span className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Dispatching Now
                </span>
              </div>
              
              <div className="text-2xl font-black text-slate-900">{stateData.name} ({stateData.abbr})</div>
              
              <div className="space-y-2 text-xs text-slate-600 border-b border-slate-200 pb-3">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-slate-500">Regional Fire Hazard:</span>
                  <span className="font-semibold text-right text-orange-700">{stateData.fire_risk}</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-slate-500">Capital Dispatch Center:</span>
                  <span className="font-semibold text-slate-900">{stateData.capital}</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-slate-500">Standard Pricing:</span>
                  <span className="font-bold text-emerald-700">100% Free Phone Estimate</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-slate-500">Response Speed:</span>
                  <span className="font-semibold text-slate-900">Same-Day / 60-90 Min</span>
                </div>
              </div>

              <div className="pt-1">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="block text-center bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wide py-3 rounded-xl transition"
                >
                  📞 Direct Dispatch: {siteConfig.phone}
                </a>
                <p className="text-[11px] text-center text-slate-500 mt-2">No forms · No obligations · Instant phone quote</p>
              </div>
            </div>
          </div>
        </section>

        {/* State Fire Safety & Code Analysis Section */}
        <section className="py-12 px-4 border-b border-slate-200 text-left bg-slate-100/60">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="max-w-3xl space-y-2">
              <div className="text-xs uppercase font-black tracking-wider text-orange-600">Local Fire Hazard Assessment</div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Why Dryer Vent Safety Is Critical in {stateData.name}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Residential clothes dryer fires are one of the most preventable structural fire hazards in {stateData.name}. According to the US Fire Administration (USFA), failure to clean lint accounts for 34% of all dryer fires, causing millions of dollars in residential property damage annually.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-2">
              <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 shadow-xs">
                <div className="flex items-center gap-2 text-orange-600 font-bold text-sm">
                  <Flame className="w-5 h-5" />
                  <span>Climate Risk Factor</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  In {stateData.name}, local weather extremes—<strong>{stateData.fire_risk}</strong>—adversely impact exhaust airflow. Lint clumps quickly inside long duct runs or freezes against exterior louvered caps, causing heat backpressure directly into appliance heating coils.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 shadow-xs">
                <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
                  <Wrench className="w-5 h-5" />
                  <span>IRC Section M1502 Compliance</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All residential vents in {stateData.name} must comply with IRC Section M1502 guidelines: 4-inch diameter rigid metal piping, max 35-foot developed length, and complete absence of screws penetrating the duct interior that catch lint fibers.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Certified HEPA Extraction</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our {stateData.name} crews utilize forward and reverse spinning rotary brushes alongside industrial high-CFM negative-air vacuums to clean from dryer collar to outdoor termination with zero mess inside your home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cities in this state */}
        <section className="py-12 px-4 border-b border-slate-200 text-left bg-white">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="text-xs uppercase font-black tracking-wider text-orange-600">Coverage Areas</div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {stateData.name} Service Cities &amp; Metros
                </h2>
              </div>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="text-xs text-orange-600 hover:text-orange-700 font-bold flex items-center gap-1"
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
                    className="bg-slate-50 hover:bg-orange-50/50 border border-slate-200 hover:border-orange-400 rounded-xl p-4 text-left transition group shadow-xs"
                  >
                    <div className="flex items-center gap-1.5 font-bold text-slate-900 group-hover:text-orange-600 text-sm">
                      <MapPin className="w-4 h-4 text-orange-600 shrink-0" />
                      <span>{c.city}</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">{c.county}</div>
                    <div className="text-[11px] text-emerald-700 font-semibold mt-2 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>Arrival: {c.response_time}</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-sm text-slate-600 space-y-3">
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
        <section className="py-12 px-4 border-b border-slate-200 text-left bg-slate-100/50">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="space-y-2 text-center sm:text-left">
              <div className="text-xs uppercase font-black tracking-wider text-orange-600 flex items-center gap-1 justify-center sm:justify-start">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                {stateData.name} Dryer Vent Cleaning FAQs
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Expert answers regarding fire codes, cleaning frequency, and service dispatch across {stateData.name}.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-xl p-5 space-y-2.5 shadow-xs"
                >
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2.5">
                    <span className="text-orange-600 font-mono font-black text-sm">Q{idx + 1}:</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6 border-l-2 border-orange-200">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Call Box */}
        <section className="py-14 px-4 text-center bg-white">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 border border-orange-500 rounded-3xl p-8 sm:p-12 space-y-6 shadow-2xl text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1 text-xs font-bold text-white">
              <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
              <span>Same-Day Appointments Available Across {stateData.name}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Protect Your {stateData.name} Home From Dryer Vent Fires
            </h2>

            <p className="text-orange-50 text-sm max-w-xl mx-auto leading-relaxed">
              Don't wait for your dryer to overheat or smell like burning lint. Speak with our certified {stateData.name} dispatch coordinator for a free quote and instant scheduling.
            </p>

            <div className="pt-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-white text-orange-700 hover:bg-orange-50 font-black text-sm sm:text-base uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl transition transform hover:scale-105 active:scale-95"
              >
                <Phone className="w-5 h-5 fill-orange-700 animate-bounce" />
                <span>Call Live Dispatch: {siteConfig.phone}</span>
              </a>
            </div>

            <div className="text-xs text-orange-100 flex flex-wrap justify-center gap-4 pt-2 font-medium">
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
