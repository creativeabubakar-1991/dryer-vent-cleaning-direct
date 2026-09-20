export const siteConfig = {
  name: "Dryer Vent Cleaning Direct",
  shortName: "Dryer Vent Direct",
  legalName: "Dryer Vent Cleaning Direct LLC",
  domain: "https://dryerventcleaningdirect.com",
  phone: process.env.NEXT_PUBLIC_SITE_PHONE || "(800) 419-8368",
  phoneRaw: process.env.NEXT_PUBLIC_SITE_PHONE_RAW || "+18004198368",
  email: "dispatch@dryerventcleaningdirect.com",
  headquarters: {
    street: "100 S Biscayne Blvd, Suite 1200",
    city: "Miami",
    state: "FL",
    zip: "33131",
    country: "US",
    geo: {
      latitude: 25.7725,
      longitude: -80.1887,
    },
  },
  operatingHours: {
    days: "Monday - Sunday (7 Days a Week)",
    hours: "7:00 AM - 9:00 PM",
    emergency: "24/7 Priority Emergency Dispatch for Overheating Dryers, Burning Smells & Lint Hazards",
  },
  licensing: {
    cdet: "CDET Certified (Certified Dryer Exhaust Technician #CDET-4921)",
    csia: "CSIA Certified (Chimney Safety Institute of America Member)",
    nadca: "NADCA Member (National Air Duct Cleaners Association)",
    insurance: "$2,000,000 Commercial General Liability & Property Damage Insurance",
  },
  pricing: {
    standardClean: "Free Estimate",
    deepCleanRange: "Free Quote by Phone",
    rooftopCleanRange: "Custom Phone Estimate",
    repairReplacementRange: "Free Consultation",
    birdGuardInstallation: "Free Local Quote",
    airDuctComboStarting: "Package Discounts Available",
    emergencyFee: "Same-Day Dispatch",
    guarantee: "100% Lint-Free & Airflow CFM Verification Guarantee (30-Day Free Callback)",
  },
  cta: {
    primaryText: "Get Free Phone Estimate",
    secondaryText: "Call for Same-Day Dispatch",
  },
  trustPoints: [
    "CDET & CSIA Certified Technicians",
    "High-Velocity Rotary Brushing & HEPA Negative Air Extraction",
    "Digital Airflow CFM Velocity Verification (Before & After)",
    "Upfront Transparent Pricing — No Hidden Fees",
    "Licensed, Insured & Background-Checked Specialists",
  ],
};

