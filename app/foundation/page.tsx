import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const doelen = [
  { titel: "Persoonlijke ontwikkeling", tekst: "Mensen helpen ontdekken wie ze zijn, wat ze kunnen en wat ze in beweging brengt — via programma's, trainingen en 7LIFE-tools.", kleur: "#5AAD7E" },
  { titel: "Mentale weerbaarheid", tekst: "Toegankelijke ondersteuning bij mentale gezondheid en veerkracht — juist voor mensen die hiervoor weinig middelen hebben.", kleur: "#4B9389" },
  { titel: "Financiële gezondheid", tekst: "Inzicht in gedrag en waarden rondom geld — via de Money Values Scan en programma's voor financiële zelfredzaamheid.", kleur: "#3D7995" },
  { titel: "Geestelijke groei & welzijn", tekst: "Geïnspireerd door christelijke waarden, maar zonder binding aan een specifieke kerkelijke of religieuze denominatie. Open voor iedereen.", kleur: "#2E5FA0" },
];


const hoeWeWerken = [
  { nr: "01", titel: "Programma's & projecten", tekst: "De Foundation initieert en ondersteunt projecten gericht op persoonlijke groei en welzijn — voor individuen, gezinnen en gemeenschappen. In kerken, buurthuizen en sociale instellingen." },
  { nr: "02", titel: "7LIFE-tools & methodiek", tekst: "De Foundation maakt gebruik van de producten, methodieken en concepten uit het 7LIFE-portfolio — waaronder scans, trainingen en coachingprogramma's — via de samenwerking met 7LIFE Nederland B.V." },
  { nr: "03", titel: "Samenwerken & verbinden", tekst: "De Foundation werkt samen met externe partners, kerken, gemeenschappen en organisaties die bijdragen aan het doel. Geen eiland, maar een verbinder." },
];

const bestuur = [
  { letter: "M", naam: "Maroesja Runderkamp-van der Pols", rol: "Voorzitter", tekst: "Oprichter van 7LIFE en drijvende kracht achter de methodiek. Zij brengt meer dan 30 jaar ervaring in persoonlijke ontwikkeling en organisatiegroei mee naar de Foundation." },
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
        <section className="relative flex items-end overflow-hidden bg-donker min-h-[520px] px-[5%] pt-[170px] pb-16">
          <Image
            src="/foundation/hero-achtergrond.jpg"
            alt="7LIFE Foundation"
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
                  href="mailto:info@7life.nl?subject=7LIFE Foundation"
                  className="bg-transparent text-white border-[1.5px] border-white/20 px-[26px] py-3 rounded-full text-sm font-medium hover:border-white/50 transition-colors"
                >
                  Neem contact op
                </a>
              </div>
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
            <div className="bg-donker rounded-[20px] overflow-hidden">
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src="/foundation/lightlife-project.jpg"
                  alt="The LightLife Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-8 py-8">
                <div className="relative w-[150px] h-[52px] mb-5">
                  <Image
                    src="/wie-zijn-wij/watermerken/lightlife-goud.png"
                    alt="The LightLife Project"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <p className="font-serif text-xl font-light text-white leading-[1.5] mb-5">
                  Welkom bij the LightLife Project.
                </p>
                <a
                  href="https://www.lightlifeproject.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#5aad7e] hover:underline"
                >
                  Naar lightlifeproject.nl →
                </a>
              </div>
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
                  className="bg-kaart border-[1.5px] border-black/[0.07] rounded-2xl px-6 py-[26px] hover:border-[var(--hk)] transition-colors"
                  style={{ "--hk": d.kleur } as React.CSSProperties}
                >
                  <div
                    className="text-base font-semibold mb-2"
                    style={{ color: d.kleur }}
                  >
                    {d.titel}
                  </div>
                  <p className="text-[13.5px] text-tekst/70 leading-[1.65]">
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

        {/* SAMENWERKING MET 7LIFE */}
        <section className="bg-donker border-t-4 border-[#2E7D52] px-[5%] py-[72px]">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr_0.9fr] gap-10 items-start">
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

              <div className="flex flex-col gap-3 lg:pt-9">
                {samenwerkingPunten.map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5aad7e] flex-shrink-0 mt-[7px]" />
                    <div className="text-sm text-white/55 leading-[1.6]">
                      {p}
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:pt-9">
                <div className="text-[11px] font-semibold tracking-[2px] text-[#5aad7e] uppercase mb-3">
                  Bestuur
                </div>
                <div className="flex flex-col gap-4">
                  {bestuur.map((b) => (
                    <div
                      key={b.naam}
                      className="bg-white/[0.045] border-[1.5px] border-white/10 rounded-2xl px-6 py-[26px] hover:border-[#5aad7e] transition-colors"
                    >
                      <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center font-serif text-xl font-semibold text-oranje mb-3.5">
                        {b.letter}
                      </div>
                      <div className="text-base font-medium text-white mb-1">
                        {b.naam}
                      </div>
                      <div className="text-xs font-semibold tracking-wide text-[#5aad7e] uppercase mb-2.5">
                        {b.rol}
                      </div>
                      <p className="text-[13.5px] text-white/50 leading-[1.6]">
                        {b.tekst}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
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
