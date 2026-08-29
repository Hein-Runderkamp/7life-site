"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const vragen = [
  "Leerlingen die gedemotiveerd lijken, maar eigenlijk niet weten waar hun kracht ligt",
  "Studenten die een studiekeuze moeten maken zonder inzicht in zichzelf",
  "Jongeren die sociaal-emotioneel vastlopen in groepsdynamieken",
  "Scholen die willen investeren in talentontwikkeling maar niet weten hoe",
  "Jongeren die hun unieke kwaliteiten niet kunnen benoemen of inzetten",
  "Ouders en begeleiders die een gemeenschappelijke taal missen met de jongere",
  "Jongeren die worstelen met gezond geldgedrag",
  "Scholen die grip willen krijgen op verzuim en uitval van scholieren",
];

const programmas = [
  {
    kleur: "#8B3FA0",
    leeftijd: "4 — 12 jaar · Basisonderwijs",
    icon: "🔐",
    naam: "Kluis7",
    sub: "Communicatiestijlen ontdekken voor kinderen",
    body: "Kluis7 helpt kinderen van 4 tot 12 jaar hun eigen communicatiestijl ontdekken — op een speelse, toegankelijke manier. Via het kaartspel, de scan en begeleiding leren kinderen wie ze zijn, hoe ze leren en hoe ze met anderen omgaan.",
    items: [
      "Speels en toegankelijk — voor elk kind",
      "Kaartspel \"Ontdek je Talent!\"",
      "Inzicht in communicatiestijl en motivatie",
      "Handleiding voor leerkrachten en ouders",
      "Gemeenschappelijke taal in de klas",
    ],
  },
  {
    kleur: "#3E8FA3",
    leeftijd: "12 — 18 jaar · Middelbaar onderwijs",
    icon: "🗺️",
    naam: "Student Journey App",
    sub: "Zelfkennis als basis voor studiekeuze",
    body: "De Student Journey App begeleidt middelbare scholieren bij de belangrijkste keuzes in hun schoolcarrière — vanuit zelfkennis. Niet welke opleiding past bij een profiel, maar: wie ben jij, wat drijft jou, en vanuit welke kracht maak jij jouw keuze?",
    items: [
      "Persoonlijk ontwikkelprofiel per leerling",
      "Inzicht in communicatiestijl, leerstijl en veranderkracht",
      "Begeleiding bij studie- en beroepskeuze",
      "Koppeling aan mentorprogramma's",
      "Geschikt voor MBO en VMBO",
    ],
  },
  {
    kleur: "#1B3B6F",
    leeftijd: "16 — 22 jaar · MBO / HBO",
    icon: "⭐",
    naam: "Talentontwikkeling voor Jongeren",
    sub: "Van talent naar richting en actie",
    body: "Voor jongeren die weten dat ze meer in huis hebben, maar nog niet precies weten wat. Het programma combineert de TalentScan en ExcelleerScan tot een persoonlijk talentenprofiel — en vertaalt dat naar concrete stappen in opleiding, stage en loopbaan.",
    items: [
      "Diepgaand talentenprofiel (TalentScan)",
      "Prestatieontwikkeling (ExcelleerScan)",
      "Van inzicht naar actieplan",
      "Geschikt voor studiebegeleiding en LOB",
      "Ook inzetbaar bij stagebegeleiding",
    ],
  },
  {
    kleur: "#2E7D52",
    leeftijd: "8 — 18 jaar · PO / VO",
    icon: "💚",
    naam: "Sociaal-Emotionele Ontwikkeling",
    sub: "Verbinding, veiligheid en groei in de groep",
    body: "Groepsdynamieken, pesten, eenzaamheid, gebrek aan verbinding — veel scholen worstelen ermee. Dit programma geeft leerlingen én begeleiders een gemeenschappelijke taal. Inzicht in communicatiestijlen als fundament voor een veilig en verbonden klasklimaat.",
    items: [
      "Gemeenschappelijke taal in de groep",
      "Inzicht in groepsdynamiek",
      "Interventies voor leraren en coaches",
      "Koppelbaar aan burgerschap en SEL-curricula",
      "Begeleiding door gecertificeerde 7LIFE trainer",
    ],
  },
  {
    kleur: "#F2C12E",
    leeftijd: "12 — 18 jaar · Middelbaar onderwijs",
    icon: "💰",
    naam: "GeldScan",
    sub: "Gezond Geldgedrag voor een financieel gezonde toekomst",
    body: "De GeldScan helpt middelbare scholieren bij het maken van verantwoordelijke financiële keuzes. Door gebruik te maken van het communicatieprofiel van de scholier, worden geldtypes bepaald, die de scholier herkent en helpt om de juiste keuzes te maken. De GeldScan zorgt voor het voorkomen van schulden en het creëren van financiële rust bij de scholier.",
    items: [
      "Snel en eenvoudig inzicht in mijn geldtype",
      "Hoe ga ik om met risico's en geldstress?",
      "Investeren, hoe werkt dat voor mij?",
      "Korte praktische tips voor slim geldmanagement",
      "Hoe wil ik advies over mijn geld?",
    ],
  },
];

