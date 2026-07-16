import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heroStats = [
  { n: "40+", l: "gecertificeerde professionals in ons netwerk" },
  { n: "3", l: "labels — methodiek, leiderschap en social impact" },
  { n: "10+", l: "jaar ervaring in organisatieontwikkeling" },
];

const labels = [
  {
    kleur: "#EE7E06",
    nr: "01",
    sub: "Van inzicht naar impact",
    naam: "7LIFE Nederland",
    body: "De kern van alles: de 7LIFE-methodiek met zeven communicatiestijlen, een netwerk van 40+ gecertificeerde professionals en een complete toolkit van scans voor individuen, teams en organisaties. Wij maken zichtbaar hoe mensen communiceren, leren en veranderen.",
    link: "/methodiek",
    linkTekst: "Meer over de 7LIFE-methodiek →",
  },
  {
    kleur: "#7B5EA7",
    nr: "02",
    sub: "Leiderschap & Bestuur",
    naam: "Academie voor Bestuur & Leiderschap",
    body: "Diepgaande leiderschapsontwikkeling voor directeuren, bestuurders en leidinggevenden. De LeiderschapScan als wetenschappelijk fundament, aangevuld met programma's, leiderschapsreizen en de Taal van het Hart-leergang. In samenwerking met Alex ten Cate.",
    link: "/leiderschap",
    linkTekst: "Naar de Academie →",
  },
  {
    kleur: "#2E7D52",
    nr: "03",
    sub: "Maatschappelijke impact",
    naam: "7LIFE Foundation",
    body: "De stichting richt zich op persoonlijke ontwikkeling, mentale weerbaarheid, financiële gezondheid en geestelijke groei — geïnspireerd door christelijke waarden, zonder binding aan een specifieke kerkelijke denominatie. De Foundation zet het 7LIFE-gedachtengoed in ten behoeve van kwetsbare groepen en gemeenschappen.",
    link: "/foundation",
    linkTekst: "Meer over de Foundation →",
  },
];

const maroesjaFacts = [
  "Bedrijfswetenschapper van opleiding",
  "Auteur van twee boeken over communicatie, ontwikkeling en diversiteit",
  "Ontwikkelaar van de 7LIFE-methodiek en de LeiderschapScan",
  "Oprichter van 7LIFE Nederland B.V. en de 7LIFE Foundation",
  "Meer dan 30 jaar actief in organisatie- en persoonsontwikkeling",
];

const heinCards = [
  {
    label: "Verantwoordelijkheden",
    tekst: "Backoffice & operations · Technologie & platform (OJA) · Sales & business development · Marketing & communicatie",
  },
  {
    label: "Rol in 7LIFE",
    tekst: "Operations Director · Co-architect OJA-platform · Betrokken bij de 7LIFE Foundation",
  },
  {
    label: "Stijl",
    tekst: "Helder en praktisch. Direct en concreet. Zakelijk maar menselijk. Altijd met de inhoud als fundament.",
  },
];

const waarden = [
  { icon: "🙏", naam: "Dankbaar", tekst: "Samenwerken is een voorrecht. Kennis en middelen worden gedeeld — niet gehouden." },
  { icon: "⚙️", naam: "Professioneel", tekst: "Voortdurende ontwikkeling, kwaliteitsbewaking en naleving van wet- en regelgeving." },
  { icon: "🌱", naam: "Opbouwend", tekst: "Positief en oplossingsgericht. Ieder individu is waardevol — zonder uitzondering." },
  { icon: "💡", naam: "Vernieuwend", tekst: "Innovatie, ruimte voor ideeën en de ambitie om trendsetter te zijn — niet volger." },
  { icon: "🔭", naam: "Wijs", tekst: "Luisteren zonder oordeel. Wetenschappelijk fundament. Leren van het verleden." },
];

const netwerkStats = [
  { n: "40+", l: "gecertificeerde professionals landelijk actief" },
  { n: "30+", l: "jaar ervaring in organisatie- en persoonsontwikkeling" },
  { n: "3", l: "labels — samen één ecosysteem voor duurzame verandering" },
  { n: "8", l: "SDG's geborgd in het Social Impact Dashboard" },
];

const klanten = [
  "Gemeente Apeldoorn",
  "Gemeente Barneveld",
  "Frankeland Groep",
  "Erasmus Universiteit Rotterdam",
  "CHE Christelijke Hogeschool Ede",
  "IF Technology",
  "Merieux",
  "Metier",
  "Europarcs",
  "De HAVO Rotterdam",
  "AddVision",
  "Royal Mission",
  "+ en vele anderen",
];

