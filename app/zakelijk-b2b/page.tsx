import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const paginas = [
  { naam: "Impact Check", tekst: "Compacte analyse die de belangrijkste vraagstukken en ontwikkelkansen in kaart brengt.", href: "/impact-check" },
  { naam: "Impact Dynamics Scan", tekst: "Vijf lenzen, één dynamiek — wat er onder de oppervlakte speelt in je organisatie.", href: "/ids" },
  { naam: "Social Impact Dashboard", tekst: "Meet, leer en verbeter — maatschappelijke impact zichtbaar gemaakt.", href: "/social-impact-dashboard" },
  { naam: "Open Job Architecture", tekst: "Functies, ontwikkeling en beloning in één helder, compliant systeem.", href: "/oja" },
];

export default function ZakelijkB2BPagina() {
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
                "radial-gradient(ellipse 60% 50% at 85% 15%, rgba(62,143,163,0.18) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 5% 85%, rgba(62,143,163,0.08) 0%, transparent 60%)",
            }}
          />
          <div className="max-w-[1100px] mx-auto relative z-10">
            <div className="max-w-[680px]">
              <div className="inline-flex items-center gap-1.5 bg-blauw/[0.12] border border-blauw/25 text-blauw text-[11px] font-medium tracking-[1.5px] px-3.5 py-[5px] rounded-full mb-5 uppercase">
                Zakelijk &amp; B2B
              </div>
              <h1 className="font-serif text-[clamp(38px,5vw,64px)] font-light text-white leading-[1.1] tracking-[-1px] mb-4">
                Inzicht dat organisaties
                <br />
                in beweging brengt.
              </h1>
              <p className="text-white/50 text-base leading-[1.75] mb-2 max-w-[560px]">
                Instrumenten die organisaties inzicht geven in mensen,
                structuur en impact — van eerste signaal tot concrete
                actie.
              </p>
            </div>
          </div>
        </section>

        {/* PAGINA'S */}
        <section className="px-[5%] py-[72px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {paginas.map((p) => (
                <Link
                  key={p.naam}
                  href={p.href}
                  className="bg-kaart border-[1.5px] border-black/[0.07] rounded-card p-6 flex flex-col hover:border-blauw transition-colors"
                >
                  <div className="font-serif text-lg mb-2">{p.naam}</div>
                  <p className="text-sm text-subtekst leading-[1.6] mb-4">
                    {p.tekst}
                  </p>
                  <span className="mt-auto text-sm font-medium text-blauw">
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
