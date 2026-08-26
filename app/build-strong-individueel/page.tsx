import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSectie from "@/components/CtaSectie";
import Image from "next/image";

const programmas = [
  {
    icon: "🧭",
    titel: "Talentontwikkeling",
    tekst: "Ontdek wat je energie geeft en waar je goed in bent — en zet dat gericht in voor je eigen groei.",
  },
  {
    icon: "💬",
    titel: "Communicatiekracht",
    tekst: "Een traject rondom jouw persoonlijke communicatiestijl: hoe je overkomt, verbindt en jezelf laat horen.",
  },
  {
    icon: "🧗",
    titel: "Veranderkracht",
    tekst: "Inzicht in hoe jij omgaat met verandering, en hoe je die kracht bewust kunt inzetten.",
  },
  {
    icon: "🧑‍💼",
    titel: "Begeleiding naar passend werk",
    tekst: "Persoonlijke begeleiding bij het vinden van werk dat echt bij je past — vanuit wie je bent.",
  },
];

const tools = [
  {
    icon: "🔍",
    titel: "TalentScan",
    tekst: "Brengt je talenten, drijfveren en ontwikkelpotentieel in kaart.",
  },
  {
    icon: "🗣️",
    titel: "Communicatiescan",
    tekst: "Laat zien hoe jouw communicatiestijl overkomt op anderen — en waar winst te behalen valt.",
  },
  {
    icon: "🔄",
    titel: "Veranderkrachtscan",
    tekst: "Meet hoe jij omgaat met verandering, druk en onzekerheid.",
  },
  {
    icon: "📘",
    titel: "Persoonlijk ontwikkelplan",
    tekst: "Vertaalt de inzichten uit de scans naar concrete, haalbare vervolgstappen.",
  },
];

export default function BuildStrongIndividueelPagina() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative flex items-end overflow-hidden bg-donker min-h-[520px] px-[5%] pt-[170px] pb-16">
          <Image
            src="/build-strong-individueel/achtergrond.jpg"
            alt="Build Strong Individueel"
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
              <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-3">
                Build Strong — Individueel
              </div>
              <h1 className="font-serif text-[clamp(40px,5vw,66px)] font-light text-white leading-[1.05] tracking-[-1px] mb-4">
                Jij in beweging.
              </h1>
              <p className="text-white/55 text-base leading-[1.75] mb-7 max-w-[480px]">
                Van inzicht in je eigen competenties tot een traject rondom
                jouw communicatiekracht of een begeleiding naar passend werk
                — met 7LIFE werk je samen aan je eigen ontwikkeling en groei
                op jouw eigen wijze.
              </p>
              <div className="flex gap-2.5 flex-wrap">
                <a
                  href="#tools"
                  className="bg-oranje text-white px-6 py-[11px] rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
                >
                  Bekijk tools
                </a>
                <a
                  href="#bsi-cta"
                  className="bg-transparent text-white border-[1.5px] border-white/25 px-6 py-[11px] rounded-full text-sm font-medium hover:border-white/50 transition-colors"
                >
                  Plan een gesprek
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ONZE PROGRAMMA'S */}
        <section className="px-[5%] py-[88px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Onze programma's
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-light leading-[1.15] mb-3">
              Ontwikkeling op jouw eigen wijze
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[520px] mb-9">
              Geen standaardtraject, maar een aanpak die aansluit bij waar
              jij nu staat en waar je naartoe wilt.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {programmas.map((p) => (
                <div
                  key={p.titel}
                  className="flex gap-3.5 items-start bg-kaart border border-black/[0.07] rounded-2xl p-6"
                >
                  <div className="text-xl flex-shrink-0 mt-0.5">{p.icon}</div>
                  <div>
                    <strong className="text-sm font-medium block mb-1">
                      {p.titel}
                    </strong>
                    <p className="text-[13px] text-subtekst leading-[1.5]">
                      {p.tekst}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7LIFE TOOLS */}
        <section className="bg-donker px-[5%] py-[72px]" id="tools">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje/85 uppercase mb-2.5">
              7LIFE Tools
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-light text-white leading-[1.15] mb-3">
              De scans achter jouw traject
            </h2>
            <p className="text-[15px] text-white/50 leading-[1.7] max-w-[520px] mb-9">
              Elk programma begint met inzicht. Deze tools brengen in kaart
              waar jij staat, zodat de vervolgstappen echt bij je passen.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {tools.map((t) => (
                <div
                  key={t.titel}
                  className="flex gap-3.5 items-start bg-white/[0.05] border border-white/10 rounded-2xl p-6"
                >
                  <div className="text-xl flex-shrink-0 mt-0.5">{t.icon}</div>
                  <div>
                    <strong className="text-sm font-medium text-white block mb-1">
                      {t.titel}
                    </strong>
                    <p className="text-[13px] text-white/50 leading-[1.5]">
                      {t.tekst}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div id="bsi-cta">
          <CtaSectie />
        </div>
      </main>
      <Footer />
    </>
  );
}
