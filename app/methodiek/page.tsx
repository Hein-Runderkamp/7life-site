import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MensSectie from "@/components/MensSectie";

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
  { nr: "4", tekst: "Mindset — Open vragen over veranderkracht en motivatie" },
  { nr: "+", tekst: "Persoonlijke terugkoppeling door gecertificeerde trainer" },
];

export default function MethodiekPagina() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative flex items-end overflow-hidden bg-donker min-h-[520px] px-[5%] pt-[170px] pb-16">
          <Image
            src="/methodiek/hero-achtergrond.jpg"
            alt="De 7LIFE-methodiek"
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
            <div className="max-w-[620px]">
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
          </div>
        </section>

        <MensSectie />

        {/* OORSPRONG */}
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
              <div className="relative w-full aspect-[588/716] rounded-lg overflow-hidden">
                <Image
                  src="/methodiek/communicatieprofiel-voorbeeld.jpg"
                  alt="Voorbeeld communicatieprofiel — communicatiestijl-scores"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-[11px] text-white/25 leading-[1.5]">
                Illustratief voorbeeld. Elk profiel is uniek. De scan
                wordt altijd begeleid door een gecertificeerde 7LIFE
                Trainer.
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-[5%] py-[88px] text-center bg-donker" id="cta">
          <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-light text-white leading-[1.15] mb-3.5">
            Ontdek wat de methodiek
            <br />
            voor jou kan betekenen.
          </h2>
          <p className="text-white/50 text-[15px] max-w-[480px] mx-auto mb-[30px] leading-[1.7]">
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
            <a
              href="/downloads/7life-fullscan-methodiek.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-white border-[1.5px] border-white/[0.18] px-[26px] py-3 rounded-full text-sm font-medium hover:border-white/45 transition-colors"
            >
              Ontdek meer
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
