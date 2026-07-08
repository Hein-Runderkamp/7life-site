import Link from "next/link";
import Image from "next/image";

const verhalen = [
  {
    sector: "Onderwijs · Student Journey",
    quote: "\"Een middelbare school wilde jongeren voorbereiden op hun toekomst.\"",
    tekst: "De echte uitdaging bleek niet hun toekomst, maar hun zelfbeeld. Via de Student Journey ontdekken jongeren niet alleen welke opleiding bij hen past, maar vooral wie zij zijn, wat hen beweegt en welke keuzes daarbij horen.",
    link: "Naar Student Journey App →",
    href: "/jongeren",
    foto: "/verhalen/student-journey.png",
  },
  {
    sector: "Zorg · Leiderschap & Teams",
    quote: "\"Een zorgorganisatie investeerde in haar teamleiders.\"",
    tekst: "De echte uitdaging bleek niet leidinggeven, maar de brug slaan tussen visie en dagelijkse praktijk. Met de Academie voor Bestuur & Leiderschap werkten teamleiders aan hun eigen leiderschap én aan zichtbare impact in hun teams.",
    link: "Naar Leiderschap & Professionals →",
    href: "/leiderschap",
    foto: "/verhalen/leiderschap-academie.jpg",
  },
  {
    sector: "Gemeente · Organisaties & Teams",
    quote: "\"Een gemeente wilde investeren in sterke zorgteams.\"",
    tekst: "De echte uitdaging bleek niet het team, maar de verbinding tussen mens, werk en organisatie. Wanneer mensen zich verbonden voelen met hun werk, elkaar én de bedoeling van de organisatie, ontstaat ruimte voor duurzame ontwikkeling.",
    link: "Naar Organisaties & Teams →",
    href: "/organisaties",
    foto: "/verhalen/organisaties-teams.jpg",
  },
  {
    sector: "Bedrijfsleven · OJA",
    quote: "\"Een organisatie zette in op transparant belonen.\"",
    tekst: "De echte uitdaging bleek niet het functiehuis, maar de manier waarop waarde wordt gezien, erkend en beloond. Met OJA verbinden we functies, ontwikkeling en waardering in één helder systeem — compliant én mensgericht.",
    link: "Naar OJA →",
    href: "/oja",
    foto: "/verhalen/oja-bedrijfsleven.jpg",
  },
];

export default function VerhalenSectie() {
  return (
    <section className="px-[5%] py-[88px] bg-achtergrond" id="verhalen">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
          Impact in de praktijk
        </div>
        <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-2.5">
          Geen testimonials.
          <br />
          Echte verhalen.
        </h2>
        <p className="text-[15px] text-subtekst leading-[1.7] max-w-[680px] mb-10">
          Van jongeren die hun toekomst wilden ontdekken tot organisaties die
          bouwen aan leiderschap, sterke teams en eerlijke waardering. Deze
          verhalen laten zien wat er werkelijk speelde — en hoe inzicht
          leidde tot duurzame impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {verhalen.map((v) => (
            <Link
              key={v.sector}
              href={v.href}
              className="flex flex-col rounded-card overflow-hidden border-[1.5px] border-black/[0.07] bg-kaart hover:border-oranje transition-colors"
            >
              <div className="relative bg-[#f5f5f3] h-[180px] border-t-4 border-oranje">
                <Image
                  src={v.foto}
                  alt={v.sector}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-oranje uppercase tracking-wide mb-2">
                  {v.sector}
                </div>
                <div className="font-serif text-lg italic mb-2.5">
                  {v.quote}
                </div>
                <div className="text-sm text-subtekst leading-[1.65] mb-4">
                  {v.tekst}
                </div>
                <div className="text-oranje text-sm font-medium">
                  {v.link}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
