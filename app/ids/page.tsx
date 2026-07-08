"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heroStats = [
  { n: "5", l: "lenzen: Ik · Wij · Leiding · Organisatie · Wereld" },
  { n: "8", l: "SDG's geborgd in het Social Impact Dashboard" },
  { n: "Maatwerk", l: "Flexibel inzetbaar — van individueel tot organisatieniveau" },
];

const andersCards = [
  {
    icon: "🎯",
    titel: "Geen standaard vragenlijst",
    tekst: "Maatwerk analyse op de vraagstukken die voor jouw organisatie werkelijk relevant zijn.",
  },
  {
    icon: "📊",
    titel: "Kwantitatief én kwalitatief",
    tekst: "Data gecombineerd met observaties, gesprekken en patronen die je niet in een rapport ziet.",
  },
  {
    icon: "🔄",
    titel: "Vijf niveaus tegelijk",
    tekst: "Of gericht op één lens — afhankelijk van jouw vraagstuk. De IDS past zich aan, niet andersom.",
  },
  {
    icon: "🗺️",
    titel: "Concreet vervolgplan",
    tekst: "Geen dik rapport, maar heldere inzichten én vervolgstappen die passen bij jouw context.",
  },
];

const lenzen = [
  {
    nr: "1",
    kleur: "#EE7E06",
    naam: "IK",
    vraag: "Wat beweegt jou?",
    punten: ["Waarden & drijfveren", "Talenten & energie", "Persoonlijke groei", "Welzijn & balans"],
    vb: "Individuen, kinderen, jongeren, professionals",
  },
  {
    nr: "2",
    kleur: "#3E8FA3",
    naam: "WIJ",
    vraag: "Hoe verbinden mensen zich?",
    punten: ["Samenwerking & dynamiek", "Communicatie & vertrouwen", "Teams, gezinnen, netwerken", "Sociale veiligheid"],
    vb: "Teams, gezinnen, partners, gemeenschappen",
  },
  {
    nr: "3",
    kleur: "#EE7E06",
    naam: "LEIDING",
    vraag: "Waar ontstaat richting?",
    punten: ["Visie & koers", "Leiderschapsstijl", "Besluitvorming & invloed", "Rolmodel & cultuurdragers"],
    vb: "Leidinggevenden, teamleiders, informeel leiderschap",
  },
  {
    nr: "4",
    kleur: "#3E8FA3",
    naam: "ORGANISATIE",
    vraag: "Ondersteunt de structuur groei?",
    punten: ["Structuur & processen", "Strategie & doelen", "Cultuur & systemen", "Middelen & ondersteuning"],
    vb: "Afdelingen, scholen, organisaties, instellingen",
  },
  {
    nr: "5",
    kleur: "#7B5EA7",
    naam: "WERELD",
    vraag: "Welke omgeving beïnvloedt?",
    punten: ["Maatschappelijke trends", "Wet- & regelgeving", "Economische factoren", "Lokale & globale context"],
    vb: "Sociaaleconomische omgeving, beleid, maatschappij",
  },
];

const cases = [
  {
    sector: "Persoonlijke ontwikkeling",
    quote: "\"Wat is mijn ontwikkelvraag?\"",
    tekst: "Een individu wil grip krijgen op zijn drijfveren, energie en groei.",
    tags: [{ naam: "IK", kleur: "#EE7E06" }],
  },
  {
    sector: "Teamsamenwerking",
    quote: "\"Waarom loopt dit team vast?\"",
    tekst: "Een team ervaart wrijving of gebrek aan beweging. We analyseren de dynamiek én het leiderschap.",
    tags: [
      { naam: "WIJ", kleur: "#3E8FA3" },
      { naam: "LEIDING", kleur: "#EE7E06" },
    ],
  },
  {
    sector: "Organisatieverandering",
    quote: "\"Waarom slaat verandering niet aan?\"",
    tekst: "Een organisatie investeert in verandering maar ziet weinig beweging. We zoeken de oorzaak in structuur, systemen én externe context.",
    tags: [
      { naam: "ORGANISATIE", kleur: "#3E8FA3" },
      { naam: "WERELD", kleur: "#7B5EA7" },
    ],
  },
  {
    sector: "Onderwijs",
    quote: "\"Hoe ontwikkelen jongeren zich?\"",
    tekst: "Een onderwijsinstelling wil een student journey ontwikkelen. Alle vijf lenzen zijn relevant — van individuele groei tot maatschappelijke context.",
    tags: [
      { naam: "IK", kleur: "#EE7E06" },
      { naam: "WIJ", kleur: "#3E8FA3" },
      { naam: "LEIDING", kleur: "#EE7E06" },
      { naam: "ORGANISATIE", kleur: "#3E8FA3" },
      { naam: "WERELD", kleur: "#7B5EA7" },
    ],
  },
];

