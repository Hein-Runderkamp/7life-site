import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const opbrengsten = [
  "Eerste analyse van het vraagstuk",
  "Inzicht in de belangrijkste signalen en patronen",
  "Keuze voor de meest relevante lens",
  "Concreet advies voor vervolgstappen",
  "Advies voor verdieping via de Impact Dynamics Scan (IDS)",
];

const stappen = [
  {
    nr: "1",
    kleur: "#EE7E06",
    titel: "Intakegesprek",
    tekst: "We starten met een kort gesprek om jouw context, vraagstuk en ambitie te begrijpen. Waar loop je tegenaan? Wat wil je bereiken? Wat is er al geprobeerd?",
  },
  {
    nr: "2",
    kleur: "#3E8FA3",
    titel: "Analyse door een 7LIFE-consultant",
    tekst: "Een consultant analyseert data, gesprekken en observaties langs de vijf lenzen van IDS. We kijken niet alleen naar wat er op papier staat, maar ook naar wat er écht gebeurt — in patronen, gedrag en dynamiek.",
  },
  {
    nr: "3",
    kleur: "#7B5EA7",
    titel: "Terugkoppeling & plan",
    tekst: "Je ontvangt een heldere terugkoppeling met concrete vervolgstappen — klaar om direct mee aan de slag te gaan. Geen rapport dat in een la verdwijnt, maar inzicht dat stuurt.",
  },
];

const voorWie = [
  "merkt dat er iets speelt in je organisatie, maar niet precies weet wát",
  "wilt weten waar je écht staat vóór je investeert in een groter traject",
  "een frisse, onafhankelijke blik van buiten wil op je organisatiedynamiek",
  "een eerste stap wilt zetten richting het IDS-systeem of het Social Impact Dashboard",
  "je stuurgroep, OR of bestuur wil voeden met concrete inzichten in plaats van aannames",
];

const lenzen = [
  {
    icon: "👤",
    kleur: "#EE7E06",
    bg: "rgba(238,126,6,0.15)",
    naam: "Zelf",
    vraag: "Hoe zorgen we dat talent niet verloren gaat?",
    uitleg: "Mensen hebben vaak meer in huis dan zichtbaar wordt. Hoe maak je talent, motivatie en ontwikkelkracht bespreekbaar?",
  },
  {
    icon: "🤝",
    kleur: "#3E8FA3",
    bg: "rgba(62,143,163,0.15)",
    naam: "Relaties",
    vraag: "Waarom werken mensen langs elkaar heen terwijl iedereen zijn best doet?",
    uitleg: "Wanneer communicatie stokt, ontstaan misverstanden, frustratie en energieverlies. Wat is er nodig om elkaar weer te vinden?",
  },
  {
    icon: "🧭",
    kleur: "#EE7E06",
    bg: "rgba(238,126,6,0.15)",
    naam: "Leiderschap",
    vraag: "Waarom ontstaat er zoveel verschil tussen teams?",
    uitleg: "Dezelfde organisatie, dezelfde doelen, maar totaal verschillende resultaten. Wat vraagt dit van leiderschap?",
  },
  {
    icon: "🏢",
    kleur: "#3E8FA3",
    bg: "rgba(62,143,163,0.15)",
    naam: "Organisatie",
    vraag: "Waarom blijven veranderingen hangen in plannen?",
    uitleg: "Er wordt veel geïnvesteerd in ontwikkeling en verandering, maar de beweging blijft uit. Waar zit de blokkade?",
  },
  {
    icon: "🌍",
    kleur: "#7B5EA7",
    bg: "rgba(123,94,167,0.15)",
    naam: "Context",
    vraag: "Hoe maken we zichtbaar welke impact we werkelijk maken?",
    uitleg: "Wat leveren inspanningen daadwerkelijk op voor mensen, organisaties en samenleving? En hoe stuur je daarop?",
  },
];

