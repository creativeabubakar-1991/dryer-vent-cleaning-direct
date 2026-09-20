const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", ".next", "server", "app", "ev-charger-repair", "greeley-co.html");
if (!fs.existsSync(filePath)) {
  console.error("HTML file does not exist at", filePath);
  process.exit(1);
}

const html = fs.readFileSync(filePath, "utf8");
const cleanText = html.replace(/<!--.*?-->/g, "");

console.log("==================================================");
console.log("PHASE 2 MASTER TEMPLATE VERIFICATION: GREELEY, CO");
console.log("==================================================");
console.log("HTML File Size:", html.length, "bytes");

// Check Title
const titleMatch = html.match(/<title>([^<]+)<\/title>/);
const title = titleMatch ? titleMatch[1] : "NONE";
console.log("\n[1] SEO META TITLE:");
console.log("    Value :", title);
console.log("    Length:", title.length, "chars", title.length <= 60 ? "✓ (<= 60 chars)" : "⚠ (> 60 chars)");

// Check Meta Description
const descMatch = html.match(/<meta name="description" content="([^"]+)"/);
const desc = descMatch ? descMatch[1] : "NONE";
console.log("\n[2] SEO META DESCRIPTION:");
console.log("    Value :", desc);
console.log("    Length:", desc.length, "chars", desc.length <= 155 ? "✓ (<= 155 chars)" : "⚠ (> 155 chars)");

// Check Canonical
const canonMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
console.log("\n[3] SELF-CANONICAL URL:");
console.log("    Value :", canonMatch ? canonMatch[1] : "NONE");

// Check Schemas
const scripts = html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g) || [];
console.log("\n[4] SCHEMA.ORG (JSON-LD) VALIDATION:");
console.log("    Total Schemas Found:", scripts.length);
scripts.forEach((s, idx) => {
  const jsonContent = s.replace(/<script[^>]*>/, "").replace(/<\/script>/, "");
  try {
    const parsed = JSON.parse(jsonContent);
    console.log(`    Schema ${idx + 1}: [${parsed["@type"]}] ${parsed.name || parsed.serviceType || "Valid"}`);
  } catch (e) {
    console.error(`    Schema ${idx + 1} parse error:`, e.message);
  }
});

// Check key sections
const sections = [
  { num: 1, name: "Hero Section (H1 + CTAs)", pattern: "EV Charger Repair in Greeley, CO" },
  { num: 2, name: "Quick Answer Box (<100w AI search)", pattern: "Direct Answer: EV Charger Repair in Greeley, CO" },
  { num: 3, name: "Common Charger Faults in City", pattern: "Common EV Charger Faults in Greeley, CO" },
  { num: 4, name: "Brands We Service (Tesla, CP, etc.)", pattern: "EV Charger Brands Serviced in Greeley" },
  { num: 5, name: "Service Types (Level 1/2/Emergency)", pattern: "Charging Repair &amp; Diagnostic Solutions in Greeley" },
  { num: 6, name: "Why Homeowners Choose Us", pattern: "Why Greeley Homeowners Choose Us" },
  { num: 7, name: "Local Coverage Map & Zip Codes", pattern: "Greeley, CO Service Area &amp; Zip Codes" },
  { num: 8, name: "Transparent Pricing Table", pattern: "Transparent EV Charger Pricing for Greeley, CO" },
  { num: 9, name: "City-Specific FAQs with Schema", pattern: "EV Charger Repair FAQs for Greeley, CO" },
  { num: 10, name: "Related Cities (Hub & Spoke links)", pattern: "Also Serving Neighboring Northern Colorado Towns:" },
  { num: 11, name: "Final High-Conversion CTA & Form", pattern: "Book Same-Day EV Charger Service in Greeley" }
];

console.log("\n[5] 11 MANDATORY TEMPLATE SECTIONS:");
let allPassed = true;
sections.forEach(sec => {
  const found = cleanText.includes(sec.pattern);
  if (!found) allPassed = false;
  console.log(`    Section ${sec.num.toString().padStart(2)}: ${sec.name.padEnd(40)} => ${found ? "✓ PASS" : "✗ FAIL"}`);
});

console.log("\n==================================================");
console.log("PILOT AUDIT RESULT:", allPassed ? "ALL 11 SECTIONS VERIFIED & ACTIVE" : "FAILED");
console.log("==================================================");
