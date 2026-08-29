import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OpleidingsaanbodSectie from "@/components/OpleidingsaanbodSectie";

export default function OpleidingsaanbodPagina() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative flex items-end overflow-hidden bg-donker min-h-[520px] px-[5%] pt-[170px] pb-16">
          <Image
            src="/opleidingsaanbod/hero-achtergrond.jpg"
            alt="Opleidingsaanbod"
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
            <div className="max-w-[620px]">
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
                  href="/agenda"
                  className="bg-oranje text-white px-6 py-[11px] rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
                >
                  Bekijk de agenda
                </a>
              </div>
            </div>
          </div>
        </section>

        <OpleidingsaanbodSectie />
      </main>
      <Footer />
    </>
  );
}