export default function WieZijnWijPagina() {
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
                "radial-gradient(ellipse 65% 55% at 90% 10%, rgba(238,126,6,0.14) 0%, transparent 60%), radial-gradient(ellipse 45% 60% at 5% 90%, rgba(62,143,163,0.08) 0%, transparent 60%)",
            }}
          />
          <div className="max-w-[1100px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-oranje/10 border border-oranje/[0.22] text-oranje text-[11px] font-medium tracking-[1.5px] px-3.5 py-[5px] rounded-full mb-6 uppercase">
                Over 7LIFE
              </div>
              <h1 className="font-serif text-[clamp(38px,5.5vw,64px)] font-light text-white leading-[1.08] tracking-[-0.5px] mb-5">
                Wij geloven dat
                <br />
                mensen het verschil
                <br />
                maken. <em className="text-oranje not-italic italic">Altijd.</em>
              </h1>
              <p className="text-white/55 text-[15.5px] leading-[1.75] max-w-[460px] mb-8">
                7LIFE is een datagedreven social impact bedrijf. Wij helpen
                mensen, teams en organisaties begrijpen wat er werkelijk
                speelt — en in beweging komen. Niet incidenteel.
                Structureel.
              </p>
              <div className="flex gap-2.5 flex-wrap">
                <a
                  href="#labels"
                  className="bg-oranje text-white px-[26px] py-3 rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
                >
                  Wat we doen
                </a>
                <a
                  href="#maroesja"
                  className="bg-transparent text-white border-[1.5px] border-white/[0.18] px-[26px] py-3 rounded-full text-sm font-medium hover:border-white/45 transition-colors"
                >
                  Wie we zijn
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {heroStats.map((s) => (
                <div
                  key={s.n}
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-[22px]"
                >
                  <div className="font-serif text-4xl font-semibold text-oranje leading-none">
                    {s.n}
                  </div>
                  <div className="text-[13px] text-white/50 mt-1 leading-[1.4]">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ORIGINE */}
        <section className="px-[5%] py-[88px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
                Het verhaal achter 7LIFE
              </div>
              <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-2.5 max-w-[480px]">
                Een gemis als startpunt.
                <br />
                Gedreven door overtuiging.
              </h2>
              <div className="text-[15px] text-subtekst leading-[1.8] mt-8">
                <p className="mb-[18px]">
                  Oprichter Maroesja van der Pols zag het keer op keer:
                  waardevolle inzichten verdwenen in een la. Sterke
                  assessments gaven mensen herkenning en potentieel — maar
                  de brug naar dagelijks gedrag, samenwerking en blijvend
                  sterke teams ontbrak.
                </p>
                <p className="mb-[18px]">
                  Echte verandering bleek niet te zitten in méér modellen
                  of meer mandaat. Het ontbrak aan een{" "}
                  <strong className="text-tekst font-medium">
                    gedeelde taal voor gedrag en samenwerking
                  </strong>{" "}
                  — een taal die mensen verbindt in wie ze zijn, hoe ze
                  communiceren en wat ze in beweging brengt.
                </p>
                <p>
                  Vanuit die overtuiging bouwde Maroesja 7LIFE: een
                  methodiek, een ecosysteem en een netwerk dat inzicht
                  vertaalt naar actie. Van assessment naar beweging. Van
                  data naar impact.
                </p>
              </div>
            </div>
            <div className="bg-donker rounded-[20px] p-9 relative">
              <div className="font-serif text-[80px] text-oranje/40 leading-none absolute -top-2 left-6">
                &ldquo;
              </div>
              <blockquote className="font-serif text-[22px] font-light text-white leading-[1.45] italic mt-8">
                Wij meten niet alleen hoe organisaties functioneren. Wij
                begeleiden hoe ze veranderen.
              </blockquote>
              <cite className="block mt-5 text-[13px] text-white/45 not-italic">
                Maroesja van der Pols — oprichter 7LIFE
              </cite>
            </div>
          </div>
        </section>

        {/* WAT WE DOEN — 3 LABELS */}
        <section className="bg-donker mx-4 rounded-3xl px-[6%] py-[72px]" id="labels">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje/85 uppercase mb-2.5">
              Drie labels, één missie
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light text-white leading-[1.15] mb-2.5">
              7LIFE Nederland, de Academie
              <br />
              en de Foundation.
            </h2>
            <p className="text-white/50 text-[15px] leading-[1.7] max-w-[620px] mb-2">
              7LIFE werkt vanuit drie samenhangende labels. Elk label
              richt zich op een andere context — samen vormen ze één
              ecosysteem voor duurzame verandering.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8">
              {labels.map((l) => (
                <div
                  key={l.naam}
                  className="bg-white/[0.045] border-[1.5px] border-white/10 rounded-[18px] p-[30px_26px] flex flex-col transition-all hover:bg-white/[0.07] hover:-translate-y-1"
                  style={{ borderColor: undefined }}
                >
                  <div
                    className="font-serif text-[38px] font-semibold leading-none mb-3.5 opacity-25"
                    style={{ color: l.kleur }}
                  >
                    {l.nr}
                  </div>
                  <div
                    className="text-xs uppercase tracking-[1.2px] font-semibold mb-3.5"
                    style={{ color: l.kleur }}
                  >
                    {l.sub}
                  </div>
                  <div className="text-[17px] font-medium text-white mb-2">
                    {l.naam}
                  </div>
                  <p className="text-[13.5px] text-white/50 leading-[1.65] flex-1">
                    {l.body}
                  </p>
                  <Link
                    href={l.link}
                    className="mt-5 text-sm font-medium inline-flex items-center gap-1.5"
                    style={{ color: l.kleur }}
                  >
                    {l.linkTekst}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAROESJA */}
        <section className="px-[5%] py-[88px] bg-achtergrond" id="maroesja">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            <div className="relative rounded-[20px] overflow-hidden">
              <div className="relative w-full h-[480px]">
                <Image
                  src="/team/maroesja-van-der-pols.jpg"
                  alt="Maroesja van der Pols"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute bottom-5 left-5 bg-donker border border-white/10 rounded-xl px-4 py-3">
                <div className="text-sm font-medium text-white">
                  Maroesja van der Pols
                </div>
                <div className="text-xs text-white/45 mt-0.5">
                  Oprichter &amp; conceptueel architect
                </div>
              </div>
            </div>
            <div>
              <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
                De oprichter
              </div>
              <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-6 max-w-[480px]">
                Maroesja van der Pols
              </h2>
              <div className="text-[15px] text-subtekst leading-[1.8]">
                <p className="mb-[18px]">
                  Maroesja is bedrijfswetenschapper van opleiding en de
                  conceptueel architect van alles wat 7LIFE is. Ze is
                  auteur van twee boeken: <em>Communicatiekracht</em> —
                  over de 7LIFE Communicatie Ontwikkel Scan en hoe mensen
                  communiceren, leren en veranderen — en{" "}
                  <em>Be Excellent</em>, geschreven voor vrouwen in het
                  zakenleven die succesvoller willen zijn op hun eigen
                  manier. Ze is de drijvende kracht achter de
                  7LIFE-methodiek, de LeiderschapScan en het Social Impact
                  Dashboard.
                </p>
                <p className="mb-[18px]">
                  Haar werk combineert{" "}
                  <strong className="text-tekst font-medium">
                    wetenschappelijke onderbouwing
                  </strong>{" "}
                  — communicatiewetenschap, gedragspsychologie, onderzoek
                  naar veranderkracht — met praktische toepasbaarheid voor
                  individuen, teams en organisaties. Ze gelooft dat ieder
                  mens uniek is, waardevol is en het recht heeft om
                  zichzelf te zijn. Dat mensbeeld is de basis van alles.
                </p>
                <p>
                  Kernwoorden die haar werk typeren: communicatiekracht ·
                  verbinding · uniek zijn · in je kracht staan · van
                  inzicht naar impact.
                </p>
              </div>
              <div className="flex flex-col gap-2.5 my-7">
                {maroesjaFacts.map((f) => (
                  <div key={f} className="flex items-start gap-3 text-sm text-tekst">
                    <div className="w-1.5 h-1.5 rounded-full bg-oranje flex-shrink-0 mt-1.5" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HEIN */}
        <section className="bg-donker border-t-4 border-oranje px-[5%] py-[72px]" id="hein">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
            <div>
              <div className="text-[11px] font-semibold tracking-[2px] text-oranje/85 uppercase mb-2.5">
                De operationeel directeur
              </div>
              <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light text-white leading-[1.15] mb-6">
                Hein Runderkamp
              </h2>
              <div className="text-[15px] text-white/55 leading-[1.8]">
                <p className="mb-4">
                  Hein Runderkamp is operations director van 7LIFE
                  Nederland. Hij is verantwoordelijk voor backoffice,
                  technologie, sales en business development — en daarmee
                  de verbindende schakel tussen de inhoudelijke kracht van
                  7LIFE en de wereld buiten.
                </p>
                <p>
                  Als co-architect van het OJA-platform combineert hij{" "}
                  <strong className="text-white font-medium">
                    commercieel inzicht met technisch leiderschap
                  </strong>
                  . Niet door zelf te programmeren, maar door te bouwen in
                  nauwe samenwerking met de tools en mensen om hem heen.
                  Resultaatgericht, direct en altijd met de klant in
                  beeld.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3.5">
              {heinCards.map((c) => (
                <div
                  key={c.label}
                  className="bg-white/[0.045] border-[1.5px] border-white/10 rounded-2xl px-6 py-[22px]"
                >
                  <div className="text-[11px] font-semibold tracking-[1.5px] text-oranje uppercase mb-2">
                    {c.label}
                  </div>
                  <div className="text-sm text-white/50 leading-[1.6]">
                    {c.tekst}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KERNWAARDEN */}
        <section className="px-[5%] py-[88px] bg-achtergrond" id="waarden">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Hoe wij werken
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-2.5">
              Vijf waarden als fundament.
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[520px] mb-10">
              Onze ethische code is geen document in een la. Het zijn de
              principes waarmee wij iedere dag werken — met klanten, met
              elkaar en met ons netwerk.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {waarden.map((w) => (
                <div
                  key={w.naam}
                  className="bg-kaart border-[1.5px] border-black/[0.07] rounded-2xl px-5 py-6 hover:border-oranje hover:-translate-y-0.5 transition-all"
                >
                  <div className="text-[26px] mb-3">{w.icon}</div>
                  <div className="font-serif text-[17px] font-normal mb-2">
                    {w.naam}
                  </div>
                  <div className="text-[13px] text-subtekst leading-[1.6]">
                    {w.tekst}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NETWERK & BEREIK */}
        <section className="px-[5%] py-[88px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Ons bereik
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-2.5">
              Een landelijk netwerk
              <br />
              van gecertificeerde professionals.
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[520px] mb-10">
              7LIFE werkt niet alleen. Ons netwerk van coaches, trainers en
              innovatiepartners is de ruggengraat van onze impact — actief
              door heel Nederland.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
              {netwerkStats.map((s) => (
                <div
                  key={s.l}
                  className="bg-kaart border-[1.5px] border-black/[0.07] rounded-2xl px-5 py-7 text-center hover:border-oranje hover:-translate-y-0.5 transition-all"
                >
                  <div className="font-serif text-[42px] font-semibold text-oranje leading-none">
                    {s.n}
                  </div>
                  <div className="text-[13px] text-subtekst mt-2 leading-[1.4]">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KLANTEN & SECTOREN */}
        <div className="bg-donker mx-4 rounded-3xl px-[6%] py-16">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje/85 uppercase mb-2.5">
              Wie wij helpen
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light text-white leading-[1.15] mb-2.5">
              Actief in onderwijs,
              <br />
              zorg, overheid en bedrijfsleven.
            </h2>
            <p className="text-white/50 text-[15px] leading-[1.7] max-w-[560px] mb-2">
              Van individuele professionals tot landelijke gemeenten. Van
              MBO-instellingen tot zorginstellingen. 7LIFE werkt waar
              mensen en organisaties in beweging willen komen.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-8">
              {klanten.map((k) => (
                <div
                  key={k}
                  className="bg-white/[0.07] border border-white/[0.12] rounded-full px-4 py-2 text-[13px] text-white/70"
                >
                  {k}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="px-[5%] py-[88px] text-center bg-achtergrond" id="cta">
          <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-light leading-[1.15] mb-3.5">
            Benieuwd wat 7LIFE
            <br />
            voor jou kan betekenen?
          </h2>
          <p className="text-[15px] text-subtekst max-w-[480px] mx-auto mb-[30px] leading-[1.7]">
            Of je nu meer wilt weten over onze methodiek, op zoek bent naar
            een gecertificeerde professional of wilt samenwerken — we
            plannen graag een vrijblijvend kennismakingsgesprek.
          </p>
          <div className="flex gap-2.5 justify-center flex-wrap">
            <a
              href="mailto:info@7life.nl?subject=Kennismaking 7LIFE"
              className="bg-oranje text-white px-[26px] py-3 rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
            >
              Plan een gesprek
            </a>
            <Link
              href="/opleiden"
              className="bg-transparent text-tekst border-[1.5px] border-black/[0.07] px-[26px] py-3 rounded-full text-sm font-medium hover:border-oranje hover:text-oranje transition-colors"
            >
              Word partner of trainer
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
