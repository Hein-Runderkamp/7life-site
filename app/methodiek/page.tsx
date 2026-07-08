import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heroStijlen = [
  { naam: "Pionier", kleur: "#1B3B6F", bg: "rgba(27,59,111,0.2)", tekst: "#7a9fd4" },
  { naam: "Doener", kleur: "#8B3FA0", bg: "rgba(139,63,160,0.15)", tekst: "#c98fdb" },
  { naam: "Zorger", kleur: "#D7263D", bg: "rgba(215,38,61,0.15)", tekst: "#e87085" },
  { naam: "Verbinder", kleur: "#F2C12E", bg: "rgba(242,193,46,0.15)", tekst: "#d4ae1a" },
  { naam: "Strateeg", kleur: "#3E8FA3", bg: "rgba(62,143,163,0.15)", tekst: "#7ec4d4" },
  { naam: "Beheerder", kleur: "#8a8a8a", bg: "rgba(138,138,138,0.18)", tekst: "#b3b3b3" },
  { naam: "Doordenker", kleur: "#2E7D52", bg: "rgba(46,125,82,0.15)", tekst: "#6ac090" },
];

const gelovenItems = [
  "De kracht van communicatie — contact maken vanuit oprechte interesse en wederzijds respect.",
  "Investeren in mensen die zichzelf willen ontdekken en vanuit eigen kracht willen groeien.",
  "Het bouwen aan stabiele teams, sterke organisaties en veelkleurige netwerken.",
  "Ontwikkelen van tools die de praktijk verrijken — niet meer complexiteit, maar meer helderheid.",
  "Ieder mens is uniek, waardevol en heeft het recht om zichzelf te zijn.",
];

const lagen = [
  { nr: "1", naam: "Identity", tekst: "Drijfveren, waarden, overtuigingen — wie iemand werkelijk ís", kleur: "#EE7E06", bg: "rgba(238,126,6,0.12)" },
  { nr: "2", naam: "Choices", tekst: "Wat iemand wel of niet laat zien in interactie met anderen", kleur: "#7B5EA7", bg: "rgba(123,94,167,0.12)" },
  { nr: "3", naam: "Behaviour", tekst: "Zichtbaar gedrag, kwaliteiten, competenties in de praktijk", kleur: "#3E8FA3", bg: "rgba(62,143,163,0.12)" },
  { nr: "4", naam: "Interpretation", tekst: "Hoe anderen jouw gedrag waarnemen en interpreteren", kleur: "#d4ae1a", bg: "rgba(242,193,46,0.1)" },
  { nr: "5", naam: "Context", tekst: "De omgeving, de cultuur, de situatie die alles kleurt", kleur: "#5aad7e", bg: "rgba(46,125,82,0.12)" },
];

const bouwblokken = [
  {
    nr: "01",
    sub: "Communication Style",
    naam: "Communicatiestijl",
    tekst: "Hoe iemand de wereld waarneemt en contact maakt. Dit is de zichtbare laag van gedrag — en het vertrekpunt van alles. De 7LIFE-scan brengt dit in kaart via zeven stijlen, elk met een eigen kleur, symbool en profiel.",
    items: [
      "7 communicatiestijlen in een unieke combinatie per persoon",
      "Resultaat: top 3 voorkeursstijlen + volledig profiel",
      "Inzicht in hoe je communiceert — en hoe anderen je zien",
    ],
  },
  {
    nr: "02",
    sub: "Learning Style",
    naam: "Leerstijl",
    tekst: "Hoe iemand leert en zich ontwikkelt. Elke communicatiestijl heeft een eigen leervoorkeur — weten hoe iemand het best groeit, is de sleutel tot effectieve begeleiding en teamontwikkeling.",
    items: [
      "Pionier: leert door gewoon te beginnen",
      "Doordenker: leert door diep onderzoek",
      "Verbinder: groeit door herhaling en relatie",
    ],
  },
  {
    nr: "03",
    sub: "Transformation Force",
    naam: "Veranderkracht",
    tekst: "Het vermogen om in beweging te komen én impact te maken. Vier voorwaarden bepalen of verandering lukt: Mission, Self-worth, Safety en Support system. Elk met een score van 0–100.",
    items: [
      "Mission — richting en betekenis",
      "Self-worth — zelfbeeld en vertrouwen",
      "Safety — psychologische veiligheid",
      "Support system — omgeving en steun",
    ],
  },
];

