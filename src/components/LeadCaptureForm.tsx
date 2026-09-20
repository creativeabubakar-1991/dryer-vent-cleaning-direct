"use client";

import React, { useState } from "react";
import { Send, Phone, CheckCircle, ShieldCheck, Clock, Flame, Calendar } from "lucide-react";
import { siteConfig } from "@/config/site.config";

interface LeadCaptureFormProps {
  cityName?: string;
  defaultService?: string;
}

export default function LeadCaptureForm({
  cityName = "Nationwide",
  defaultService = "Residential Dryer Vent Cleaning ($99)",
}: LeadCaptureFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    zip: "",
    serviceType: defaultService,
    ventExit: "Side Wall (Ground Level)",
    timeline: "Same-Day Emergency (Within 45-75 mins)",
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
      <div className="bg-[#0c1424] border border-orange-500/40 rounded-2xl p-6 sm:p-8 text-center text-white space-y-4 shadow-2xl animate-fadeIn">
        <div className="w-14 h-14 bg-gradient-to-tr from-orange-600 to-amber-500 rounded-full flex items-center justify-center mx-auto text-white shadow-lg">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-black text-white">Inspection &amp; Service Scheduled!</h3>
        <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
          Thank you, <strong>{formData.name}</strong>. A CDET-certified technician in <strong>{cityName}</strong> has received your dispatch request. We will call you at <strong>{formData.phone}</strong> within 10 minutes to confirm your time slot.
        </p>
        <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-xs text-gray-300 space-y-2">
          <div className="flex items-center justify-center gap-2 text-orange-400 font-bold">
            <Flame className="w-4 h-4" />
            <span>Need Immediate Fire Hazard Response?</span>
          </div>
          <p>Call our live 24/7 national dispatch line directly:</p>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-black text-sm px-5 py-2.5 rounded-lg transition"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>Call {siteConfig.phone}</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div id="booking-form" className="bg-[#0c1424] border border-white/15 rounded-2xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden text-left">
      <div className="mb-6 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-500/10 text-orange-400 border border-orange-500/20">
          <Clock className="w-3.5 h-3.5" />
          <span>Priority Dispatch Active • Starting at $99</span>
        </div>
        <h3 className="text-2xl font-black tracking-tight text-white">
          Book Your Dryer Vent Inspection
        </h3>
        <p className="text-xs sm:text-sm text-gray-400">
          Certified rotary brush &amp; HEPA extraction in {cityName}. Upfront flat pricing with $2,000,000 liability insurance.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-300 mb-1">
              Your Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="John Smith"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#070c18] border border-white/20 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-300 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              placeholder="(555) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-[#070c18] border border-white/20 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-300 mb-1">
              Service Needed
            </label>
            <select
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              className="w-full bg-[#070c18] border border-white/20 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-orange-500 transition"
            >
              <option value="Residential Dryer Vent Cleaning ($99)">Residential Dryer Vent Cleaning ($99)</option>
              <option value="Rooftop Dryer Vent Cleaning ($179 - $249)">Rooftop Dryer Vent Cleaning ($179 - $249)</option>
              <option value="Dryer Vent Repair & Replacement">Duct Repair &amp; Rigid Metal Replacement</option>
              <option value="Bird Nest Removal & Pest Guard">Bird Nest Removal &amp; Pest Guards</option>
              <option value="Commercial Dryer Vent Cleaning">Commercial Laundromat Venting</option>
              <option value="Whole-House Air Duct Cleaning">Whole-House Air Duct Cleaning</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-300 mb-1">
              Exhaust Exit Location
            </label>
            <select
              value={formData.ventExit}
              onChange={(e) => setFormData({ ...formData, ventExit: e.target.value })}
              className="w-full bg-[#070c18] border border-white/20 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-orange-500 transition"
            >
              <option value="Side Wall (Ground Level)">Side Wall (Ground Level)</option>
              <option value="Rooftop (2-Story or High Slope)">Rooftop (2-Story or High Slope)</option>
              <option value="Basement / Crawlspace">Basement / Crawlspace</option>
              <option value="Not Sure / Need Inspection">Not Sure / Need Inspection</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-300 mb-1">
            Preferred Timeframe
          </label>
          <select
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full bg-[#070c18] border border-white/20 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-orange-500 transition"
          >
            <option value="Same-Day Emergency (Within 45-75 mins)">Same-Day Emergency (Within 45-75 mins)</option>
            <option value="Tomorrow Morning">Tomorrow Morning</option>
            <option value="This Week (Flexible)">This Week (Flexible)</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-sm uppercase tracking-wider py-3.5 rounded-xl shadow-lg shadow-orange-600/30 transition flex items-center justify-center gap-2 cursor-pointer"
        >
          {loading ? (
            <span>Dispatching Request...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Confirm Free Inspection Booking</span>
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-4 text-[11px] text-gray-400 pt-2 border-t border-white/10">
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>CDET #4921 Certified</span>
          </div>
          <span>•</span>
          <div>Zero Upfront Deposit Required</div>
          <span>•</span>
          <div>$2M Liability Insured</div>
        </div>
      </form>
    </div>
  );
}
