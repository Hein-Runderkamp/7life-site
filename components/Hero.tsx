import Image from "next/image";

const stats = [
  { n: "9.000+", l: "assessments geanalyseerd" },
  { n: "20+", l: "jaar ervaring in ontwikkeling" },
  { n: "40+", l: "gecertificeerde coaches & trainers" },
  { n: "8 SDG's", l: "geborgd in OJA & Dashboard" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-donker">
      {/* Achtergrondfoto */}
      <Image
        src="/hero/doordenker.jpg"
        alt="7LIFE"
        fill
        priority
        className="object-cover object-[75%_center]"
      />

      {/* Donkere overlay t.b.v. leesbaarheid */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(20,20,20,0.92) 0%, rgba(20,20,20,0.72) 38%, rgba(20,20,20,0.25) 65%, rgba(20,20,20,0.05) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(20,20,20,0.55) 0%, transparent 40%)",
        }}
      />

      <div className="relative z-10 w-full px-[5%] pt-[140px] pb-16">
        <div className="max-w-[1100px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-end">
          {/* Tekst */}
          <div>
            <div className="inline-flex items-center gap-1.5 bg-oranje/10 border border-oranje/[0.22] text-oranje text-[11px] font-medium tracking-[1.5px] px-3.5 py-[5px] rounded-full mb-6 uppercase before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-oranje">
              Eén ecosysteem voor duurzame verandering
            </div>
            <h1 className="font-serif text-[clamp(40px,6vw,72px)] font-light text-white leading-[1.06] tracking-[-1px] mb-[22px]">
              Van inzicht
              <br />
              naar <em className="text-oranje not-italic italic">impact</em>
            </h1>
            <p className="text-white/60 text-base leading-[1.75] mb-9 max-w-[420px]">
              7LIFE helpt mensen, teams en organisaties begrijpen wat er
              werkelijk speelt — en in beweging komen. Niet incidenteel.
              Structureel.
            </p>
            <div className="flex gap-2.5 flex-wrap">
              <a
                href="#vraag"
                className="bg-oranje text-white border-none px-[26px] py-3 rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
              >
                Wat speelt er bij jou?
              </a>
              <a
                href="#cta"
                className="bg-transparent text-white border-[1.5px] border-white/[0.3] px-[26px] py-3 rounded-full text-sm font-medium hover:border-white/60 transition-colors"
              >
                Plan een gesprek
              </a>
            </div>
          </div>

          {/* Stats + SDG's als glaskaart over de foto */}
          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-[20px] p-5">
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.n}
                  className="bg-white/[0.06] border border-white/10 rounded-2xl p-4"
                >
                  <div className="text-white font-serif text-2xl mb-1">{s.n}</div>
                  <div className="text-white/55 text-xs leading-snug">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="flex gap-2 flex-wrap mt-4">
              {[
                "SDG 5 — Gendergelijkheid",
                "SDG 8 — Eerlijk werk",
                "SDG 10 — Ongelijkheid",
                "+ 5 SDG's",
              ].map((sdg) => (
                <div
                  key={sdg}
                  className="bg-white/[0.08] border border-white/10 rounded-lg px-2.5 py-1.5 text-[11px] text-white/55 font-medium"
                >
                  {sdg}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
