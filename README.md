# rehab-timer

A personal GTPS rehab app, served as an offline home-screen web app.

No build step, no framework, no dependencies. Static files only.

**Live at:** https://jonhyde.github.io/rehab-timer/

| File | Purpose |
|---|---|
| `index.html` | The app. All UI and logic. |
| `programme.js` | **The programme.** Every clinical detail lives here and nowhere else. |
| `sw.js` | Service worker. Network-first for the page, cache-first for assets. |
| `manifest.webmanifest` | Home-screen app metadata |
| `voices.html` | Voice audition tool |
| `test.html` | Capability test harness, kept for re-testing after iOS updates |

## Changing the programme

Edit `programme.js` only. Exercise names, reps, sets, instructions, bands,
overrides and the weekday map are all there. Then **bump `CACHE` in `sw.js`**
or devices will keep serving the old version.

## Design

Concept 1a from the Claude Design exploration: **the set is the unit, not the rep.**
The voice reads out what to do, then goes quiet. Jon works at his own pace and
taps once when the set is finished. Rests are timed, because that is the only part
of a session a clock is good at. Nothing is timed between exercises.

Key constraints, all learned the hard way:

- **Speech leads but never carries.** Every spoken cue is also the largest text on
  screen, because iOS speech cannot be fully relied on.
- **No beeps as a primary cue.** Web Audio respects the iOS mute switch, which is
  permanently on. Speech synthesis ignores it. That is why audio is live-synthesised
  rather than pre-generated files.
- **Voice is a user setting**, defaulting to Samantha. Downloaded Enhanced and Premium
  voices are not exposed to Safari, so the good ones are unavailable.
- **All sets on one leg before swapping.** Re-anchoring the Pilates band in the door
  is the biggest source of friction in the session.
- **Plain English only.** No anatomical jargon anywhere in the copy.
