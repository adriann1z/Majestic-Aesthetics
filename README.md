# Majestic Aesthetics

Medical aesthetics website for Majestic Aesthetics in Southsea.

## Run Locally

Prerequisite: Node.js

1. Install dependencies:
   `npm install`
2. Create `.env.local` from `.env.example` and set the required environment values.
3. Start the development server:
   `npm run dev`

The app runs at `http://localhost:3000/`.

## Build

```bash
npm run build
```

## Consultation Enquiries

Both the homepage form and consultation modal use the same Web3Forms submission flow. To enable automatic delivery:

1. Create and verify a Web3Forms access key for `info@majesticaesthetics.uk`.
2. Set `VITE_WEB3FORMS_ACCESS_KEY` in `.env.local` for local development.
3. Add the same value as the `VITE_WEB3FORMS_ACCESS_KEY` GitHub Actions secret for production deployments.

If the key is absent or delivery fails, the form shows a clear error and Katie's direct contact details instead of claiming the enquiry was sent.
