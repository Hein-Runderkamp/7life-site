import Link from "next/link";
import { trainingen } from "@/lib/trainingen";

export default function OpleidingsaanbodSectie({
  id = "aanbod",
}: {
  id?: string;
}) {
  return (
    <section className="px-[5%] py-[72px] bg-achtergrond" id={id}>
      <div className="max-w-[1100px] mx-auto">
        <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
          Ons opleidingsaanbod
        </div>
        <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] font-light leading-[1.15] mb-3">
          Van basisaccreditatie tot specialistische verdieping
        </h2>
        <p className="text-[15px] text-subtekst leading-[1.7] max-w-[640px] mb-9">
          Het volledige aanbod aan 7LIFE-trainingen voor (aankomend)
          trainers en coaches. Actuele data vind je in de{" "}
          <Link href="/agenda" className="text-oranje hover:opacity-75 transition-opacity">
            agenda
          </Link>
          .
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {trainingen.map((t) => (
            <div
              key={t.naam}
              className="rounded-[18px] p-[26px] bg-kaart border border-black/[0.07] flex flex-col"
              style={{ borderTop: `3px solid ${t.kleur}` }}
            >
              <div
                className="inline-flex self-start items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-lg mb-3 uppercase tracking-wide"
                style={{
                  color: t.kleur,
                  background: `${t.kleur}14`,
                  border: `1px solid ${t.kleur}33`,
                }}
              >
                {t.categorie}
              </div>
              <div className="text-[16px] font-semibold text-tekst mb-2 leading-snug">
                {t.naam}
              </div>
              <p className="text-[13px] text-subtekst leading-[1.6] mb-4 flex-1">
                {t.samenvatting}
              </p>
              <div className="text-sm font-semibold text-tekst mb-3.5">
                {t.prijs}
              </div>
              <div className="flex gap-2 flex-wrap">
                <Link
                  href={`/opleiden/${t.slug}`}
                  className="text-xs font-medium px-3.5 py-2 rounded-full bg-donker text-white hover:opacity-85 transition-opacity"
                >
                  Meer info
                </Link>
                <a
                  href={t.flyer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium px-3.5 py-2 rounded-full border border-black/15 text-tekst hover:border-oranje hover:text-oranje transition-colors"
                >
                  ↓ Flyer
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/agenda"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-oranje hover:opacity-75 transition-opacity"
          >
            Bekijk de volledige agenda →
          </Link>
        </div>
      </div>
    </section>
  );
}