const stijlen = [
  { icoon: "/iconen/pionier.png", naam: "Pionier", kernwoord: "Vernieuwen · Durven · Actie", tekst: "Gaat voorop. Daagt uit. Zegt wat anderen denken maar niet durven te zeggen. Houdt van snelheid en haat stilstand.", bg: "rgba(27,59,111,0.2)", rand: "rgba(27,59,111,0.4)", naamKleur: "#7a9fd4", kwKleur: "#5e7fbf" },
  { icoon: "/iconen/doener.png", naam: "Doener", kernwoord: "Afronden · Kwaliteit · Praktisch", tekst: "Maakt dingen af. Let op details. Betrouwbaar en precies. Liever goed dan snel — maar ook graag concrete resultaten.", bg: "rgba(139,63,160,0.14)", rand: "rgba(139,63,160,0.3)", naamKleur: "#c98fdb", kwKleur: "#8B3FA0" },
  { icoon: "/iconen/zorger.png", naam: "Zorger", kernwoord: "Warmte · Invoelend · Passie", tekst: "Voelt aan wat anderen nodig hebben. Loyaal en betrokken. Geeft energie aan mensen — en vraagt er ook om.", bg: "rgba(215,38,61,0.12)", rand: "rgba(215,38,61,0.25)", naamKleur: "#e87085", kwKleur: "#D7263D" },
  { icoon: "/iconen/verbinder.png", naam: "Verbinder", kernwoord: "Contact · Enthousiasme · Netwerk", tekst: "Brengt mensen samen. Bruist van energie. Lost conflicten op door te verbinden. Houdt van samenwerking en variatie.", bg: "rgba(242,193,46,0.1)", rand: "rgba(242,193,46,0.2)", naamKleur: "#d4c250", kwKleur: "#d4ae1a" },
  { icoon: "/iconen/strateeg.png", naam: "Strateeg", kernwoord: "Doelgericht · Overzicht · Plan", tekst: "Denkt in systemen. Wil excelleren. Heeft altijd een plan B. Stuurt op resultaat en houdt overzicht waar anderen de weg kwijtraken.", bg: "rgba(62,143,163,0.14)", rand: "rgba(62,143,163,0.3)", naamKleur: "#7ec4d4", kwKleur: "#3E8FA3" },
  { icoon: "/iconen/beheerder.png", naam: "Beheerder", kernwoord: "Balans · Investeren · Vindingrijk", tekst: "Weegt af. Investeert verstandig — in mensen, middelen en relaties. Creatief in oplossingen, standvastig in waarden.", bg: "rgba(138,138,138,0.14)", rand: "rgba(138,138,138,0.3)", naamKleur: "#b3b3b3", kwKleur: "#8a8a8a" },
  { icoon: "/iconen/doordenker.png", naam: "Doordenker", kernwoord: "Analyseren · Diepgang · Kennis", tekst: "Onderzoekt voor hij spreekt. Heeft altijd vragen. Houdt van diepte, haat oppervlakkigheid. Zijn inzichten zijn goud — als je er de tijd voor neemt.", bg: "rgba(46,125,82,0.12)", rand: "rgba(46,125,82,0.25)", naamKleur: "#6ac090", kwKleur: "#2E7D52" },
];

const scanOnderdelen = [
  { nr: "1", tekst: "Communicatiestijlen — 7 dimensies, jouw unieke profiel" },
  { nr: "2", tekst: "Leerstijl — hoe jij het best groeit en ontwikkelt" },
  { nr: "3", tekst: "Veranderkracht — jouw vermogen om in beweging te komen" },
  { nr: "4", tekst: "Open vragen — JA-gebied en NEE-gebied in kaart" },
  { nr: "+", tekst: "Persoonlijke terugkoppeling door gecertificeerde trainer" },
];

const scanVoorbeeld = [
  { naam: "Verbinder", kleur: "#F2C12E", pct: 79 },
  { naam: "Zorger", kleur: "#D7263D", pct: 72 },
  { naam: "Beheerder", kleur: "#8a8a8a", pct: 70 },
  { naam: "Pionier", kleur: "#1B3B6F", pct: 66 },
  { naam: "Strateeg", kleur: "#3E8FA3", pct: 61 },
  { naam: "Doener", kleur: "#8B3FA0", pct: 55 },
  { naam: "Doordenker", kleur: "#2E7D52", pct: 48 },
];

