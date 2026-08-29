"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heroBadges = [
  { label: "★ EU Richtlijn 2023/970", gold: true },
  { label: "ISO 27001 gecertificeerde infrastructuur" },
  { label: "GDPR-compliant · Data in EU" },
  { label: "SOC 2 Type II" },
];

const uitdagingen = [
  {
    kleur: "#EE7E06",
    titel: "Objectieve functiearchitectuur",
    tekst: "Geen willekeurige functietitels meer, maar een gestructureerd huis met normfuncties, archetypes en grades gebaseerd op de FuWa-methode.",
  },
  {
    kleur: "#EE7E06",
    titel: "EU-conforme loonkloof analyse",
    tekst: "Within-group vergelijking per functie+niveau, bandpositie analyse en OJA normsalaris methode. Klaar voor rapportage aan toezichthouders.",
  },
  {
    kleur: "#EE7E06",
    titel: "Beveiligd & privacyveilig",
    tekst: "ISO 27001-gecertificeerde infrastructuur, GDPR-compliant dataopslag in de EU, 2FA voor alle gebruikers en strikte data-isolatie per klant.",
  },
  {
    kleur: "#EE7E06",
    titel: "EU-compliancy op FunctieWaardering",
    tekst: "Voldoet aan de 4 vereisten van de EU en de extra eisen van het European Institute for Gender Equality.",
  },
];

const modules = [
  {
    kleur: "#CDA956",
    titel: "Normfuncties bibliotheek",
    tekst: "1200+ normfuncties in 20 families, van HR en IT tot zorg (GGZ), accountancy en juridisch. Elk met rolprofiel, competenties, knowledge, experience en FuWa-scores op drie lagen (L1, L2, L3).",
    tags: ["1200+ functies", "20 families", "6 archetypes", "G1–G10 grades"],
  },
  {
    kleur: "#CDA956",
    titel: "Functiepaspoort",
    tekst: "Volledig functieprofiel in 8 tabbladen: overzicht, rolprofiel, competenties, knowledge, experience, skills, FuWa & beloning en mobiliteitsanalyse. Met PDF-export en cascade-kalibratie per organisatieniveau.",
    tags: ["8 tabs", "PDF export", "Cascade-kalibratie"],
  },
  {
    kleur: "#CDA956",
    titel: "FuWa Functiewaardering",
    tekst: "Drie-laags waarderingsmodel: L1 (8 factoren, 100%), L2 Context & Performance (4 factoren) en L3 Impact & Development (5 factoren). Objectief, reproduceerbaar en auditeerbaar.",
    tags: ["L1 + L2 + L3", "8 factoren", "Auditeerbaar"],
  },
  {
    kleur: "#CDA956",
    titel: "Pay Equity Dashboard",
    tekst: "EU-conforme loonkloof analyse met drie methoden: ongecorrigeerd, within-group (EU vereist) en OJA normsalaris (diepste analyse). Inclusief bandpositie analyse en 5% drempelcheck per categorie.",
    tags: ["EU 2023/970", "Art. 9 & 10", "3 methoden"],
  },
  {
    kleur: "#CDA956",
    titel: "Functiemapping",
    tekst: "Koppel bestaande functietitels van de klant aan normfuncties met AI-suggesties (Anthropic Claude). Cascade-model: mapping op organisatie-, divisie- of entiteitsniveau.",
    tags: ["AI-suggesties", "Cascade", "CSV import"],
  },
  {
    kleur: "#CDA956",
    titel: "Medewerkersbeheer",
    tekst: "CSV-import van medewerkerdata per entiteit met upsert en soft-delete logica. Bruto uurloon als basis voor zuivere loonanalyse, ongeacht contractvorm of werktijden.",
    tags: ["CSV import", "Upsert logica", "Per entiteit"],
  },
  {
    kleur: "#CDA956",
    titel: "Salarisformule & Indexen",
    tekst: "Configureerbare salarisformule met sector-, subsector- en regioindexen. Cascade-model van entiteit naar master. Historisch overzicht met ingangsdatums en bevestigingsflow.",
    tags: ["Sector-index", "Regio-index", "Historisch"],
  },
  {
    kleur: "#CDA956",
    titel: "Mobiliteitsanalyse",
    tekst: "Automatische berekening van mobiliteitspaden tussen functies op basis van rolprofiel-overlap, competentiegaps en niveau-proximity. Max 8 aanbevolen paden per functie.",
    tags: ["Gap-analyse", "Rolprofiel-overlap", "Max 8 paden"],
  },
];

