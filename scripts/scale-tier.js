const fs = require("fs");
const path = require("path");

const envPath = path.join(__dirname, "..", ".env.local");
const requestedTier = process.argv[2];

if (!requestedTier) {
  console.log("=======================================================================");
  console.log("PROGRAMMATIC SEO TIER ROLLOUT MANAGER");
  console.log("=======================================================================");
  console.log("Usage: node scripts/scale-tier.js <1|2|3>");
  console.log("");
  console.log("Tier Options:");
  console.log("  Tier 1: 6 cities × 4 page types = 24 pages (PILOT LAUNCH)");
  console.log("          - Greeley, Evans, Windsor, Milliken, Severance, Johnstown");
  console.log("");
  console.log("  Tier 2: 10 cities × 4 page types = 40 pages (+16 pages)");
  console.log("          - Eaton, Timnath, Berthoud, Fort Lupton");
  console.log("");
  console.log("  Tier 3: 15 cities × 4 page types = 60 pages (+20 pages)");
  console.log("          - Gilcrest, La Salle, Kersey, Platteville, Ault");
  console.log("=======================================================================");
  process.exit(0);
}

const tierNum = parseInt(requestedTier, 10);
if (![1, 2, 3].includes(tierNum)) {
  console.error("Error: Tier must be 1, 2, or 3.");
  process.exit(1);
}

let envContent = "";
if (fs.existsSync(envPath)) {
  envContent = fs.readFileSync(envPath, "utf8");
}

if (/NEXT_PUBLIC_ROLLOUT_TIER=\d/.test(envContent)) {
  envContent = envContent.replace(/NEXT_PUBLIC_ROLLOUT_TIER=\d/, `NEXT_PUBLIC_ROLLOUT_TIER=${tierNum}`);
} else {
  envContent += `\nNEXT_PUBLIC_ROLLOUT_TIER=${tierNum}\n`;
}

fs.writeFileSync(envPath, envContent.trim() + "\n", "utf8");

console.log("=======================================================================");
console.log(`✓ UPDATED ROLLOUT TIER TO: TIER ${tierNum}`);
console.log("=======================================================================");
if (tierNum === 1) {
  console.log("Active: 6 cities × 4 page types = 24 Tier 1 Pilot Pages.");
} else if (tierNum === 2) {
  console.log("Active: 10 cities × 4 page types = 40 Total Pages (Tier 1 + Tier 2 Scaled).");
} else if (tierNum === 3) {
  console.log("Active: 15 cities × 4 page types = 60 Total Pages (Full Regional Coverage).");
}
console.log("");
console.log("Run 'npm run build' to recompile the static pages with the updated tier!");
console.log("=======================================================================");
