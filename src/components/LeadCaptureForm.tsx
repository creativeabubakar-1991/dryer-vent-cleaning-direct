"use client";

import React, { useState } from "react";
import { Send, Phone, CheckCircle, Shield, Clock } from "lucide-react";
import { siteConfig } from "@/config/site.config";

interface LeadCaptureFormProps {
  cityName?: string;
  defaultService?: string;
}

export default function LeadCaptureForm({
  cityName = "Greeley & Front Range",
  defaultService = "Tesla Wall Connector Installation",
}: LeadCaptureFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: cityName,
    serviceType: "Tesla Wall Connector Installation (Hardwired 60A)",
    panelDistance: "< 10 ft from breaker panel (Standard)",
    timeline: "Ready to install this week",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40 rounded-2xl p-6 sm:p-8 text-center text-slate-900 dark:text-white space-y-4 shadow-xl">
        <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center mx-auto text-slate-950 shadow-md">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Installation Estimate Requested!</h3>
        <p className="text-sm text-slate-700 dark:text-emerald-200/90 max-w-md mx-auto">
          Thank you, <strong>{formData.name}</strong>. Our Master Electrician will review your electrical requirements for <strong>{formData.city}</strong> and call you within 15 minutes at <strong>{formData.phone}</strong> with a guaranteed upfront quote.
        </p>
        <div className="p-4 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
          ⚡ <strong>Rebate Reminder:</strong> We assist you with filing your <strong>$500 Xcel Energy or PVREA rebate</strong>. For immediate questions, call{" "}
          <a href={`tel:${siteConfig.phoneRaw}`} className="text-emerald-600 dark:text-emerald-400 font-bold underline">
            {siteConfig.phone}
          </a>.
        </div>
      </div>
    );
  }

  return (
    <div id="quote-form" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 text-slate-900 dark:text-white shadow-xl dark:shadow-2xl relative overflow-hidden transition-colors duration-200">
      {/* Subtle accent glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20 mb-3">
          <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Same-Day Quotes • $500 Colorado Rebate Eligible</span>
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Get An Instant Installation Estimate
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5">
          Licensed Master Electricians in {cityName}. Upfront pricing with permit handling and utility rebate assistance.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
              Your Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Michael Smith"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
              Direct Phone Number *
            </label>
            <input
              type="tel"
              required
              placeholder="(970) 555-0199"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
              Front Range City / Town *
            </label>
            <input
              type="text"
              required
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
              Installation or Service Type
            </label>
            <select
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition text-sm"
            >
              <option value="Tesla Wall Connector Installation (Hardwired 60A)">⚡ Tesla Wall Connector Install (Hardwired 60A)</option>
              <option value="Level 2 240V Home Charger Installation (32A-48A)">⚡ Level 2 Home Charger Install (ChargePoint, Emporia, etc.)</option>
              <option value="Industrial NEMA 14-50 240V Outlet">🔌 Industrial NEMA 14-50 240V Outlet</option>
              <option value="Dedicated EV Circuit & 200A Panel Upgrade">⚡ Dedicated Circuit &amp; 200A Panel Upgrade</option>
              <option value="Commercial / Multi-Unit Fleet Charging">🏢 Commercial / Fleet Charger Installation</option>
              <option value="EV Charger Repair & Diagnostic ($150 Credited)">🔧 EV Charger Repair &amp; Diagnostic ($150 Credited)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
              Distance from Breaker Panel
            </label>
            <select
              value={formData.panelDistance}
              onChange={(e) => setFormData({ ...formData, panelDistance: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition text-sm"
            >
              <option value="< 10 ft from breaker panel (Standard)">Next to panel (&lt; 10 ft) - Best Value</option>
              <option value="10 - 25 ft across garage">Across garage (10 - 25 ft)</option>
              <option value="Detached garage / long run (> 30 ft)">Detached garage / Long run (&gt; 30 ft)</option>
              <option value="Need electrician evaluation">Not sure / Need evaluation</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
              Installation Timeline
            </label>
            <select
              value={formData.timeline}
              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition text-sm"
            >
              <option value="Ready to install this week">Ready to install this week</option>
              <option value="Within 2-3 weeks (Car arriving soon)">Within 2-3 weeks (Car arriving soon)</option>
              <option value="Planning & comparing prices">Planning &amp; comparing prices</option>
              <option value="Emergency replacement today">Emergency replacement today</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-slate-950 font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition transform active:scale-98 text-base"
        >
          {loading ? (
            <span>Calculating Quote...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Get Free Installation Estimate in {cityName}</span>
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800/80">
          <span className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            Licensed &amp; Insured #EC.0100482
          </span>
          <span>•</span>
          <span>$500 Rebate Eligible</span>
          <span>•</span>
          <span>EVITP Approved</span>
        </div>
      </form>
    </div>
  );
}
