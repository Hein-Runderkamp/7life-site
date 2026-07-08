"use client";

import { useState } from "react";
import Image from "next/image";

type Benefit = { icon: string; titel: string; tekst: string };
type Stap = {
  nr: string;
  fase: string;
  naam: string;
  sub: string;
  icon: string;
  kleur: string;
  bg: string;
  body: string;
  logo: string;
  benefits: Benefit[];
  cta?: { label: string; href: string };
};

const stappen: Stap[] = [
  {
    nr: "01",
    fase: "Signalen",
    naam: "Impact Check",
    sub: "Zie wat speelt.",
    icon: "🔍",
    kleur: "#EE7E06",
    bg: "rgba(238,126,6,0.1)",
    body: "We voelen dat er iets speelt, maar weten niet precies wat. De Impact Check is een compacte analyse die de belangrijkste vraagstukken, sterktes en ontwikkelkansen in kaart brengt — uitgevoerd door een 7LIFE-consultant.",
    logo: "/logos/impact-check.jpeg",
    benefits: [
      { icon: "🔍", titel: "Eerste analyse", tekst: "We brengen de kern van de uitdaging scherp in beeld." },
      { icon: "🎯", titel: "Meest relevante lens", tekst: "We bepalen welke van de vijf lenzen de meeste aandacht verdient." },
      { icon: "🧭", titel: "Concrete vervolgrichting", tekst: "Je ontvangt een helder advies voor de volgende stap." },
      { icon: "📈", titel: "Gebruikbare inzichten", tekst: "Praktisch, toepasbaar en direct waardevol voor je organisatie." },
    ],
    cta: { label: "Start jouw Impact Check →", href: "/impact-check" },
  },
  {
    nr: "02",
    fase: "Inzicht",
    naam: "Impact Dynamics Scan",
    sub: "Ontdek wat eronder zit.",
    icon: "🎯",
    kleur: "#3E8FA3",
    bg: "rgba(62,143,163,0.1)",
    body: "Vijf lenzen. Eén dynamiek. De IDS analyseert wat er onder de oppervlakte speelt door vijf lenzen tegelijk te combineren: Ik · Wij · Leiding · Organisatie · Wereld. Niet één stukje, maar het geheel.",
    logo: "/logos/ids.jpeg",
    benefits: [
      { icon: "🧩", titel: "Vijf lenzen, één beeld", tekst: "Ik · Wij · Leiding · Organisatie · Wereld — in samenhang bekeken." },
      { icon: "📊", titel: "Data + kwalitatief", tekst: "Cijfers gecombineerd met gesprekken en observaties uit de praktijk." },
      { icon: "⚙️", titel: "Flexibel per vraagstuk", tekst: "Inzetbaar op individueel niveau, teamniveau of organisatiebreed." },
      { icon: "🔗", titel: "Vertrekpunt voor Build Strong", tekst: "De uitkomsten bepalen direct welke interventies het meeste effect hebben." },
    ],
    cta: { label: "Meer over IDS →", href: "/ids" },
  },
  {
    nr: "03",
    fase: "Ontwikkeling",
    naam: "Build Strong",
    sub: "Breng mensen in beweging.",
    icon: "🧱",
    kleur: "#7B5EA7",
    bg: "rgba(123,94,167,0.1)",
    body: "Programma's, interventies en ontwikkeling. Op basis van de inzichten uit de scan ontwikkelen we samen gerichte programma's, tools en interventies — voor onderwijs, leiderschap, teams, jongeren en persoonlijke ontwikkeling.",
    logo: "/logos/build-strong.jpeg",
    benefits: [
      { icon: "🧱", titel: "Op maat ontwikkeld", tekst: "Geen standaardpakket, maar interventies die aansluiten op jouw scan-uitkomsten." },
      { icon: "🎓", titel: "Breed inzetbaar", tekst: "Voor onderwijs, leiderschap, teams, jongeren en persoonlijke ontwikkeling." },
      { icon: "🤝", titel: "Samen ontwikkeld", tekst: "7LIFE-consultants en jouw organisatie bouwen het programma samen." },
      { icon: "🚀", titel: "Direct in beweging", tekst: "Van inzicht naar concrete actie — geen los rapport, maar echte verandering." },
    ],
  },
  {
    nr: "04",
    fase: "Impact",
    naam: "Duurzame Impact",
    sub: "Maak verschil zichtbaar.",
    icon: "🌱",
    kleur: "#3a7d5c",
    bg: "rgba(58,125,92,0.1)",
    body: "Impact meten, leren en verbeteren. Het Social Impact Dashboard integreert inzichten uit de Impact Check en IDS met real-time data, en vertaalt dat naar inzichten die richting geven aan keuzes.",
    logo: "/logos/duurzame-impact.jpeg",
    benefits: [
      { icon: "📡", titel: "Real-time zicht", tekst: "Dashboard toont voortgang en patronen zodra er nieuwe data binnenkomt." },
      { icon: "🌍", titel: "5 Pijlers", tekst: "Fair Work · Money & Meaning · Human Development · Ethical Leadership · Diversiteit & Inclusie." },
      { icon: "📋", titel: "ESG-rapportage", tekst: "Direct bruikbaar voor bestuur, toezichthouders en stakeholders." },
      { icon: "🔁", titel: "Continu leren", tekst: "Geen eenmalig project — een lerende beweging richting blijvende impact." },
    ],
    cta: { label: "Bekijk het Dashboard →", href: "/social-impact-dashboard" },
  },
];

