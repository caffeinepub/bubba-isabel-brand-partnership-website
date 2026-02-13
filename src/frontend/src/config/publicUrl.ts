/**
 * Single source of truth for the app's public/canonical URL.
 * 
 * This URL is used for share-friendly metadata (Open Graph, Twitter Cards, canonical links)
 * and must match the custom domain where the app is deployed in production.
 * 
 * PRODUCTION DEPLOYMENT:
 * Set the VITE_PUBLIC_URL environment variable to override this default:
 *   VITE_PUBLIC_URL=https://bubbas.big.adventure.com
 * 
 * The default fallback below MUST remain https://bubbas.big.adventure.com
 * to match the canonical production domain and prevent misconfiguration.
 * 
 * See frontend/PUBLIC_URL.md for detailed deployment instructions.
 */
export const PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL || 'https://bubbas.big.adventure.com';
