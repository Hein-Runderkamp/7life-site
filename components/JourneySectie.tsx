"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Benefit = { titel: string; tekst: string };
type Stap = {
  nr: string;
  fase: string;
  naam: string;
  sub: string;
  icon: string;
  kleur: string;
  bg: string;
  body: React.ReactNode;
  foto: string;
  benefits: Benefit[];
  cta?: { label: string; href: string };
};

const bsLink = "text-tekst underline decoration-paars/40 underline-offset-2 hover:decoration-paars hover:text-paars transition-colors";

const stappen: Stap[] = [
  {
    nr: "01",
    fase: "Signalen",
    naam: "Impact Check",
    sub: "Zie wat speelt.",
    icon: "🔍",
    kleur: "#EE7E06",
    bg: "#FDEDDC",
    body: "We voelen dat er iets speelt, maar weten niet precies wat. De Impact Check is een compacte analyse die de belangrijkste vraagstukken, sterktes en ontwikkelkansen in kaart brengt — uitgevoerd door een 7LIFE-consultant.",
    foto: "/impact-check/achtergrond.jpg",
    benefits: [
      { titel: "Eerste analyse", tekst: "We brengen de kern van de uitdaging scherp in beeld." },
      { titel: "Meest relevante lens", tekst: "We bepalen welke van de vijf lenzen de meeste aandacht verdient." },
      { titel: "Concrete vervolgrichting", tekst: "Je ontvangt een helder advies voor de volgende stap." },
      { titel: "Bruikbare inzichten", tekst: "Praktisch, toepasbaar en direct waardevol voor je organisatie." },
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
    bg: "#E4EFF2",
    body: "Vijf lenzen. Eén dynamiek. De IDS analyseert wat er onder de oppervlakte speelt door vijf lenzen tegelijk te combineren: Ik · Wij · Leiding · Organisatie · Wereld. Niet één stukje, maar het geheel.",
    foto: "/ids/achtergrond.jpg",
    benefits: [
      { titel: "Vijf lenzen, één beeld", tekst: "Ik · Wij · Leiding · Organisatie · Wereld — in samenhang bekeken." },
      { titel: "Data + kwalitatief", tekst: "Cijfers gecombineerd met gesprekken en observaties uit de praktijk." },
      { titel: "Flexibel per vraagstuk", tekst: "Inzetbaar op individueel niveau, teamniveau of organisatiebreed." },
      { titel: "Vertrekpunt voor Build Strong", tekst: "De uitkomsten bepalen direct welke interventies het meeste effect hebben." },
    ],
    cta: { label: "Meer over IDS →", href: "/ids" },
  },
  {
    nr: "03",
    fase: "Oplossingen",
    naam: "Build Strong",
    sub: "Sterke oplossingen om mensen duurzaam in beweging te brengen.",
    icon: "🧱",
    kleur: "#7B5EA7",
    bg: "#EDE8F3",
    body: (
      <>
        Programma&apos;s, Interventies, Tools en Ontwikkeling op basis van de
        inzichten uit de 7LIFE Scans. Met onze Partners ontwikkelen we
        oplossingen die werken voor{" "}
        <Link href="/build-strong-individueel" className={bsLink}>
          Individuen
        </Link>
        ,{" "}
        <Link href="/jongeren" className={bsLink}>
          Jongeren
        </Link>
        ,{" "}
        <Link href="/organisaties" className={bsLink}>
          Organisaties
        </Link>
        ,{" "}
        <Link href="/leiderschap" className={bsLink}>
          Leiderschap
        </Link>{" "}
        en{" "}
        <Link href="/opleiden" className={bsLink}>
          Trainers
        </Link>
        .
      </>
    ),
    foto: "/leiderschap/hero-achtergrond.jpg",
    benefits: [
      { titel: "Op maat", tekst: "Geen standaardpakket, maar interventies die aansluiten op jouw scan-uitkomsten." },
      { titel: "Breed inzetbaar", tekst: "Voor onderwijs, leiderschap, teams, jongeren en persoonlijke ontwikkeling." },
      { titel: "Samen ontwikkeld", tekst: "7LIFE-consultants en jouw organisatie bouwen het programma samen." },
      { titel: "Direct in beweging", tekst: "Van inzicht naar concrete actie — geen los rapport, maar echte verandering." },
    ],
  },
  {
    nr: "04",
    fase: "Impact",
    naam: "Duurzame Impact",
    sub: "Maak verschil zichtbaar.",
    icon: "🌱",
    kleur: "#3a7d5c",
    bg: "#E3EDE8",
    body: "Impact meten, leren en verbeteren. Het Social Impact Dashboard integreert inzichten uit de Impact Check en IDS met real-time data, en vertaalt dat naar inzichten die richting geven aan keuzes.",
    foto: "/sid/hero-achtergrond.jpg",
    benefits: [
      { titel: "Real-time zicht", tekst: "Dashboard toont voortgang en patronen zodra er nieuwe data binnenkomt." },
      { titel: "5 Pijlers", tekst: "Fair Work · Money & Meaning · Human Development · Ethical Leadership · Diversiteit & Inclusie." },
      { titel: "ESG-rapportage", tekst: "Direct bruikbaar voor bestuur, toezichthouders en stakeholders." },
      { titel: "Continu leren", tekst: "Geen eenmalig project — een lerende beweging richting blijvende impact." },
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
          De 7LIFE aanpak
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
              className={`relative text-left rounded-2xl border-[1.5px] p-4 h-full flex flex-col transition-all bg-[var(--step-bg)] ${
                i === actief
                  ? "border-[var(--step-color)]"
                  : "border-transparent hover:border-[var(--step-color)]"
              }`}
            >
              <div className="text-xs font-semibold text-subtekst mb-1.5">
                {s.nr}
              </div>
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
          <div className="md:w-2/5 relative min-h-[220px] border-t-4 border-[var(--step-color)]">
            <Image
              src={stap.foto}
              alt={stap.naam}
              fill
              className="object-cover"
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
                <div
                  className="text-base flex-shrink-0 font-bold"
                  style={{ color: stap.kleur }}
                >
                  ✔
                </div>
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
