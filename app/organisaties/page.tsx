"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heroStats = [
  { n: "Gemeenten", l: "o.a. Barneveld en Apeldoorn — teamtrainingen en leiderschapscoaching" },
  { n: "Zorg", l: "Programma's voor medewerkers, teamleiders en directie" },
  { n: "Bedrijfsleven", l: "Van individuele coaching tot organisatiebrede ontwikkeling" },
];

const vragen = [
  "We investeren in verandering, maar mensen bewegen niet mee",
  "Leiderschap is inconsistent — elk team heeft zijn eigen cultuur",
  "Talent zit vast — mensen zitten op de verkeerde plek",
  "Samenwerking verloopt stroef, communicatie kost energie",
  "Verzuim en werkdruk nemen toe, betrokkenheid neemt af",
  "We willen impact aantonen richting bestuur of stakeholders",
];

type Interventie = {
  naam: string;
  sub: string;
  body: string;
  items: string[];
  resultaat: string;
};

type Sector = {
  key: string;
  label: string;
  intro: string;
  interventies: Interventie[];
};

const sectoren: Sector[] = [
  {
    key: "gemeente",
    label: "🏛 Gemeenten & Overheid",
    intro:
      "Gemeenten staan voor complexe maatschappelijke opgaven — en moeten die uitvoeren met teams die onder druk staan. 7LIFE werkt al samen met gemeenten als Barneveld en Apeldoorn aan leiderschapsontwikkeling, teamdynamiek en organisatiecultuur.",
    interventies: [
      {
        naam: "Leadership & Culture Transformation",
        sub: "Van leiderschap naar gedrag en cultuur",
        body: "Inconsistent leiderschap is de meest genoemde oorzaak van cultuurproblemen in gemeenten. Dit traject brengt leidinggevenden op één lijn — in stijl, communicatie en richting.",
        items: [
          "Leiderschapscoaching op maat (LeiderschapScan)",
          "Teamontwikkeling met 7LIFE CommunicatieScan",
          "Communicatie & gedrag — gemeenschappelijke taal",
          "Governance: wie stuurt waarop",
          "Social Impact Dashboard voor sturing",
        ],
        resultaat:
          "Meer consistentie in leiderschap · betere samenwerking over afdelingen · lagere werkdruk door duidelijkheid",
      },
      {
        naam: "Mobility & Talent Activation",
        sub: "Van inzicht naar ontwikkeling en doorstroom",
        body: "Gemeenten kennen vaak rigide structuren waarbij talent niet wordt benut. Dit traject maakt zichtbaar wie wat kan — en creëert beweging.",
        items: [
          "7LIFE TalentScan per medewerker",
          "Mobiliteitsanalyse (OJA)",
          "Ontwikkelprogramma's op maat",
          "Koppeling functies aan talent (OJA)",
        ],
        resultaat:
          "Meer interne mobiliteit · betere inzet van talent · hogere betrokkenheid",
      },
      {
        naam: "Organisation Reset",
        sub: "Van structuur naar beweging",
        body: "Voor gemeenten die merken dat structuren de samenwerking in de weg staan. Rollen zijn onduidelijk, HR is reactief, talent stroomt weg.",
        items: [
          "Mobility QuickScan",
          "OJA — organisatie-inrichting en functiehuis",
          "Social Impact Dashboard als basissturing",
        ],
        resultaat: "Duidelijke rollen · actief HR · talent dat blijft en groeit",
      },
    ],
  },
  {
    key: "zorg",
    label: "🏥 Zorg",
    intro:
      "De zorg kampt met werkdruk, verzuim en een uitdagende arbeidsmarkt. 7LIFE werkt in zorgorganisaties op drie niveaus tegelijk: medewerkers, teamleiders en directie — want duurzame verandering vraagt om samenhang in de hele organisatie.",
    interventies: [
      {
        naam: "Leadership & Culture Transformation",
        sub: "Leiderschap dat mensen in beweging brengt",
        body: "In de zorg bepaalt de teamleider voor een groot deel hoe veilig en effectief een team functioneert. Dit traject versterkt leiderschapsgedrag op alle niveaus.",
        items: [
          "LeiderschapsScan voor teamleiders en directie",
          "Teamontwikkeling — communicatie en samenwerking",
          "Cultuurprogramma gericht op psychologische veiligheid",
          "Governance en besluitvorming verduidelijken",
        ],
        resultaat: "Veiliger werkklimaat · minder verzuim · sterkere teams",
      },
      {
        naam: "Mobility & Talent Activation",
        sub: "De juiste mensen op de juiste plek",
        body: "Zorgprofessionals voelen zich vaak ondergewaardeerd of op de verkeerde plek. Dit traject brengt talent in kaart en creëert perspectief.",
        items: [
          "7LIFE TalentScan per medewerker",
          "Loopbaanpaden zichtbaar maken (OJA)",
          "Mobiliteitsanalyse binnen de organisatie",
          "Ontwikkelprogramma's gericht op inzetbaarheid",
        ],
        resultaat:
          "Lagere uitstroom · hogere betrokkenheid · beter benutte talenten",
      },
      {
        naam: "Organisation Reset",
        sub: "Structuur die mensen ondersteunt",
        body: "Wanneer functiebeschrijvingen verouderd zijn, rollen onduidelijk en HR overwegend reactief — dan helpt een reset van de organisatiestructuur.",
        items: [
          "OJA — functiehuis en rolhelderheid",
          "Fair Work analyse (gelijke beloning)",
          "Social Impact Dashboard — meten wat telt",
        ],
        resultaat:
          "Heldere rollen · eerlijkere beloning · betere sturing op impact",
      },
    ],
  },
  {
    key: "bedrijf",
    label: "🏢 Bedrijfsleven",
    intro:
      "Bedrijven die groeien, lopen vroeg of laat vast op mensen en cultuur. 7LIFE begeleidt bedrijven van individuele coaching van medewerkers en teamleiders tot organisatiebrede ontwikkeling — omdat het altijd draait om mensen, beweging en groei.",
    interventies: [
      {
        naam: "Leadership & Culture Transformation",
        sub: "Van strategie naar gedrag",
        body: "Veel bedrijven hebben een heldere strategie maar een cultuur die daarmee botst. Dit traject verbindt leiderschap, communicatie en gedrag — zodat verandering niet blijft steken in plannen.",
        items: [
          "LeiderschapsCoaching directie en MT (LeiderschapScan)",
          "Teamtrainingen (CommunicatieScan)",
          "Communicatie & gedragsverandering",
          "Cultuurmeting via Social Impact Dashboard",
        ],
        resultaat:
          "Cultuur die strategie ondersteunt · sterkere teams · meer beweging",
      },
      {
        naam: "Mobility & Talent Activation",
        sub: "Talent benutten, groei mogelijk maken",
        body: "Groeiende bedrijven worstelen met de vraag: hoe zorgen we dat de juiste mensen op de juiste plek zitten — en dat talent niet vertrekt? Dit traject geeft antwoord.",
        items: [
          "Individuele coaching medewerkers (CommunicatieScan)",
          "TalentScan — talent zichtbaar maken",
          "Mobiliteitsanalyse en loopbaanpaden (OJA)",
          "Teamontwikkeling gericht op samenwerking",
        ],
        resultaat:
          "Lager verloop · beter benutte talenten · hogere betrokkenheid",
      },
      {
        naam: "Organisation Reset",
        sub: "Structuur die groei ondersteunt",
        body: "Voor bedrijven die merken dat de organisatiestructuur de groei in de weg staat. Onduidelijke rollen, HR die achter de feiten aanloopt, weinig mobiliteit.",
        items: [
          "Mobility QuickScan",
          "OJA — functiehuis en transparante beloning",
          "Social Impact Dashboard voor sturing op impact",
        ],
        resultaat:
          "Heldere structuur · transparante beloning · organisatie die groei aankan",
      },
    ],
  },
];

