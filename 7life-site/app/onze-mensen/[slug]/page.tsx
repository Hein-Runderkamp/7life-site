import { mensen } from "@/lib/mensen";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSectie from "@/components/CtaSectie";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return mensen.map((m) => ({ slug: m.slug }));
}

function initialen(naam: string) {
  return naam
    .split(" ")
    .filter((w) => w[0] === w[0].toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

export default function MensDetailPagina({ params }: { params: { slug: string } }) {
  const persoon = mensen.find((m) => m.slug === params.slug);
  if (!persoon) return notFound();

  return (
    <>
      <Header />
      <main>
        <section className="px-[5%] pt-[140px] pb-16 bg-donker">
          <div className="max-w-[760px] mx-auto flex flex-col items-center text-center">
            {persoon.foto ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={persoon.foto}
                alt={persoon.naam}
                className="w-28 h-28 rounded-full object-cover mb-5"
              />
            ) : (
              <div className="w-28 h-28 rounded-full bg-white/10 text-white font-serif text-2xl flex items-center justify-center mb-5">
                {initialen(persoon.naam)}
              </div>
            )}
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2">
              {persoon.org}
            </div>
            <h1 className="font-serif text-[clamp(28px,4vw,44px)] font-light text-white leading-[1.1]">
              {persoon.naam}
            </h1>
          </div>
        </section>

        <section className="px-[5%] py-16 bg-achtergrond">
          <div className="max-w-[680px] mx-auto">
            {persoon.bio.length > 0 ? (
              <div className="prose-bio flex flex-col gap-4 text-[15px] text-tekst leading-[1.75]">
                {persoon.bio.map((para, i) => (
                  <div key={i} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
              </div>
            ) : (
              <p className="text-subtekst text-sm">
                Binnenkort meer informatie over {persoon.naam}.
              </p>
            )}

            <Link
              href="/onze-mensen"
              className="inline-block mt-10 text-oranje text-sm font-medium hover:underline"
            >
              ← Terug naar Onze mensen
            </Link>
          </div>
        </section>

        <CtaSectie />
      </main>
      <Footer />
    </>
  );
}
