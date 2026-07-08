const events = [
  {
    datum: "21 mei 2026 · Green Offices Harderwijk",
    naam: "Ethisch Leiderschap & Human Development",
    sub: "Met Maroesja van der Pols, Alex ten Cate & Erik Eerhart",
  },
  {
    datum: "25 juni 2026 · Green Offices Harderwijk",
    naam: "1+1=3 — Leiden als team",
    sub: "Diversiteit in leiderschap · Met Steven van den Heuvel",
  },
  {
    datum: "Volgende editie · datum volgt",
    naam: "Thema wordt bekendgemaakt",
    sub: "Meld je aan voor de uitnodiging",
    aankomend: true,
  },
];

export default function SitSectie() {
  return (
    <section className="bg-donker px-[5%] py-20">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        <div>
          <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-3">
            Social Impact Theater
          </div>
          <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light text-white leading-[1.2] mb-5">
            Achter elk besluit
            <br />
            zit een mens.
          </h2>
          <p className="text-[15px] text-white/50 leading-[1.75] mb-6">
            In het Social Impact Theater onderzoeken we de vragen die je niet
            oplost met KPI&apos;s, dashboards of strategie alleen.
            <br />
            <br />
            Via verhalen, reflectie en ontmoeting ontstaat ruimte voor nieuwe
            inzichten over leiderschap, samenwerking en maatschappelijke
            impact.
            <br />
            <br />
            Ons podium voor de belangrijkste leiderschapsvragen van deze tijd.
            Geïnspireerd door het LeiderschapModel van 7LIFE, mogelijk gemaakt
            met Green Offices Harderwijk en verrijkt door de meest
            inspirerende stemmen uit ons netwerk.
          </p>
          <a
            href="/social-impact-theater"
            className="text-oranje text-sm font-medium hover:underline"
          >
            Bekijk bijeenkomsten →
          </a>
        </div>

        <div className="flex flex-col gap-4">
          {events.map((e) => (
            <div
              key={e.naam}
              className={`rounded-2xl border p-5 ${
                e.aankomend
                  ? "border-oranje/25"
                  : "border-white/10"
              }`}
            >
              <div
                className={`text-xs mb-1.5 ${
                  e.aankomend ? "text-white/35" : "text-white/50"
                }`}
              >
                {e.datum}
              </div>
              <div
                className={`font-serif text-lg mb-1 ${
                  e.aankomend ? "text-white/55" : "text-white"
                }`}
              >
                {e.naam}
              </div>
              <div className="text-sm text-white/40">{e.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
