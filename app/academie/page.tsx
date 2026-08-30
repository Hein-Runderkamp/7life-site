import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const paginas = [
  { naam: "Build Strong Leiderschap", tekst: "Leiderschap begint bij jezelf — voor leidinggevenden, bestuurders en professionals.", href: "/leiderschap" },
  { naam: "Academie voor Bestuur & Leiderschap", tekst: "Masterclasses, leergangen en coaching voor directeuren en bestuurders.", href: "/bestuur-en-leiderschap" },
  { naam: "Social Impact Theater", tekst: "Avonden over leiderschap, ethiek en maatschappelijke impact.", href: "/social-impact-theater" },
  { naam: "Trainer worden", tekst: "Word gecertificeerd 7LIFE Trainer en bouw je eigen praktijk.", href: "/opleiden" },
  { naam: "Opleidingsaanbod", tekst: "Het volledige 7LIFE-opleidingsaanbod voor trainers en coaches.", href: "/opleidingsaanbod" },
  { naam: "Opleidingsagenda", tekst: "Alle trainingsdata voor het komende seizoen.", href: "/agenda" },
];

export default function AcademieHubPagina() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative flex items-end overflow-hidden bg-donker min-h-[520px] px-[5%] pt-[170px] pb-16">
          <Image
            src="/academie/hero-achtergrond.jpg"
            alt="Academie"
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
          <div className="max-w-[1100px] mx-auto relative z-10 w-full">
            <div className="max-w-[680px]">
              <div className="inline-flex items-center gap-1.5 bg-olijf/[0.15] border border-olijf/35 text-olijf text-[11px] font-medium tracking-[1.5px] px-3.5 py-[5px] rounded-full mb-5 uppercase">
                Academie
              </div>
              <h1 className="font-serif text-[clamp(38px,5vw,64px)] font-light text-white leading-[1.1] tracking-[-1px] mb-4">
                Leiderschap begint
                <br />
                bij jezelf.
              </h1>
              <p className="text-white/50 text-base leading-[1.75] mb-2 max-w-[560px]">
                Diepgaande ontwikkeling voor leidinggevenden, bestuurders,
                coaches en professionals — van eerste inzicht tot
                masterclass en certificering.
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
                  className="bg-kaart border-[1.5px] border-black/[0.07] rounded-card p-6 flex flex-col hover:border-olijf transition-colors"
                >
                  <div className="font-serif text-lg mb-2">{p.naam}</div>
                  <p className="text-sm text-subtekst leading-[1.6] mb-4">
                    {p.tekst}
                  </p>
                  <span className="mt-auto text-sm font-medium text-olijf">
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
