import Image from "next/image";

const statements = [
  { voor: "werkdruk", na: "verhalen." },
  { voor: "gedrag", na: "drijfveren." },
  { voor: "leiderschap", na: "keuzes." },
  { voor: "impact", na: "mensen." },
];

export default function AchterZitSectie() {
  return (
    <section className="bg-donker px-[5%] py-16">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Foto */}
        <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden">
          <Image
            src="/secties/waar-het-om-draait.jpg"
            alt="Waar het om draait"
            fill
            className="object-cover"
          />
        </div>

        {/* Tekst + statements */}
        <div>
          <div className="text-[11px] font-semibold tracking-[2px] text-oranje/80 uppercase mb-2.5">
            Waar het om draait
          </div>
          <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light text-white leading-[1.2] mb-8">
            Duurzame verandering begint bij mensen.
          </h2>

          <div className="flex flex-col gap-4">
            {statements.map((s, i) => (
              <div
                key={s.voor}
                className={`flex items-start gap-3.5 ${
                  i < statements.length - 1
                    ? "pb-4 border-b border-white/[0.07]"
                    : "pb-5 border-b border-white/[0.07]"
                }`}
              >
                <span className="text-oranje text-lg flex-shrink-0 mt-[1px]">→</span>
                <p className="text-[15px] text-white/60 leading-[1.6]">
                  Achter {s.voor} zitten{" "}
                  <strong className="text-white font-medium">{s.na}</strong>
                </p>
              </div>
            ))}
            <p className="text-sm text-white/35 leading-[1.7] italic">
              Want duurzame verandering begint niet bij systemen, maar bij
              mensen. Samen van inzicht naar impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
