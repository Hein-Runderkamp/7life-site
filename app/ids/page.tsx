"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export default function IdsPagina() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative flex items-end overflow-hidden bg-donker min-h-[520px] px-[5%] pt-[170px] pb-16">
          <Image
            src="/ids/achtergrond.jpg"
            alt="Impact Dynamics Scan"
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
            <div className="flex-1 min-w-[280px] max-w-[620px]">
              <h1 className="font-serif text-[clamp(40px,5vw,66px)] font-light text-white leading-[1.05] tracking-[-1px] mb-4">
                Vijf lenzen.
                <br />
                <em className="text-blauw not-italic italic">Eén systeem.</em>
              </h1>
              <p className="text-white/55 text-base leading-[1.75] mb-7 max-w-[460px]">
                Duurzame impact ontstaat wanneer we verder kijken dan losse
                onderdelen. De Impact Dynamics Scan analyseert de dynamiek van jouw
                organisatie door vijf lenzen tegelijk. Samen met jou kiezen
                we voor een lens die jouw organisatie sterker maakt.
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
              De Impact Dynamics Scan past zich aan jouw vraagstuk aan. Of je
              nu één thema wilt doorgronden of de hele organisatiedynamiek in
              kaart wilt brengen.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cases.map((c) => (
                  <div
                    key={c.sector}
                    className="bg-kaart border border-black/[0.07] rounded-2xl p-5"
                  >
                    <div className="text-[10.5px] font-semibold tracking-[1.5px] text-oranje uppercase mb-2">
                      {c.sector}
                    </div>
                    <div className="font-serif text-[15px] italic font-light mb-2">
                      {c.quote}
                    </div>
                    <div className="text-[12.5px] text-subtekst leading-[1.6]">
                      {c.tekst}
                    </div>
                    <div className="flex gap-1.5 flex-wrap mt-3">
                      {c.tags.map((t) => (
                        <span
                          key={t.naam}
                          className="text-[10.5px] font-medium px-2 py-[3px] rounded-md"
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

              <div className="rounded-card overflow-hidden border-[1.5px] border-black/[0.07] bg-kaart lg:sticky lg:top-[100px]">
                <div className="relative h-[220px] border-t-4 border-oranje">
                  <Image
                    src="/ids/testimonial.jpg"
                    alt="Ervaring met de Impact Dynamics Scan"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <div className="text-xs font-semibold text-oranje uppercase tracking-wide mb-3">
                    Focus op verbetering
                  </div>
                  <blockquote className="font-serif text-lg italic text-tekst leading-snug">
                    &ldquo;Samen met een adviseur van 7LIFE hebben we grote
                    stappen gemaakt op het gebied van duurzame inzet van onze
                    mensen door de &apos;WIJ&apos; lens te gebruiken.&rdquo;
                  </blockquote>
                </div>
              </div>
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

        {/* CTA */}
        <section className="relative bg-achtergrond px-[5%] py-20 text-center overflow-hidden" id="ids-cta">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 110%, rgba(62,143,163,0.08) 0%, transparent 65%)",
            }}
          />
          <div className="relative z-10">
            <h2 className="font-serif text-[clamp(28px,4vw,52px)] font-light leading-[1.1] mb-3">
              Wil je weten wat IDS voor
              <br />
              jouw organisatie kan betekenen?
            </h2>
            <p className="text-subtekst text-[15px] max-w-[400px] mx-auto mb-7 leading-[1.7]">
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
                className="bg-transparent text-tekst border-[1.5px] border-black/[0.1] px-6 py-[11px] rounded-full text-sm font-medium hover:border-oranje hover:text-oranje transition-colors"
              >
                Terug naar 7LIFE
              </Link>
              <a
                href="/downloads/ids-verdieping.pdf"
                download
                className="bg-transparent text-tekst border-[1.5px] border-black/[0.1] px-6 py-[11px] rounded-full text-sm font-medium hover:border-oranje hover:text-oranje transition-colors"
              >
                Meer over IDS (PDF)
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
