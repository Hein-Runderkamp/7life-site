import Link from "next/link";
import Image from "next/image";

const vragen = [
  { tekst: "Goede mensen haken af terwijl ze juist veel potentie hebben.", pijl: "TalentScan", href: "/organisaties#sectoren" },
  { tekst: "Verzuim neemt toe, maar de echte oorzaak blijft onduidelijk.", pijl: "Team & Organisatie", href: "/organisaties" },
  { tekst: "We zien symptomen, maar missen zicht op wat er werkelijk speelt.", pijl: "Impact Dynamics Scan", href: "/ids" },
  {
    tekst: "Hoe maken we onze maatschappelijke impact zichtbaar?",
    pijl: "Social Impact Dashboard",
    href: "/social-impact-dashboard",
    logo: "/logos/social-impact-dashboard.jpeg",
  },
  {
    tekst: "Voldoen we aan de Wet Loontransparantie?",
    pijl: "Open Job Architecture (OJA)",
    href: "/oja",
    oja: true,
    logo: "/logos/oja-tool.svg",
  },
  { tekst: "Leiderschap verschilt sterk per team.", pijl: "Academie voor Bestuur en Leiderschap", href: "/leiderschap" },
  { tekst: "Jongeren missen richting of motivatie.", pijl: "Student Journey", href: "/jongeren" },
  { tekst: "Hoe maken we maatschappelijke impact bespreekbaar?", pijl: "Social Impact Theater", href: "/social-impact-theater" },
  {
    tekst: "Mensen praten met elkaar, maar begrijpen elkaar niet altijd.",
    pijl: "7LIFE Methodiek / Communicatiestijlen",
    href: "/methodiek",
    accent: true,
  },
];

export default function VraagSectie() {
  return (
    <section className="px-[5%] py-[88px] bg-achtergrond" id="vraag">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
          Wat speelt er bij jou?
        </div>
        <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-2.5">
          Wat herken jij?
        </h2>
        <p className="text-[15px] text-subtekst leading-[1.7] max-w-[480px] mb-10">
          Komen deze vragen je bekend voor? Klik op een situatie en ontdek
          direct welke aanpak kan passen bij jouw vraagstuk.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {vragen.map((v) => (
            <Link
              key={v.tekst}
              href={v.href}
              className={`flex items-start gap-3 rounded-2xl border-[1.5px] p-5 transition-all hover:-translate-y-0.5 ${
                v.oja
                  ? "border-blauw/30 bg-blauw/[0.03] hover:border-blauw hover:bg-blauw/[0.07]"
                  : "border-black/[0.07] bg-kaart hover:border-oranje hover:shadow-[0_6px_28px_rgba(238,126,6,0.09)]"
              }`}
            >
              <span
                className={`w-2.5 h-2.5 rounded-full border-2 flex-shrink-0 mt-[5px] ${
                  v.oja
                    ? "border-blauw bg-blauw"
                    : v.accent
                    ? "border-oranje bg-oranje"
                    : "border-oranje"
                }`}
              />
              <span className="text-sm leading-[1.55] flex flex-col gap-1 w-full">
                {v.logo && (
                  <Image
                    src={v.logo}
                    alt={v.pijl}
                    width={120}
                    height={32}
                    className="h-6 w-auto object-contain mb-1"
                  />
                )}
                <span className={v.oja ? "font-medium" : ""}>{v.tekst}</span>
                {v.oja && (
                  <span className="flex gap-1.5 flex-wrap mt-1">
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-oranje/10 text-oranje">
                      EU 2023/970
                    </span>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-blauw/10 text-blauw">
                      Deadline 2027
                    </span>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-paars/10 text-paars">
                      SDG 5 · 8 · 10
                    </span>
                  </span>
                )}
                <span className="text-oranje font-medium text-[13px]">
                  → {v.pijl}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
