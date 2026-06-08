# TrackerTree Landing Page

Marketing landing page for TrackerTree.

TrackerTree is a personal progress dashboard for projects, routines, subtasks, goal-related spending, streaks, and focus recovery.

## Main URLs

```txt
Marketing site:
https://trackertree.com

App:
https://app.trackertree.com
Pages
/
 /pricing
 /privacy
 /terms
Tech Stack
Next.js
TypeScript
Tailwind CSS
Lucide React
Vercel
Getting Started

Install dependencies:

npm install

Run locally:

npm run dev

Open:

http://localhost:3000
Build Check

Run:

npm run build

Run lint:

npm run lint

Run TypeScript check:

npx tsc --noEmit
Important Files
app/page.tsx
app/pricing/page.tsx
app/privacy/page.tsx
app/terms/page.tsx
app/layout.tsx
app/globals.css
app/sitemap.ts
app/robots.ts

components/landing/
lib/site.ts
Site Config

Update global site settings here:

lib/site.ts

Current important values:

export const siteConfig = {
  name: "TrackerTree",
  url: "https://trackertree.com",
  appUrl: "https://app.trackertree.com",
  loginUrl: "https://app.trackertree.com/login",
  supportEmail: "support@trackertree.com",
};
Deployment Plan

Recommended domain setup:

trackertree.com      -> marketing landing page
www.trackertree.com  -> redirect to trackertree.com
app.trackertree.com  -> actual TrackerTree app
Vercel Deployment

Install Vercel CLI if needed:

npm install -g vercel

Login:

vercel login

Deploy preview:

vercel

Deploy production:

vercel --prod
Cloudflare DNS Notes

Use Vercel's exact DNS values from the Vercel domain settings.

Expected records:

trackertree.com      -> Vercel marketing project
www.trackertree.com  -> Vercel marketing project
app.trackertree.com  -> Vercel app project
Cloudflare SSL Settings

Recommended after Vercel SSL is active:

SSL/TLS mode: Full (strict)
Always Use HTTPS: On
Automatic HTTPS Rewrites: On
Supabase Auth Notes

For the app project, configure Supabase Auth:

Site URL:
https://app.trackertree.com

Redirect URLs:
https://app.trackertree.com/**
https://trackertree.com/**
http://localhost:3000/**

Only keep trackertree.com in redirect URLs if the marketing site needs auth redirects.

Google OAuth Notes

In Google Cloud Console OAuth branding:

App name: TrackerTree
Authorized domain: trackertree.com

Authorized JavaScript origins:

https://app.trackertree.com
https://trackertree.com

Use the Supabase OAuth callback URL shown in Supabase Auth provider settings.

