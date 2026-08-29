import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PijlerIcon from "@/components/PijlerIcon";

const pijlers = [
  { naam: "Fair Work", kleur: "#EE7E06", icon: "fairwork" },
  { naam: "Ethisch Leiderschap", kleur: "#3E8FA3", icon: "ethical" },
  { naam: "Diversiteit & Inclusie", kleur: "#7B5EA7", icon: "diversity" },
  { naam: "Money & Meaning", kleur: "#D4A017", icon: "money" },
  { naam: "Human Development", kleur: "#3a7d5c", icon: "human" },
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
        <section className="relative flex items-end overflow-hidden bg-donker min-h-[520px] px-[5%] pt-[170px] pb-16">
          <Image
            src="/sit/hero-achtergrond.jpg"
            alt="Social Impact Theater"
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
              <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-3">
                Social Impact Theater
              </div>
              <h1 className="font-serif text-[clamp(34px,5vw,54px)] font-light text-white leading-[1.12] tracking-[-0.5px] mb-5">
                Achter elk besluit
                <br />
                zit <em className="text-oranje not-italic italic">een mens.</em>
              </h1>
              <p className="text-white/55 text-[15.5px] leading-[1.8] mb-8">
                Een curated leiderschapsplatform voor ondernemers, bestuurders
                en senior professionals — geen netwerkborrel, geen standaard
                inspiratieavond, maar een avond waarop leiders samenkomen voor
                eerlijke gesprekken over leiderschap, diversiteit en sociale
                impact. Een samenwerking tussen 7LIFE, de Academie voor
                Bestuur &amp; Leiderschap en Green Offices Harderwijk.
              </p>
              <div className="flex gap-2.5 flex-wrap">
                <a
                  href="https://bestuurenleiderschap.nl/social-impact-theater/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-oranje text-white px-[26px] py-3 rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
                >
                  Schrijf je in voor de volgende editie
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* DE 5 PIJLERS */}
        <section className="px-[5%] py-[88px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-center">
            <div>
              <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
                De inhoudelijke basis
              </div>
              <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-2.5">
                Gebouwd op de vijf pijlers van het
                Social Impact Dashboard.
              </h2>
              <p className="text-[15px] text-subtekst leading-[1.7] mb-8">
                Deze vijf pijlers vormen de inhoudelijke ruggengraat, de
                programmering per editie én de marketingstructuur van het
                Social Impact Theater. Elke editie zoomt in op één of
                meerdere pijlers — zo ontstaat een doorlopende leerlijn en
                community. Ook heeft elke editie een andere keynote
                spreker die ons heeft geïnspireerd en uitgedaagd. Het
                zijn geen &lsquo;normale&rsquo; netwerkavonden, maar
                bijeenkomsten die jou daadwerkelijk in beweging brengen.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {pijlers.map((p) => (
                  <div
                    key={p.naam}
                    className="bg-kaart border-[1.5px] border-black/[0.07] rounded-2xl p-4 text-center"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blauw/10 flex items-center justify-center mx-auto mb-2.5">
                      <PijlerIcon type={p.icon} />
                    </div>
                    <div className="text-[13px] font-medium text-tekst leading-[1.3]">
                      {p.naam}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden min-h-[280px] lg:min-h-[420px]">
              <Image
                src="/sit/alex-presenteert.jpg"
                alt="Social Impact Theater"
                fill
                className="object-cover"
              />
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
              19 november 2026 — Humanizing Leadership
            </h2>
            <div
              className="rounded-[20px] p-8 flex flex-col md:flex-row gap-8 md:items-center justify-between"
              style={{ background: "#7C94B3" }}
            >
              <div>
                <div className="text-xs text-white/70 mb-1.5">
                  19 november 2026 · Green Offices Harderwijk
                </div>
                <div className="font-serif text-2xl text-white mb-2">
                  Humanizing Leadership
                </div>
                <div className="text-sm text-white/85 mb-1">
                  Met Maroesja van der Pols &amp; Alex ten Cate
                </div>
                <div className="text-sm text-white/85">
                  Keynote spreker: Jo Krill
                </div>
              </div>
              <a
                href="https://bestuurenleiderschap.nl/social-impact-theater/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-oranje text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors whitespace-nowrap self-start md:self-center"
              >
                Schrijf je in →
              </a>
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
              href="https://bestuurenleiderschap.nl/social-impact-theater/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-oranje text-white px-[26px] py-3 rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
            >
              Ja, ik wil erbij zijn
            </a>
            <a
              href="mailto:info@bestuurenleiderschap.nl?subject=Social Impact Theater — interesse volgende editie"
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
