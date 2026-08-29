"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const programmas = [
  {
    titel: "Communicatiekracht",
    tekst: "Aan de hand van de 7LIFE Fullscan krijg je inzicht in jouw communicatiekracht, jouw voorkeur voor leren en hoe je omgaat met veranderingen. Altijd samen met een persoonlijke terugkoppeling door een trainer.",
  },
  {
    titel: "Competenties & Talenten",
    tekst: "Met de 7LIFE Talentscan krijg je meteen inzicht in belangrijke topics zoals jouw kwaliteiten, motivatie en loopbaan. Ontdek samen met een trainer alle praktische handvatten voor jouw ontwikkeling.",
  },
  {
    titel: "Begeleiden naar passend werk",
    tekst: "Persoonlijke begeleiding bij het vinden van werk dat echt bij je past — vanuit wie je bent.",
  },
  {
    titel: "Verzuimbegeleiding",
    tekst: "Begeleiding bij het reïntegreren, dan wel een 2e Spoor traject op maat. Samen met onze professionals.",
  },
];

const stats = [
  { n: "9.000+", l: "assessments afgenomen" },
  { n: "8.000+", l: "cursisten begeleid" },
  { n: "700+", l: "klanten geholpen" },
];

const tools = [
  {
    nr: "1",
    kleur: "#EE7E06",
    naam: "7LIFE Fullscan",
    punten: [
      "Inzicht in Communicatiestijlen",
      "Leervoorkeuren in kaart gebracht",
      "Veranderkracht in beeld",
      "Alarmgedrag herkennen",
      "Inzicht in drijfveren, motivatie en ontwikkeling",
    ],
  },
  {
    nr: "2",
    kleur: "#1B3B6F",
    naam: "7LIFE Talentscan",
    punten: [
      "Competenties — waar ben jij goed in?",
      "Motivatie — wanneer en hoe kom jij in beweging?",
      "Energie — waar word jij blij van?",
      "Ontwikkelkansen — hoe stap jij in de loopbaan die bij jou past?",
      "Omgeving — welke context past bij jou?",
    ],
  },
  {
    nr: "3",
    kleur: "#F2C12E",
    naam: "7LIFE 360 graden feedback scan",
    punten: [
      "Hoe ervaren anderen mijn communicatie?",
      "Welke tips kan ik gebruiken voor mijn ontwikkeling?",
      "Wanneer sla ik een brug naar de ander?",
      "Hoe ontstaat ruis in mijn communicatie?",
      "Hoe krijg ik mezelf en anderen in beweging?",
    ],
  },
  {
    nr: "4",
    kleur: "#2E7D52",
    naam: "7LIFE Money Habits Scan",
    punten: [
      "Inzicht in mijn geldgedrag",
      "Wat is mijn 'money mindset'?",
      "Welke geldgewoontes werken wel en werken niet?",
      "Wat is mijn persoonlijke geldtype?",
      "Praktische handvatten voor gezond geldbeheer",
    ],
  },
  {
    nr: "5",
    kleur: "#5FAE84",
    naam: "7LIFE Geldscan",
    punten: [
      "Snel en eenvoudig inzicht in mijn geldtype",
      "Hoe ga ik om met risico's en geldstress?",
      "Investeren, hoe werkt dat voor mij?",
      "Korte praktische tips voor slim geldmanagement",
      "Hoe wil ik advies over mijn geld?",
    ],
  },
  {
    nr: "6",
    kleur: "#7B5EA7",
    naam: "7LIFE Mobility Program",
    punten: [
      "Mobiliteit en groei in je loopbaan of (nieuwe) functie",
      "Ondersteund door uitgebreid online programma",
      "Aan de slag met je talenten en kwaliteiten",
      "Onder begeleiding van een 7LIFE Mobiliteits Coach",
      "Inclusief advies over arbeidsmarkt, opleiding en persoonlijke ontwikkeling",
    ],
  },
  {
    nr: "7",
    kleur: "#D7263D",
    naam: "Het 7LIFE 2e Spoor Traject",
    punten: [
      "Reïntegratie begeleiding",
      "Onderzoeksfase aan de hand van Talentscan",
      "Ondersteuning naar passend werk bij andere werkgever",
      "Hulp bij opstarten van eigen bedrijf",
      "Praktische hulp bij zoekfase",
    ],
  },
];