const impactStats = [
  { n: "3 niveaus", l: "medewerkers · teamleiders · directie — altijd in samenhang" },
  { n: "Bewezen", l: "actief bij gemeenten, zorginstellingen en bedrijven in Nederland" },
  { n: "Inzicht → Structuur → Sturing → Impact", l: "het 7LIFE systeem voor duurzame organisatieontwikkeling" },
];

export default function OrganisatiesPagina() {
  const [actief, setActief] = useState("gemeente");
  const sector = sectoren.find((s) => s.key === actief)!;

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
                "radial-gradient(ellipse 60% 50% at 85% 15%, rgba(62,143,163,0.14) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 5% 85%, rgba(238,126,6,0.08) 0%, transparent 60%)",
            }}
          />
          <div className="max-w-[1100px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-blauw/[0.12] border border-blauw/25 text-blauw text-[11px] font-semibold tracking-[1.5px] px-3.5 py-[5px] rounded-full mb-5 uppercase">
                Organisaties &amp; Teams
              </div>
              <h1 className="font-serif text-[clamp(38px,5vw,64px)] font-light text-white leading-[1.1] tracking-[-1px] mb-4">
                Beweging begint
                <br />
                bij <em className="text-oranje not-italic italic">mensen.</em>
              </h1>
              <p className="text-white/50 text-base leading-[1.75] mb-7">
                Organisaties die écht willen veranderen, investeren niet
                alleen in structuren en systemen — ze investeren in de
                mensen die die structuren leven. 7LIFE helpt gemeenten,
                zorginstellingen en bedrijven in beweging komen. Van
                teamtraining tot organisatieontwikkeling.
              </p>
              <div className="flex gap-2.5 flex-wrap">
                <a
                  href="#sectoren"
                  className="bg-oranje text-white px-6 py-[11px] rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
                >
                  Bekijk onze aanpak
                </a>
                <a
                  href="#cta"
                  className="bg-transparent text-white border-[1.5px] border-white/20 px-6 py-[11px] rounded-full text-sm font-medium hover:border-white/50 transition-colors"
                >
                  Plan een gesprek
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
              Wat je tegenkomt in de praktijk
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[560px] mb-9">
              In elke organisatie, in elke sector. De namen en functies
              veranderen — de patronen blijven hetzelfde.
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

        {/* SECTOREN + INTERVENTIES */}
        <section className="bg-donker px-[5%] py-[72px]" id="sectoren">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje/85 uppercase mb-2.5">
              Onze aanpak
            </div>
            <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] font-light text-white leading-[1.15] mb-3">
              Drie sectoren. Één systeem.
            </h2>
            <p className="text-white/45 text-[15px] leading-[1.7] mb-7">
              Selecteer je sector voor een gerichte aanpak.
            </p>

            <div className="flex gap-2 flex-wrap mb-9">
              {sectoren.map((s) => (
                <button
                  key={s.key}
                  onClick={() => setActief(s.key)}
                  className={`px-5 py-2 rounded-full text-[13px] font-medium border transition-colors ${
                    actief === s.key
                      ? "bg-oranje border-oranje text-white"
                      : "bg-transparent border-white/15 text-white/55 hover:text-white hover:border-white/40"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <p className="text-white/50 text-[15px] leading-[1.7] max-w-[640px] mb-9 border-l-[3px] border-oranje pl-[18px]">
              {sector.intro}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {sector.interventies.map((it, i) => (
                <div
                  key={it.naam}
                  className="relative rounded-[18px] p-[26px] bg-white/5 border border-white/[0.09] hover:bg-white/[0.08] hover:border-oranje transition-all overflow-hidden"
                  style={{ borderTop: "3px solid #EE7E06" }}
                >
                  <div className="text-[11px] font-bold tracking-wide text-oranje uppercase mb-2.5">
                    Interventie {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="text-[17px] font-semibold text-white mb-1">
                    {it.naam}
                  </div>
                  <div className="text-xs text-white/35 italic mb-3.5">
                    {it.sub}
                  </div>
                  <p className="text-[13px] text-white/50 leading-[1.65] mb-3.5">
                    {it.body}
                  </p>
                  <ul className="flex flex-col mb-3.5">
                    {it.items.map((li, j) => (
                      <li
                        key={li}
                        className={`text-[13px] text-white/50 py-1 pl-3.5 relative before:content-['·'] before:absolute before:left-0 before:text-oranje ${
                          j < it.items.length - 1 ? "border-b border-white/[0.05]" : ""
                        }`}
                      >
                        {li}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-oranje/[0.08] border border-oranje/20 rounded-[10px] px-3.5 py-2.5 text-xs text-white/55">
                    <strong className="block text-[11px] tracking-wide uppercase text-oranje mb-1">
                      Resultaat
                    </strong>
                    {it.resultaat}
                  </div>
                </div>
              ))}
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
              Wat er verandert als mensen in beweging komen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="font-serif text-[clamp(18px,2.5vw,26px)] font-light italic leading-[1.45] border-l-[3px] border-oranje pl-6 mb-5">
                  &ldquo;Een zorgorganisatie investeerde in leiderschap. Het
                  bleek dat teams elkaar simpelweg niet meer
                  vertrouwden.&rdquo;
                </div>
                <p className="text-sm text-subtekst leading-[1.75]">
                  IDS legde bloot wat in geen enkel rapport stond. Niet een
                  leiderschapsprobleem — maar een vertrouwensbreuk die
                  jarenlang was doorgegeven van team op team. De aanpak
                  veranderde daardoor volledig: niet meer trainen op
                  leiderschapsstijl, maar werken aan de basis van
                  veiligheid en verbinding.
                </p>
                <p className="text-sm text-subtekst leading-[1.75] mt-3.5">
                  Bij een gemeente die worstelde met samenwerking tussen
                  afdelingen ontdekte IDS dat het niet ging om structuur of
                  beleid — maar om communicatiestijlen die botsten. Met een
                  gemeenschappelijke taal verdween de weerstand als sneeuw
                  voor de zon.
                </p>
                <p className="text-sm text-oranje italic mt-3">
                  — Zorgorganisatie &amp; Gemeente (7LIFE trajecten)
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {impactStats.map((s) => (
                  <div
                    key={s.l}
                    className="bg-kaart border border-black/[0.07] rounded-2xl px-[22px] py-[18px]"
                  >
                    <div className="font-serif text-2xl text-oranje leading-tight">
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
                "radial-gradient(ellipse 60% 80% at 50% 110%, rgba(62,143,163,0.12) 0%, transparent 65%)",
            }}
          />
          <div className="relative z-10">
            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light text-white leading-[1.1] mb-3">
              Wat speelt er in
              <br />
              <em className="text-oranje not-italic italic">jouw organisatie?</em>
            </h2>
            <p className="text-white/45 text-[15px] max-w-[440px] mx-auto mb-7 leading-[1.7]">
              We beginnen altijd met luisteren. Vertel ons wat er speelt —
              dan kijken we samen welke aanpak het beste past.
            </p>
            <div className="flex gap-2.5 justify-center flex-wrap">
              <a
                href="mailto:info@7life.nl?subject=Interesse Organisaties en Teams"
                className="bg-oranje text-white px-6 py-[11px] rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
              >
                Plan een gesprek
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
