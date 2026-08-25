import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const opbrengsten = [
  "Eerste analyse van het vraagstuk",
  "Inzicht in de belangrijkste signalen en patronen",
  "Keuze voor de meest relevante lens",
  "Concreet advies voor vervolgstappen",
  "Advies voor verdieping via de Impact Dynamics Scan (IDS)",
];

const PDF = "/downloads/impact-check-verdieping.pdf";

export default function ImpactCheckPagina() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative flex items-end overflow-hidden bg-donker min-h-[520px] px-[5%] pt-[170px] pb-16">
          <Image
            src="/impact-check/achtergrond.jpg"
            alt="Impact Check"
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
            <div className="flex-1 min-w-[280px] max-w-[620px]">
              <h1 className="font-serif text-[clamp(34px,5vw,54px)] font-light text-white leading-[1.12] tracking-[-0.5px] mb-[18px]">
                Een goed antwoord
                <br />
                begint met de <em className="text-oranje not-italic italic">juiste vraag.</em>
              </h1>
              <p className="text-white/55 text-[15.5px] leading-[1.75] mb-[30px] max-w-[460px]">
                Iedere organisatie, team of professional loopt tegen
                uitdagingen aan. De Impact Check helpt om signalen te
                vertalen naar inzicht — in een korte verkenning onderzoeken
                we waar de uitdaging werkelijk zit en welke lens de meeste
                aandacht verdient.
              </p>
              <div className="flex gap-2.5 flex-wrap">
                <a
                  href="#cta"
                  className="bg-oranje text-white px-[26px] py-3 rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
                >
                  Plan een Impact Check
                </a>
                <a
                  href={PDF}
                  download
                  className="bg-transparent text-white border-[1.5px] border-white/[0.18] px-[26px] py-3 rounded-full text-sm font-medium hover:border-white/45 transition-colors"
                >
                  Bekijk de 5 lenzen (PDF)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WAAROM DE IMPACT CHECK + WAT LEVERT HET OP */}
        <section className="px-[5%] py-[88px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-16 items-start">
              <div>
                <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
                  Waarom de Impact Check
                </div>
                <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-2.5 max-w-[680px]">
                  Niet ieder signaal vraagt
                  <br />
                  om dezelfde oplossing.
                </h2>
                <div className="max-w-[680px] text-[15px] text-subtekst leading-[1.8] flex flex-col gap-[18px] mb-16">
                  <p>
                    Verzuim neemt toe. Jongeren missen richting. Teams lopen
                    vast. Ontwikkeling levert te weinig verandering op. De
                    vraag lijkt vaak helder, maar de echte uitdaging zit
                    regelmatig een laag dieper.
                  </p>
                  <p>
                    De Impact Check helpt om zichtbaar te maken wat er
                    werkelijk speelt. In een compacte verkenning brengen we
                    signalen, patronen en vraagstukken in kaart. We
                    onderzoeken waar de meeste beweging mogelijk is en welke
                    van de vijf lenzen de meeste aandacht verdient.
                  </p>
                  <p>
                    Zo ontstaat niet alleen inzicht in het vraagstuk, maar ook
                    een concrete richting voor de volgende stap.
                  </p>
                </div>

                <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
                  Wat levert het op
                </div>
                <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-2.5">
                  Eén dag. Concrete inzichten.
                </h2>
                <p className="text-[15px] text-subtekst leading-[1.7] max-w-[520px] mb-10">
                  De Impact Check brengt samen met een 7LIFE-consultant de
                  belangrijkste vraagstukken, sterktes en ontwikkelkansen van
                  jouw organisatie in kaart.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {opbrengsten.map((tekst) => (
                    <div
                      key={tekst}
                      className="flex gap-3.5 items-start bg-kaart border-[1.5px] border-black/[0.07] rounded-2xl p-5 hover:border-oranje hover:-translate-y-0.5 transition-all"
                    >
                      <div className="w-[30px] h-[30px] rounded-full bg-oranje/[0.12] text-oranje flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        ✓
                      </div>
                      <p className="text-[14.5px] text-tekst leading-[1.55] font-medium">
                        {tekst}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-card overflow-hidden border-[1.5px] border-black/[0.07] bg-kaart lg:sticky lg:top-[100px]">
                <div className="relative h-[220px] border-t-4 border-oranje">
                  <Image
                    src="/impact-check/testimonial.jpg"
                    alt="Ervaring met de Impact Check"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <div className="text-xs font-semibold text-oranje uppercase tracking-wide mb-3">
                    Midden- en Kleinbedrijf
                  </div>
                  <blockquote className="font-serif text-lg italic text-tekst leading-snug mb-4">
                    &ldquo;Ik kende 7LIFE van de Assessments en de trainingen,
                    maar hoe fijn is het dat ze in één dag tijd hebben
                    meegekeken met mijn processen en de kansen voor groei en
                    verbetering binnen mijn organisatie&rdquo;
                  </blockquote>
                  <div className="text-oranje font-medium text-sm">
                    Inzicht in kansen
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VAN SIGNAAL NAAR INZICHT */}
        <section className="bg-donker px-[5%] py-16 text-center">
          <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-4">
            Van signaal naar inzicht
          </div>
          <h2 className="font-serif text-[clamp(24px,3vw,32px)] font-light text-white leading-[1.3] max-w-[620px] mx-auto mb-4">
            De Impact Check is geen uitgebreid onderzoek
            <br />
            of langdurig traject.
          </h2>
          <p className="text-white/50 text-[14.5px] leading-[1.7] max-w-[520px] mx-auto">
            Het is een snelle en toegankelijke eerste stap waarmee je
            ontdekt waar de echte uitdaging zit — en waar duurzame
            verandering kan beginnen.
          </p>
          <div className="text-oranje text-sm font-medium mt-[18px]">
            Van signaal naar inzicht. Van inzicht naar impact.
          </div>
        </section>

        {/* CTA */}
        <section className="px-[5%] py-[88px] text-center bg-achtergrond" id="cta">
          <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-light leading-[1.15] mb-3.5">
            Plan een <em className="text-oranje not-italic italic">Impact Check.</em>
          </h2>
          <p className="text-[15px] text-subtekst max-w-[480px] mx-auto mb-[30px] leading-[1.7]">
            Een Impact Check duurt één dag. De inzichten blijven jaren. Neem
            contact op en we plannen een vrijblijvende kennismaking.
          </p>
          <div className="flex gap-2.5 justify-center flex-wrap">
            <a
              href="mailto:info@7life.nl?subject=Aanvraag Impact Check"
              className="bg-oranje text-white px-[26px] py-3 rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
            >
              Plan een kennismaking
            </a>
            <Link
              href="/ids"
              className="bg-transparent text-tekst border-[1.5px] border-black/[0.07] px-[26px] py-3 rounded-full text-sm font-medium hover:border-oranje hover:text-oranje transition-colors"
            >
              Meer over IDS
            </Link>
            <a
              href={PDF}
              download
              className="bg-transparent text-tekst border-[1.5px] border-black/[0.07] px-[26px] py-3 rounded-full text-sm font-medium hover:border-oranje hover:text-oranje transition-colors"
            >
              Meer over Impact Check
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
