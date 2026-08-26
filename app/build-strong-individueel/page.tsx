import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSectie from "@/components/CtaSectie";

export default function BuildStrongIndividueelPagina() {
  return (
    <>
      <Header />
      <main>
        <section className="px-[5%] pt-[170px] pb-24 bg-donker text-center">
          <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-3">
            Build Strong
          </div>
          <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-light text-white leading-[1.1] mb-4">
            Build Strong Individueel
          </h1>
          <p className="text-white/50 text-[15px] max-w-[480px] mx-auto leading-[1.7]">
            Deze pagina is in ontwikkeling. Binnenkort lees je hier hoe Build
            Strong individuen helpt om in beweging te komen.
          </p>
        </section>
        <CtaSectie />
      </main>
      <Footer />
    </>
  );
}
