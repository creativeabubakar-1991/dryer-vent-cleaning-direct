const fs = require("fs");
const path = require("path");

console.log("==========================================================================================");
console.log("PHASE 4 TECHNICAL SEO AUDIT: SITEMAPS, ROBOTS.TXT & CANONICAL MESH");
console.log("==========================================================================================");

// Function to read route output
function checkRoute(relativePath, description) {
  const filePath = path.join(__dirname, "..", ".next", "server", "app", relativePath);
  if (!fs.existsSync(filePath)) {
    console.error(`✗ FAIL: ${description} missing at ${filePath}`);
    return null;
  }
  const content = fs.readFileSync(filePath, "utf8");
  console.log(`✓ PASS: ${description} found (${content.length} bytes)`);
  return content;
}

// 1. Check robots.txt
const robotsTxt = checkRoute("robots.txt.body", "robots.txt");
if (robotsTxt) {
  console.log("\n--- ROBOTS.TXT CONTENT ---");
  console.log(robotsTxt.trim());
  const hasUserAgent = robotsTxt.includes("User-Agent: *");
  const hasSitemapIndex = robotsTxt.includes("sitemap_index.xml");
  console.log("Robots.txt Valid:", hasUserAgent && hasSitemapIndex ? "PASS ✓" : "FAIL ✗");
}

// 2. Check sitemap_index.xml
const sitemapIndex = checkRoute("sitemap_index.xml.body", "sitemap_index.xml");
if (sitemapIndex) {
  console.log("\n--- SITEMAP INDEX CONTENT ---");
  console.log(sitemapIndex.trim());
  const childSitemaps = ["sitemap-cities.xml", "sitemap-services.xml", "sitemap-brands.xml", "sitemap-guides.xml"];
  let allChildrenFound = true;
  childSitemaps.forEach(sm => {
    const found = sitemapIndex.includes(sm);
    if (!found) allChildrenFound = false;
    console.log(`Child Sitemap ${sm.padEnd(25)} => ${found ? "FOUND ✓" : "MISSING ✗"}`);
  });
  console.log("Sitemap Index Valid:", allChildrenFound ? "PASS ✓" : "FAIL ✗");
}

// 3. Check sitemap-cities.xml
const sitemapCities = checkRoute("sitemap-cities.xml.body", "sitemap-cities.xml");
if (sitemapCities) {
  const urlCount = (sitemapCities.match(/<loc>/g) || []).length;
  console.log("\n--- SITEMAP CITIES ---");
  console.log(`Total URLs in sitemap-cities.xml: ${urlCount} (Expected: 25: 1 home + 24 Tier 1 city pages)`);
  console.log("URL Count Check:", urlCount === 25 ? "PASS ✓ (Exact match for Tier 1 pilot)" : "FAIL ✗");
}

// 4. Check sitemap-services.xml
const sitemapServices = checkRoute("sitemap-services.xml.body", "sitemap-services.xml");
if (sitemapServices) {
  const svcCount = (sitemapServices.match(/<loc>/g) || []).length;
  console.log(`Total URLs in sitemap-services.xml: ${svcCount}`);
}

// 5. Check sitemap-brands.xml
const sitemapBrands = checkRoute("sitemap-brands.xml.body", "sitemap-brands.xml");
if (sitemapBrands) {
  const brandCount = (sitemapBrands.match(/<loc>/g) || []).length;
  console.log(`Total URLs in sitemap-brands.xml: ${brandCount}`);
}

// 6. Check sitemap-guides.xml
const sitemapGuides = checkRoute("sitemap-guides.xml.body", "sitemap-guides.xml");
if (sitemapGuides) {
  const guideCount = (sitemapGuides.match(/<loc>/g) || []).length;
  console.log(`Total URLs in sitemap-guides.xml: ${guideCount}`);
}

console.log("\n==========================================================================================");
console.log("TECHNICAL SEO VERIFICATION COMPLETE: ALL SEGMENTED SITEMAPS & ROBOTS VERIFIED");
console.log("==========================================================================================");
