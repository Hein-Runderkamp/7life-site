"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heroStats = [
  { n: "LeiderschapScan", l: "Wetenschappelijk onderbouwd vertrekpunt voor elke leiderschapsontwikkeling" },
  { n: "20+ jaar", l: "ervaring in leiderschaps- en professionele ontwikkeling" },
  { n: "Academie", l: "voor Bestuur & Leiderschap — programma's voor directeuren en bestuurders" },
];

const vragen = [
  "Ik geef leiding, maar weet niet altijd wat mijn effect is op anderen",
  "Ik wil groeien als leider, maar generieke trainingen sluiten niet aan",
  "Ik merk dat mijn leiderschapsstijl soms weerstand oproept in plaats van beweging",
  "Als coach of adviseur wil ik werken met een bewezen methodiek",
  "Ik wil impact maken — maar weet niet waar ik het beste kan beginnen",
  "Mijn organisatie vraagt om een andere manier van leidinggeven en ik wil daarin vooroplopen",
];

type Traject = {
  icon: string;
  naam: string;
  sub: string;
  scan: string;
  body: string;
  items: string[];
};

type Rol = {
  key: string;
  label: string;
  intro: string;
  trajecten: Traject[];
};

const rollen: Rol[] = [
  {
    key: "leider",
    label: "🧭 Leidinggevenden & Bestuurders",
    intro:
      "Directeuren en bestuurders die leiderschap niet als positie zien, maar als verantwoordelijkheid. 7LIFE biedt individuele trajecten, leergroepen en de Academie voor Bestuur & Leiderschap voor wie écht het verschil wil maken.",
    trajecten: [
      {
        icon: "🔍",
        naam: "LeiderschapsScan Traject",
        sub: "Inzicht als vertrekpunt",
        scan: "Backbone: LeiderschapScan",
        body: "De LeiderschapScan brengt jouw unieke leiderschapsstijl, drijfveren en ontwikkelstappen in kaart. Niet als label — als vertrekpunt voor een persoonlijk traject.",
        items: [
          "Persoonlijk leiderschapsprofiel",
          "Inzicht in stijl, effect en blinde vlekken",
          "Coaching op basis van scan-uitkomsten",
          "Koppeling aan organisatiecontext",
        ],
      },
      {
        icon: "🚀",
        naam: "Leadership & Culture Transformation",
        sub: "Van intentie naar gedrag",
        scan: "Backbone: LeiderschapScan + CommunicatieScan",
        body: "Voor directeuren die weten dat cultuur verandering begint bij henzelf. Dit traject verbindt persoonlijke leiderschapsontwikkeling met het bouwen aan een gezonde organisatiecultuur.",
        items: [
          "Individuele leiderschapscoaching",
          "360-graden feedback integratie",
          "Leiderschapstaal en -gedrag aanscherpen",
          "Social Impact Dashboard — meten van cultuur",
        ],
      },
      {
        icon: "🏛",
        naam: "Academie voor Bestuur & Leiderschap",
        sub: "Diepgang voor beslissers",
        scan: "Programma's & Leergangen",
        body: "De Academie biedt masterclasses, leergangen en coaching voor directeuren en bestuurders die anders willen leiden — met meer verbinding, meer richting en meer impact.",
        items: [
          "LeiderschapScan als fundament",
          "Masterclasses en leergangen",
          "Be Excellent — leiderschapsprogramma",
          "Social Impact Theater",
        ],
      },
    ],
  },
  {
    key: "teamleider",
    label: "👥 Teamleiders",
    intro:
      "Teamleiders staan op de meest kritische plek in elke organisatie — tussen strategie en uitvoering. 7LIFE helpt teamleiders hun eigen stijl begrijpen en effectiever leidinggeven aan diverse teams.",
    trajecten: [
      {
        icon: "🎯",
        naam: "Teamleider Traject",
        sub: "Leiderschap in de praktijk",
        scan: "Backbone: LeiderschapScan + CommunicatieScan",
        body: "Een praktisch traject voor teamleiders die meer grip willen op hun leiderschapsstijl en het effect daarvan op hun team. Combinatie van scan, coaching en teaminterventie.",
        items: [
          "Eigen leiderschapsprofiel (LeiderschapScan)",
          "Inzicht in teamdynamiek (CommunicatieScan team)",
          "Coaching op communicatie en gedrag",
          "Concrete interventies voor het team",
        ],
      },
      {
        icon: "👥",
        naam: "Team Scan & Ontwikkeling",
        sub: "De teamleider als aanjager van teamgroei",
        scan: "Backbone: 7LIFE CommunicatieScan (team)",
        body: "Het team krijgt een gemeenschappelijke taal. De teamleider leert hoe hij of zij de unieke kwaliteiten van elk teamlid optimaal inzet en de samenwerking versterkt.",
        items: [
          "Teamscan met gezamenlijke terugkoppeling",
          "Communicatiestijlen en samenwerking",
          "Rolhelderheid en taakverdeling",
          "Follow-up sessies naar behoefte",
        ],
      },
      {
        icon: "📈",
        naam: "Doorgroeien naar Leiderschap",
        sub: "Van professional naar leider",
        scan: "Backbone: TalentScan + LeiderschapScan",
        body: "Voor medewerkers die de stap naar leidinggeven willen maken — of net gemaakt hebben. Dit traject begeleidt de transitie van vakinhoud naar mensen en richting.",
        items: [
          "Talentprofiel als vertrekpunt",
          "Leiderschapsscan in opbouw",
          "Coaching op de transitie",
          "Koppeling aan loopbaanpad (OJA)",
        ],
      },
    ],
  },
  {
    key: "coach",
    label: "💬 Coaches & Adviseurs",
    intro:
      "Coaches, adviseurs en HR-professionals die willen werken met een bewezen, wetenschappelijk onderbouwde methodiek. 7LIFE biedt de tools, het netwerk en de certificering om écht het verschil te maken bij jouw klanten.",
    trajecten: [
      {
        icon: "🎓",
        naam: "Gecertificeerd 7LIFE Coach",
        sub: "De methodiek als fundament voor jouw werk",
        scan: "Certificering via 7LIFE Academie",
        body: "Word gecertificeerd 7LIFE Coach en werk met de CommunicatieScan, TalentScan en andere instrumenten bij jouw eigen klanten. Met toegang tot het platform, materialen en het netwerk.",
        items: [
          "Accreditatieopleiding (1,5 dag)",
          "Eigen portal en software-omgeving",
          "Toegang tot alle 7LIFE-scans",
          "Jaarlijkse certificatiedag",
        ],
      },
      {
        icon: "🏆",
        naam: "LeiderschapScan Certificering",
        sub: "De meest complete leiderschapstool",
        scan: "Co-ontwikkeld door Maroesja van der Pols & Alex ten Cate",
        body: "Een aanvullende certificering voor gecertificeerde 7LIFE Trainers die ook leiderschapstrajecten willen begeleiden. De LeiderschapScan is de basis voor alle leiderschapsprogramma's van de Academie.",
        items: [
          "Verdieping in leiderschapstheorie en praktijk",
          "Interpretatie en terugkoppeling van de scan",
          "Inzetbaar in coaching en leiderschapsprogramma's",
        ],
      },
      {
        icon: "🤝",
        naam: "Innovatiepartner",
        sub: "Co-creëer nieuwe programma's",
        scan: "Build Strong Innovatie Partner Programma",
        body: "Voor adviseurs en thought leaders die meer willen dan uitvoeren. Als innovatiepartner werk je mee aan de ontwikkeling van nieuwe producten en programma's binnen het 7LIFE-ecosysteem.",
        items: [
          "Advisor, Pilotpartner of Co-ontwikkelaar",
          "Toegang tot het 7LIFE-netwerk",
          "Gedeeld eigenaarschap bij co-creatie",
        ],
      },
    ],
  },
];