const voorWie = [
  {
    icon: "👤",
    titel: "Individuen & Professionals",
    tekst: "Inzicht in jezelf als basis voor groei. Wat zijn jouw kwaliteiten? Hoe communiceer je? Wat brengt jou in beweging? De scan geeft antwoord — de trainer helpt je ermee aan de slag.",
  },
  {
    icon: "🤝",
    titel: "Teams & Organisaties",
    tekst: "Een team dat elkaars stijlen kent, communiceert anders. Sneller. Eerlijker. Met minder misverstanden. 7LIFE maakt de dynamiek bespreekbaar — en brengt teams in beweging.",
  },
  {
    icon: "🎓",
    titel: "Onderwijs & Jongeren",
    tekst: "Van basisschool tot HBO. 7LIFE helpt jongeren ontdekken wie ze zijn en wat ze kunnen — niet als label, maar als vertrekpunt voor studiekeuze, loopbaan en persoonlijke ontwikkeling.",
  },
];

export default function MethodiekPagina() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative bg-donker mx-4 mt-4 rounded-[28px] px-[6%] pt-[120px] pb-20 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 55% at 88% 12%, rgba(238,126,6,0.15) 0%, transparent 60%), radial-gradient(ellipse 45% 60% at 5% 88%, rgba(123,94,167,0.08) 0%, transparent 60%)",
            }}
          />
          <div className="max-w-[1100px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-oranje/10 border border-oranje/[0.22] text-oranje text-[11px] font-medium tracking-[1.5px] px-3.5 py-[5px] rounded-full mb-6 uppercase">
                De 7LIFE-methodiek
              </div>
              <h1 className="font-serif text-[clamp(36px,5vw,58px)] font-light text-white leading-[1.1] tracking-[-0.5px] mb-5">
                Een gedeelde taal
                <br />
                voor <em className="text-oranje not-italic italic">echte verandering.</em>
              </h1>
              <p className="text-white/55 text-[15.5px] leading-[1.75] max-w-[460px] mb-8">
                7LIFE is geen test. Het is een ontwikkelmodel dat mensen
                helpt zichzelf te begrijpen — en elkaar. Zodat gedrag
                bespreekbaar wordt, samenwerking versterkt en duurzame
                verandering mogelijk is.
              </p>
              <div className="flex gap-2.5 flex-wrap">
                <a
                  href="#bouwblokken"
                  className="bg-oranje text-white px-[26px] py-3 rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
                >
                  De drie bouwblokken
                </a>
                <a
                  href="#stijlen"
                  className="bg-transparent text-white border-[1.5px] border-white/20 px-[26px] py-3 rounded-full text-sm font-medium hover:border-white/50 transition-colors"
                >
                  De 7 communicatiestijlen
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {heroStijlen.map((s) => (
                <div
                  key={s.naam}
                  className="rounded-full px-3.5 py-[7px] text-xs font-medium flex items-center gap-1.5"
                  style={{ background: s.bg, color: s.tekst }}
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: s.kleur }}
                  />
                  {s.naam}
                </div>
              ))}
              <div className="rounded-full px-3.5 py-[7px] text-xs font-medium flex items-center gap-1.5 bg-white/[0.08] text-white/50">
                <span className="w-2 h-2 rounded-full flex-shrink-0 bg-white/40" />
                + Veranderkracht
              </div>
            </div>
          </div>
        </section>

        {/* OORSPRONG */}
        <section className="px-[5%] py-[88px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
                Hoe het begon
              </div>
              <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-6">
                Een gemis als startpunt.
                <br />
                Overtuiging als fundament.
              </h2>
              <div className="text-[15px] text-subtekst leading-[1.85]">
                <p className="mb-[18px]">
                  Maroesja van der Pols zag het keer op keer. Mensen deden
                  een assessment, kregen waardevol inzicht — en twee
                  maanden later was er niets meer van over. Niet omdat het
                  inzicht niet klopte. Maar omdat de brug naar dagelijks
                  gedrag ontbrak.
                </p>
                <p className="mb-[18px]">
                  Wat er miste, was een{" "}
                  <strong className="text-tekst font-medium">
                    gedeelde taal
                  </strong>
                  . Een taal waarmee mensen met elkaar kunnen praten over
                  hoe ze communiceren, hoe ze leren en hoe ze in beweging
                  komen. Niet als labels. Niet als vakjes. Maar als{" "}
                  <em>levend gereedschap</em> voor echte samenwerking.
                </p>
                <p className="mb-6">
                  Vanuit die overtuiging ontwikkelde Maroesja de
                  7LIFE-methodiek — beschreven in haar boek{" "}
                  <em>Communicatiekracht</em>. Een ontwikkelmodel dat
                  vertrekt vanuit wie iemand werkelijk is, en dat inzicht
                  vertaalt naar actie. Elke dag. In elk gesprek.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-donker rounded-[20px] px-7 py-8">
                <h3 className="font-serif text-xl font-normal text-oranje mb-5">
                  Samen geloven wij in:
                </h3>
                {gelovenItems.map((it, i) => (
                  <div
                    key={it}
                    className={`flex items-start gap-3 text-sm text-white/60 leading-[1.6] ${
                      i < gelovenItems.length - 1 ? "mb-3.5" : ""
                    }`}
                  >
                    <div className="w-[5px] h-[5px] rounded-full bg-oranje flex-shrink-0 mt-[7px]" />
                    {it}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GEEN TEST / HET MODEL */}
        <section className="bg-donker mx-4 rounded-3xl px-[6%] py-[72px]">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje/85 uppercase mb-2.5">
              Het model
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light text-white leading-[1.15] mb-3 max-w-[640px]">
              7LIFE is geen persoonlijkheidstest.
            </h2>
            <p className="text-white/50 text-[15px] leading-[1.7] max-w-[620px] mb-9">
              Het is een dynamisch ontwikkelmodel. Het gaat niet om wie je
              bent op een slechte dag, of in een stresssituatie. Het gaat
              om wie je kunt zijn — bewust, in verbinding, in beweging.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {lagen.map((l) => (
                <div
                  key={l.nr}
                  className="rounded-2xl px-4 py-5 text-center hover:-translate-y-1 transition-transform"
                  style={{ background: l.bg }}
                >
                  <div
                    className="font-serif text-[28px] font-semibold leading-none mb-2.5 opacity-70"
                    style={{ color: l.kleur }}
                  >
                    {l.nr}
                  </div>
                  <div className="text-[13px] font-semibold text-white mb-1.5 tracking-[0.5px]">
                    {l.naam}
                  </div>
                  <div className="text-[11.5px] text-white/45 leading-[1.5]">
                    {l.tekst}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-7 text-center text-sm text-white/40 italic max-w-[560px] mx-auto leading-[1.7]">
              Effectieve communicatie betekent: bewust bruggen bouwen
              tussen jouw intentie en de interpretatie van de ander. Dat
              begint bij inzicht. En eindigt bij actie.
            </p>
          </div>
        </section>

        {/* DRIE BOUWBLOKKEN */}
        <section className="px-[5%] py-[88px] bg-achtergrond" id="bouwblokken">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              De drie bouwblokken
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-3">
              Communicatiestijl. Leerstijl.
              <br />
              Veranderkracht.
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[540px] mb-10">
              De 7LIFE-methodiek meet drie dingen tegelijk — en verbindt
              ze. Want wie weet hoe iemand communiceert, hoe diegene
              leert én wat hem in beweging brengt, kan écht iets in gang
              zetten.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {bouwblokken.map((b) => (
                <div
                  key={b.nr}
                  className="bg-kaart border-[1.5px] border-black/[0.07] rounded-[18px] px-[26px] py-8 hover:border-oranje hover:-translate-y-0.5 transition-all"
                >
                  <div className="font-serif text-5xl font-semibold text-oranje/[0.18] leading-none mb-3">
                    {b.nr}
                  </div>
                  <div className="text-[17px] font-medium mb-1.5">
                    {b.naam}
                  </div>
                  <div className="text-xs text-oranje uppercase tracking-[1.2px] font-semibold mb-3.5">
                    {b.sub}
                  </div>
                  <p className="text-sm text-subtekst leading-[1.7]">
                    {b.tekst}
                  </p>
                  <ul className="flex flex-col gap-1.5 mt-3.5">
                    {b.items.map((it) => (
                      <li
                        key={it}
                        className="text-[13px] text-subtekst flex items-start gap-2 leading-[1.5] before:content-['·'] before:text-oranje before:font-bold before:flex-shrink-0"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7 STIJLEN */}
        <section className="bg-donker border-t-4 border-oranje px-[5%] py-[88px]" id="stijlen">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje/85 uppercase mb-2.5">
              De zeven communicatiestijlen
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light text-white leading-[1.15] mb-3">
              Iedereen heeft alle zeven.
            </h2>
            <p className="text-white/50 text-[15px] leading-[1.7] max-w-[600px] mb-9">
              Maar ieder mens heeft een uniek patroon. Die combinatie laat
              zien hoe jij communiceert, hoe je het best leert en wat je
              in beweging brengt. Geen label. Een vertrekpunt.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {stijlen.map((s) => (
                <div
                  key={s.naam}
                  className="rounded-2xl px-5 py-6 border-[1.5px] hover:-translate-y-1 transition-transform"
                  style={{ background: s.bg, borderColor: s.rand }}
                >
                  <div className="mb-3.5">
                    <Image
                      src={s.icoon}
                      alt={s.naam}
                      width={34}
                      height={34}
                    />
                  </div>
                  <div
                    className="text-base font-medium mb-1.5"
                    style={{ color: s.naamKleur }}
                  >
                    {s.naam}
                  </div>
                  <div
                    className="text-xs uppercase tracking-wide font-semibold mb-2.5 opacity-70"
                    style={{ color: s.kwKleur }}
                  >
                    {s.kernwoord}
                  </div>
                  <div className="text-[13px] text-white/70 leading-[1.6]">
                    {s.tekst}
                  </div>
                </div>
              ))}

              <div className="sm:col-span-2 lg:col-span-4 bg-white/[0.04] border-[1.5px] border-white/10 rounded-2xl px-7 py-6 flex flex-col sm:flex-row items-center gap-7">
                <div className="flex-1">
                  <div className="text-[11px] font-bold tracking-[1.5px] text-oranje uppercase mb-2">
                    Factor 8 — De 8e dimensie
                  </div>
                  <div className="font-serif text-xl text-white mb-2">
                    Veranderkracht
                  </div>
                  <p className="text-sm text-white/50 leading-[1.65] max-w-[640px]">
                    Naast de zeven stijlen meet 7LIFE ook hoe iemand
                    omgaat met verandering — het vermogen om in beweging
                    te komen en impact te maken. Dit is geen aparte stijl,
                    maar een eigen dimensie die aangeeft hoe groot iemands
                    verandercapaciteit is en wat daarvoor nodig is. Bij
                    kinderen heet dit de Ontdekker.
                  </p>
                </div>
                <div className="bg-white/[0.06] rounded-xl px-6 py-5 text-center min-w-[180px]">
                  <div className="font-serif text-5xl font-semibold text-white/30 leading-none">
                    8
                  </div>
                  <div className="text-xs text-white/35 mt-1.5">
                    dimensies
                    <br />
                    één profiel
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-white/35 italic">
              Het intellectueel eigendom van de 7 communicatiestijlen en
              alle scanproducten berust bij Polsini Holding B.V. —
              Maroesja van der Pols.
            </p>
          </div>
        </section>

        {/* DE SCAN */}
        <section className="px-[5%] py-[88px] bg-achtergrond" id="scan">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
                De 7LIFE CommunicatieScan
              </div>
              <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-6 max-w-[440px]">
                Van vragenlijst
                <br />
                naar levend inzicht.
              </h2>
              <div className="text-[15px] text-subtekst leading-[1.8] mb-2">
                <p className="mb-[18px]">
                  De 7LIFE CommunicatieScan is geen invullijstje. Het is
                  een uitgebreide online vragenlijst met acht onderdelen,
                  inclusief open vragen. Altijd begeleid door een
                  gecertificeerde 7LIFE Trainer die het resultaat
                  bespreekbaar maakt.
                </p>
                <p>
                  Het resultaat is een{" "}
                  <strong className="text-tekst font-medium">
                    persoonlijk profiel
                  </strong>
                  : scores per stijl, top 3 voorkeursstijlen, leerstijl en
                  veranderkrachtscore. Geen oordeel. Wel inzicht — direct
                  bruikbaar in de praktijk.
                </p>
              </div>
              <div className="flex flex-col gap-2.5 my-6">
                {scanOnderdelen.map((o) => (
                  <div
                    key={o.nr}
                    className="flex items-start gap-3 bg-kaart border-[1.5px] border-black/[0.07] rounded-xl px-4 py-3.5 hover:border-oranje transition-colors"
                  >
                    <div className="font-serif text-lg font-semibold text-oranje flex-shrink-0 w-6">
                      {o.nr}
                    </div>
                    <div className="text-[13.5px] leading-[1.5]">
                      {o.tekst}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-donker rounded-[20px] px-7 py-8">
              <div className="text-[11px] font-bold tracking-[1.5px] text-oranje uppercase mb-5">
                Voorbeeld communicatieprofiel
              </div>
              {scanVoorbeeld.map((s, i) => (
                <div
                  key={s.naam}
                  className={`flex items-center justify-between py-2.5 ${
                    i < scanVoorbeeld.length - 1 ? "border-b border-white/[0.07]" : ""
                  }`}
                >
                  <div className="text-[13px] text-white font-medium flex items-center gap-2 w-[110px] flex-shrink-0">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: s.kleur }}
                    />
                    {s.naam}
                  </div>
                  <div className="flex-1 mx-3.5 h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ background: s.kleur, width: `${s.pct}%` }}
                    />
                  </div>
                  <div className="text-xs text-white/40 w-8 text-right">
                    {s.pct}
                  </div>
                </div>
              ))}
              <div className="mt-4 text-[11px] text-white/25 leading-[1.5]">
                Illustratief voorbeeld. Elk profiel is uniek. De scan
                wordt altijd begeleid door een gecertificeerde 7LIFE
                Trainer.
              </div>
            </div>
          </div>
        </section>

        {/* VOOR WIE */}
        <section className="bg-donker mx-4 rounded-3xl px-[6%] py-[72px]" id="voor-wie">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje/85 uppercase mb-2.5">
              Voor wie
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light text-white leading-[1.15] mb-3">
              De methodiek werkt overal
              <br />
              waar mensen samenwerken.
            </h2>
            <p className="text-white/50 text-[15px] leading-[1.7] max-w-[600px] mb-9">
              Van individuele coaching tot organisatiebrede transformatie
              — de 7LIFE-methodiek is inzetbaar in elke context waar
              gedrag, communicatie en samenwerking een rol spelen.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {voorWie.map((v) => (
                <div
                  key={v.titel}
                  className="bg-white/[0.045] border-[1.5px] border-white/10 rounded-2xl px-[22px] py-[26px] hover:border-oranje hover:bg-oranje/[0.06] transition-all"
                >
                  <div className="text-[26px] mb-3.5">{v.icon}</div>
                  <div className="text-[15px] font-medium text-white mb-2">
                    {v.titel}
                  </div>
                  <p className="text-[13.5px] text-white/50 leading-[1.65]">
                    {v.tekst}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-[5%] py-[88px] text-center bg-achtergrond" id="cta">
          <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-light leading-[1.15] mb-3.5">
            Ontdek wat de methodiek
            <br />
            voor jou kan betekenen.
          </h2>
          <p className="text-[15px] text-subtekst max-w-[480px] mx-auto mb-[30px] leading-[1.7]">
            Plan een kennismaking, doe de scan via een gecertificeerde
            trainer, of ontdek hoe je zelf onderdeel kunt worden van het
            7LIFE-netwerk.
          </p>
          <div className="flex gap-2.5 justify-center flex-wrap">
            <a
              href="mailto:info@7life.nl?subject=7LIFE Methodiek"
              className="bg-oranje text-white px-[26px] py-3 rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
            >
              Plan een gesprek
            </a>
            <Link
              href="/impact-check"
              className="bg-transparent text-tekst border-[1.5px] border-black/[0.07] px-[26px] py-3 rounded-full text-sm font-medium hover:border-oranje hover:text-oranje transition-colors"
            >
              Start met een Impact Check
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