export default function BuildStrongIndividueelPagina() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative flex items-end overflow-hidden bg-donker min-h-[520px] px-[5%] pt-[170px] pb-16">
          <Image
            src="/build-strong-individueel/achtergrond.jpg"
            alt="Build Strong Individueel"
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
              <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-3">
                Build Strong — Individueel
              </div>
              <h1 className="font-serif text-[clamp(40px,5vw,66px)] font-light text-white leading-[1.05] tracking-[-1px] mb-4">
                Jij in beweging.
              </h1>
              <p className="text-white/55 text-base leading-[1.75] mb-7 max-w-[480px]">
                Van inzicht in je eigen competenties tot een traject rondom
                jouw communicatiekracht of een begeleiding naar passend werk
                — met 7LIFE werk je samen aan je eigen ontwikkeling en groei
                op jouw eigen wijze.
              </p>
              <div className="flex gap-2.5 flex-wrap">
                <a
                  href="#tools"
                  className="bg-oranje text-white px-6 py-[11px] rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
                >
                  Bekijk tools
                </a>
                <a
                  href="#bsi-cta"
                  className="bg-transparent text-white border-[1.5px] border-white/25 px-6 py-[11px] rounded-full text-sm font-medium hover:border-white/50 transition-colors"
                >
                  Plan een gesprek
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ONZE PROGRAMMA'S */}
        <section className="px-[5%] py-[88px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Onze programma's
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-light leading-[1.15] mb-3">
              Ontwikkeling op jouw eigen wijze
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[520px] mb-9">
              Geen standaardtraject, maar een aanpak die aansluit bij waar
              jij nu staat en waar je naartoe wilt. Wij zetten een paar
              mooie opties voor jou onder elkaar.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {programmas.map((p) => (
                  <div
                    key={p.titel}
                    className="bg-kaart border border-black/[0.07] rounded-2xl p-5"
                  >
                    <div className="font-serif text-[15px] font-medium text-oranje mb-2">
                      {p.titel}
                    </div>
                    <div className="text-[12.5px] text-subtekst leading-[1.6]">
                      {p.tekst}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-card overflow-hidden border-[1.5px] border-black/[0.07] bg-kaart lg:sticky lg:top-[100px]">
                <div className="relative h-[220px] border-t-4 border-oranje">
                  <Image
                    src="/build-strong-individueel/testimonial.jpg"
                    alt="Ervaring met persoonlijke ontwikkeling bij 7LIFE"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <div className="text-xs font-semibold text-oranje uppercase tracking-wide mb-3">
                    Persoonlijke ontwikkeling
                  </div>
                  <blockquote className="font-serif text-lg italic text-tekst leading-snug">
                    &ldquo;De 7LIFE Scan was voor mij een echte spiegel
                    waarin ik op zoek kon gaan naar mijn drijfveren en
                    kwaliteiten. Door het persoonlijke gesprek met de coach
                    kon ik alle inzichten meteen toepassen in mijn eigen
                    praktijk en samen ontwikkelafspraken maken.&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7LIFE TOOLS */}
        <section className="bg-donker px-[5%] py-[72px]" id="tools">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
            <div>
              <div className="text-[11px] font-semibold tracking-[2px] text-oranje/85 uppercase mb-2.5">
                De 7LIFE Tools
              </div>
              <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-light text-white leading-[1.15] mb-3">
                Ontdek alle 7LIFE Producten
              </h2>
              <p className="text-white/50 text-sm leading-[1.75] mb-6">
                De 7LIFE Toolkit bestaat uit een groeiend aantal producten,
                ontwikkeld samen met onze trainers, gericht op jouw
                praktijk.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-7">
                {stats.map((s) => (
                  <div
                    key={s.n}
                    className="bg-white/[0.06] border border-white/10 rounded-2xl p-4"
                  >
                    <div className="font-serif text-2xl text-white mb-1">
                      {s.n}
                    </div>
                    <div className="text-white/45 text-xs leading-snug">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="mailto:info@7life.nl?subject=Vraag een gesprek aan"
                className="inline-block bg-oranje text-white text-[13px] px-5 py-2.5 rounded-full font-medium hover:bg-[#d4710a] transition-colors"
              >
                Vraag een gesprek aan →
              </a>
            </div>

            <div className="flex flex-col gap-1.5">
              {tools.map((t, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={t.naam}
                    className={`rounded-xl overflow-hidden cursor-pointer border transition-colors ${
                      isOpen ? "border-oranje" : "border-white/[0.07] hover:border-white/20"
                    }`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <div className="flex items-center gap-3 px-4 py-3.5 bg-white/[0.04]">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs text-white flex-shrink-0"
                        style={{ background: t.kleur }}
                      >
                        {t.nr}
                      </div>
                      <div className="text-[13px] font-semibold text-white flex-1">
                        {t.naam}
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
                        <ul>
                          {t.punten.map((p) => (
                            <li
                              key={p}
                              className="text-[13px] text-white/50 py-[3px] pl-3 relative before:content-['·'] before:absolute before:left-0 before:text-oranje"
                            >
                              {p}
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
        </section>

        <section className="px-[5%] py-20 text-center bg-achtergrond" id="bsi-cta">
          <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-4">
            Start met jouw{" "}
            <em className="text-oranje not-italic italic">
              gratis persoonlijke intake.
            </em>
          </h2>
          <p className="text-subtekst text-[15px] leading-[1.7] max-w-[480px] mx-auto mb-8">
            Eén gesprek, telefonisch of online, met een 7LIFE professional
            die samen met jou kijkt naar jouw wensen, kansen en
            ontwikkeldoelen.
          </p>
          <div className="flex gap-2.5 flex-wrap justify-center">
            <a
              href="mailto:info@7life.nl?subject=Plan een gesprek — Build Strong Individueel"
              className="bg-oranje text-white px-[26px] py-3 rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
            >
              Plan een gesprek
            </a>
            <a
              href="/downloads/7life-introductie.pdf"
              download
              className="bg-transparent text-tekst border-[1.5px] border-black/[0.1] px-[26px] py-3 rounded-full text-sm font-medium hover:border-oranje hover:text-oranje transition-colors"
            >
              7LIFE Introductie (PDF)
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
