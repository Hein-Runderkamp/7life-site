import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heroCards = [
  { icon: "🌱", titel: "Persoonlijke ontwikkeling", tekst: "Inzicht in wie je bent, wat je drijft en wat je in beweging brengt — voor iedereen." },
  { icon: "🧠", titel: "Mentale weerbaarheid", tekst: "Praktische tools en programma's die mensen helpen sterker in het leven te staan." },
  { icon: "💚", titel: "Geestelijke groei", tekst: "Geïnspireerd door christelijke waarden, toegankelijk voor iedereen — ongeacht achtergrond of kerkgenootschap." },
];

const doelen = [
  { icon: "🌿", titel: "Persoonlijke ontwikkeling", tekst: "Mensen helpen ontdekken wie ze zijn, wat ze kunnen en wat ze in beweging brengt — via programma's, trainingen en 7LIFE-tools." },
  { icon: "🧠", titel: "Mentale weerbaarheid", tekst: "Toegankelijke ondersteuning bij mentale gezondheid en veerkracht — juist voor mensen die hiervoor weinig middelen hebben." },
  { icon: "💛", titel: "Financiële gezondheid", tekst: "Inzicht in gedrag en waarden rondom geld — via de Money Values Scan en programma's voor financiële zelfredzaamheid." },
  { icon: "✨", titel: "Geestelijke groei & welzijn", tekst: "Geïnspireerd door christelijke waarden, maar zonder binding aan een specifieke kerkelijke of religieuze denominatie. Open voor iedereen." },
];

const hoeWeWerken = [
  { nr: "01", titel: "Programma's & projecten", tekst: "De Foundation initieert en ondersteunt projecten gericht op persoonlijke groei en welzijn — voor individuen, gezinnen en gemeenschappen. In kerken, buurthuizen en sociale instellingen." },
  { nr: "02", titel: "7LIFE-tools & methodiek", tekst: "De Foundation maakt gebruik van de producten, methodieken en concepten uit het 7LIFE-portfolio — waaronder scans, trainingen en coachingprogramma's — via de samenwerking met 7LIFE Nederland B.V." },
  { nr: "03", titel: "Samenwerken & verbinden", tekst: "De Foundation werkt samen met externe partners, kerken, gemeenschappen en organisaties die bijdragen aan het doel. Geen eiland, maar een verbinder." },
];

const bestuur = [
  { letter: "M", naam: "Maroesja Runderkamp-van der Pols", rol: "Voorzitter", tekst: "Oprichter van 7LIFE en drijvende kracht achter de methodiek. Zij brengt meer dan 30 jaar ervaring in persoonlijke ontwikkeling en organisatiegroei mee naar de Foundation." },
  { letter: "H", naam: "Hein Runderkamp", rol: "Secretaris & Penningmeester", tekst: "Operations director van 7LIFE Nederland. Als secretaris en penningmeester van de Foundation bewaakt hij de administratieve en financiële continuïteit van de stichting." },
];

const samenwerkingPunten = [
  "Juridisch zelfstandige stichting, ingeschreven bij de KvK",
  "Gevestigd aan Zeeweg 24, 3853 LM Ermelo",
  "Financiering via giften, donaties, subsidies en activiteiten",
  "Gebruik van 7LIFE-portfolio via marktconforme samenwerking",
  "Geen winstuitkering aan bestuurders of betrokkenen",
  "Open voor externe partners, kerken en gemeenschappen",
];

