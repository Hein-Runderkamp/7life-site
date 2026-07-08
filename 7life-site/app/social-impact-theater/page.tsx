import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pijlers = [
  { naam: "Fair Work", kleur: "#EE7E06" },
  { naam: "Ethisch Leiderschap", kleur: "#3E8FA3" },
  { naam: "Diversiteit & Inclusie", kleur: "#7B5EA7" },
  { naam: "Money & Meaning", kleur: "#D4A017" },
  { naam: "Human Development", kleur: "#3a7d5c" },
];

const programma = [
  { tijd: "19:30", titel: "Ontvangst" },
  { tijd: "19:30", titel: "Keynote" },
  { tijd: "21:00", titel: "Reflectie & interactie" },
  { tijd: "21:30", titel: "Ontmoeting" },
  { tijd: "23:00", titel: "Afronding" },
];

const voorWie = [
  "Ondernemers (MKB+)",
  "Bestuurders",
  "Directieleden",
  "Toezichthouders",
  "Senior professionals met verantwoordelijkheid",
];

export default function SocialImpactTheaterPagina() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative bg-donker px-[5%] pt-[140px] pb-20 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 85% 15%, rgba(238,126,6,0.14) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 5% 85%, rgba(123,94,167,0.1) 0%, transparent 60%)",
            }}
          />
          <div className="max-w-[1100px] mx-auto relative z-10">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-3">
              Social Impact Theater
            </div>
            <h1 className="font-serif text-[clamp(34px,5vw,54px)] font-light text-white leading-[1.12] tracking-[-0.5px] mb-5 max-w-[700px]">
              Achter elk besluit
              <br />
              zit <em className="text-oranje not-italic italic">een mens.</em>
            </h1>
            <p className="text-white/55 text-[15.5px] leading-[1.8] mb-8 max-w-[620px]">
              Een curated leiderschapsplatform voor ondernemers, bestuurders
              en senior professionals — geen netwerkborrel, geen standaard
              inspiratieavond, maar een avond waarop leiders samenkomen voor
              eerlijke gesprekken over leiderschap, diversiteit en sociale
              impact. Een samenwerking tussen 7LIFE, de Academie voor
              Bestuur &amp; Leiderschap en Green Offices Harderwijk.
            </p>
            <div className="flex gap-2.5 flex-wrap">
              <a
                href="https://www.bestuurenleiderschap.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-oranje text-white px-[26px] py-3 rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
              >
                Schrijf je in voor de volgende editie
              </a>
              <a
                href="#edities"
                className="bg-transparent text-white border-[1.5px] border-white/[0.18] px-[26px] py-3 rounded-full text-sm font-medium hover:border-white/45 transition-colors"
              >
                Bekijk eerdere edities
              </a>
            </div>
          </div>
        </section>

        {/* DE 5 PIJLERS */}
        <section className="px-[5%] py-[88px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              De inhoudelijke basis
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-2.5 max-w-[680px]">
              Gebouwd op de vijf pijlers van het
              Social Impact Dashboard.
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[620px] mb-10">
              Deze vijf pijlers vormen de inhoudelijke ruggengraat, de
              programmering per editie én de marketingstructuur van het
              Social Impact Theater. Elke editie zoomt in op één of
              meerdere pijlers — zo ontstaat een doorlopende leerlijn en
              community.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {pijlers.map((p) => (
                <div
                  key={p.naam}
                  className="bg-kaart border-[1.5px] border-black/[0.07] rounded-2xl p-5 text-center"
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full mx-auto mb-3"
                    style={{ background: p.kleur }}
                  />
                  <div className="text-sm font-medium text-tekst leading-[1.3]">
                    {p.naam}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AANKOMENDE EDITIE */}
        <section className="bg-donker px-[5%] py-20">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Volgende editie
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light text-white leading-[1.15] mb-8">
              September 2026 — Ethical Leadership
            </h2>
            <div className="bg-white/[0.05] border border-white/10 rounded-[20px] p-8 flex flex-col md:flex-row gap-8 md:items-center justify-between">
              <div>
                <div className="text-xs text-white/40 mb-1.5">
                  September 2026 · Datum volgt · Green Offices Harderwijk
                </div>
                <div className="font-serif text-2xl text-white mb-2">
                  Ethical Leadership
                </div>
                <div className="text-sm text-white/50 mb-1">
                  Met Maroesja van der Pols &amp; Alex ten Cate
                </div>
                <div className="text-sm text-white/50">
                  Keynote spreker: Emmely Lefevre
                </div>
              </div>
              <a
                href="https://www.bestuurenleiderschap.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-oranje text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors whitespace-nowrap self-start md:self-center"
              >
                Schrijf je in →
              </a>
            </div>
          </div>
        </section>

        {/* EERDERE EDITIES */}
        <section className="px-[5%] py-[88px] bg-achtergrond" id="edities">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Terugblik
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-10">
              Eerdere edities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Editie 1 */}
              <div className="bg-kaart border-[1.5px] border-black/[0.07] rounded-card overflow-hidden">
                <div className="relative w-full aspect-[1200/628]">
                  <Image
                    src="/sit/editie-21-mei.png"
                    alt="Social Impact Theater — 21 mei 2026"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-oranje uppercase tracking-wide mb-2">
                    21 mei 2026 · Green Offices Harderwijk
                  </div>
                  <div className="font-serif text-lg mb-2">
                    Ethisch Leiderschap &amp; Human Development
                  </div>
                  <p className="text-sm text-subtekst leading-[1.65] mb-3">
                    De aftrap-editie, met een keynote van Erik Eerhart
                    (auteur van &ldquo;Ik ben ook maar een man&rdquo;) over
                    kwetsbaarheid in leiderschap, morele keuzes en
                    persoonlijke ontwikkeling. Een volle zaal en openhartige
                    gesprekken bepaalden de toon voor het vervolg.
                  </p>
                  <div className="text-sm text-tekst">
                    Met Erik Eerhart, Alex ten Cate &amp; Maroesja van der Pols
                  </div>
                </div>
              </div>

              {/* Editie 2 */}
              <div className="bg-kaart border-[1.5px] border-black/[0.07] rounded-card overflow-hidden">
                <div className="relative w-full aspect-[1200/628] bg-[#f5f5f3]">
                  <Image
                    src="/sit/editie-25-juni.png"
                    alt="Social Impact Theater — 25 juni 2026"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-oranje uppercase tracking-wide mb-2">
                    25 juni 2026 · Green Offices Harderwijk
                  </div>
                  <div className="font-serif text-lg mb-2">
                    1+1=3 — Leiden als team
                  </div>
                  <p className="text-sm text-subtekst leading-[1.65] mb-3">
                    Over diversiteit in leiderschap, met een keynote van
                    Steven van den Heuvel (auteur van &ldquo;High Impact
                    Veranderen&rdquo;) over verandering die begint bij
                    mensen. Alex ten Cate deelde inzichten over gedeeld
                    leiderschap: teams die divers leiden presteren
                    structureel beter.
                  </p>
                  <div className="text-sm text-tekst">
                    Met Steven van den Heuvel, Alex ten Cate &amp; Maroesja
                    van der Pols
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FORMAT VAN DE AVOND */}
        <section className="px-[5%] py-[88px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Het format
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-3">
              Eén avond, strak en betekenisvol
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[560px] mb-10">
              Vier keer per jaar, telkens met dezelfde heldere opbouw — geen
              uitwaaierend programma, maar ruimte voor inhoud, reflectie en
              ontmoeting.
            </p>
            <div className="flex flex-col sm:flex-row rounded-2xl overflow-hidden border border-black/[0.07]">
              {programma.map((p, i) => (
                <div
                  key={p.tijd}
                  className={`flex-1 p-5 bg-kaart ${
                    i < programma.length - 1
                      ? "border-b sm:border-b-0 sm:border-r border-black/[0.07]"
                      : ""
                  }`}
                >
                  <div className="text-[10px] font-bold tracking-[1.5px] text-oranje uppercase mb-1.5">
                    {p.tijd}
                  </div>
                  <div className="text-[13px] font-semibold">{p.titel}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VOOR WIE */}
        <section className="bg-donker px-[5%] py-20">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
            <div>
              <div className="text-[11px] font-semibold tracking-[2px] text-oranje/80 uppercase mb-2.5">
                Voor wie
              </div>
              <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-light text-white leading-[1.2] mb-5">
                Een selecte groep leiders die verdieping zoekt.
              </h2>
              <p className="text-[15px] text-white/50 leading-[1.75]">
                Het karakter is bewust selectief — dat bewaakt de kwaliteit
                en de positionering. Deelname verloopt via persoonlijke
                uitnodiging, niet via open ticketverkoop.
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              {voorWie.map((v) => (
                <div
                  key={v}
                  className="flex items-center gap-3.5 bg-white/[0.05] border border-white/10 rounded-2xl px-5 py-4"
                >
                  <div className="w-2 h-2 rounded-full bg-oranje flex-shrink-0" />
                  <p className="text-[14.5px] text-white/80">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-[5%] py-[88px] text-center bg-achtergrond">
          <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-light leading-[1.15] mb-3.5">
            Wil je erbij zijn bij de{" "}
            <em className="text-oranje not-italic italic">volgende editie?</em>
          </h2>
          <p className="text-[15px] text-subtekst max-w-[480px] mx-auto mb-[30px] leading-[1.7]">
            Het Social Impact Theater werkt met een selecte groep deelnemers.
            Meld je aan via de Academie voor Bestuur &amp; Leiderschap, of
            neem rechtstreeks contact op.
          </p>
          <div className="flex gap-2.5 justify-center flex-wrap">
            <a
              href="https://www.bestuurenleiderschap.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-oranje text-white px-[26px] py-3 rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
            >
              Naar bestuurenleiderschap.nl
            </a>
            <a
              href="mailto:academie@7life.nl?subject=Social Impact Theater — interesse volgende editie"
              className="bg-transparent text-tekst border-[1.5px] border-black/[0.07] px-[26px] py-3 rounded-full text-sm font-medium hover:border-oranje hover:text-oranje transition-colors"
            >
              Mail de Academie
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
