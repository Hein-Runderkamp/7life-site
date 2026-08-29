import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PijlerIcon from "@/components/PijlerIcon";

const vragen = [
  {
    titel: "Sturen op wat telt",
    tekst: "Niet rapporteren omdat het moet, maar meten op waarde voor mensen én organisatie.",
  },
  {
    titel: "Verbind structuur en gedrag",
    tekst: "Functiestructuur (OJA), leiderschap en gedrag in één integraal inzicht.",
  },
  {
    titel: "Begeleid beweging",
    tekst: "Meet niet alleen hoe het is — help organisaties echt in beweging te komen.",
  },
];

const pijlers = [
  { icon: "fairwork", titel: "Fair Work", tekst: "Werkt de organisatie voor mensen — of andersom? Salaris, balans, veiligheid." },
  { icon: "money", titel: "Money & Meaning", tekst: "Waar geeft werk energie, waar kost het energie? Doel vs. impact op people." },
  { icon: "human", titel: "Human Development", tekst: "Kan de organisatie zich aanpassen — of blijft ze hangen? Groei & mobiliteit." },
  { icon: "ethical", titel: "Ethical Leadership", tekst: "Is leiderschap betrouwbaar en geloofwaardig? Integriteit & transparantie." },
  { icon: "diversity", titel: "Diversity & Inclusion", tekst: "Voelen mensen zich onderdeel — of buitenstaander? Diversiteit & belonging." },
];

const lagen = [
  {
    titel: "Laag 1: Talent & Gedrag",
    tekst: "Wat kunnen mensen, wat willen zij, wat houden zij vol, hoe groeien zij?",
    features: ["Talent (wat kan iemand)", "Motivatie (wat wil iemand)", "Energie (wat houdt iemand vol)", "Fit (werkt het in deze rol)"],
  },
  {
    titel: "Laag 2: Organisatiestructuur",
    tekst: "Hoe is werk ingericht? Functies, rollen, verantwoordelijkheid, OJA.",
    features: ["Functionele architectuur (FuWa)", "Rolprofielen & verantwoordelijkheid", "Governance & span of control", "Salaristransparantie (OJA-koppeling)"],
  },
  {
    titel: "Laag 3: Impact & Doelen",
    tekst: "Waar sturen we op? KPI's gekoppeld aan ESG en maatschappelijke impact.",
    features: ["Social Impact Goals", "KPI's per IDAE-domein", "Pay gap, engagement, inclusie", "SDG-afstemming"],
  },
];

const impactStats = [
  { n: "68%", l: "minder tijd voor rapportage" },
  { n: "3x", l: "sneller inzicht in knelpunten" },
  { n: "15", l: "KPI's in één dashboard" },
  { n: "1", l: "integraal inzicht" },
];



const nummerKleuren = ["#EE7E06", "#F2C12E", "#7B5EA7"];
const blauwVerloop = ["#3E8FA3", "#2A6478", "#1B3B6F"];

