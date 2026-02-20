
# RIMC Website Overhaul Plan

## Summary of Required Changes

Based on the uploaded document and the live website (intereses.lv), this plan covers three major areas of work:

**1. Color scheme change** — Replace all blue (#2453A6) with rose/pink to match the actual brand colors visible on intereses.lv (the real site uses pink/magenta as the primary accent).

**2. Real content from intereses.lv** — Replace all mock/placeholder data with actual news, events, and structural content scraped from the live website.

**3. Architecture improvements per the document** — The uploaded document specifies these structural enhancements:
- Quick-links section ("Ātrie ceļi") on the homepage: Apmācības, Pasākumu kalendārs, Digitālie materiāli, Konkursi
- "JAUNUMI metodiskajā darbā" as the primary highlighted news section (separate from general "Jaunumi interešu izglītībā")
- Navigation restructured: Replace "Resursi" and "Par mums" labels; rename sections as per the real site (Tālākizglītība, Materiāli, Nolikumi)
- Author display on news cards with name + role
- "Pieteikties" / "Uzzināt vairāk" quick-action buttons on event/course cards
- About + Contacts merged/simplified
- Resources page styled like a digital library with category sidebar

---

## Technical Plan

### File 1: `src/index.css` — Color System Change
- Change `--primary` from blue HSL `217 64% 40%` to rose/pink `339 72% 45%` (approx. #C8215A, matching intereses.lv's magenta-pink)
- Update `--primary-foreground` to remain `0 0% 100%` (white)
- Update `--secondary` to a light pink tint `339 40% 96%`
- Update `--accent` to `339 80% 95%`
- Update `--hero-gradient` to use the pink color
- Update dark mode variants accordingly
- Update sidebar tokens to use the new pink

### File 2: `src/data/mockData.ts` — Real Content
Replace all mock data with real content sourced from intereses.lv:

**Real news items** (from the live site, 2026):
- "Aicinām pieteikties programmai 'Stikla mākslas daudzveidība...'" — category: `training`, date: 2026-02-18
- "Aicinām pieteikties semināram 'Vizuālās identitātes veidošana'" — category: `training`, date: 2026-02-17
- "Aicinām pieteikties programmai 'Dramaturģijas pamati'" — category: `training`, date: 2026-02-17
- "Rīgas bērnu un jauniešu radošās mākslas konkurss 'Neparastās lietas. Ainava'" — category: `competitions`, date: 2026-02-19
- "Bērnu un jauniešu stikla mākslas konkurss-izstāde 'Anna izzina Rīgu. DURVIS...'" — category: `competitions`, date: 2026-02-18
- "Stikla mākslinieku izstāde, kas veltīta Krišjāņa Valdemāra piemiņai" — category: `announcements`, date: 2026-02-18
- "24 stundu spēļu izstrādes hakatons 'Campfire Riga'" — category: `projects`, date: 2026-02-17

Add a `newsType` field: `"methodical"` (Metodiskajā darbā) vs `"general"` (Interešu izglītībā) to support the two-section display.

**Updated news categories**:
- Visi / Konkursi / Apmācības / Pasākumi / Paziņojumi (matches the doc's filter chips)

**Real events** — use real Rīgas Vokālās mūzikas konkurss "Balsis 2026" dates and other events from the doc:
- "Rīgas Vokālās mūzikas konkurss 'Balsis 2026' — I kārta" — Feb 19 at Rīgas Skolēnu pils
- "Rīgas Vokālās mūzikas konkurss 'Balsis 2026' — I kārta" — Feb 20 at BJC "Altona"
- "Mūsdienu deju video konkurss" — registration open
- "Stikla mākslas programma" — March 23 & 30

**Updated team members** (from the doc, 4 real roles):
- Anna Bērziņa, Direktore
- Jānis Kalniņš, Metodiķis
- Līga Kalnīna, Interešu izglītības metodiķe (referenced in the doc)
- Mārtiņš Liepiņš, Pasākumu koordinators

Add real **resource items** for materials (Metodiskie ieteikumi, Nolikumi, Prezentācijas, Video lekcijas).

Add a new `quickLinks` export for the homepage quick-access section.

### File 3: `src/lib/i18n.ts` — Updated Translations
- Add `nav.training: "Tālākizglītība"`, `nav.materials: "Materiāli"`, `nav.nolikumi: "Nolikumi"`
- Add `home.quickLinks` section labels
- Update news categories to match real site: `competitions: "Konkursi"`, `training: "Apmācības"`, `events: "Pasākumi"`, `announcements: "Paziņojumi"`
- Add `news.methodical: "Jaunumi metodiskajā darbā"`, `news.general: "Jaunumi interešu izglītībā"`

### File 4: `src/pages/Index.tsx` — Homepage Restructure
Major changes:
1. **Hero section** — update subtitle to match real mission text from intereses.lv: "Rīgas Interešu izglītības metodiskā centra pamatfunkcija ir nodrošināt interešu izglītības metodiskā darba vienotu vadību un attīstību Rīgā."
2. **Quick Links section** (new) — add a 4-card grid after the hero with pink icon cards:
   - Apmācības (skolotājiem) → `/talakizglitiba`
   - Pasākumu kalendārs → `/pasakumi`
   - Digitālie materiāli → `/resursi`
   - Konkursi → `/jaunumi?category=competitions`
3. **Two news sections** — split into "Jaunumi metodiskajā darbā" (featured, shown first, 3 cards) and "Jaunumi interešu izglītībā" (3 cards below), matching the real site's priority structure
4. **Upcoming events section** — keep but show "Pieteikties" button on each event card
5. **Stats section** — keep with real numbers

### File 5: `src/components/layout/Header.tsx` — Navigation Update
- Add a `Tālākizglītība` nav item pointing to `/talakizglitiba`
- Rename `Resursi` → `Materiāli` to better match the real site
- Keep all 6 nav items, reordering: Sākums, Jaunumi, Pasākumi, Tālākizglītība, Materiāli, Kontakti
- Remove "Par mums" as a separate top-level nav (merge content into Kontakti page per the doc's suggestion)

### File 6: `src/App.tsx` — New Routes
- Add `/talakizglitiba` route → new `Training` page
- Add `/nolikumi` route → new `Nolikumi` page  
- Rename `/resursi` → `/materiali` (keep old redirect)
- Remove `/par-mums` as standalone, merge it into contact or keep minimal

### File 7: `src/pages/News.tsx` — Two-Section Layout + Author Display
- Add a **toggle/tab** between "Visi jaunumi", "Metodiskajā darbā", "Interešu izglītībā"
- Update category filter chips to: Visi / Konkursi / Apmācības / Pasākumi / Paziņojumi
- Pass author data to NewsCard for display

### File 8: `src/components/shared/NewsCard.tsx` — Author Display
- Add author name + role display at the bottom of each card (small avatar initials + name + role text)
- Add "Lasīt vairāk →" link (already exists but make it more prominent)
- Add reading time estimate (e.g. "3 min")

### File 9: `src/components/shared/EventCard.tsx` — Action Buttons
- Add a "Pieteikties" / "Uzzināt vairāk" button that appears on each event card
- Show `registrationUrl` link when available

### File 10: `src/pages/Contact.tsx` — Merged About + Contact
- Merge the About page content (mission, team members) into the Contact page
- Show a brief "Par mums" description at the top
- List all team members with their contact info
- Keep the contact form and address info

### File 11: `src/pages/Resources.tsx` — Digital Library Style
- Add a short introductory description at the top (per the doc)
- Add a sidebar-style category list showing material counts (PDF: 2, Video: 1, etc.)
- Add "Augšupielādēt" / "Lejupielādēt" button style
- Show newest resource as a featured card at top

### File 12: NEW `src/pages/Training.tsx` — Tālākizglītība Page
- New page matching the doc's vision for the training section
- Show a list of upcoming courses/seminars with:
  - Title, date/time, location
  - Available spots counter
  - "Pieteikties" button
  - Status badge (Atvērta reģistrācija / Noslēgusies)
- Use real training data (stikla māksla March 23/30, dramaturģija March 9/11, etc.)

---

## Color Values (Pink/Rose Palette)

```text
Light mode:
  --primary:            339 72% 45%     (magenta-pink #C42060)
  --primary-foreground: 0 0% 100%       (white)
  --secondary:          339 30% 95%     (very light pink)
  --secondary-foreground: 339 60% 35%
  --accent:             339 60% 94%     (light pink)
  --accent-foreground:  339 60% 35%
  --ring:               339 72% 45%

Dark mode:
  --primary:            339 70% 65%     (lighter pink for dark bg)
  --primary-foreground: 339 20% 10%
  --accent:             339 40% 25%
  --accent-foreground:  339 70% 80%
```

---

## Implementation Order

1. `src/index.css` — color change first (affects everything visually)
2. `src/data/mockData.ts` — real data (needed by all pages)
3. `src/lib/i18n.ts` — updated translations
4. `src/components/shared/NewsCard.tsx` — author display update
5. `src/components/shared/EventCard.tsx` — action buttons
6. `src/pages/Index.tsx` — homepage with quick links + two news sections
7. `src/pages/News.tsx` — two-section layout + category update
8. `src/pages/Contact.tsx` — merged about + contact
9. `src/pages/Resources.tsx` — digital library style
10. NEW `src/pages/Training.tsx` — new Tālākizglītība page
11. `src/components/layout/Header.tsx` — nav update
12. `src/App.tsx` — add new routes
