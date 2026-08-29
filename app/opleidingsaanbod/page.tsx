import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OpleidingsaanbodSectie from "@/components/OpleidingsaanbodSectie";

export default function OpleidingsaanbodPagina() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative bg-donker px-[5%] pt-[170px] pb-20 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(238,126,6,0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 10% 80%, rgba(62,143,163,0.08) 0%, transparent 60%)",
            }}
          />
          <div className="max-w-[1100px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-oranje/10 border border-oranje/[0.22] text-oranje text-[11px] font-semibold tracking-[1.5px] px-3.5 py-[5px] rounded-full mb-5 uppercase">
              Opleidingsaanbod
            </div>
            <h1 className="font-serif text-[clamp(38px,5vw,64px)] font-light text-white leading-[1.1] tracking-[-1px] mb-4">
              Alle trainingen.
              <br />
              <em className="text-oranje not-italic italic">Op een rij.</em>
            </h1>
            <p className="text-white/50 text-base leading-[1.75] max-w-[560px] mb-7">
              Van Basisaccreditatie tot specialistische verdieping — het
              volledige 7LIFE-opleidingsaanbod voor (aankomend) trainers
              en coaches.
            </p>
            <div className="flex gap-2.5 flex-wrap">
              <a
                href="#aanbod"
                className="bg-oranje text-white px-6 py-[11px] rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
              >
                Bekijk het aanbod
              </a>
              <a
                href="/agenda"
                className="bg-transparent text-white border-[1.5px] border-white/20 px-6 py-[11px] rounded-full text-sm font-medium hover:border-white/50 transition-colors"
              >
                Bekijk de agenda
              </a>
            </div>
          </div>
        </section>

        <OpleidingsaanbodSectie />
      </main>
      <Footer />
    </>
  );
}
