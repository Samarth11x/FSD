# StockWave PWA

Mobile-first stock market Progressive Web App built with React, Vite, and `vite-plugin-pwa`.

## Setup

1. Create a `.env` file.
2. Add your Alpha Vantage key:

```env
VITE_ALPHA_VANTAGE_API_KEY=YOUR_API_KEY_HERE
```

3. Install packages:

```bash
npm install
```

4. Start development:

```bash
npm run dev
```

## Netlify Deploy

- Build command: `npm run build`
- Publish directory: `dist`
- `netlify.toml` is already added for SPA routing

## Mobile Install

- Open the deployed Netlify URL on your phone.
- In Chrome/Edge choose `Add to Home Screen` or tap the install prompt.
