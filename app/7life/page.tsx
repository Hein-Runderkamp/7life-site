import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const paginas = [
  { naam: "Wie zijn wij", tekst: "Het verhaal, de overtuiging en de mensen achter 7LIFE.", href: "/wie-zijn-wij" },
  { naam: "7LIFE Methodiek", tekst: "De wetenschappelijke basis onder alles wat we doen.", href: "/methodiek" },
  { naam: "Onze mensen", tekst: "Landelijk netwerk van 40+ gecertificeerde trainers en partners.", href: "/onze-mensen" },
  { naam: "Build Strong Individueel", tekst: "Scans en trajecten voor persoonlijke ontwikkeling.", href: "/build-strong-individueel" },
  { naam: "Build Strong Jongeren", tekst: "Student Journey, ExcelleerScan en begeleiding voor jongeren.", href: "/jongeren" },
  { naam: "Build Strong Organisaties", tekst: "Sterke teams en gezonde organisaties bouwen.", href: "/organisaties" },
];

export default function ZevenLifePagina() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative bg-donker px-[5%] pt-[170px] pb-20 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 85% 15%, rgba(238,126,6,0.16) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 5% 85%, rgba(238,126,6,0.08) 0%, transparent 60%)",
            }}
          />
          <div className="max-w-[1100px] mx-auto relative z-10">
            <div className="max-w-[680px]">
              <div className="inline-flex items-center gap-1.5 bg-oranje/[0.12] border border-oranje/25 text-oranje text-[11px] font-medium tracking-[1.5px] px-3.5 py-[5px] rounded-full mb-5 uppercase">
                7LIFE
              </div>
              <h1 className="font-serif text-[clamp(38px,5vw,64px)] font-light text-white leading-[1.1] tracking-[-1px] mb-4">
                De basis van alles.
              </h1>
              <p className="text-white/50 text-base leading-[1.75] mb-2 max-w-[560px]">
                Een methodiek, een netwerk, tools en trajecten waarmee
                mensen en teams zichzelf leren kennen. Dit is waar 7LIFE
                vandaan komt — en wat je er zelf mee kunt.
              </p>
            </div>
          </div>
        </section>

        {/* PAGINA'S */}
        <section className="px-[5%] py-[72px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {paginas.map((p) => (
                <Link
                  key={p.naam}
                  href={p.href}
                  className="bg-kaart border-[1.5px] border-black/[0.07] rounded-card p-6 flex flex-col hover:border-oranje transition-colors"
                >
                  <div className="font-serif text-lg mb-2">{p.naam}</div>
                  <p className="text-sm text-subtekst leading-[1.6] mb-4">
                    {p.tekst}
                  </p>
                  <span className="mt-auto text-sm font-medium text-oranje">
                    Meer informatie →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