export default function FoundationPagina() {
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
                "radial-gradient(ellipse 60% 55% at 85% 15%, rgba(46,125,82,0.18) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 5% 90%, rgba(238,126,6,0.07) 0%, transparent 60%)",
            }}
          />
          <div className="max-w-[1100px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-[#2E7D52]/[0.15] border border-[#2E7D52]/30 text-[#5aad7e] text-[11px] font-medium tracking-[1.5px] px-3.5 py-[5px] rounded-full mb-6 uppercase">
                7LIFE Foundation
              </div>
              <h1 className="font-serif text-[clamp(36px,5vw,60px)] font-light text-white leading-[1.1] tracking-[-0.5px] mb-5">
                Persoonlijke groei
                <br />
                is voor{" "}
                <em className="text-[#5aad7e] not-italic italic">iedereen.</em>
              </h1>
              <p className="text-white/55 text-[15.5px] leading-[1.75] max-w-[460px] mb-8">
                De 7LIFE Foundation zet het 7LIFE-gedachtengoed in voor
                mensen die het het meest nodig hebben. Persoonlijke
                ontwikkeling, mentale weerbaarheid en geestelijke groei —
                toegankelijk voor iedereen, geïnspireerd door christelijke
                waarden.
              </p>
              <div className="flex gap-2.5 flex-wrap">
                <a
                  href="#doelstelling"
                  className="bg-[#2E7D52] text-white px-[26px] py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Onze doelstelling
                </a>
                <a
                  href="#cta"
                  className="bg-transparent text-white border-[1.5px] border-white/20 px-[26px] py-3 rounded-full text-sm font-medium hover:border-white/50 transition-colors"
                >
                  Neem contact op
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3.5">
              {heroCards.map((c) => (
                <div
                  key={c.titel}
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-[22px]"
                >
                  <div className="text-2xl mb-2.5">{c.icon}</div>
                  <div className="text-sm font-medium text-white mb-1.5">
                    {c.titel}
                  </div>
                  <div className="text-[13px] text-white/45 leading-[1.55]">
                    {c.tekst}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WAAROM */}
        <section className="px-[5%] py-[88px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[11px] font-semibold tracking-[2px] text-[#2E7D52] uppercase mb-2.5">
                Waarom de Foundation
              </div>
              <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-6">
                Het 7LIFE-gedachtengoed
                <br />
                bereikt niet iedereen vanzelf.
              </h2>
              <div className="text-[15px] text-subtekst leading-[1.8]">
                <p className="mb-[18px]">
                  Persoonlijke ontwikkeling en inzicht in jezelf zijn geen
                  luxe. Ze zijn de basis voor een waardevol leven, gezonde
                  relaties en een bijdrage aan de samenleving. Maar niet
                  iedereen heeft vanzelfsprekend toegang tot de tools en
                  programma's die daarbij helpen.
                </p>
                <p className="mb-[18px]">
                  De 7LIFE Foundation is opgericht om dat te veranderen.
                  Wij brengen het 7LIFE-gedachtengoed — met zijn
                  wetenschappelijk onderbouwde methodiek, scans en
                  programma's — naar mensen, kerken en gemeenschappen die
                  dat het meest nodig hebben.
                </p>
                <p>
                  Niet als commercieel product. Maar als{" "}
                  <strong className="text-tekst font-medium">
                    investering in mensen en gemeenschappen
                  </strong>{" "}
                  — geïnspireerd door de overtuiging dat ieder mens
                  waardevol is en het recht heeft om zichzelf te zijn.
                </p>
              </div>
            </div>
            <div className="bg-donker rounded-[20px] px-8 py-9 relative">
              <div className="font-serif text-[80px] text-[#2E7D52]/35 leading-none absolute -top-2 left-6">
                &ldquo;
              </div>
              <blockquote className="font-serif text-xl font-light text-white leading-[1.5] italic mt-8">
                Waarom zou je jezelf vergelijken met anderen? Niemand in
                de hele wereld kan beter jou zijn dan jijzelf.
              </blockquote>
              <cite className="block mt-5 text-[13px] text-white/40 not-italic">
                Maroesja van der Pols — oprichter 7LIFE Foundation
              </cite>
            </div>
          </div>
        </section>

        {/* DOELSTELLING */}
        <section
          className="bg-donker mx-4 rounded-3xl px-[6%] py-[72px]"
          id="doelstelling"
        >
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-[#5aad7e] uppercase mb-2.5">
              Statutaire doelstelling
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light text-white leading-[1.15] mb-3">
              Wat de Foundation nastreeft.
            </h2>
            <p className="text-white/50 text-[15px] leading-[1.7] max-w-[640px] mb-9">
              De doelstelling van de Stichting 7LIFE Foundation is
              vastgelegd in de statuten en richt zich op vier pijlers van
              menselijke groei en welzijn.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {doelen.map((d) => (
                <div
                  key={d.titel}
                  className="bg-white/[0.045] border-[1.5px] border-white/10 rounded-2xl px-6 py-[26px] hover:border-[#2E7D52] hover:bg-[#2E7D52]/[0.08] transition-all"
                >
                  <div className="text-2xl mb-3.5">{d.icon}</div>
                  <div className="text-base font-medium text-white mb-2">
                    {d.titel}
                  </div>
                  <p className="text-[13.5px] text-white/50 leading-[1.65]">
                    {d.tekst}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOE WE WERKEN */}
        <section className="px-[5%] py-[88px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-[#2E7D52] uppercase mb-2.5">
              Hoe de Foundation werkt
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-3">
              Programma's, middelen
              <br />
              en samenwerking.
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[540px] mb-10">
              De Foundation realiseert haar doelen via drie samenhangende
              sporen — altijd in verbinding met 7LIFE Nederland en haar
              netwerk van professionals.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {hoeWeWerken.map((h) => (
                <div
                  key={h.nr}
                  className="bg-kaart border-[1.5px] border-black/[0.07] rounded-2xl px-6 py-7 hover:border-[#2E7D52] hover:-translate-y-0.5 transition-all"
                >
                  <div className="font-serif text-4xl font-semibold text-[#2E7D52]/25 leading-none mb-3">
                    {h.nr}
                  </div>
                  <div className="text-base font-medium mb-2">
                    {h.titel}
                  </div>
                  <p className="text-[13.5px] text-subtekst leading-[1.65]">
                    {h.tekst}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BESTUUR */}
        <section className="px-[5%] py-[88px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-[#2E7D52] uppercase mb-2.5">
              Bestuur
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-3">
              Wie de Foundation draagt.
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[540px] mb-10">
              De Stichting 7LIFE Foundation wordt geleid door een
              tweekoppig bestuur, gevestigd in Ermelo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[680px]">
              {bestuur.map((b) => (
                <div
                  key={b.naam}
                  className="bg-kaart border-[1.5px] border-black/[0.07] rounded-2xl px-6 py-[26px] hover:border-[#2E7D52] transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-donker flex items-center justify-center font-serif text-xl font-semibold text-oranje mb-3.5">
                    {b.letter}
                  </div>
                  <div className="text-base font-medium mb-1">{b.naam}</div>
                  <div className="text-xs font-semibold tracking-wide text-[#2E7D52] uppercase mb-2.5">
                    {b.rol}
                  </div>
                  <p className="text-[13.5px] text-subtekst leading-[1.6]">
                    {b.tekst}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SAMENWERKING MET 7LIFE */}
        <section className="bg-donker border-t-4 border-[#2E7D52] px-[5%] py-[72px]">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[11px] font-semibold tracking-[2px] text-[#5aad7e] uppercase mb-2.5">
                Relatie met 7LIFE Nederland
              </div>
              <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light text-white leading-[1.15] mb-6">
                Zelfstandig. Verbonden.
                <br />
                Aanvullend.
              </h2>
              <div className="text-[15px] text-white/55 leading-[1.8]">
                <p className="mb-4">
                  De 7LIFE Foundation is een{" "}
                  <strong className="text-white font-medium">
                    juridisch zelfstandige stichting
                  </strong>
                  , los van 7LIFE Nederland B.V. Maar de samenwerking is
                  nauw en bewust: via een samenwerkingsovereenkomst kan de
                  Foundation gebruik maken van de producten, methodieken
                  en expertise van 7LIFE.
                </p>
                <p>
                  Die samenwerking heeft{" "}
                  <strong className="text-white font-medium">
                    geen winstoogmerk voor de stichting
                  </strong>
                  . De zelfstandige juridische en financiële positie van
                  beide organisaties blijft volledig gehandhaafd.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {samenwerkingPunten.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5aad7e] flex-shrink-0 mt-[7px]" />
                  <div className="text-sm text-white/55 leading-[1.6]">
                    {p}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-[5%] py-[88px] text-center bg-achtergrond" id="cta">
          <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-light leading-[1.15] mb-3.5">
            Wil je bijdragen aan
            <br />
            <em className="text-[#2E7D52] not-italic italic">
              persoonlijke groei voor iedereen?
            </em>
          </h2>
          <p className="text-[15px] text-subtekst max-w-[480px] mx-auto mb-[30px] leading-[1.7]">
            Of je nu wilt samenwerken, een programma wilt starten in jouw
            gemeenschap of meer wilt weten over de Foundation — we horen
            graag van je.
          </p>
          <div className="flex gap-2.5 justify-center flex-wrap">
            <a
              href="mailto:info@7life.nl?subject=7LIFE Foundation"
              className="bg-[#2E7D52] text-white px-[26px] py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Neem contact op
            </a>
            <Link
              href="/wie-zijn-wij"
              className="bg-transparent text-tekst border-[1.5px] border-black/[0.07] px-[26px] py-3 rounded-full text-sm font-medium hover:border-[#2E7D52] hover:text-[#2E7D52] transition-colors"
            >
              Terug naar Wie zijn wij
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