export default function JourneySectie() {
  const [actief, setActief] = useState(0);
  const stap = stappen[actief];

  return (
    <section className="px-[5%] py-[88px] bg-donker" id="flow">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
          Onze aanpak
        </div>
        <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-2.5 text-white">
          Van signaal naar
          <br />
          <em className="text-oranje not-italic italic">duurzame impact.</em>
        </h2>
        <p className="text-[15px] text-white/50 leading-[1.7] max-w-[480px] mb-10">
          Onze aanpak bestaat uit vier stappen die samen zorgen voor blijvende
          verandering.
          <br />
          Klik op een stap en ontdek wat het jou oplevert.
        </p>

        {/* Stappen */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {stappen.map((s, i) => (
            <button
              key={s.nr}
              onClick={() => setActief(i)}
              style={
                {
                  "--step-color": s.kleur,
                  "--step-bg": s.bg,
                } as React.CSSProperties
              }
              className={`relative text-left rounded-2xl border-[1.5px] p-4 h-full flex flex-col transition-all ${
                i === actief
                  ? "border-[var(--step-color)] bg-kaart"
                  : "border-white/10 bg-kaart hover:border-[var(--step-color)]"
              }`}
            >
              <div className="text-xs font-semibold text-subtekst mb-1.5">
                {s.nr}
              </div>
              <div className="text-xl mb-1.5">{s.icon}</div>
              <div className="text-[11px] uppercase tracking-wide text-subtekst mb-0.5">
                {s.fase}
              </div>
              <div className="text-sm font-medium text-tekst">{s.naam}</div>
              <div className="text-xs text-subtekst mt-0.5">{s.sub}</div>
              {i < stappen.length - 1 && (
                <span className="hidden lg:flex absolute top-1/2 -right-[19px] -translate-y-1/2 text-white/30 text-xl z-10">
                  ›
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div
          style={{ "--step-color": stap.kleur, "--step-bg": stap.bg } as React.CSSProperties}
          className="flex flex-col md:flex-row gap-0 bg-kaart border-[1.5px] border-black/[0.07] rounded-card overflow-hidden"
        >
          <div className="md:w-2/5 relative bg-[#f5f5f3] min-h-[220px] flex items-center justify-center border-t-4 border-[var(--step-color)] p-8">
            <Image
              src={stap.logo}
              alt={stap.naam}
              width={280}
              height={160}
              className="w-full h-auto max-w-[240px] object-contain"
            />
          </div>
          <div className="flex-1 p-8">
            <div className="text-xs font-semibold tracking-wide text-subtekst uppercase mb-2">
              {stap.nr} — {stap.fase.toUpperCase()}
            </div>
            <div className="font-serif text-2xl mb-1">{stap.naam}</div>
            <div className="text-subtekst text-sm mb-4">{stap.sub}</div>
            <p className="text-sm text-subtekst leading-[1.7] mb-5">
              {stap.body}
            </p>
            {stap.cta && (
              <a
                href={stap.cta.href}
                className="inline-block text-sm font-medium text-white rounded-full px-5 py-2.5"
                style={{ background: stap.kleur }}
              >
                {stap.cta.label}
              </a>
            )}
          </div>
          <div className="md:w-1/3 border-t md:border-t-0 md:border-l border-black/[0.07] p-6 flex flex-col gap-5">
            {stap.benefits.map((b) => (
              <div key={b.titel} className="flex gap-3">
                <div className="text-lg flex-shrink-0">{b.icon}</div>
                <div>
                  <div className="text-sm font-medium text-tekst mb-0.5">
                    {b.titel}
                  </div>
                  <div className="text-xs text-subtekst leading-snug">
                    {b.tekst}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
