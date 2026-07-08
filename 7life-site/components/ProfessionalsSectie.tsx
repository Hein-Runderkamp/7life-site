const cards = [
  {
    icon: "🎓",
    titel: "Trainer worden",
    body: "Word gecertificeerd 7LIFE Trainer en bouw je eigen praktijk — met tools, methodiek en netwerk als fundament.",
    items: [
      "Certificering & accreditatie",
      "Toegang tot alle 7LIFE-tools",
      "Vermelding op 7life.nl",
      "Jaarlijkse certificatiedag",
    ],
    ctaLabel: "Meer informatie →",
    href: "/opleiden",
  },
  {
    icon: "🤝",
    titel: "Innovatiepartners",
    body: "Co-creëer nieuwe programma's binnen het 7LIFE-ecosysteem. Voor educators, coaches en thought leaders.",
    items: ["Advisor", "Pilotpartner", "Co-ontwikkelrol", "Lead Development rol"],
    ctaLabel: "Meer informatie →",
    href: "/opleiden",
  },
  {
    icon: "🏛",
    titel: "Academie voor Bestuur & Leiderschap",
    body: "Diepgaande leiderschapsontwikkeling voor directeuren en bestuurders — gebaseerd op de LeiderschapScan.",
    items: ["LeiderschapScan", "Veranderprogramma's", "Be Excellent Academy"],
    ctaLabel: "Bekijk de Academie →",
    href: "https://bestuurenleiderschap.nl",
    extern: true,
  },
];

const checks = [
  "Onderwijs & jongerenontwikkeling",
  "Leiderschap & bestuur",
  "Teams & organisaties",
  "Coaching & persoonlijke ontwikkeling",
  "Financiële weerbaarheid (GeldScan)",
];

const stats = [
  { n: "40+", l: "gecertificeerde professionals" },
  { n: "20+", l: "jaar ervaring in het netwerk" },
  { n: "NL", l: "actief door heel Nederland" },
];

export default function ProfessionalsSectie() {
  return (
    <section className="px-[5%] py-[88px]" id="professionals">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
          Professionals
        </div>
        <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-2.5">
          Word onderdeel
          <br />
          van het ecosysteem.
        </h2>
        <p className="text-[15px] text-subtekst leading-[1.7] max-w-[480px] mb-11">
          Of je nu wilt samenwerken, je wilt certificeren of een partner zoekt
          voor jouw vraagstuk — 7LIFE heeft een rol voor jou.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((c) => (
            <div
              key={c.titel}
              className="bg-kaart border-[1.5px] border-black/[0.07] rounded-card p-7 flex flex-col"
            >
              <span className="text-2xl mb-3">{c.icon}</span>
              <div className="font-serif text-lg mb-2">{c.titel}</div>
              <p className="text-sm text-subtekst leading-[1.6] mb-4">
                {c.body}
              </p>
              <ul className="text-sm text-subtekst flex flex-col gap-1.5 mb-6">
                {c.items.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
              <a
                href={c.href}
                target={c.extern ? "_blank" : undefined}
                rel={c.extern ? "noreferrer" : undefined}
                className="mt-auto text-sm font-medium text-oranje hover:underline"
              >
                {c.ctaLabel}
              </a>
            </div>
          ))}
        </div>

        {/* Zoek een professional */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-donker rounded-card p-10">
          <div>
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje/80 uppercase mb-2">
              Landelijk netwerk
            </div>
            <h3 className="font-serif text-2xl text-white font-light mb-3">
              Werk samen met een
              <br />
              7LIFE Professional
            </h3>
            <p className="text-sm text-white/50 leading-[1.7] mb-5">
              Landelijk netwerk van gecertificeerde professionals. Zij werken
              met de 7LIFE-methodiek als fundament — op maat, in jouw context.
            </p>
            <div className="flex flex-col gap-2">
              {checks.map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-2 text-sm text-white/70"
                >
                  <span className="text-groen">✔</span> {c}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {stats.map((s) => (
              <div
                key={s.n}
                className="bg-white/[0.05] border border-white/10 rounded-2xl p-4 flex items-center gap-4"
              >
                <div className="font-serif text-2xl text-white">{s.n}</div>
                <div className="text-white/50 text-xs">{s.l}</div>
              </div>
            ))}
            <a
              href="#cta"
              className="bg-oranje text-white text-center text-sm font-medium rounded-full py-3 mt-1 hover:bg-[#d4710a] transition-colors"
            >
              Zoek een professional
            </a>
            <p className="text-xs text-white/40 text-center">
              Vertel ons je vraagstuk — wij koppelen je aan de juiste
              professional
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
