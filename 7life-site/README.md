# 7LIFE Content Factory — projectfundament

Losstaand Next.js-project (geen relatie met de OJA-repo), gebaseerd op
`index_def.html`. **De homepage is compleet**: alle secties zijn omgezet
naar componenten. De 11 losse pagina's (impact-check, ids, oja, etc.)
moeten nog omgezet worden.

## Lokaal draaien

```powershell
cd 7life-site
npm install
npm run dev
```

Open daarna http://localhost:3000

## Structuur

```
app/
  layout.tsx      → fonts (Fraunces + DM Sans) en metadata
  globals.css     → basisstijlen
  page.tsx        → homepage, voegt alle secties samen
components/
  Header.tsx           → nav met mega-menu
  Hero.tsx             → hero-sectie
  MensSectie.tsx       → "Wij zien de mens achter de uitdaging" + communicatiestijlen
  AchterZitSectie.tsx  → donker "Achter X zitten Y"-blok
  VraagSectie.tsx      → "Wat herken jij?"-kaartenraster (links, geen state)
  JourneySectie.tsx    → interactieve 4-stappen journey (client component, useState)
  VerhalenSectie.tsx   → "Impact in de praktijk"-verhalen
  SitSectie.tsx        → Social Impact Theater-banner met events
  ProfessionalsSectie.tsx → trainer/innovatiepartner/academie + zoek-een-professional
  CtaSectie.tsx        → "Start met een Impact Check"
  ContactSectie.tsx    → contactgegevens + kwaliteitsdocumenten
  Footer.tsx           → footer
public/
  logo.png        → logo, geëxtraheerd uit de originele HTML
tailwind.config.ts → kleuren/fonts 1-op-1 uit je huisstijl (--o, --d, --b, --p, --bg, etc.)
```

## Nog te doen

1. De 11 losse pagina's omzetten naar `app/<naam>/page.tsx`:
   `impact-check`, `ids`, `oja`, `social-impact-dashboard`, `organisaties`,
   `leiderschap`, `jongeren`, `opleiden`, `wie-zijn-wij`, `foundation`,
   `methodiek` (bron: `7life-methodiek.html`)
3. Echte foto's: nu staan er placeholders waar de HTML ook placeholders had
   ("foto 2", "foto 13", etc.) — deze vervangen door `/public` afbeeldingen
   of Supabase storage-URL's
4. Contactformulier / mailto-links: nu nog `mailto:` net als het origineel;
   kan later een echte API-route worden als je dat wilt
5. De vier PDF's in de Contact-sectie (`algemene-voorwaarden.pdf` etc.)
   moeten nog naar `/public` toegevoegd worden — nu zijn het dode links
6. Mobiel navigatiemenu (hamburger) — de huidige nav toont het mega-menu
   alleen vanaf `lg`-breakpoint; op mobiel is er nog geen menu-toggle

## Gevonden en genegeerd: dode code uit de originele HTML

- `antwoorden`-array + `selectVraag()` + `#vraagResponse` — nergens aangeroepen
- `.oja-banner`-CSS-klasse — nergens in de HTML-body gebruikt

## Aandachtspunten bij /onze-mensen

- De 34 mensen (12 met foto + eigen pagina-link, 22 nog zonder foto) komen
  uit een kale, ongestylede WordPress-export (Divi-thema, geen 7LIFE-
  huisstijl) — de vormgeving hierboven is door mij opgezet in lijn met de
  rest van de site, niet overgenomen uit een bestaand ontwerp
- De 12 foto's laden nu rechtstreeks vanaf `accent-dev.nl` (hotlinking naar
  de dev-WordPress-omgeving). Zodra die omgeving wordt uitgezet, verdwijnen
  deze foto's — ze moeten op een gegeven moment naar `/public` of Supabase
  storage
- De WordPress-data had een tweede categorie `trainer2` naast `trainer`
  (bijv. bij Sylvia Schouten, Erica Duenk, Melissa Brinkhof-Kanis) zonder
  duidelijke betekenis op de pagina zelf — daar is nu geen onderscheid in
  gemaakt; laat het weten als dat een echt onderscheid moet worden (bijv.
  "nieuw" vs. "gevestigd", of een ander soort rol)
- De 12 losse trainerpagina's (`/trainers/maroesja-van-der-pols/` etc.)
  bestaan nog niet in dit project — de kaarten linken nu nog naar de oude
  `accent-dev.nl`-URL's

## Belangrijk verschil met de originele HTML

- Interactieve onderdelen (journey-stappen) zijn **client components**
  (`"use client"` bovenaan het bestand) met React state, in plaats van
  losse `<script>`-blokken met `document.querySelector`.
- Kleuren staan niet meer als CSS-variabelen maar als Tailwind-kleuren
  (`bg-oranje`, `text-donker`, etc.) — zelfde hex-waarden, andere syntax.
- Vraag-kaarten en verhalen-kaarten openen nu in hetzelfde tabblad
  (interne navigatie) in plaats van een nieuw tabblad, omdat het nu één
  samenhangende site is in plaats van losse HTML-bestanden.
- Communicatiestijlen-kleuren zijn gecorrigeerd naar de canonieke mapping
  (Pionier=navy, Doener=paars, Zorger=rood, Verbinder=goud, Strateeg=blauw,
  Beheerder=grijs, Doordenker=groen) — de originele homepage-HTML had hier
  een fout die `7life-methodiek.html` wél goed had.

