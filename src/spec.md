# Specification

## Summary
**Goal:** Prepare the app for production launch by standardizing the canonical public URL and ensuring share/SEO metadata and footer social links point to the correct production destinations.

**Planned changes:**
- Document and support configuring production builds via `VITE_PUBLIC_URL=https://bubbas.big.adventure.com`, matching the existing default behavior in `frontend/src/config/publicUrl.ts`.
- Verify canonical/share metadata in `frontend/index.html` (canonical link, `og:url`, `twitter:url`) aligns to `https://bubbas.big.adventure.com` and remove/avoid any conflicting hard-coded public URL values.
- Confirm the footer Facebook social link opens exactly `https://www.facebook.com/share/1AndNU7trz/?mibextid=wwXIfr` in a new tab with `rel="noopener noreferrer"`.

**User-visible outcome:** In production, the site consistently uses `https://bubbas.big.adventure.com` for canonical and sharing URLs, and the footer Facebook icon reliably opens the correct Facebook share link in a new tab.
