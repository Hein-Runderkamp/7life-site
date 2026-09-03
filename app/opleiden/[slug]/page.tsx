import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trainingen } from "@/lib/trainingen";

export function generateStaticParams() {
  return trainingen.map((t) => ({ slug: t.slug }));
}

export default function TrainingDetailPagina({
  params,
}: {
  params: { slug: string };
}) {
  const training = trainingen.find((t) => t.slug === params.slug);
  if (!training) notFound();

  const kleur = training.kleur;

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative bg-donker px-[5%] pt-[170px] pb-16 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 60% 50% at 80% 20%, ${kleur}22 0%, transparent 60%)`,
            }}
          />
          <div className="max-w-[900px] mx-auto relative z-10">
            <Link
              href="/opleiden#aanbod"
              className="inline-flex items-center gap-1.5 text-white/40 text-xs mb-6 hover:text-white/70 transition-colors"
            >
              ← Terug naar alle trainingen
            </Link>
            <div
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-lg mb-4 uppercase tracking-wide"
              style={{
                color: kleur,
                background: `${kleur}18`,
                border: `1px solid ${kleur}40`,
              }}
            >
              {training.categorie}
            </div>
            <h1 className="font-serif text-[clamp(32px,4.5vw,52px)] font-light text-white leading-[1.1] tracking-[-0.5px] mb-4">
              {training.naam}
            </h1>
            <p className="text-white/50 text-base leading-[1.75] max-w-[620px] mb-7">
              {training.samenvatting}
            </p>
            <div className="flex gap-2.5 flex-wrap">
              <a
                href={`mailto:info@7life.nl?subject=Aanmelding: ${training.naam}&body=Hoi,%0A%0AIk wil graag deelnemen aan de training "${training.naam}".%0A%0AGroet,`}
                className="bg-oranje text-white px-6 py-[11px] rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
              >
                Deelnemen
              </a>
              <a
                href={training.flyer}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white border-[1.5px] border-white/20 px-6 py-[11px] rounded-full text-sm font-medium hover:border-white/50 transition-colors"
              >
                ↓ Download flyer
              </a>
            </div>
          </div>
        </section>

        {/* PROGRAMMA + INFO */}
        <section className="px-[5%] py-[72px] bg-achtergrond">
          <div className="max-w-[900px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">
            <div>
              <div className="text-[11px] font-semibold tracking-[2px] uppercase mb-6" style={{ color: kleur }}>
                Programma
              </div>
              <div className="flex flex-col">
                {training.programma.map((stap, i) => (
                  <div key={stap.titel} className="flex gap-5">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center font-serif text-[15px] text-white flex-shrink-0"
                        style={{ background: kleur }}
                      >
                        {i + 1}
                      </div>
                      <div className="w-px flex-1 bg-black/10 my-1.5" />
                    </div>
                    <div className="pb-8">
                      <div className="text-[16px] font-semibold text-tekst mb-1.5">
                        {stap.titel}
                      </div>
                      <p className="text-[14px] text-subtekst leading-[1.65]">
                        {stap.body}
                      </p>
                      {stap.locatie && (
                        <div className="text-xs text-subtekst/70 mt-1.5 italic">
                          {stap.locatie}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {training.afbeelding && (
                  <div className="flex gap-5">
                    <div className="w-9 flex-shrink-0" />
                    <div className="max-w-[420px] mb-5">
                      <div
                        className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border-2"
                        style={{ borderColor: kleur }}
                      >
                        <Image
                          src={training.afbeelding}
                          alt={training.naam}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {training.afbeeldingCaption && (
                        <div className="text-xs text-subtekst/70 italic mt-2">
                          {training.afbeeldingCaption}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex gap-5">
                  <div className="w-9 flex-shrink-0" />
                  <div className="text-sm text-tekst font-medium">
                    Dit is een opleiding op HBO niveau.
                  </div>
                </div>

                <div className="flex gap-5 items-center">
                  <div className="w-9 flex-shrink-0" />
                  <div className="flex items-center gap-3">
                    <div className="bg-donker text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg flex-shrink-0">
                      CRKBO
                    </div>
                    <div className="text-xs text-subtekst leading-[1.4]">
                      Centraal Register Kort Beroepsonderwijs
                      <br />
                      Btw-vrijgesteld — wij brengen geen btw in rekening
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3.5">
              <div className="bg-kaart border border-black/[0.07] rounded-2xl px-5 py-4">
                <div className="text-[11px] font-semibold uppercase tracking-wide text-subtekst mb-2">
                  Eerstvolgende data
                </div>
                <div className="flex flex-col gap-2">
                  {training.data.map((d) => (
                    <div key={d} className="text-[13px] text-tekst leading-[1.5]">
                      {d}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-kaart border border-black/[0.07] rounded-2xl px-5 py-4">
                <div className="text-[11px] font-semibold uppercase tracking-wide text-subtekst mb-1">
                  Investering
                </div>
                <div className="font-serif text-lg leading-snug" style={{ color: kleur }}>
                  {training.prijs}
                </div>
                <div className="text-xs text-subtekst mt-1">{training.deelnemers}</div>
              </div>

              <div className="bg-kaart border border-black/[0.07] rounded-2xl px-5 py-4">
                <div className="text-[11px] font-semibold uppercase tracking-wide text-subtekst mb-2">
                  Voorwaarden
                </div>
                <ul className="flex flex-col gap-1.5">
                  {training.voorwaarden.map((v) => (
                    <li key={v} className="text-[13px] text-tekst leading-[1.5] pl-3.5 relative before:content-['—'] before:absolute before:left-0 before:text-subtekst/50">
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-[900px] mx-auto mt-16 pt-10 border-t border-black/[0.07] text-center">
            <blockquote className="font-serif text-[clamp(18px,2.2vw,24px)] font-light italic text-tekst leading-[1.5] max-w-[560px] mx-auto">
              &ldquo;{training.quote}&rdquo;
            </blockquote>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