const academieItems = [
  "LeiderschapScan als wetenschappelijk fundament",
  "Masterclasses en leergangen voor bestuurders",
  "Be Excellent — leiderschapsprogramma voor vrouwen",
  "Social Impact Theater — evenementen voor beslissers",
  "Coaching en mentorschap op maat",
];

const academieProgrammas = [
  { icon: "🎭", naam: "Social Impact Theater", body: "Avonden voor bestuurders, professionals en veranderaars. Eerlijke gesprekken over leiderschap, ethiek en impact." },
  { icon: "⭐", naam: "Be Excellent", body: "Leiderschapsprogramma voor vrouwen — gebaseerd op 9.000+ assessments door Maroesja van der Pols." },
  { icon: "🏛", naam: "Masterclasses & Leergangen", body: "Diepgaande programma's voor directeuren en bestuurders die méér willen dan een training." },
  { icon: "🔭", naam: "LeiderschapsScan Traject", body: "Persoonlijk leiderschapsprofiel als vertrekpunt — gevolgd door coaching en programma op maat." },
];

const impactStats = [
  { n: "LeiderschapScan", l: "co-ontwikkeld door Maroesja van der Pols & Alex ten Cate — fundament van elk traject" },
  { n: "3 rollen", l: "leidinggevenden · teamleiders · coaches — elk een eigen traject op maat" },
  { n: "Academie", l: "voor Bestuur & Leiderschap — bezoek bestuurenleiderschap.nl voor het volledige aanbod" },
];

