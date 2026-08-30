import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { agenda, trainingen } from "@/lib/trainingen";

function kleurVoorTraining(naam: string): string {
  const match = trainingen.find((t) =>
    naam.toLowerCase().includes(t.naam.split(" — ")[0].split(" ")[0].toLowerCase())
  );
  if (match) return match.kleur;
  return "#6b6b6b";
}

export default function AgendaPagina() {
  // Groepeer op maand + jaar voor overzicht
  const groepen: { label: string; items: typeof agenda }[] = [];
  agenda.forEach((item) => {
    const [, maand, jaar] = item.datum.match(/(\w+) (\d{4})/) || [];
    const label = maand && jaar ? `${maand} ${jaar}` : "Overig";
    const laatste = groepen[groepen.length - 1];
    if (laatste && laatste.label === label) {
      laatste.items.push(item);
    } else {
      groepen.push({ label, items: [item] });
    }
  });

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative flex items-end overflow-hidden bg-donker min-h-[460px] px-[5%] pt-[170px] pb-16">
          <Image
            src="/agenda/hero-achtergrond.jpg"
            alt="Opleidingsagenda"
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
          <div className="max-w-[900px] mx-auto relative z-10 w-full">
            <div className="inline-flex items-center gap-1.5 bg-oranje/10 border border-oranje/[0.22] text-oranje text-[11px] font-semibold tracking-[1.5px] px-3.5 py-[5px] rounded-full mb-5 uppercase">
              Agenda 2026 – 2027
            </div>
            <h1 className="font-serif text-[clamp(32px,4.5vw,52px)] font-light text-white leading-[1.1] tracking-[-0.5px] mb-4">
              Alle trainingsdata.
              <br />
              <em className="text-oranje not-italic italic">Op een rij.</em>
            </h1>
            <p className="text-white/50 text-base leading-[1.75] max-w-[620px] mb-7">
              Alle trainingen, bijeenkomsten en evenementen voor het
              komende seizoen.
            </p>
            <div className="flex gap-2.5 flex-wrap">
              <a
                href="/downloads/7LIFE_Flyer_Agenda_2026-2027.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-oranje text-white px-6 py-[11px] rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
              >
                ↓ Download als PDF
              </a>
              <a
                href="/opleidingsaanbod"
                className="bg-transparent text-white border-[1.5px] border-white/20 px-6 py-[11px] rounded-full text-sm font-medium hover:border-white/50 transition-colors"
              >
                Bekijk het opleidingsaanbod
              </a>
            </div>
          </div>
        </section>

        {/* AGENDA */}
        <section className="px-[5%] py-[72px] bg-achtergrond">
          <div className="max-w-[900px] mx-auto">
            {groepen.map((groep) => (
              <div key={groep.label} className="mb-10">
                <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-3">
                  {groep.label}
                </div>
                <div className="flex flex-col gap-2">
                  {groep.items.map((item, i) => (
                    <div
                      key={`${item.datum}-${i}`}
                      className="bg-kaart border border-black/[0.07] rounded-xl px-5 py-3.5 flex items-center gap-4 flex-wrap"
                    >
                      <div className="text-sm font-semibold text-tekst w-[110px] flex-shrink-0">
                        {item.datum.replace(/ \d{4}$/, "")}
                      </div>
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: kleurVoorTraining(item.training) }}
                      />
                      <div className="text-[14px] text-tekst flex-1 min-w-[200px]">
                        {item.omschrijving}
                      </div>
                      <div className="text-xs text-subtekst">{item.locatie}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