const euArtikelen = [
  {
    nr: "Artikel 9",
    titel: "Rapportageverplichting",
    tekst: "Ongecorrigeerde loonkloof, mediaan, deeltijdverschillen. Minimumgroep 5 medewerkers voor privacybescherming.",
  },
  {
    nr: "Artikel 10",
    titel: "5% drempelcheck",
    tekst: "Per functie+niveau gecorrigeerde loonkloof. Bij >5%: joint pay assessment verplicht.",
  },
  {
    nr: "OJA Methode",
    titel: "Diepste analyse",
    tekst: "Afwijking van objectief normsalaris (FuWa L1+L2) — het puur onverklaarde deel van de loonkloof.",
  },
];

const voorWie = [
  {
    titel: "Zorg- en GGZ-instellingen",
    tekst: "Volledig uitgewerkte normfunctiebibliotheek voor GGZ en bredere zorgsector. Inclusief BIG-registraties, NIP, BPSW en specifieke weging voor psychische belasting.",
  },
  {
    titel: "Zakelijke dienstverlening",
    tekst: "Normfuncties voor accountancy, audit, fiscaal en juridisch. Inclusief gespecialiseerde subfamilies voor belastingrecht, arbeidsrecht, notariaat en compliance.",
  },
  {
    titel: "Corporate & Industrie",
    tekst: "HR, IT, Finance, Operations en Facilitair. De corporate functiefamilies vormen de basis van het OJA systeem met sector- en regio-indexen voor nauwkeurige marktvergelijking.",
  },
  {
    titel: "HR Advies- en Administratiekantoren",
    tekst: "Via de Partner-rol kunnen adviseurs voor meerdere klanten tegelijk werken. AI-gestuurde functiemapping versnelt onboarding van nieuwe klanten aanzienlijk.",
  },
  {
    titel: "Overheid & Gemeenten",
    tekst: "Objectieve, toetsbare functiewaardering voor publieke organisaties. OJA sluit aan op bestaande overheids-CAO's en ondersteunt gemeenten bij verantwoording aan gemeenteraad en toezichthouders.",
  },
  {
    titel: "Financiële Instellingen & Pensioenfondsen",
    tekst: "Beloningsbeleid dat standhoudt onder streng toezicht. OJA helpt banken, verzekeraars en pensioenfondsen hun functiehuis en beloningsstructuur transparant en auditeerbaar te maken.",
  },
];
export default function OjaPagina() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative flex items-end overflow-hidden bg-donker min-h-[520px] px-[5%] pt-[170px] pb-16">
          <Image
            src="/oja/hero-achtergrond.jpg"
            alt="Open Job Architecture"
            fill
            priority
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(20,20,20,0.92) 0%, rgba(20,20,20,0.78) 40%, rgba(20,20,20,0.4) 70%, rgba(20,20,20,0.15) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(0deg, rgba(20,20,20,0.5) 0%, transparent 40%)",
            }}
          />
          <div className="max-w-[1100px] mx-auto relative z-10 w-full">
            <div className="max-w-[680px]">
              <div className="inline-flex items-center gap-1.5 bg-oranje/10 border border-oranje/[0.22] text-oranje text-[11px] font-semibold tracking-[1.5px] px-3.5 py-[5px] rounded-full mb-5 uppercase">
                Open Job Architecture
              </div>
              <h1 className="font-serif text-[clamp(30px,4.5vw,46px)] font-light text-white leading-[1.2] mb-5">
                Het transparante functiehuis voor eerlijk,
                inclusief en duurzaam werk
              </h1>
              <p className="text-white/60 text-[15px] leading-[1.75] mb-8">
                OJA is een SaaS-platform dat organisaties helpt bij
                functiearchitectuur, objectieve functiewaardering en pay
                equity analyses — volledig conform EU Richtlijn 2023/970.
              </p>
              <div className="flex gap-2 flex-wrap">
                {heroBadges.map((b) => (
                  <span
                    key={b.label}
                    className={
                      b.gold
                        ? "text-[13px] px-4 py-2 rounded-full border bg-[#F2C12E]/20 border-[#F2C12E]/40 text-[#F2C12E]"
                        : "text-[13px] px-4 py-2 rounded-full border bg-white/10 border-white/20 text-white"
                    }
                  >
                    {b.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ONZE UITDAGING */}
        <section className="px-[5%] py-[72px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-stretch">
            <div>
              <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
                Onze uitdaging
              </div>
              <h2 className="font-serif text-[28px] font-light leading-[1.2] mb-3">
                Loontransparantie is geen keuze meer — het is wet
              </h2>
              <p className="text-[15px] text-subtekst leading-[1.7] max-w-[640px] mb-8">
                Per 1 januari 2027 zijn organisaties met 100+ medewerkers
                verplicht te rapporteren over de loonkloof. Maar eerlijk
                belonen begint bij een objectief fundament: een helder
                functiehuis met een transparante waarderingsmethodiek.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {uitdagingen.map((u) => (
                  <div
                    key={u.titel}
                    className="bg-kaart border-[1.5px] border-black/[0.07] rounded-2xl px-5 py-[18px]"
                    style={{ borderTop: `3px solid ${u.kleur}` }}
                  >
                    <h3 className="text-sm font-semibold mb-1.5">{u.titel}</h3>
                    <p className="text-[13px] text-subtekst leading-[1.55]">
                      {u.tekst}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-kaart border border-black/[0.07] rounded-2xl overflow-hidden flex flex-col">
              <div className="relative h-[220px] flex-shrink-0">
                <Image
                  src="/oja/testimonial.jpg"
                  alt="Onze motivatie"
                  fill
                  className="object-cover object-[center_5%]"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <div className="text-xs font-semibold text-oranje uppercase tracking-wide mb-3">
                  Onze Motivatie
                </div>
                <p className="text-sm text-subtekst leading-[1.7]">
                  Gelijke behandeling en beloning is voor ons geen
                  verplichting waaraan je moet voldoen, maar de
                  normaalste zaak van de wereld. Met al onze kennis en
                  kunde zijn wij al sinds onze oprichting voorvechters
                  voor gelijke kansen en oprechte waardering voor wie
                  jij bent. Het OJA tool is daarmee één van onze
                  instrumenten waarmee wij dat doel ondersteunen en
                  nastreven.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FUNCTIONALITEITEN */}
        <section className="bg-donker px-[5%] py-[72px]">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-stretch">
            <div className="flex flex-col">
              <div className="text-[11px] font-semibold tracking-[2px] text-oranje/85 uppercase mb-2.5">
                Functionaliteiten
              </div>
              <h2 className="font-serif text-[28px] font-light text-white leading-[1.2] mb-3">
                Alles wat u nodig heeft voor eerlijk beloningsbeleid
              </h2>
              <p className="text-white/45 text-[15px] leading-[1.7] mb-7">
                OJA biedt een volledig geïntegreerd platform van
                functiearchitectuur tot pay equity rapportage.
              </p>

              <div className="border-t border-white/10 pt-6">
                <div className="text-[11px] font-semibold tracking-[2px] text-oranje/85 uppercase mb-2.5">
                  Wetgeving &amp; Compliance
                </div>
                <h3 className="font-serif text-xl font-light text-white leading-[1.3] mb-2.5">
                  Volledig conform EU Richtlijn 2023/970
                </h3>
                <p className="text-white/45 text-[14px] leading-[1.7] mb-5">
                  Deadline implementatie: 1 januari 2027. OJA ondersteunt
                  alle verplichte indicatoren en rapportages.
                </p>
                <div className="flex flex-col gap-2 mb-7">
                  {euArtikelen.map((a) => (
                    <div
                      key={a.nr}
                      className="bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3"
                    >
                      <h4 className="text-[13px] font-semibold text-oranje mb-1">
                        {a.nr} — {a.titel}
                      </h4>
                      <p className="text-xs text-white/55 leading-[1.5]">
                        {a.tekst}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#cta"
                className="inline-block self-start mt-auto bg-oranje text-white text-[13px] px-5 py-2.5 rounded-full font-medium hover:bg-[#d4710a] transition-colors"
              >
                Vraag een demo aan →
              </a>
            </div>

            <div className="flex flex-col gap-1.5">
              {modules.map((m, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={m.titel}
                    className={`rounded-xl overflow-hidden cursor-pointer border transition-colors ${
                      isOpen ? "border-oranje" : "border-white/[0.07] hover:border-white/20"
                    }`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <div className="flex items-center gap-3 px-4 py-3.5 bg-white/[0.04]">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs text-white flex-shrink-0"
                        style={{ background: m.kleur }}
                      >
                        {i + 1}
                      </div>
                      <div className="text-[13px] font-semibold text-white flex-1">
                        {m.titel}
                      </div>
                      <div
                        className={`text-white/30 text-[13px] transition-transform ${
                          isOpen ? "rotate-90 text-oranje" : ""
                        }`}
                      >
                        ›
                      </div>
                    </div>
                    {isOpen && (
                      <div className="px-4 pb-5 pl-14 bg-white/[0.03]">
                        <p className="text-[13px] text-white/55 leading-[1.65] mb-3 mt-3">
                          {m.tekst}
                        </p>
                        <div className="flex gap-1.5 flex-wrap">
                          {m.tags.map((t) => (
                            <span
                              key={t}
                              className="bg-white/[0.08] text-white/60 text-[11px] font-semibold px-2.5 py-1 rounded-full"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* VOOR WIE */}
        <section className="px-[5%] py-[72px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Doelgroepen
            </div>
            <h2 className="font-serif text-[28px] font-light leading-[1.2] mb-3">
              Voor wie is OJA gebouwd?
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[640px] mb-8">
              Het OJA Functiehuis tool ondersteunt alle organisaties die
              moeten voldoen aan de wet loontransparantie. Van een
              eenvoudige loonkloofanalyse tot een volledig duurzaam
              beloningsbeleid, van MKB bedrijf tot multinational — met
              OJA heb je de oplossing in handen. OJA werkt als
              zelfstandig platform of als onderdeel van het 7LIFE Social
              Impact Dashboard. Hieronder een paar voorbeelden van
              sectoren die wij kunnen bedienen.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {voorWie.map((v) => (
                <div
                  key={v.titel}
                  className="bg-kaart border border-black/[0.07] rounded-2xl p-6"
                  style={{ borderTop: "3px solid #3E8FA3" }}
                >
                  <h3 className="text-[15px] font-semibold mb-2">
                    {v.titel}
                  </h3>
                  <p className="text-[13.5px] text-subtekst leading-[1.6]">
                    {v.tekst}
                  </p>
                </div>
              ))}
            </div>
            <div
              className="bg-kaart border border-black/[0.07] rounded-2xl p-6"
              style={{ borderTop: "3px solid #3E8FA3" }}
            >
              <h3 className="text-[15px] font-semibold mb-2">
                Heel Europa — organisaties met vestigingen in meerdere
                landen
              </h3>
              <p className="text-[13.5px] text-subtekst leading-[1.6] mb-3">
                De combinatie van de FuWa-methode met sector-, subsector- én
                regio-indexen per land maakt OJA uniek geschikt voor
                internationale organisaties. Elke vestiging krijgt een
                salarisnorm die rekening houdt met het lokale loonpeil —
                terwijl de onderliggende functiearchitectuur en
                waarderingsmethode overal gelijk blijft.
              </p>
              <div className="flex gap-1.5 flex-wrap">
                {[
                  "Regio-index per land",
                  "Sector-index",
                  "Subsector-index",
                  "Één methode, heel Europa",
                  "EU-vestigingen",
                ].map((t) => (
                  <span
                    key={t}
                    className="bg-black/[0.04] text-subtekst text-[11px] font-semibold px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA / FOOTER-INTRO */}
        <section className="bg-donker px-[5%] py-16 text-center" id="cta">
          <h2 className="font-serif text-[32px] font-medium text-white leading-[1.2] mb-3">
            Klaar om te starten?
          </h2>
          <p className="text-white/50 text-[15px] max-w-[440px] mx-auto mb-7 leading-[1.6]">
            Neem contact op voor een vrijblijvende demo of pilotovereenkomst.
          </p>
          <div className="flex gap-2.5 justify-center flex-wrap">
            <a
              href="mailto:info@7life.nl?subject=Demo OJA"
              className="bg-oranje text-white px-6 py-[11px] rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
            >
              ✉ Neem contact op
            </a>
            <a
              href="mailto:info@7life.nl?subject=Brochure-aanvraag OJA"
              className="bg-transparent text-white border-[1.5px] border-white/25 px-6 py-[11px] rounded-full text-sm font-medium hover:border-white/50 transition-colors"
            >
              Vraag de brochure aan
            </a>
          </div>
          <p className="text-white/30 text-xs mt-6 leading-[1.6]">
            © 2026 7LIFE Nederland BV · OJA Platform · Alle rechten
            voorbehouden
            <br />
            Infrastructuur: Supabase (ISO 27001, SOC 2) · Vercel (SOC 2) ·
            GitHub (SOC 2, ISO 27001) · Data in EU (Ireland)
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
