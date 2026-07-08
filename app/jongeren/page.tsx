import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heroStats = [
  { n: "4–22", l: "jaar — programma's voor elke fase van de ontwikkeling" },
  { n: "9.000+", l: "assessments waaronder duizenden jongeren" },
  { n: "Wetenschappelijk", l: "onderbouwde methodiek — geen labels, wel inzicht" },
];

const vragen = [
  "Leerlingen die gedemotiveerd lijken, maar eigenlijk niet weten waar hun kracht ligt",
  "Studenten die een studiekeuze moeten maken zonder inzicht in zichzelf",
  "Jongeren die sociaal-emotioneel vastlopen in groepsdynamieken",
  "Scholen die willen investeren in talentontwikkeling maar niet weten hoe",
  "Jongeren die hun unieke kwaliteiten niet kunnen benoemen of inzetten",
  "Ouders en begeleiders die een gemeenschappelijke taal missen met de jongere",
];

const programmas = [
  {
    kleur: "#EE7E06",
    leeftijd: "4 — 12 jaar · Basisonderwijs",
    icon: "🔐",
    naam: "Kluis7",
    sub: "Communicatiestijlen ontdekken voor kinderen",
    scan: "Backbone: 7LIFE LightScan (O7 kindervariant)",
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
    scan: "Backbone: 7LIFE 4you (scan voor jongeren)",
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
    kleur: "#7B5EA7",
    leeftijd: "16 — 22 jaar · MBO / HBO",
    icon: "⭐",
    naam: "Talentontwikkeling voor Jongeren",
    sub: "Van talent naar richting en actie",
    scan: "Backbone: TalentScan + ExcelleerScan",
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
    kleur: "#0f766e",
    leeftijd: "8 — 18 jaar · PO / VO",
    icon: "💚",
    naam: "Sociaal-Emotionele Ontwikkeling",
    sub: "Verbinding, veiligheid en groei in de groep",
    scan: "Backbone: 7LIFE CommunicatieScan (Full)",
    body: "Groepsdynamieken, pesten, eenzaamheid, gebrek aan verbinding — veel scholen worstelen ermee. Dit programma geeft leerlingen én begeleiders een gemeenschappelijke taal. Inzicht in communicatiestijlen als fundament voor een veilig en verbonden klasklimaat.",
    items: [
      "Gemeenschappelijke taal in de groep",
      "Inzicht in groepsdynamiek",
      "Interventies voor leraren en coaches",
      "Koppelbaar aan burgerschap en SEL-curricula",
      "Begeleiding door gecertificeerde 7LIFE trainer",
    ],
  },
];

const backboneScans = [
  "CommunicatieScan (Full)",
  "LightScan (O7 kindervariant)",
  "4you (jongeren)",
  "TalentScan",
  "ExcelleerScan",
];

const impactStats = [
  { n: "4 – 22", l: "jaar — elk programma afgestemd op de leeftijdsfase" },
  { n: "PO · VO · MBO", l: "inzetbaar in alle onderwijssectoren" },
  { n: "Bewezen", l: "wetenschappelijk onderbouwde methodiek — al 20+ jaar in de praktijk" },
];

export default function JongerenPagina() {
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
                "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(238,126,6,0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 5% 80%, rgba(62,143,163,0.08) 0%, transparent 60%)",
            }}
          />
          <div className="max-w-[1100px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
              <p className="text-white/50 text-base leading-[1.75] mb-7">
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
            <div className="flex flex-col gap-2.5">
              {heroStats.map((s) => (
                <div
                  key={s.l}
                  className="bg-white/5 border border-white/[0.08] rounded-2xl px-5 py-4"
                >
                  <div className="font-serif text-[32px] text-oranje leading-none">
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
              Wat je ziet in de praktijk
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[560px] mb-9">
              In elke klas, op elke school, in elk gezin. Jongeren die
              vastlopen — niet omdat ze niet willen, maar omdat ze zichzelf
              nog niet kennen.
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

        {/* DE PROGRAMMA'S */}
        <section className="bg-donker px-[5%] py-[72px]" id="programmas">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje/85 uppercase mb-2.5">
              De programma&apos;s
            </div>
            <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] font-light text-white leading-[1.15] mb-3">
              Van kleuterklas tot universiteit
            </h2>
            <p className="text-white/45 text-[15px] leading-[1.7] max-w-[560px] mb-11">
              Vier programma&apos;s, elk afgestemd op een specifieke
              leeftijdsfase en ontwikkelbehoefte. De 7LIFE-scans vormen in
              elk programma de wetenschappelijke backbone.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {programmas.map((p) => (
                <div
                  key={p.naam}
                  className="relative rounded-[20px] p-7 bg-white/5 border border-white/[0.09] hover:bg-white/[0.08] hover:-translate-y-0.5 transition-all overflow-hidden"
                  style={{ borderTopColor: p.kleur, borderTopWidth: "3px" }}
                >
                  <div className="text-[11px] font-semibold tracking-wide text-oranje uppercase mb-3">
                    {p.leeftijd}
                  </div>
                  <span className="text-[32px] mb-3 block">{p.icon}</span>
                  <div className="text-lg font-semibold text-white mb-1.5">
                    {p.naam}
                  </div>
                  <div className="text-[13px] text-white/45 mb-4 leading-[1.5]">
                    {p.sub}
                  </div>
                  <div
                    className="inline-flex items-center gap-1.5 bg-oranje/[0.12] border border-oranje/25 text-oranje text-[11px] font-semibold px-2.5 py-1 rounded-[10px] mb-3"
                  >
                    {p.scan}
                  </div>
                  <p className="text-[13px] text-white/55 leading-[1.65] mb-4">
                    {p.body}
                  </p>
                  <ul className="flex flex-col">
                    {p.items.map((it, i) => (
                      <li
                        key={it}
                        className={`text-[13px] text-white/50 py-1 pl-3.5 relative before:content-['·'] before:absolute before:left-0 before:text-oranje ${
                          i < p.items.length - 1 ? "border-b border-white/[0.06]" : ""
                        }`}
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
