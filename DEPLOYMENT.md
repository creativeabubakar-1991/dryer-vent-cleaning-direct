# Production Deployment & Setup Manual
## Dryer Vent Cleaning Direct (`dryerventcleaningdirect.com`)
*Nationwide CDET-Certified Dryer Vent Cleaning & Fire Safety Network*

This document provides step-by-step instructions for deploying **Dryer Vent Cleaning Direct** to **Cloudflare Pages** or **Vercel**, configuring DNS & SSL, submitting sitemaps to Google Search Console, and operating the lead generation engine.

---

## 1. Quick Build & Production Verification

```powershell
# 1. Run production build (Builds all 111 static pages)
npm run build

# 2. Start local production preview server
npm run start
```
Your site will run at `http://localhost:3000`.

---

## 2. Deploying to Cloudflare Pages (Recommended)

Cloudflare Pages provides free edge hosting, global Anycast CDN, enterprise DDoS protection, and unlimited bandwidth.

### Step 1: Push Code to GitHub
```powershell
# Initialize git if not already done
git init
git add .
git commit -m "Launch Dryer Vent Cleaning Direct nationwide site"

# Connect to your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/dryer-vent-cleaning-direct.git
git branch -M main
git push -u origin main
```

### Step 2: Connect GitHub to Cloudflare Pages
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left navigation, go to **Workers & Pages** -> Click **Create application** -> **Pages**.
3. Select **Connect to Git** and choose your `dryer-vent-cleaning-direct` repository.
4. Set the build configuration:
   - **Framework preset**: `Next.js`
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Node.js version**: `20` (add environment variable `NODE_VERSION=20` if prompted)
5. Click **Save and Deploy**. Cloudflare Pages will build and deploy your site across 300+ edge data centers.

---

## 3. Custom Domain Setup (`dryerventcleaningdirect.com`)

1. In Cloudflare Pages, go to your project -> **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Enter `dryerventcleaningdirect.com` (and `www.dryerventcleaningdirect.com`).
4. If your domain is registered on Cloudflare, DNS records and universal SSL certificates will be configured automatically in under 60 seconds!
5. If registered with another registrar (Namecheap, GoDaddy), update your nameservers to Cloudflare's assigned nameservers.

---

## 4. Google Search Console & XML Sitemap Submission

1. Open [Google Search Console](https://search.google.com/search-console).
2. Click **Add Property** -> Enter URL prefix: `https://dryerventcleaningdirect.com`.
3. Verify ownership via DNS TXT record or HTML tag in `.env.local` (`NEXT_PUBLIC_GSC_VERIFICATION`).
4. In the left menu, select **Sitemaps**.
5. Submit:
   - `https://dryerventcleaningdirect.com/sitemap_index.xml`
6. Googlebot will automatically discover all segmented child sitemaps:
   - `https://dryerventcleaningdirect.com/sitemap-locations.xml`
   - `https://dryerventcleaningdirect.com/sitemap-services.xml`
   - `https://dryerventcleaningdirect.com/sitemap-symptoms.xml`
   - `https://dryerventcleaningdirect.com/sitemap-guides.xml`

---

## 5. Lead Engine & Call Dispatch Routing

- **Primary Phone Number**: `(800) 419-8368` (Configured in `src/config/site.config.ts`)
- **Interactive Fire Risk Calculator**: Located in the Hero section across all pages, allowing users to calculate risk scores and receive instant upfront cost estimates ($99 - $249).
- **Mobile 1-Tap Sticky Call Bar**: Always visible on smartphones with live technician dispatch indicators.
