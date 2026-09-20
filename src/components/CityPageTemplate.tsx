import React from "react";
import Link from "next/link";
import {
  Wind,
  Phone,
  ShieldCheck,
  CheckCircle,
  Wrench,
  Clock,
  Award,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  MapPin,
  HelpCircle,
  Shield,
  Check,
  Flame,
  Gauge,
  Bird,
} from "lucide-react";
import { CityData } from "@/types";
import { siteConfig } from "@/config/site.config";
import { getAllServices, getNearbyCities } from "@/lib/data";
import {
  generateLocalBusinessSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";

interface CityPageTemplateProps {
  city: CityData;
}

export default function CityPageTemplate({ city }: CityPageTemplateProps) {
  const services = getAllServices();
  const nearbyCities = getNearbyCities(city);

  const cityFaqs = [
    {
      question: `How much does dryer vent cleaning cost in ${city.city}, ${city.state}?`,
      answer: `Dryer vent cleaning pricing in ${city.city} depends on your duct run length and whether the exhaust terminates through an exterior side wall, basement, or two-story rooftop. We provide 100% free estimates over the phone with upfront pricing and zero hidden fees before any work begins. Call ${siteConfig.phone} for an instant local estimate.`,
    },
    {
      question: `How quickly can a technician arrive in ${city.city}?`,
      answer: `We provide priority same-day dispatch across ${city.city} and ${city.county}—with local service vans typically arriving within ${city.response_time} of your call. Emergency dispatch is available 24/7 for overheating dryers or burning lint smells.`,
    },
    {
      question: `Why do dryer vents clog so frequently in ${city.city}?`,
      answer: `${city.climate_factor} In addition, long duct runs with 90-degree elbows or unshielded exterior vent hoods allow lint to accumulate rapidly and attract nesting birds.`,
    },
    {
      question: `Do you comply with local ${city.city} building and fire codes?`,
      answer: `Yes. All our technicians adhere strictly to ${city.building_code || "International Residential Code (IRC Section M1502)"} and NFPA fire safety standards, using only UL 2158A approved rigid metal transition ducts and code-compliant exterior hoods.`,
    },
  ];

  const localBusinessSchema = generateLocalBusinessSchema(city);
  const faqSchema = generateFAQSchema(cityFaqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: `${siteConfig.domain}/` },
    { name: "Locations", url: `${siteConfig.domain}/locations/` },
    { name: `${city.city}, ${city.state}`, url: `${siteConfig.domain}/dryer-vent-cleaning-${city.slug}/` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-slate-50 text-slate-800">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-slate-200 bg-white py-2.5 px-4 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto flex items-center gap-2">
            <Link href="/" className="hover:text-slate-900 transition">Home</Link>
            <span>/</span>
            <Link href="/locations/" className="hover:text-slate-900 transition">Locations</Link>
            <span>/</span>
            <span className="text-orange-600 font-semibold">{city.city}, {city.state}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-16 px-4 bg-white border-b border-slate-200 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-xs font-bold text-orange-700 shadow-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <span>CDET Certified · {city.county} Priority Hub</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
                Certified Dryer Vent Cleaning in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600">
                  {city.city}, {city.state}
                </span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
                Professional rotary brush lint extraction, rooftop exhaust service, and USFA fire prevention for {city.city} homeowners and businesses. Fast same-day dispatch within {city.response_time}.
              </p>

              <div className="grid sm:grid-cols-2 gap-2.5 max-w-lg text-xs sm:text-sm text-slate-700 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free Phone Estimates &amp; Upfront Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Arrival: {city.response_time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Digital Airflow CFM Verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Licensed &amp; Insured ($2M Coverage)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-lg shadow-orange-600/25 transition border border-orange-500"
                >
                  <Phone className="w-4 h-4 fill-white animate-bounce" />
                  <span>Call {city.city} Dispatch: {siteConfig.phone}</span>
                </a>

                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>24/7 Emergency Line</span>
                </a>
              </div>
            </div>

            {/* Right Card: Quick Local Dispatch Facts */}
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Local Service Snapshot
                </div>
                <div className="text-xl font-black text-slate-900">{city.city} Dispatch Hub</div>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Response Time:</span>
                  <span className="font-bold text-emerald-700">{city.response_time}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Service Estimates:</span>
                  <span className="font-bold text-emerald-700">Free Phone Quote</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Local Technicians:</span>
                  <span className="font-bold text-slate-800">{city.local_technicians || 6} On-Call</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Building Code:</span>
                  <span className="font-bold text-slate-800 text-[11px] truncate max-w-[160px]">
                    {city.building_code || "IRC M1502"}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="block w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wide py-3 rounded-xl transition shadow-xs"
                >
                  ⚡ Direct Dispatch: {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Local Climate & Fire Hazard Analysis */}
        <section className="py-12 px-4 bg-slate-100/70 border-b border-slate-200">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-center text-left">
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold text-amber-900">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                <span>Local Fire &amp; Climate Risk Factor</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-black text-slate-900">
                Why Uncleaned Dryer Vents Are a Critical Risk in {city.city}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {city.climate_factor} When lint accumulates inside exhaust lines, your dryer motor and heating elements must work against high static backpressure, reaching temperatures capable of igniting combustible lint fibers.
              </p>
              <div className="pt-2 text-xs text-slate-500">
                <strong className="text-slate-700">Local Proof Point:</strong> {city.local_proof_point}
              </div>
            </div>

            <div className="md:col-span-4 bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-xs">
              <div className="text-xs font-bold text-orange-700 uppercase">Common Local Faults:</div>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {city.common_faults.map((fault, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                    <span>{fault}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 4-Step Professional Cleaning Process */}
        <section className="py-16 px-4 bg-white border-b border-slate-200 text-left">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Our 4-Step Certified Cleaning Process in {city.city}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                We use high-velocity rotary brushes and 3-stage HEPA negative-air containment to clean your entire duct from appliance to exterior terminal.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-700 font-black text-sm flex items-center justify-center">
                  01
                </div>
                <h3 className="font-bold text-slate-900 text-sm">CFM Airflow Diagnostic</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We measure starting airflow velocity with digital anemometers and inspect the duct path with borescopes.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-700 font-black text-sm flex items-center justify-center">
                  02
                </div>
                <h3 className="font-bold text-slate-900 text-sm">High-Speed Rotary Scrub</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Flexible rotary whips traverse the entire duct run, scrubbing hardened lint from pipe walls and bends.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-700 font-black text-sm flex items-center justify-center">
                  03
                </div>
                <h3 className="font-bold text-slate-900 text-sm">HEPA Vacuum Extraction</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Commercial negative air extractors pull dislodged lint directly into sealed filters—zero mess in your home.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-700 font-black text-sm flex items-center justify-center">
                  04
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Hood &amp; Airflow Test</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We verify exterior damper flaps open freely, re-test CFM velocity, and provide a signed compliance receipt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Service Packages */}
        <section id="pricing-matrix" className="py-16 px-4 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto space-y-8 text-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Certified {city.city} Dryer Vent Service Options
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                No trip charges, no hidden fees. Free phone estimates with all equipment, containment, and airflow testing included.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 text-left">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 flex flex-col justify-between shadow-xs">
                <div className="space-y-3">
                  <div className="font-bold text-slate-900 text-base">Standard 1-Story Clean</div>
                  <div className="text-2xl font-black text-emerald-700">Free Phone Estimate</div>
                  <p className="text-xs text-slate-600 leading-relaxed">Side-wall exterior exit under 15 feet. Complete rotary brush scrub &amp; airflow test.</p>
                </div>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="block text-center bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-3 rounded-xl transition mt-3"
                >
                  📞 Call: {siteConfig.phone}
                </a>
              </div>

              <div className="bg-white border-2 border-orange-500 rounded-2xl p-6 space-y-4 shadow-md flex flex-col justify-between relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full">
                  Most Requested
                </div>
                <div className="space-y-3">
                  <div className="font-bold text-slate-900 text-base">Deep Clean + Pest Guard</div>
                  <div className="text-2xl font-black text-orange-600">Free Phone Estimate</div>
                  <p className="text-xs text-slate-600 leading-relaxed">Complete rotary line cleanout plus installation of heavy-gauge steel exterior animal guard.</p>
                </div>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="block text-center bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs py-3 rounded-xl transition mt-3 shadow-xs"
                >
                  📞 Call: {siteConfig.phone}
                </a>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 flex flex-col justify-between shadow-xs">
                <div className="space-y-3">
                  <div className="font-bold text-slate-900 text-base">Rooftop &amp; Multistory</div>
                  <div className="text-2xl font-black text-amber-700">Free Phone Estimate</div>
                  <p className="text-xs text-slate-600 leading-relaxed">Full roof access service with OSHA safety harnesses for 2-story homes and townhouses.</p>
                </div>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="block text-center bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-3 rounded-xl transition mt-3"
                >
                  📞 Call: {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Local Landmarks, Neighborhoods & Zip Codes */}
        <section className="py-12 px-4 bg-white border-b border-slate-200 text-left">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 text-xs text-slate-600">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-orange-600" />
                <span>Neighborhoods Served</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {city.neighborhoods.join(" · ")}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Landmarks &amp; Corridors</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {city.landmarks.join(" · ")}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Zip Codes Covered</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {city.zip_codes.join(", ")}
              </p>
            </div>
          </div>
        </section>

        {/* Local FAQs */}
        <section className="py-16 px-4 bg-slate-50 border-b border-slate-200 text-left">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                {city.city} Dryer Vent Cleaning FAQs
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Common questions from homeowners in {city.city} and {city.county}.
              </p>
            </div>

            <div className="space-y-3">
              {cityFaqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-xs">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6 border-l-2 border-orange-200">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Cities Cross-Link Mesh */}
        {nearbyCities.length > 0 && (
          <section className="py-12 px-4 bg-white border-b border-slate-200 text-left">
            <div className="max-w-7xl mx-auto space-y-4">
              <div className="text-xs uppercase font-bold text-slate-500 tracking-wider">
                Neighboring Service Areas in {city.county}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {nearbyCities.map((nc) => (
                  <Link
                    key={nc.slug}
                    href={`/dryer-vent-cleaning-${nc.slug}/`}
                    className="bg-slate-50 hover:bg-orange-50/50 border border-slate-200 hover:border-orange-400 rounded-lg p-3 text-xs text-slate-700 hover:text-orange-600 transition shadow-xs"
                  >
                    <div className="font-bold text-slate-900">{nc.city}, {nc.state}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{nc.response_time}</div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final Sticky CTA Banner */}
        <section className="py-14 px-4 text-center bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 text-white">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Need Same-Day Dryer Vent Cleaning in {city.city}?
            </h2>
            <p className="text-xs sm:text-sm text-orange-100">
              Our certified technicians are on call throughout {city.county}. Call now for instant dispatch.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-white text-orange-700 hover:bg-orange-50 font-black text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-2xl transition transform hover:scale-105 active:scale-95"
              >
                <Phone className="w-5 h-5 fill-orange-700 animate-bounce" />
                <span>Call {siteConfig.phone} Now</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
