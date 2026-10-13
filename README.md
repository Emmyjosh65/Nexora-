# NEXORA — Free Tools Workspace

A premium dark-mode, responsive Next.js 14 website by Zeus. All included tools are free; there is no premium tier, payment wall, account requirement, or quota system.

## Included tools

- **Weather** — Open-Meteo geocoding + forecast APIs. No API key required.
- **Currency converter** — Frankfurter v2 reference exchange rates. Rates may be delayed and are not a trading/payment quote.
- **Country explorer** — REST Countries public API.
- **QR maker** — QRServer image endpoint; requires internet when generating/downloading the QR.
- **Text toolkit** — local browser-side word/character counts, case conversion, whitespace cleanup.
- **JSON formatter** — local browser-side JSON validation, pretty print and minification.
- **Password studio** — browser `crypto.getRandomValues`; generated password is not sent to a server.

Live public APIs can have downtime, rate limits, or changed availability. The UI displays errors rather than making up results. The three public-data integrations have been implemented against their documented endpoints, but API availability is not guaranteed. QR generation uses an external image service; do not encode sensitive secrets into a QR payload.

## Run locally

Requires Node.js 18.17+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm start
```

## Deploy

### Vercel (recommended for Next.js)
1. Upload this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Keep the framework preset as Next.js and deploy. No environment variables are required for the current tools.

### Static GitHub Pages
This is a Next.js application and uses client-side interactions. For GitHub Pages, configure static export in `next.config.mjs` (`output: 'export'`) and ensure any future server routes are not used. Build with `npm run build`, then publish the generated `out/` directory. Vercel is the simpler default.

## Owner / support
- Owner display name: **Zeus**
- WhatsApp: **+234 906 676 0078** — https://wa.me/2349066760078
- Customer care: **ge5853987@gmail.com**

## Notes

- Uses Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion and Lucide React.
- Animations respect the visual system but reduced-motion preference should be considered for production accessibility refinements.
- There are no fake testimonials, fabricated customer logos, or made-up uptime statistics.
- Do not store secret API keys in client-side code. No API key is needed by the current integrations.
