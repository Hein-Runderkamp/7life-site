import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StandaardCta from "@/components/StandaardCta";

const gelovenItems = [
  "De kracht van communicatie — contact maken vanuit oprechte interesse en wederzijds respect.",
  "Investeren in mensen die zichzelf willen ontdekken en vanuit eigen kracht willen groeien.",
  "Het bouwen aan stabiele teams, sterke organisaties en veelkleurige netwerken.",
  "Ontwikkelen van tools die de praktijk verrijken — niet meer complexiteit, maar meer helderheid.",
  "Ieder mens is uniek, waardevol en heeft het recht om zichzelf te zijn.",
];

const maroesjaFacts = [
  "Bedrijfswetenschapper van opleiding",
  "Auteur van twee boeken over communicatie, ontwikkeling en diversiteit",
  "Ontwikkelaar van de 7LIFE-methodiek en de LeiderschapScan",
  "Oprichter van 7LIFE Nederland B.V. en de 7LIFE Foundation",
  "Meer dan 30 jaar actief in organisatie- en persoonsontwikkeling",
];

export default function WieZijnWijPagina() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative flex items-end overflow-hidden bg-donker min-h-[520px] px-[5%] pt-[170px] pb-16">
          <Image
            src="/wie-zijn-wij/hero-achtergrond.jpg"
            alt="Over 7LIFE"
            fill
            priority
            className="object-cover object-[center_45%]"
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
            <div className="max-w-[620px]">
              <div className="inline-flex items-center gap-1.5 bg-oranje/10 border border-oranje/[0.22] text-oranje text-[11px] font-medium tracking-[1.5px] px-3.5 py-[5px] rounded-full mb-6 uppercase">
                Over 7LIFE
              </div>
              <h1 className="font-serif text-[clamp(38px,5.5vw,64px)] font-light text-white leading-[1.08] tracking-[-0.5px] mb-5">
                Wij geloven dat
                <br />
                mensen het verschil
                <br />
                maken. <em className="text-oranje not-italic italic">Altijd.</em>
              </h1>
              <p className="text-white/55 text-[15.5px] leading-[1.75] max-w-[460px] mb-8">
                7LIFE is een datagedreven social impact bedrijf. Wij helpen
                mensen, teams en organisaties begrijpen wat er werkelijk
                speelt — en in beweging komen. Niet incidenteel.
                Structureel.
              </p>
              <div className="flex gap-2.5 flex-wrap">
                <a
                  href="/#wat-we-doen"
                  className="bg-oranje text-white px-[26px] py-3 rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
                >
                  Wat we doen
                </a>
                <a
                  href="#maroesja"
                  className="bg-transparent text-white border-[1.5px] border-white/[0.18] px-[26px] py-3 rounded-full text-sm font-medium hover:border-white/45 transition-colors"
                >
                  Wie we zijn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ORIGINE + OPRICHTER */}
        <section className="px-[5%] py-[88px] bg-achtergrond" id="maroesja">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
                Het verhaal achter 7LIFE
              </div>
              <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-2.5 max-w-[480px]">
                Een gemis als startpunt.
                <br />
                Gedreven door overtuiging.
              </h2>
              <div className="text-[15px] text-subtekst leading-[1.8] mt-8">
                <p className="mb-[18px]">
                  Oprichter Maroesja van der Pols zag het keer op keer:
                  waardevolle inzichten verdwenen in een la. Sterke
                  assessments gaven mensen herkenning en potentieel — maar
                  de brug naar dagelijks gedrag, samenwerking en blijvend
                  sterke teams ontbrak.
                </p>
                <p className="mb-[18px]">
                  Echte verandering bleek niet te zitten in méér modellen
                  of meer mandaat. Het ontbrak aan een{" "}
                  <strong className="text-tekst font-medium">
                    gedeelde taal voor gedrag en samenwerking
                  </strong>{" "}
                  — een taal die mensen verbindt in wie ze zijn, hoe ze
                  communiceren en wat ze in beweging brengt.
                </p>
                <p>
                  Vanuit die overtuiging bouwde Maroesja 7LIFE: een
                  methodiek, een ecosysteem en een netwerk dat inzicht
                  vertaalt naar actie. Van assessment naar beweging. Van
                  data naar impact.
                </p>
              </div>
              <div className="bg-donker rounded-[20px] px-7 py-8 mt-8">
                <h3 className="font-serif text-xl font-normal text-oranje mb-5">
                  Samen geloven wij in:
                </h3>
                {gelovenItems.map((it, i) => (
                  <div
                    key={it}
                    className={`flex items-start gap-3 text-sm text-white/60 leading-[1.6] ${
                      i < gelovenItems.length - 1 ? "mb-3.5" : ""
                    }`}
                  >
                    <div className="w-[5px] h-[5px] rounded-full bg-oranje flex-shrink-0 mt-[7px]" />
                    {it}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="relative w-full h-[460px] rounded-[16px] overflow-hidden mb-6">
                <Image
                  src="/team/maroesja-van-der-pols.jpg"
                  alt="Maroesja van der Pols"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
                De oprichter
              </div>
              <h3 className="font-serif text-2xl font-light leading-[1.2] mb-4">
                Maroesja van der Pols
              </h3>
              <p className="text-[15px] text-subtekst leading-[1.75] mb-6">
                Maroesja is bedrijfswetenschapper van opleiding en de
                conceptueel architect van alles wat 7LIFE is. Ze is
                auteur van twee boeken: <em>Communicatiekracht</em> — over
                de 7LIFE Communicatie Ontwikkel Scan en hoe mensen
                communiceren, leren en veranderen — en{" "}
                <em>Be Excellent</em>, geschreven voor vrouwen in het
                zakenleven die succesvoller willen zijn op hun eigen
                manier. Ze is de drijvende kracht achter de
                7LIFE-methodiek, de LeiderschapScan en het Social Impact
                Dashboard.
              </p>
              <div className="flex flex-col gap-2.5">
                {maroesjaFacts.map((f) => (
                  <div key={f} className="flex items-start gap-3 text-sm text-tekst">
                    <div className="w-1.5 h-1.5 rounded-full bg-oranje flex-shrink-0 mt-1.5" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WAT WE DOEN — verplaatst naar de homepage */}
        <section className="px-[5%] py-16 bg-donker text-center">
          <div className="max-w-[560px] mx-auto">
            <p className="text-white/55 text-[15px] leading-[1.7] mb-4">
              Benieuwd wat dat concreet inhoudt?
            </p>
            <Link
              href="/#wat-we-doen"
              className="bg-oranje text-white px-[26px] py-3 rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors inline-block"
            >
              Bekijk wat we doen →
            </Link>
          </div>
        </section>

        <StandaardCta />
      </main>
      <Footer />
    </>
  );
}
