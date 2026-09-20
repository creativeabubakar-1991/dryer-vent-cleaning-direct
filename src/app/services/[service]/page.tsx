import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Wind, Phone, CheckCircle, Clock, ShieldCheck, ArrowRight, DollarSign, HelpCircle, Check } from "lucide-react";
import { getAllServices, getServiceBySlug, getAllCities } from "@/lib/data";
import { siteConfig } from "@/config/site.config";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((s) => ({
    service: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  const title = `${service.name} | Nationwide Certified Service | ${siteConfig.name}`;
  const description = `${service.hero_description} Free phone estimates, same-day dispatch across 50 states. Call ${siteConfig.phone}.`;
  const canonicalUrl = `${siteConfig.domain}/services/${service.slug}/`;

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

export default async function ServicePage({ params }: PageProps) {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const cities = getAllCities();

  if (!service) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: `${siteConfig.domain}/` },
    { name: "Services", url: `${siteConfig.domain}/#services` },
    { name: service.name, url: `${siteConfig.domain}/services/${service.slug}/` },
  ]);

  const faqSchema = generateFAQSchema(service.faqs);

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
            <Link href="/#services" className="hover:text-slate-900 transition">Services</Link>
            <span>/</span>
            <span className="text-orange-600 font-semibold">{service.short_title}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="py-12 lg:py-16 px-4 bg-white border-b border-slate-200 text-left">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-xs font-bold text-orange-700 shadow-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>CDET Certified Service · Nationwide 50 States</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
                {service.name}
              </h1>

              <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
                {service.hero_description}
              </p>

              <div className="grid sm:grid-cols-2 gap-3 max-w-lg text-xs sm:text-sm text-slate-700 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Estimate: <strong className="text-emerald-700">Free by Phone</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Duration: <strong className="text-slate-900">{service.estimated_duration}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>IRC M1502 Code Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>30-Day Lint-Free Guarantee</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-xs sm:text-sm uppercase tracking-wider px-7 py-4 rounded-xl shadow-lg shadow-orange-600/25 hover:scale-[1.02] transition border border-orange-500"
                >
                  <Phone className="w-4 h-4 fill-white animate-bounce" />
                  <span>Call to Dispatch: {siteConfig.phone}</span>
                </a>
              </div>
            </div>

            {/* Quick Box */}
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
              <div className="border-b border-slate-200 pb-3">
                <div className="text-[10px] uppercase font-bold text-slate-500">Direct Dispatch</div>
                <div className="text-2xl font-black text-slate-900">Free Phone Quote</div>
                <div className="text-xs text-slate-500">Instant connection · Zero hold time</div>
              </div>

              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Includes rotary line brush scrubbing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>High-power HEPA vacuum containment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Airflow velocity CFM verification</span>
                </div>
              </div>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="block text-center bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wide py-3 rounded-xl shadow-xs transition"
              >
                Schedule Service: {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Symptoms & Diagnostic Steps */}
        <section className="py-12 px-4 bg-slate-100/70 border-b border-slate-200 text-left">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">When Is This Service Needed?</h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {service.symptoms.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <CheckCircle className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">Our Diagnostic &amp; Execution Steps</h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {service.diagnostic_steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Service FAQs */}
        <section className="py-16 px-4 bg-slate-50 border-b border-slate-200 text-left">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{service.name} FAQs</h2>
              <p className="text-xs sm:text-sm text-slate-600">Frequently asked questions regarding this procedure.</p>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => (
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

        {/* Cities Available */}
        <section className="py-12 px-4 bg-white text-left">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="text-xs uppercase font-bold text-slate-500 tracking-wider">
              {service.name} Available in These Key Metro Areas
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {cities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/dryer-vent-cleaning-${c.slug}/`}
                  className="bg-slate-50 hover:bg-orange-50/50 border border-slate-200 rounded-lg p-3 text-xs text-slate-700 hover:text-orange-600 transition shadow-xs"
                >
                  <div className="font-bold text-slate-900">{c.city}, {c.state}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{c.response_time}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