const backboneScans = [
  "CommunicatieScan (Full)",
  "LightScan (O7 kindervariant)",
  "4you (jongeren)",
  "TalentScan",
  "ExcelleerScan",
  "GeldScan",
];

const impactStats = [
  { n: "4 – 22", l: "jaar — elk programma afgestemd op de leeftijdsfase" },
  { n: "PO · VO · MBO", l: "inzetbaar in alle onderwijssectoren" },
  { n: "Bewezen", l: "wetenschappelijk onderbouwde methodiek — al 20+ jaar in de praktijk" },
];

export default function JongerenPagina() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative flex items-end overflow-hidden bg-donker min-h-[520px] px-[5%] pt-[170px] pb-16">
          <Image
            src="/jongeren/achtergrond.jpg"
            alt="Jongeren & Ontwikkeling"
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
              <div className="inline-flex items-center gap-1.5 bg-oranje/10 border border-oranje/[0.22] text-oranje text-[11px] font-semibold tracking-[1.5px] px-3.5 py-[5px] rounded-full mb-5 uppercase">
                Jongeren &amp; Ontwikkeling
              </div>
              <h1 className="font-serif text-[clamp(38px,5vw,64px)] font-light text-white leading-[1.1] tracking-[-1px] mb-4">
                Elke jongere
                <br />
                verdient <em className="text-oranje not-italic italic">inzicht</em>
                <br />
                in zichzelf.
              </h1>
              <p className="text-white/55 text-base leading-[1.75] mb-7 max-w-[480px]">
                Van basisschool tot hoger onderwijs — 7LIFE helpt jongeren
                hun communicatiestijl, talenten en drijfveren ontdekken.
                Niet als label, maar als vertrekpunt voor groei.
              </p>
              <div className="flex gap-2.5 flex-wrap">
                <a
                  href="#programmas"
                  className="bg-oranje text-white px-6 py-[11px] rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
                >
                  Bekijk de programma&apos;s
                </a>
                <a
                  href="#cta"
                  className="bg-transparent text-white border-[1.5px] border-white/20 px-6 py-[11px] rounded-full text-sm font-medium hover:border-white/50 transition-colors"
                >
                  Plan een gesprek
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* DE VRAAG */}
        <section className="px-[5%] py-[72px] bg-achtergrond" id="vraag">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              De vraag
            </div>
            <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] font-light leading-[1.15] mb-3">
              Wat je ziet in de praktijk
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[560px] mb-9">
              In elke klas, op elke school, in elk gezin. Jongeren die
              vastlopen — niet omdat ze niet willen, maar omdat ze zichzelf
              nog niet kennen.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {vragen.map((v) => (
                  <div
                    key={v}
                    className="bg-kaart border-[1.5px] border-black/[0.07] rounded-2xl px-5 py-[18px] flex items-start gap-3"
                  >
                    <div className="w-[9px] h-[9px] rounded-full border-2 border-oranje flex-shrink-0 mt-1.5" />
                    <div className="text-sm leading-[1.55]">{v}</div>
                  </div>
                ))}
              </div>

              <div className="rounded-card overflow-hidden border-[1.5px] border-black/[0.07] bg-kaart lg:sticky lg:top-[100px]">
                <div className="relative h-[260px] border-t-4 border-oranje">
                  <Image
                    src="/jongeren/testimonial.jpg"
                    alt="Onze motivatie"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <div className="text-xs font-semibold text-oranje uppercase tracking-wide mb-3">
                    Onze motivatie
                  </div>
                  <blockquote className="font-serif text-lg italic text-tekst leading-snug">
                    &ldquo;Wij geloven in ontwikkeling en groei op jouw
                    eigen wijze. Dat begint met onze kinderen, onze
                    jongeren en onze jong volwassenen. We zeggen zo vaak
                    &apos;de jeugd heeft de toekomst&apos;. 7LIFE
                    investeert in die toekomst.&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DE PROGRAMMA'S */}
        <section className="bg-donker px-[5%] py-[72px]" id="programmas">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
            <div>
              <div className="text-[11px] font-semibold tracking-[2px] text-oranje/85 uppercase mb-2.5">
                De programma&apos;s
              </div>
              <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] font-light text-white leading-[1.15] mb-3">
                Van kleuterklas tot universiteit
              </h2>
              <p className="text-white/45 text-[15px] leading-[1.7] mb-7">
                Vijf programma&apos;s, elk afgestemd op een specifieke
                leeftijdsfase en ontwikkelbehoefte. Klik op een programma
                voor de volledige toelichting.
              </p>
              <a
                href="#cta"
                className="inline-block bg-oranje text-white text-[13px] px-5 py-2.5 rounded-full font-medium hover:bg-[#d4710a] transition-colors"
              >
                Vraag een gesprek aan →
              </a>
            </div>

            <div className="flex flex-col gap-1.5">
              {programmas.map((p, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={p.naam}
                    className={`rounded-xl overflow-hidden cursor-pointer border transition-colors ${
                      isOpen ? "border-oranje" : "border-white/[0.07] hover:border-white/20"
                    }`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <div className="flex items-center gap-3 px-4 py-3.5 bg-white/[0.04]">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs text-white flex-shrink-0"
                        style={{ background: p.kleur }}
                      >
                        {i + 1}
                      </div>
                      <div className="text-[13px] font-semibold text-white flex-1">
                        {p.naam}
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
                        <div className="text-[11px] font-semibold tracking-wide text-oranje uppercase mb-2.5 mt-1">
                          {p.leeftijd}
                        </div>
                        <span className="text-2xl mb-2 block">{p.icon}</span>
                        <div className="text-[13px] text-white/45 mb-3 leading-[1.5]">
                          {p.sub}
                        </div>
                        <p className="text-[13px] text-white/55 leading-[1.65] mb-3">
                          {p.body}
                        </p>
                        <ul>
                          {p.items.map((it) => (
                            <li
                              key={it}
                              className="text-[13px] text-white/50 py-[3px] pl-3 relative before:content-['·'] before:absolute before:left-0 before:text-oranje"
                            >
                              {it}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Backbone scans */}
          <div className="border-t border-white/[0.06] mt-[72px] pt-10">
            <div className="max-w-[1100px] mx-auto flex items-center gap-8 flex-wrap">
              <div className="text-[11px] font-semibold tracking-[1.5px] text-white/30 uppercase whitespace-nowrap">
                De backbone
              </div>
              <div className="flex gap-2.5 flex-wrap">
                {backboneScans.map((s) => (
                  <div
                    key={s}
                    className="bg-white/[0.06] border border-white/10 rounded-lg px-3.5 py-1.5 text-xs font-medium text-white/60"
                  >
                    <span className="text-oranje">7LIFE</span> {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* IMPACT STORY */}
        <section className="px-[5%] py-[72px] bg-achtergrond" id="impact">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Impact in de praktijk
            </div>
            <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] font-light leading-[1.15] mb-9">
              Wat er verandert als jongeren zichzelf begrijpen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="font-serif text-[clamp(18px,2.5vw,26px)] font-light italic leading-[1.45] border-l-[3px] border-oranje pl-6 mb-5">
                  &ldquo;Een jongere kreeg geen studiekeuzeadvies. Hij kreeg
                  inzicht in zichzelf. Dat verschil maakt de keuze
                  makkelijker — en blijvender.&rdquo;
                </div>
                <p className="text-sm text-subtekst leading-[1.75]">
                  Via de Student Journey ontdekte hij niet welke opleiding
                  het best bij zijn profiel paste, maar vanuit welke kracht
                  hij überhaupt keuzes maakte. Dat inzicht veranderde niet
                  alleen zijn studiekeuze — het veranderde hoe hij naar
                  zichzelf keek.
                </p>
                <p className="text-sm text-subtekst leading-[1.75] mt-3">
                  Scholen die werken met de 7LIFE-programma&apos;s zien niet
                  alleen individuele groei. Ze zien een ander klimaat
                  ontstaan — meer verbinding, meer begrip, meer richting.
                </p>
                <p className="text-sm text-oranje italic mt-3">
                  — Student Journey, middelbare school
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {impactStats.map((s) => (
                  <div
                    key={s.l}
                    className="bg-kaart border border-black/[0.07] rounded-2xl px-[22px] py-[18px]"
                  >
                    <div className="font-serif text-[36px] text-oranje leading-none">
                      {s.n}
                    </div>
                    <div className="text-[13px] text-subtekst mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-donker px-[5%] py-20 text-center overflow-hidden" id="cta">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 110%, rgba(238,126,6,0.12) 0%, transparent 65%)",
            }}
          />
          <div className="relative z-10">
            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light text-white leading-[1.1] mb-3">
              Klaar om jongeren
              <br />
              <em className="text-oranje not-italic italic">verder te helpen?</em>
            </h2>
            <p className="text-white/45 text-[15px] max-w-[440px] mx-auto mb-7 leading-[1.7]">
              Vertel ons over jouw school, instelling of doelgroep. We
              kijken samen welk programma het beste aansluit — en hoe we
              kunnen starten.
            </p>
            <div className="flex gap-2.5 justify-center flex-wrap">
              <a
                href="mailto:info@7life.nl?subject=Interesse Jongeren en Ontwikkeling"
                className="bg-oranje text-white px-6 py-[11px] rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
              >
                Plan een kennismaking
              </a>
              <Link
                href="/"
                className="bg-transparent text-white border-[1.5px] border-white/20 px-6 py-[11px] rounded-full text-sm font-medium hover:border-white/50 transition-colors"
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