const flow = [
  { nr: "01", naam: "Impact Check", sub: "Eerste inzicht", actief: false },
  { nr: "02", naam: "IDS", sub: "Diepgaande analyse", actief: true },
  { nr: "03", naam: "Dashboard", sub: "Inzicht zichtbaar", actief: false },
  { nr: "04", naam: "Build Strong", sub: "Gerichte ontwikkeling", actief: false },
  { nr: "05", naam: "Duurzame Impact", sub: "Blijvend resultaat", actief: false },
];

export default function IdsPagina() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative bg-donker px-[5%] pt-[140px] pb-20 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 75% 20%, rgba(62,143,163,0.15) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 10% 80%, rgba(238,126,6,0.08) 0%, transparent 60%)",
            }}
          />
          <div className="max-w-[1100px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-blauw/[0.12] border border-blauw/25 text-blauw text-[11px] font-semibold tracking-[1.5px] px-3.5 py-[5px] rounded-full mb-5 uppercase">
                Impact Dynamics Scan
              </div>
              <div className="mb-5">
                <Image src="/logos/ids.jpeg" alt="IDS" width={90} height={90} className="h-[90px] w-auto rounded-xl object-contain" />
              </div>
              <h1 className="font-serif text-[clamp(40px,5vw,66px)] font-light text-white leading-[1.05] tracking-[-1px] mb-4">
                Vijf lenzen.
                <br />
                <em className="text-blauw not-italic italic">Eén systeem.</em>
              </h1>
              <p className="text-white/50 text-base leading-[1.75] mb-7 max-w-[440px]">
                Duurzame impact ontstaat wanneer we verder kijken dan losse
                onderdelen. De IDS analyseert de dynamiek van jouw
                organisatie door vijf lenzen tegelijk.
              </p>
              <div className="flex gap-2.5 flex-wrap">
                <a
                  href="#ids-cta"
                  className="bg-oranje text-white px-6 py-[11px] rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
                >
                  Vraag een IDS aan
                </a>
                <a
                  href="#lenzen"
                  className="bg-transparent text-white border-[1.5px] border-white/25 px-6 py-[11px] rounded-full text-sm font-medium hover:border-white/50 transition-colors"
                >
                  Bekijk de 5 lenzen
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              {heroStats.map((s) => (
                <div
                  key={s.l}
                  className="bg-white/5 border border-white/[0.08] rounded-2xl px-[22px] py-[18px]"
                >
                  <div className="font-serif text-3xl text-blauw leading-none">
                    {s.n}
                  </div>
                  <div className="text-xs text-white/40 mt-[5px] leading-[1.4]">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WAT IS IDS */}
        <section className="px-[5%] py-[88px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Wat is IDS
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-light leading-[1.15] mb-3">
              Verder kijken dan losse onderdelen
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[520px] mb-9">
              De Impact Dynamics Scan is een diepgaand analysetraject waarbij
              een 7LIFE-consultant samen met jouw organisatie kijkt naar vijf
              niveaus van dynamiek.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {andersCards.map((c) => (
                <div
                  key={c.titel}
                  className="flex gap-3.5 items-start bg-kaart border border-black/[0.07] rounded-2xl p-5"
                >
                  <div className="text-xl flex-shrink-0 mt-0.5">{c.icon}</div>
                  <div>
                    <strong className="text-sm font-medium block mb-1">
                      {c.titel}
                    </strong>
                    <p className="text-[13px] text-subtekst leading-[1.5]">
                      {c.tekst}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5 LENZEN */}
        <section className="bg-donker px-[5%] py-[72px]" id="lenzen">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
            <div>
              <div className="text-[11px] font-semibold tracking-[2px] text-oranje/85 uppercase mb-2.5">
                De 5 lenzen
              </div>
              <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-light text-white leading-[1.15] mb-3">
                Zicht op wat er écht toe doet
              </h2>
              <p className="text-white/50 text-sm leading-[1.75] mb-6">
                Klik op een lens voor uitgebreide toelichting. Wanneer alle
                lenzen samenkomen, ontstaat helderheid, verbinding en
                blijvende impact.
              </p>
              <div className="bg-white/[0.06] border border-white/10 rounded-xl px-5 py-4 flex items-center gap-3.5">
                <div className="font-serif text-4xl text-oranje">8</div>
                <div>
                  <div className="text-[13px] text-white/45 leading-[1.4]">
                    SDG&apos;s geborgd in het
                    <br />
                    Social Impact Dashboard
                  </div>
                  <div className="flex gap-1 mt-2 flex-wrap">
                    {["4", "5", "8", "10", "11", "13", "16", "17"].map((nr) => (
                      <div
                        key={nr}
                        className="w-7 h-7 rounded-md bg-oranje flex items-center justify-center text-[10px] font-bold text-white"
                      >
                        {nr}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[13px] text-white/30 italic mt-4">
                Wanneer alle lenzen samenkomen, ontstaat helderheid,
                verbinding en blijvende impact.
              </p>
              <a
                href="#ids-cta"
                className="inline-block mt-5 bg-oranje text-white text-[13px] px-5 py-2.5 rounded-full font-medium hover:bg-[#d4710a] transition-colors"
              >
                Vraag een IDS aan →
              </a>
            </div>

            <div className="flex flex-col gap-1.5">
              {lenzen.map((l, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={l.naam}
                    className={`rounded-xl overflow-hidden cursor-pointer border transition-colors ${
                      isOpen ? "border-oranje" : "border-white/[0.07] hover:border-white/20"
                    }`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <div className="flex items-center gap-3 px-4 py-3.5 bg-white/[0.04]">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs text-white flex-shrink-0"
                        style={{ background: l.kleur }}
                      >
                        {l.nr}
                      </div>
                      <div className="text-[13px] font-semibold text-white flex-1">
                        {l.naam}
                      </div>
                      <div className="text-xs text-white/40 flex-[2]">
                        {l.vraag}
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
                      <div className="px-4 pb-4 pl-14 bg-white/[0.03]">
                        <ul className="mb-2">
                          {l.punten.map((p) => (
                            <li
                              key={p}
                              className="text-[13px] text-white/50 py-[3px] pl-3 relative before:content-['·'] before:absolute before:left-0 before:text-oranje"
                            >
                              {p}
                            </li>
                          ))}
                        </ul>
                        <div className="text-xs text-white/30 italic mt-1">
                          {l.vb}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FLEXIBEL INZETBAAR */}
        <section className="px-[5%] py-[72px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Flexibel inzetbaar
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-light leading-[1.15] mb-3">
              Eén lens of alle vijf — jij bepaalt de ingang
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[520px] mb-9">
              De IDS past zich aan jouw vraagstuk aan. Of je nu één thema
              wilt doorgronden of de hele organisatiedynamiek in kaart wilt
              brengen.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cases.map((c) => (
                <div
                  key={c.sector}
                  className="bg-kaart border border-black/[0.07] rounded-2xl p-6"
                >
                  <div className="text-[11px] font-semibold tracking-[1.5px] text-oranje uppercase mb-2.5">
                    {c.sector}
                  </div>
                  <div className="font-serif text-base italic font-light mb-2.5">
                    {c.quote}
                  </div>
                  <div className="text-[13px] text-subtekst leading-[1.65]">
                    {c.tekst}
                  </div>
                  <div className="flex gap-1.5 flex-wrap mt-3">
                    {c.tags.map((t) => (
                      <span
                        key={t.naam}
                        className="text-[11px] font-medium px-2 py-[3px] rounded-md"
                        style={{
                          background: `${t.kleur}1A`,
                          color: t.kleur,
                        }}
                      >
                        {t.naam}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IDS IN DE FLOW */}
        <section className="px-[5%] py-[72px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              IDS in de 7LIFE flow
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-light leading-[1.15] mb-3">
              Onderdeel van een samenhangend systeem
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[520px] mb-7">
              De IDS staat niet op zichzelf — het bouwt voort op de Impact
              Check en vormt de basis voor het dashboard en de programma&apos;s.
            </p>
            <div className="flex flex-col sm:flex-row rounded-2xl overflow-hidden border border-black/[0.07]">
              {flow.map((f, i) => (
                <div
                  key={f.nr}
                  className={`flex-1 p-5 ${
                    i < flow.length - 1 ? "border-b sm:border-b-0 sm:border-r border-black/[0.07]" : ""
                  } ${f.actief ? "bg-oranje/[0.04]" : "bg-kaart"}`}
                  style={f.actief ? { borderColor: "#EE7E06" } : undefined}
                >
                  <div className="text-[10px] font-bold tracking-[1.5px] text-oranje uppercase mb-1.5">
                    {f.nr}
                  </div>
                  <div className="text-[13px] font-semibold mb-1">{f.naam}</div>
                  <div className="text-xs text-subtekst leading-[1.35]">
                    {f.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-donker px-[5%] py-20 text-center overflow-hidden" id="ids-cta">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 110%, rgba(62,143,163,0.15) 0%, transparent 65%)",
            }}
          />
          <div className="relative z-10">
            <h2 className="font-serif text-[clamp(28px,4vw,52px)] font-light text-white leading-[1.1] mb-3">
              Wil je weten wat IDS voor
              <br />
              jouw organisatie kan betekenen?
            </h2>
            <p className="text-white/45 text-[15px] max-w-[400px] mx-auto mb-7 leading-[1.7]">
              Plan een vrijblijvend gesprek. We denken graag mee over de
              juiste aanpak — of dat nu een IDS-traject is, of beginnen met
              een Impact Check.
            </p>
            <div className="flex gap-2.5 justify-center flex-wrap">
              <a
                href="mailto:info@7life.nl?subject=Aanvraag IDS traject"
                className="bg-oranje text-white px-6 py-[11px] rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
              >
                Plan een kennismaking
              </a>
              <Link
                href="/"
                className="bg-transparent text-white border-[1.5px] border-white/25 px-6 py-[11px] rounded-full text-sm font-medium hover:border-white/50 transition-colors"
              >
                Terug naar 7LIFE
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
