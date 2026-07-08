import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSectie from "@/components/CtaSectie";
import Link from "next/link";
import { mensen } from "@/lib/mensen";

function initialen(naam: string) {
  return naam
    .split(" ")
    .filter((w) => w[0] === w[0].toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

export default function OnzeMensenPagina() {
  return (
    <>
      <Header />
      <main>
        <section className="px-[5%] pt-[140px] pb-16 bg-donker">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Over 7LIFE
            </div>
            <h1 className="font-serif text-[clamp(32px,5vw,56px)] font-light text-white leading-[1.1] mb-4">
              Onze mensen.
            </h1>
            <p className="text-white/50 text-[15px] leading-[1.7] max-w-[560px]">
              7LIFE bestaat bij de gratie van een landelijk netwerk van
              gecertificeerde trainers, coaches en professionals. Zij dragen
              de methodiek uit in het onderwijs, bij organisaties en in de
              begeleiding van jongeren en leidinggevenden.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-16 bg-achtergrond">
          <div className="max-w-[1100px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {mensen.map((m) => (
              <Link
                key={m.slug}
                href={`/onze-mensen/${m.slug}`}
                className="flex flex-col items-center text-center bg-kaart border-[1.5px] border-black/[0.07] rounded-card p-5 hover:border-oranje transition-colors"
              >
                {m.foto ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={m.foto}
                    alt={m.naam}
                    className="w-20 h-20 rounded-full object-cover mb-3.5"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-donker text-white font-serif text-lg flex items-center justify-center mb-3.5">
                    {initialen(m.naam)}
                  </div>
                )}
                <div className="text-sm font-medium text-tekst leading-tight mb-1">
                  {m.naam}
                </div>
                <div className="text-xs text-subtekst leading-tight">
                  {m.org}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <CtaSectie />
      </main>
      <Footer />
    </>
  );
}
