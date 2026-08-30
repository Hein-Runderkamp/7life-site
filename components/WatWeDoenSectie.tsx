import Image from "next/image";
import Link from "next/link";

type SubItem = { naam: string; link?: string };

const gebouwd: {
  kleur: string;
  nr: string;
  naam: string;
  tekst: string;
  link?: string;
  linkTekst?: string;
  watermerk: string;
  wmSize?: string;
  wmRight?: string;
  wmBottom?: string;
  wmOpacity?: number;
  items: SubItem[];
}[] = [
  {
    kleur: "#EE7E06",
    nr: "01",
    naam: "7LIFE",
    tekst: "De basis van alles: een methodiek, een netwerk, tools en trajecten waarmee mensen en teams zichzelf leren kennen.",
    watermerk: "/wie-zijn-wij/watermerken/7life-oranje.png",
    items: [
      { naam: "De 7LIFE-methodiek", link: "/methodiek" },
      { naam: "Netwerk van 40+ gecertificeerde professionals", link: "/onze-mensen" },
      { naam: "Tools & scans", link: "/build-strong-individueel#tools" },
      { naam: "Trajecten", link: "/organisaties#sectoren" },
    ],
  },
  {
    kleur: "#3E8FA3",
    nr: "02",
    naam: "Zakelijk & B2B",
    tekst: "Instrumenten die organisaties inzicht geven in mensen, structuur en impact — en ze helpen bewegen.",
    watermerk: "/wie-zijn-wij/watermerken/7life-blauw.png",
    items: [
      { naam: "Impact Check", link: "/impact-check" },
      { naam: "Impact Dynamics Scan", link: "/ids" },
      { naam: "Social Impact Dashboard", link: "/social-impact-dashboard" },
      { naam: "Open Job Architecture", link: "/oja" },
    ],
  },
  {
    kleur: "#6B7B45",
    nr: "03",
    naam: "Academie voor Bestuur & Leiderschap",
    tekst: "Diepgaande ontwikkeling voor bestuurders en leidinggevenden — van scan tot coaching en leergang.",
    link: "/leiderschap",
    linkTekst: "Naar de Academie →",
    watermerk: "/wie-zijn-wij/watermerken/academie-olijf.png",
    items: [
      { naam: "LeiderschapScan" },
      { naam: "Coaching" },
      { naam: "Consultancy" },
      { naam: "Leiderschapstrajecten" },
      { naam: "Social Impact Theater", link: "/social-impact-theater" },
    ],
  },
  {
    kleur: "#2E7D52",
    nr: "04",
    naam: "7LIFE Foundation",
    tekst: "Het 7LIFE-gedachtengoed ingezet voor kwetsbare groepen en gemeenschappen — zonder winstoogmerk.",
    link: "/foundation",
    linkTekst: "Meer over de Foundation →",
    watermerk: "/wie-zijn-wij/watermerken/lightlife-goud.png",
    wmSize: "260px",
    wmRight: "-30px",
    wmBottom: "30px",
    wmOpacity: 0.28,
    items: [
      { naam: "LightLife Project" },
      { naam: "Leiderschapstrajecten" },
    ],
  },
];

export default function WatWeDoenSectie() {
  return (
    <section className="bg-donker mx-4 mt-6 mb-6 rounded-3xl px-[6%] py-[72px]" id="wat-we-doen">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-[11px] font-semibold tracking-[2px] text-oranje/85 uppercase mb-2.5">
          Wat we doen
        </div>
        <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light text-white leading-[1.15] mb-2.5">
          Vanuit onze overtuiging
          <br />
          hebben we dit gebouwd.
        </h2>
        <p className="text-white/50 text-[15px] leading-[1.7] max-w-[620px] mb-2">
          Wat we geloven, hebben we vertaald naar vier samenhangende
          onderdelen — samen vormen ze wie 7LIFE is en wat we voor
          jou kunnen betekenen.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
          {gebouwd.map((g) => (
            <div
              key={g.naam}
              className="relative overflow-hidden bg-kaart rounded-[18px] p-[30px_26px] flex flex-col transition-all hover:-translate-y-1"
              style={{
                border: `1.5px solid ${g.kleur}`,
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              }}
            >
              <div
                className="absolute pointer-events-none"
                style={{
                  right: g.wmRight ?? "-32px",
                  bottom: g.wmBottom ?? "-32px",
                  width: g.wmSize ?? "190px",
                  height: g.wmSize ?? "190px",
                  opacity: g.wmOpacity ?? 0.14,
                }}
              >
                <Image
                  src={g.watermerk}
                  alt=""
                  fill
                  className="object-contain object-bottom"
                />
              </div>
              <div className="relative z-10 flex flex-col flex-1">
                <div
                  className="font-serif text-[38px] font-semibold leading-none mb-3.5 opacity-35"
                  style={{ color: g.kleur }}
                >
                  {g.nr}
                </div>
                <div className="text-[17px] font-medium text-tekst mb-2">
                  {g.naam}
                </div>
                <p className="text-[13.5px] text-subtekst leading-[1.65] mb-4">
                  {g.tekst}
                </p>
                <div className="flex flex-col gap-1.5 mb-2">
                  {g.items.map((it) =>
                    it.link ? (
                      <Link
                        key={it.naam}
                        href={it.link}
                        className="text-[13px] font-medium hover:opacity-70 pl-3.5 relative before:content-['·'] before:absolute before:left-0 before:text-subtekst transition-opacity"
                        style={{ color: g.kleur }}
                      >
                        {it.naam} →
                      </Link>
                    ) : (
                      <div
                        key={it.naam}
                        className="text-[13px] text-subtekst pl-3.5 relative before:content-['·'] before:absolute before:left-0"
                      >
                        {it.naam}
                      </div>
                    )
                  )}
                </div>
                {g.link && g.linkTekst && (
                  <Link
                    href={g.link}
                    className="mt-auto pt-3 text-sm font-medium inline-flex items-center gap-1.5"
                    style={{ color: g.kleur }}
                  >
                    {g.linkTekst}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
