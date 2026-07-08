export default function CtaSectie() {
  return (
    <section
      className="px-[5%] py-24 bg-donker text-center flex flex-col items-center"
      id="cta"
    >
      <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light text-white leading-[1.15] mb-4">
        Start met een
        <br />
        <em className="text-oranje not-italic italic">Impact Check.</em>
      </h2>
      <p className="text-white/50 text-[15px] leading-[1.7] max-w-[480px] mb-8">
        Eén dag. Een consultant die meekijkt. Inzichten die blijven. Het
        startpunt voor alles wat volgt.
      </p>
      <div className="flex gap-2.5 flex-wrap justify-center">
        <a
          href="mailto:info@7life.nl?subject=Aanvraag Impact Check"
          className="bg-oranje text-white px-[26px] py-3 rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
        >
          Plan een Impact Check
        </a>
        <a
          href="mailto:info@7life.nl?subject=Demo Social Impact Dashboard"
          className="bg-transparent text-white border-[1.5px] border-white/[0.18] px-[26px] py-3 rounded-full text-sm font-medium hover:border-white/45 transition-colors"
        >
          Vraag een demo aan
        </a>
      </div>
    </section>
  );
}