export default function ImpactCheckPagina() {
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
                "radial-gradient(ellipse 60% 60% at 85% 15%, rgba(238,126,6,0.14) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 5% 85%, rgba(62,143,163,0.08) 0%, transparent 60%)",
            }}
          />
          <div className="max-w-[1100px] mx-auto relative z-10 flex flex-wrap gap-10 items-center">
            <div className="flex-1 min-w-[280px]">
              <div className="inline-flex w-[60px] h-[60px] rounded-2xl bg-oranje items-center justify-center font-serif text-2xl font-semibold text-white mb-[22px]">
                01
              </div>
              <h1 className="font-serif text-[clamp(34px,5vw,54px)] font-light text-white leading-[1.12] tracking-[-0.5px] mb-[18px]">
                Een goed antwoord
                <br />
                begint met de <em className="text-oranje not-italic italic">juiste vraag.</em>
              </h1>
              <p className="text-white/55 text-[15.5px] leading-[1.75] mb-[30px] max-w-[460px]">
                Iedere organisatie, team of professional loopt tegen
                uitdagingen aan. De Impact Check helpt om signalen te
                vertalen naar inzicht — in een korte verkenning onderzoeken
                we waar de uitdaging werkelijk zit en welke lens de meeste
                aandacht verdient.
              </p>
              <div className="flex gap-2.5 flex-wrap">
                <a
                  href="#cta"
                  className="bg-oranje text-white px-[26px] py-3 rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
                >
                  Plan een Impact Check
                </a>
                <a
                  href="#lenzen"
                  className="bg-transparent text-white border-[1.5px] border-white/[0.18] px-[26px] py-3 rounded-full text-sm font-medium hover:border-white/45 transition-colors"
                >
                  Bekijk de 5 lenzen
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 self-center">
              <div className="bg-white/[0.06] border border-white/[0.12] rounded-[20px] px-[38px] py-[30px] text-center">
                <div className="font-serif text-[60px] font-semibold text-oranje leading-none">
                  1
                </div>
                <div className="text-sm text-white/50 mt-1">dag</div>
                <div className="text-xs text-white/30 mt-2.5 leading-[1.4] max-w-[130px] mx-auto">
                  Van vaag gevoel naar concreet inzicht
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WAAROM DE IMPACT CHECK */}
        <section className="px-[5%] py-[88px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Waarom de Impact Check
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-2.5 max-w-[680px]">
              Niet ieder signaal vraagt
              <br />
              om dezelfde oplossing.
            </h2>
            <div className="max-w-[680px] text-[15px] text-subtekst leading-[1.8] flex flex-col gap-[18px]">
              <p>
                Verzuim neemt toe. Jongeren missen richting. Teams lopen
                vast. Ontwikkeling levert te weinig verandering op. De vraag
                lijkt vaak helder, maar de echte uitdaging zit regelmatig een
                laag dieper.
              </p>
              <p>
                De Impact Check helpt om zichtbaar te maken wat er werkelijk
                speelt. In een compacte verkenning brengen we signalen,
                patronen en vraagstukken in kaart. We onderzoeken waar de
                meeste beweging mogelijk is en welke van de vijf lenzen de
                meeste aandacht verdient.
              </p>
              <p>
                Zo ontstaat niet alleen inzicht in het vraagstuk, maar ook
                een concrete richting voor de volgende stap.
              </p>
            </div>
          </div>
        </section>

        {/* WAT LEVERT HET OP */}
        <section className="px-[5%] py-[88px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Wat levert het op
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-2.5">
              Eén dag. Concrete inzichten.
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[520px] mb-10">
              De Impact Check brengt samen met een 7LIFE-consultant de
              belangrijkste vraagstukken, sterktes en ontwikkelkansen van
              jouw organisatie in kaart.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {opbrengsten.map((tekst) => (
                <div
                  key={tekst}
                  className="flex gap-3.5 items-start bg-kaart border-[1.5px] border-black/[0.07] rounded-2xl p-5 hover:border-oranje hover:-translate-y-0.5 transition-all"
                >
                  <div className="w-[30px] h-[30px] rounded-full bg-oranje/[0.12] text-oranje flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    ✓
                  </div>
                  <p className="text-[14.5px] text-tekst leading-[1.55] font-medium">
                    {tekst}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VAN SIGNAAL NAAR INZICHT */}
        <section className="bg-donker px-[5%] py-16 text-center">
          <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-4">
            Van signaal naar inzicht
          </div>
          <h2 className="font-serif text-[clamp(24px,3vw,32px)] font-light text-white leading-[1.3] max-w-[620px] mx-auto mb-4">
            De Impact Check is geen uitgebreid onderzoek
            <br />
            of langdurig traject.
          </h2>
          <p className="text-white/50 text-[14.5px] leading-[1.7] max-w-[520px] mx-auto">
            Het is een snelle en toegankelijke eerste stap waarmee je
            ontdekt waar de echte uitdaging zit — en waar duurzame
            verandering kan beginnen.
          </p>
          <div className="text-oranje text-sm font-medium mt-[18px]">
            Van signaal naar inzicht. Van inzicht naar impact.
          </div>
        </section>

        {/* DRIE STAPPEN */}
        <section className="px-[5%] py-[88px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Hoe werkt het
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-2.5">
              Drie stappen naar inzicht
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[520px] mb-10">
              De Impact Check is bewust compact gehouden — zo kom je snel
              tot de kern zonder een lang voortraject.
            </p>
            <div className="flex flex-col max-w-[760px]">
              {stappen.map((s, i) => (
                <div key={s.nr} className="flex relative">
                  {i < stappen.length - 1 && (
                    <div className="absolute left-[27px] top-[58px] w-[2px] h-[calc(100%-26px)] bg-black/[0.07]" />
                  )}
                  <div
                    className="w-[54px] h-[54px] rounded-full flex items-center justify-center font-serif font-semibold text-lg text-white flex-shrink-0 z-10"
                    style={{ background: s.kleur }}
                  >
                    {s.nr}
                  </div>
                  <div className="flex-1 bg-kaart border-[1.5px] border-black/[0.07] rounded-2xl p-5 ml-[18px] mb-4">
                    <h3 className="text-base font-medium mb-1.5">{s.titel}</h3>
                    <p className="text-[13.5px] text-subtekst leading-[1.6]">
                      {s.tekst}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VOOR WIE */}
        <section className="px-[5%] py-[88px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Voor wie
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-8">
              De Impact Check is geschikt als je...
            </h2>
            <div className="flex flex-col gap-2.5 max-w-[640px]">
              {voorWie.map((tekst) => (
                <div
                  key={tekst}
                  className="flex items-start gap-3.5 bg-kaart border-[1.5px] border-black/[0.07] rounded-2xl px-5 py-[17px]"
                >
                  <div className="w-2 h-2 rounded-full bg-oranje flex-shrink-0 mt-1.5" />
                  <p className="text-[14.5px] text-tekst leading-[1.6]">{tekst}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5 LENZEN */}
        <section className="bg-donker px-[5%] py-20" id="lenzen">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje/85 uppercase mb-2.5">
              De vijf lenzen
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light text-white leading-[1.15] mb-2.5">
              Kies de lens die het beste
              <br />
              past bij jouw vraagstuk.
            </h2>
            <p className="text-white/50 text-[15px] leading-[1.7] max-w-[620px] mb-10">
              Iedere vraag heeft een ingang. De vijf lenzen helpen om te
              bepalen waar de uitdaging werkelijk zit. Kies de vraag die het
              meest herkenbaar is.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {lenzen.map((l) => (
                <div
                  key={l.naam}
                  className="bg-white/[0.045] border-[1.5px] border-white/10 rounded-2xl p-6 transition-all hover:bg-white/[0.07]"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                    style={{ background: l.bg }}
                  >
                    {l.icon}
                  </div>
                  <div
                    className="text-[11px] font-bold tracking-[1.5px] uppercase mb-2.5"
                    style={{ color: l.kleur }}
                  >
                    {l.naam}
                  </div>
                  <div className="font-serif text-lg text-white leading-[1.3] mb-2.5">
                    {l.vraag}
                  </div>
                  <div className="text-[13.5px] text-white/50 leading-[1.6]">
                    {l.uitleg}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-[5%] py-[88px] text-center bg-achtergrond" id="cta">
          <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-light leading-[1.15] mb-3.5">
            Plan een <em className="text-oranje not-italic italic">Impact Check.</em>
          </h2>
          <p className="text-[15px] text-subtekst max-w-[480px] mx-auto mb-[30px] leading-[1.7]">
            Een Impact Check duurt één dag. De inzichten blijven jaren. Neem
            contact op en we plannen een vrijblijvende kennismaking.
          </p>
          <div className="flex gap-2.5 justify-center flex-wrap">
            <a
              href="mailto:info@7life.nl?subject=Aanvraag Impact Check"
              className="bg-oranje text-white px-[26px] py-3 rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
            >
              Plan een kennismaking
            </a>
            <Link
              href="/ids"
              className="bg-transparent text-tekst border-[1.5px] border-black/[0.07] px-[26px] py-3 rounded-full text-sm font-medium hover:border-oranje hover:text-oranje transition-colors"
            >
              Meer over IDS
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
