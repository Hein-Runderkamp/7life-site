import Image from "next/image";
import Link from "next/link";

const stats = [
  { n: "9.000+", l: "assessments geanalyseerd" },
  { n: "20+", l: "jaar ervaring in ontwikkeling" },
  { n: "40+", l: "gecertificeerde coaches & trainers" },
  { n: "8 SDG's (Social Development Goals UN)", l: "geborgd in OJA & Dashboard" },
];

const paden = [
  { naam: "7LIFE", href: "/7life", kleur: "#EE7E06" },
  { naam: "Zakelijk & B2B", href: "/zakelijk-b2b", kleur: "#3E8FA3" },
  { naam: "Academie", href: "/academie", kleur: "#6B7B45" },
  { naam: "Foundation", href: "/foundation", kleur: "#2E7D52" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-donker">
      {/* Achtergrondfoto */}
      <Image
        src="/hero/HR-tool.jpg"
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

      <div className="relative z-10 w-full px-[5%] pt-[170px] pb-16">
        <div className="max-w-[1100px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-end">
          {/* Tekst */}
          <div>
            <div className="inline-flex items-center gap-1.5 bg-oranje/10 border border-oranje/[0.22] text-oranje text-[11px] font-medium tracking-[1.5px] px-3.5 py-[5px] rounded-full mb-6 uppercase before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-oranje">
              Eén ecosysteem, vier paden
            </div>
            <h1 className="font-serif text-[clamp(40px,6vw,72px)] font-light text-white leading-[1.06] tracking-[-1px] mb-[22px]">
              Weten wat er speelt.
              <br />
              <em className="text-oranje not-italic italic">In beweging komen.</em>
            </h1>
            <p className="text-white/60 text-base leading-[1.75] mb-8 max-w-[460px]">
              7LIFE combineert wetenschappelijk onderbouwde scans met
              persoonlijke begeleiding, innovatieve tools en
              verandertrajecten — voor leiders, teams en organisaties die
              verder willen dan een eenmalig advies.
            </p>
            <div className="text-white/45 text-[13px] uppercase tracking-wide mb-3">
              Waar wil je beginnen?
            </div>
            <div className="grid grid-cols-2 gap-3 max-w-[540px]">
              {paden.map((p) => (
                <Link
                  key={p.naam}
                  href={p.href}
                  className="rounded-2xl px-5 py-4 flex items-center justify-center text-center transition-all hover:-translate-y-0.5"
                  style={{
                    background: `${p.kleur}1F`,
                    border: `1.5px solid ${p.kleur}66`,
                  }}
                >
                  <div
                    className="text-[15px] font-semibold"
                    style={{ color: p.kleur }}
                  >
                    {p.naam}
                  </div>
                </Link>
              ))}
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
                  <div
                    className={`text-white font-serif mb-1 ${
                      s.n.length > 10 ? "text-base" : "text-2xl"
                    }`}
                  >
                    {s.n}
                  </div>
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