export default function SocialImpactDashboardPagina() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative flex items-end overflow-hidden bg-donker min-h-[520px] px-[5%] pt-[170px] pb-16">
          <Image
            src="/sid/hero-achtergrond.jpg"
            alt="Social Impact Dashboard"
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
              <div className="inline-flex items-center gap-1.5 bg-oranje/10 border border-oranje/[0.22] text-oranje text-[11px] font-semibold tracking-[1.5px] px-3.5 py-[5px] rounded-full mb-5 uppercase">
                Social Impact
              </div>
              <h1 className="font-serif text-[clamp(38px,5vw,64px)] font-light text-white leading-[1.1] tracking-[-1px] mb-4">
                Social Impact Dashboard
              </h1>
              <p className="text-white/50 text-base leading-[1.75] mb-7">
                Meet en begeleid de weg naar duurzame organisatieverandering.
                Het Social Impact Dashboard verbindt organisatiestructuur,
                leiderschap en maatschappelijke impact in één integraal
                sturingsinstrument.
              </p>
            </div>
          </div>
        </section>

        {/* PLATFORM IN BEELD */}
        <section className="px-[5%] py-16 bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="rounded-2xl overflow-hidden border-2 border-black/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <div className="bg-donker px-4 py-2.5 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="bg-white/10 rounded text-[11px] text-white/60 px-3 py-1 ml-2 flex-1 truncate">
                  social-impact-dashboard.7life.nl/overzicht
                </span>
              </div>
              <div className="relative w-full aspect-[1536/1024]">
                <Image
                  src="/sid/dashboard-screenshot.jpeg"
                  alt="Social Impact Dashboard — overzichtspagina"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* WAT RAAKT HET */}
        <section className="px-[5%] py-20 bg-donker">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-bold tracking-[2px] text-oranje uppercase mb-2.5">
              Wat raakt het?
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light text-white leading-[1.15] mb-5">
              Organisaties roepen om meer dan winststijging
            </h2>
            <p className="text-[15px] text-white/50 max-w-[580px] mb-10 leading-[1.7]">
              Wie vandaag een organisatie wil sturen, staat voor een
              transformatie. Niet alleen getallen hoeven omhoog — de
              betekenis van werk, vertrouwen in leiderschap en echte
              gelijkheid moeten groeien. Het Social Impact Dashboard maakt
              zichtbaar waar die groei gebeurt.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {vragen.map((v, i) => (
                <div
                  key={v.titel}
                  className="rounded-2xl p-6 flex gap-4 border-[1.5px] border-white/[0.09] hover:border-oranje hover:-translate-y-0.5 transition-all"
                  style={{ background: blauwVerloop[i] }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-serif text-[15px] text-white flex-shrink-0"
                    style={{ background: nummerKleuren[i] }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">{v.titel}</h3>
                    <p className="text-[13px] text-white/60 leading-[1.5]">
                      {v.tekst}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IDAE-FRAMEWORK */}
        <section className="px-[5%] py-20 bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-bold tracking-[2px] text-oranje uppercase mb-2.5">
              Kern
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-5">
              Het Social Impact Dashboard: vijf Pijlers
            </h2>
            <p className="text-[15px] text-subtekst max-w-[580px] mb-10 leading-[1.7]">
              Het Social Impact Dashboard meet vijf elkaar versterkende
              domeinen. Samen bepalen zij hoe een organisatie functioneert,
              groeit én impact maakt.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {pijlers.map((p) => (
                <div
                  key={p.titel}
                  className="bg-white border-[1.5px] border-black/[0.07] rounded-2xl p-5 text-center hover:border-oranje transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-blauw/10 flex items-center justify-center mx-auto mb-3">
                    <PijlerIcon type={p.icon} />
                  </div>
                  <div className="text-sm font-semibold mb-2">{p.titel}</div>
                  <div className="text-xs text-subtekst leading-[1.5]">
                    {p.tekst}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DRIE LAGEN VAN ZICHT */}
        <section className="px-[5%] py-20 bg-donker">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-bold tracking-[2px] text-oranje uppercase mb-2.5">
              Hoe werkt het
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light text-white leading-[1.15] mb-5">
              Drie lagen van zicht
            </h2>
            <p className="text-[15px] text-white/50 max-w-[580px] mb-10 leading-[1.7]">
              Het dashboard werkt van onder naar boven: van mensen-niveau
              naar organisatiestructuur naar impact-doelen. Elke laag geeft
              antwoord op &lsquo;waarom&rsquo; voordat je naar &lsquo;wat&rsquo; kijkt.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {lagen.map((l, i) => (
                <div
                  key={l.titel}
                  className="rounded-2xl p-6 border-[1.5px] border-white/[0.09] hover:border-oranje hover:-translate-y-0.5 transition-all"
                  style={{ background: blauwVerloop[i] }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-serif text-[15px] text-white mb-3"
                    style={{ background: nummerKleuren[i] }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="text-[15px] font-semibold text-white mb-2">{l.titel}</h3>
                  <p className="text-[13px] text-white/60 leading-[1.6] mb-3.5">
                    {l.tekst}
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {l.features.map((f) => (
                      <div
                        key={f}
                        className="flex gap-2 text-xs text-white/60 items-start before:content-['✓'] before:text-white before:font-bold before:flex-shrink-0"
                      >
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VAN METING TOT BEWEGING */}
        <section className="px-[5%] py-20 bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-bold tracking-[2px] text-oranje uppercase mb-2.5">
              In praktijk
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-10">
              Van meting tot beweging
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Hoe organisaties echt veranderen
                </h3>
                <p className="text-sm text-subtekst leading-[1.7] mb-3">
                  Het Social Impact Dashboard is{" "}
                  <em className="text-oranje not-italic italic">
                    geen rapportage-tool, maar een beslissingsinstrument.
                  </em>{" "}
                  Een gemeente ziet dat de pay gap in bepaalde functies 12%
                  is. Niet zo dat zij een rapport schrijft — zij vraagt:
                  &lsquo;hoe repareren we dit?&rsquo; De tool helpt haar zien of het
                  een structuurprobleem (FuWa-afwijking) is of een
                  gedragsprobleem (talent-fit).
                </p>
                <p className="text-sm text-subtekst leading-[1.7]">
                  Daarna helpt het dashboard dezelfde gemeente volgen hoe
                  zij in beweging komt: welke functies worden herwaardeerd,
                  welke rollen verschuiven, welke mensen groeien naar andere
                  plekken. Impact wordt{" "}
                  <em className="text-oranje not-italic italic">
                    meetbaar en begeleid.
                  </em>
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {impactStats.map((s) => (
                  <div
                    key={s.l}
                    className="bg-white border border-black/[0.07] rounded-2xl p-[18px]"
                  >
                    <div className="font-serif text-[32px] text-blauw leading-none">
                      {s.n}
                    </div>
                    <div className="text-xs text-subtekst mt-1.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-donker text-white text-center px-[5%] py-20" id="cta">
          <h2 className="font-serif text-[clamp(32px,5vw,52px)] font-light leading-[1.1] mb-4 max-w-[720px] mx-auto">
            Wil je zien hoe{" "}
            <em className="text-oranje not-italic italic">jouw organisatie</em>{" "}
            in één dashboard komt?
          </h2>
          <p className="text-[15px] text-white/60 max-w-[480px] mx-auto mb-8 leading-[1.7]">
            Het Social Impact Dashboard is ontworpen voor organisaties die
            willen groeien op basis van inzicht, niet intuïtie.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="mailto:info@7life.nl?subject=Demo Social Impact Dashboard"
              className="bg-oranje text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
            >
              Plan een demonstratie
            </a>
            <Link
              href="/"
              className="bg-transparent text-white border-[1.5px] border-white/[0.18] px-6 py-3 rounded-full text-sm font-medium hover:border-white/45 transition-colors"
            >
              Terug naar 7LIFE
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
