import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const vragen = [
  "Ik wil werken met een bewezen methodiek die wetenschappelijk is onderbouwd",
  "Ik wil onderdeel zijn van een netwerk van gelijkgestemde professionals",
  "Ik zoek tools en assessments die ik kan inzetten bij mijn eigen klanten",
  "Ik wil mijn leiderschapsontwikkeling verdiepen via een serieus programma",
  "Ik wil bijdragen aan de ontwikkeling van nieuwe producten en programma's",
  "Ik zoek een plek waar ondernemen en inhoud hand in hand gaan",
];

const oplossingen = [
  {
    icon: "🎓",
    titel: "Trainer worden",
    body: "Word gecertificeerd 7LIFE Trainer en bouw je eigen praktijk — met de 7LIFE-methodiek, tools en een actief netwerk als fundament.",
    items: [
      "Gecertificeerde opleiding (accreditatie)",
      "Eigen portal en software-omgeving",
      "Vermelding op 7life.nl",
      "Jaarlijkse certificatiedag",
      "Toegang tot alle scans en materialen",
    ],
  },
  {
    icon: "📋",
    titel: "Certificering",
    body: "Al trainer? Houd je certificering actueel en verdiep je in nieuwe instrumenten — van de LeiderschapScan tot de GeldScan.",
    items: [
      "Jaarlijkse certificatiedag verplicht",
      "Aanvullende accreditaties mogelijk",
      "LeiderschapScan certificering",
      "GeldScan certificering",
      "Netwerk- en leerbijeenkomsten",
    ],
  },
  {
    icon: "🏛",
    titel: "Academie voor Bestuur & Leiderschap",
    body: "Diepgaande leiderschapsontwikkeling voor directeuren, bestuurders en leidinggevenden — gebaseerd op de LeiderschapScan.",
    items: [
      "LeiderschapScan als vertrekpunt",
      "Masterclasses en leergangen",
      "Be Excellent programma",
      "Social Impact Theater",
      "Coaching en mentorschap",
    ],
  },
  {
    icon: "🤝",
    titel: "Innovatiepartners",
    body: "Co-creëer nieuwe programma's en producten binnen het 7LIFE-ecosysteem. Voor thought leaders die meer willen dan uitvoeren.",
    items: [
      "Advisor — expertise en reflectie",
      "Pilotpartner — toegang tot doelgroep",
      "Co-ontwikkelaar — meebouwen",
      "Lead Developer — projectleiding",
    ],
  },
];

const impactStats = [
  { n: "40+", l: "gecertificeerde trainers en coaches actief in Nederland" },
  { n: "9.000+", l: "assessments afgenomen door het 7LIFE-netwerk" },
  { n: "16 jaar", l: "ervaring in het opleiden van professionals" },
];

export default function OpleidenPagina() {
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
                "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(238,126,6,0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 10% 80%, rgba(62,143,163,0.08) 0%, transparent 60%)",
            }}
          />
          <div className="max-w-[1100px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-oranje/10 border border-oranje/[0.22] text-oranje text-[11px] font-semibold tracking-[1.5px] px-3.5 py-[5px] rounded-full mb-5 uppercase">
              Opleiden &amp; Certificeren
            </div>
            <h1 className="font-serif text-[clamp(38px,5vw,64px)] font-light text-white leading-[1.1] tracking-[-1px] mb-4">
              Bouw verder.
              <br />
              <em className="text-oranje not-italic italic">Vanuit 7LIFE.</em>
            </h1>
            <p className="text-white/50 text-base leading-[1.75] max-w-[560px] mb-7">
              Word gecertificeerd trainer, word innovatiepartner, of
              verdiep je via de Academie voor Bestuur &amp; Leiderschap.
              7LIFE biedt de methodiek, het netwerk en de tools om écht
              impact te maken.
            </p>
            <div className="flex gap-2.5 flex-wrap">
              <a
                href="#oplossing"
                className="bg-oranje text-white px-6 py-[11px] rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
              >
                Bekijk de mogelijkheden
              </a>
              <a
                href="#cta"
                className="bg-transparent text-white border-[1.5px] border-white/20 px-6 py-[11px] rounded-full text-sm font-medium hover:border-white/50 transition-colors"
              >
                Plan een gesprek
              </a>
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
              Herken jij dit?
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[560px] mb-9">
              Of je nu trainer bent, coach, leidinggevende of educator — er
              is een moment waarop je meer wil dan wat je nu hebt.
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

        {/* DE OPLOSSING */}
        <section className="bg-donker px-[5%] py-[72px]" id="oplossing">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje/85 uppercase mb-2.5">
              De oplossing
            </div>
            <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] font-light text-white leading-[1.15] mb-3">
              Vier wegen om verder te bouwen
            </h2>
            <p className="text-white/45 text-[15px] leading-[1.7] mb-9">
              Van certificering tot co-creatie — kies de rol die bij jou
              past.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {oplossingen.map((o) => (
                <div
                  key={o.titel}
                  className="rounded-[18px] p-[26px] bg-white/5 border border-white/[0.09] hover:bg-white/[0.08] hover:border-oranje hover:-translate-y-0.5 transition-all"
                >
                  <span className="text-[28px] mb-3.5 block">{o.icon}</span>
                  <div className="text-[17px] font-medium text-white mb-2">
                    {o.titel}
                  </div>
                  <p className="text-[13px] text-white/45 leading-[1.65]">
                    {o.body}
                  </p>
                  <ul className="flex flex-col mt-3">
                    {o.items.map((it, i) => (
                      <li
                        key={it}
                        className={`text-[13px] text-white/55 py-1 pl-3.5 relative before:content-['·'] before:absolute before:left-0 before:text-oranje ${
                          i < o.items.length - 1 ? "border-b border-white/[0.06]" : ""
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
        </section>

        {/* IMPACT STORY */}
        <section className="px-[5%] py-[72px] bg-achtergrond" id="impact">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Impact in de praktijk
            </div>
            <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] font-light leading-[1.15] mb-9">
              Wat het oplevert
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="font-serif text-[clamp(20px,3vw,28px)] font-light italic leading-[1.4] border-l-[3px] border-oranje pl-6 mb-5">
                  &ldquo;Ik werkte al jaren als coach, maar had geen
                  methodiek die ik volledig kon vertrouwen. Sinds mijn
                  certificering bij 7LIFE heb ik niet alleen betere
                  gesprekken — ik heb ook een netwerk van mensen die
                  dezelfde taal spreken.&rdquo;
                </div>
                <p className="text-sm text-subtekst leading-[1.75]">
                  Een gecertificeerde 7LIFE Trainer, actief in
                  leiderschaps- en teamontwikkeling. De combinatie van
                  wetenschappelijke onderbouwing en praktische tools maakt
                  het verschil — voor haar én voor haar klanten.
                </p>
                <p className="text-sm text-oranje italic mt-3">
                  — Gecertificeerd 7LIFE Trainer
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {impactStats.map((s) => (
                  <div
                    key={s.n}
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
              Klaar om verder
              <br />
              te <em className="text-oranje not-italic italic">bouwen?</em>
            </h2>
            <p className="text-white/45 text-[15px] max-w-[420px] mx-auto mb-7 leading-[1.7]">
              Vertel ons waar je staat en waar je naartoe wil. Dan kijken
              we samen welke weg het beste bij jou past.
            </p>
            <div className="flex gap-2.5 justify-center flex-wrap">
              <a
                href="mailto:info@7life.nl?subject=Interesse Opleiden en Certificeren"
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
