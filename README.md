# rehab-timer

A small personal exercise timer, served as an offline-capable home-screen web app.

No build step, no framework, no dependencies. Static files only.

| File | Purpose |
|---|---|
| `index.html` | The app |
| `sw.js` | Service worker, cache-first, for offline use |
| `manifest.webmanifest` | Home-screen app metadata |
| `icon.svg` | App icon |

## Deploying

Push to `main`. GitHub Pages serves it from the repository root.

After changing any cached file, **bump the `CACHE` constant in `sw.js`**, otherwise
devices will keep serving the old version from cache.

## Current state

Capability test harness. Checks whether speech synthesis, screen wake lock, audio
and offline caching behave correctly inside a standalone iOS home-screen web app,
which is the riskiest assumption in the design.