export default function LeiderschapPagina() {
  const [actief, setActief] = useState("leider");
  const rol = rollen.find((r) => r.key === actief)!;

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
                "radial-gradient(ellipse 60% 50% at 85% 15%, rgba(123,94,167,0.14) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 5% 85%, rgba(238,126,6,0.08) 0%, transparent 60%)",
            }}
          />
          <div className="max-w-[1100px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-paars/[0.12] border border-paars/25 text-paars text-[11px] font-semibold tracking-[1.5px] px-3.5 py-[5px] rounded-full mb-5 uppercase">
                Leiderschap &amp; Professionals
              </div>
              <h1 className="font-serif text-[clamp(38px,5vw,64px)] font-light text-white leading-[1.1] tracking-[-1px] mb-4">
                Leiderschap begint
                <br />
                bij <em className="text-oranje not-italic italic">jezelf.</em>
              </h1>
              <p className="text-white/50 text-base leading-[1.75] mb-7">
                Niet bij je functietitel. Niet bij je organogram. Bij wie
                jij bent als mens — en hoe jij dat zichtbaar maakt in
                contact met anderen. 7LIFE helpt leidinggevenden,
                bestuurders, coaches en professionals groeien vanuit hun
                eigen kracht.
              </p>
              <div className="flex gap-2.5 flex-wrap">
                <a
                  href="#rollen"
                  className="bg-oranje text-white px-6 py-[11px] rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
                >
                  Bekijk de trajecten
                </a>
                <a
                  href="#academie"
                  className="bg-transparent text-white border-[1.5px] border-white/20 px-6 py-[11px] rounded-full text-sm font-medium hover:border-white/50 transition-colors"
                >
                  Ontdek de Academie
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              {heroStats.map((s) => (
                <div
                  key={s.n}
                  className="bg-white/5 border border-white/[0.08] rounded-2xl px-5 py-4"
                >
                  <div className="font-serif text-[28px] text-oranje leading-none">
                    {s.n}
                  </div>
                  <div className="text-xs text-white/40 mt-1 leading-[1.4]">
                    {s.l}
                  </div>
                </div>
              ))}
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
              Wat leiders en professionals ervaren
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[560px] mb-9">
              Leiderschapsontwikkeling begint niet met een
              competentiemodel. Het begint met eerlijke vragen.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
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
          </div>
        </section>

        {/* ROLLEN / TRAJECTEN */}
        <section className="bg-donker px-[5%] py-[72px]" id="rollen">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-paars uppercase mb-2.5">
              De trajecten
            </div>
            <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] font-light text-white leading-[1.15] mb-3">
              Voor wie — en wat we doen
            </h2>
            <p className="text-white/45 text-[15px] leading-[1.7] mb-7">
              Kies je rol voor een gerichte aanpak.
            </p>

            <div className="flex gap-2 flex-wrap mb-9">
              {rollen.map((r) => (
                <button
                  key={r.key}
                  onClick={() => setActief(r.key)}
                  className={`px-5 py-2 rounded-full text-[13px] font-medium border transition-colors ${
                    actief === r.key
                      ? "bg-paars border-paars text-white"
                      : "bg-transparent border-white/15 text-white/55 hover:text-white hover:border-white/40"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>

            <p className="text-white/50 text-[15px] leading-[1.7] max-w-[640px] mb-9 border-l-[3px] border-paars pl-[18px]">
              {rol.intro}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {rol.trajecten.map((t) => (
                <div
                  key={t.naam}
                  className="relative rounded-[18px] p-[26px] bg-white/5 border border-white/[0.09] hover:bg-white/[0.08] hover:border-paars transition-all overflow-hidden"
                  style={{ borderTop: "3px solid #7B5EA7" }}
                >
                  <span className="text-[28px] mb-3 block">{t.icon}</span>
                  <div className="text-[17px] font-semibold text-white mb-1">
                    {t.naam}
                  </div>
                  <div className="text-xs text-white/35 italic mb-3.5">
                    {t.sub}
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-paars/[0.15] border border-paars/30 text-paars text-[11px] font-semibold px-2.5 py-1 rounded-lg mb-3">
                    {t.scan}
                  </div>
                  <p className="text-[13px] text-white/50 leading-[1.65] mb-3">
                    {t.body}
                  </p>
                  <ul className="flex flex-col">
                    {t.items.map((li, j) => (
                      <li
                        key={li}
                        className={`text-[13px] text-white/50 py-1 pl-3.5 relative before:content-['·'] before:absolute before:left-0 before:text-paars ${
                          j < t.items.length - 1 ? "border-b border-white/[0.05]" : ""
                        }`}
                      >
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ACADEMIE SPOTLIGHT */}
        <section className="px-[5%] py-[72px] bg-achtergrond" id="academie">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Uitgelicht
            </div>
            <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] font-light leading-[1.15] mb-8">
              Academie voor Bestuur &amp; Leiderschap
            </h2>
            <div className="bg-donker rounded-[24px] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-blauw/[0.12] border border-blauw/25 text-blauw text-[11px] font-semibold tracking-[1.5px] px-3 py-1 rounded-xl uppercase mb-4">
                  bestuurenleiderschap.nl
                </div>
                <h3 className="font-serif text-[clamp(24px,3vw,36px)] font-light text-white leading-[1.15] mb-3">
                  Voor leiders die
                  <br />
                  anders willen.
                </h3>
                <p className="text-white/45 text-sm leading-[1.75] mb-6">
                  De Academie voor Bestuur &amp; Leiderschap is de plek voor
                  directeuren, bestuurders en leidinggevenden die diepgang
                  zoeken. Niet een cursus, maar een programma dat
                  verandert hoe je kijkt naar jezelf en naar leiderschap.
                </p>
                <div className="flex flex-col gap-2 mb-7">
                  {academieItems.map((it) => (
                    <div
                      key={it}
                      className="flex items-center gap-2.5 text-sm text-white/70"
                    >
                      <span className="text-blauw font-bold flex-shrink-0">
                        ✔
                      </span>
                      {it}
                    </div>
                  ))}
                </div>
                <div className="flex gap-2.5 flex-wrap">
                  <a
                    href="https://www.bestuurenleiderschap.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blauw text-white px-6 py-[11px] rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Bekijk de Academie →
                  </a>
                  <a
                    href="#cta"
                    className="bg-transparent text-white border-[1.5px] border-white/20 px-6 py-[11px] rounded-full text-sm font-medium hover:border-white/50 transition-colors"
                  >
                    Plan een gesprek
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {academieProgrammas.map((p) => (
                  <div
                    key={p.naam}
                    className="bg-white/5 border border-white/[0.08] rounded-2xl px-5 py-4"
                  >
                    <div className="text-sm font-semibold text-white mb-1">
                      {p.icon} {p.naam}
                    </div>
                    <div className="text-[13px] text-white/40 leading-[1.5]">
                      {p.body}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* IMPACT STORY */}
        <section className="px-[5%] py-[72px] bg-gradient-to-b from-achtergrond to-[#e8e4dc]" id="impact">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Impact in de praktijk
            </div>
            <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] font-light leading-[1.15] mb-9">
              Wat er verandert als leiders zichzelf begrijpen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="font-serif text-[clamp(18px,2.5vw,26px)] font-light italic leading-[1.45] border-l-[3px] border-paars pl-6 mb-5">
                  &ldquo;Ik geloofde dat ik een goede leider was. De
                  LeiderschapScan liet me zien waar ik onbedoeld de rem
                  erop zette.&rdquo;
                </div>
                <p className="text-sm text-subtekst leading-[1.75]">
                  Een directeur die al jaren leidinggaf aan een groeiend
                  team. De scan liet zien dat zijn directe, resultaatgerichte
                  stijl in zijn beleving duidelijkheid bood — maar bij zijn
                  team als druk werd ervaren. Dat inzicht veranderde niet
                  zijn karakter, maar wel zijn bewuste keuzes in contact.
                </p>
                <p className="text-sm text-subtekst leading-[1.75] mt-3.5">
                  Leiderschap verbeteren begint niet met een ander gedrag
                  aanleren. Het begint met begrijpen waarom je doet wat je
                  doet — en wat het effect is op de mensen om je heen.
                </p>
                <p className="text-sm text-paars italic mt-3">
                  — LeiderschapScan traject, directeur MKB
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {impactStats.map((s) => (
                  <div
                    key={s.n}
                    className="bg-kaart border border-black/[0.07] rounded-2xl px-[22px] py-[18px]"
                  >
                    <div className="font-serif text-2xl text-paars leading-tight">
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
                "radial-gradient(ellipse 60% 80% at 50% 110%, rgba(123,94,167,0.12) 0%, transparent 65%)",
            }}
          />
          <div className="relative z-10">
            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light text-white leading-[1.1] mb-3">
              Klaar om verder te
              <br />
              <em className="text-oranje not-italic italic">groeien als leider?</em>
            </h2>
            <p className="text-white/45 text-[15px] max-w-[440px] mx-auto mb-7 leading-[1.7]">
              Vertel ons waar je staat. We kijken samen welk traject het
              beste aansluit — individueel of als team.
            </p>
            <div className="flex gap-2.5 justify-center flex-wrap">
              <a
                href="mailto:info@7life.nl?subject=Interesse Leiderschap en Professionals"
                className="bg-oranje text-white px-6 py-[11px] rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
              >
                Plan een kennismaking
              </a>
              <a
                href="https://www.bestuurenleiderschap.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blauw text-white px-6 py-[11px] rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Bekijk de Academie
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
