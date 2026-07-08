import CommunicatiestijlenDiagram from "./CommunicatiestijlenDiagram";
import StijlenIconenRij from "./StijlenIconenRij";

const zichtbaar = [
  "Communicatiekracht",
  "Leervoorkeuren",
  "Veranderkracht",
  "Talenten",
  "Samenwerkingspatronen",
  "Alarmgedrag",
];

export default function MensSectie() {
  return (
    <section className="px-[5%] py-[88px] bg-achtergrond">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Tekst */}
          <div>
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Wat maakt 7LIFE anders?
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-2.5">
              Wij zien de mens achter de uitdaging.
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] mb-[22px]">
              Veel organisaties kijken naar gedrag.
              <br />
              Wij kijken naar wat daaronder zit.
              <br />
              <br />
              Met de 7LIFE-methodiek maken we zichtbaar hoe mensen communiceren,
              leren, omgaan met verandering en… in beweging komen. Zo ontstaat
              inzicht dat verder gaat dan functies, rollen of systemen.
            </p>
            <p className="text-[15px] text-subtekst leading-[1.7]">
              Dat doen we niet door mensen in een hokje te plaatsen met een
              assessment of test. 7LIFE is een ontwikkelmodel dat inzicht vertaalt
              naar actie. Het maakt zichtbaar waar talenten, leervoorkeuren en
              veranderkracht liggen, zodat mensen, teams en organisaties concreet
              aan de slag kunnen met hun ontwikkeling.
            </p>
          </div>

          {/* Venn-diagram */}
          <div>
            <CommunicatiestijlenDiagram />
          </div>
        </div>

        {/* Losse communicatiestijlen-iconen */}
        <div className="mt-14">
          <StijlenIconenRij />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 items-stretch mt-16">
          {/* Quote */}
          <div className="flex items-center justify-center text-center px-2.5 py-5 bg-kaart border-[1.5px] border-black/[0.07] rounded-card">
            <blockquote className="font-serif text-[clamp(22px,2.6vw,30px)] font-light italic text-donker leading-[1.35]">
              &ldquo;Ontdek wat mensen
              <br />
              in beweging brengt&rdquo;
            </blockquote>
          </div>

          {/* Checklist */}
          <div className="bg-kaart border-[1.5px] border-black/[0.07] rounded-card p-7">
            <div className="text-[13px] text-subtekst uppercase tracking-wide font-semibold mb-[18px]">
              7LIFE maakt zichtbaar
            </div>
            <ul className="flex flex-col gap-3.5">
              {zichtbaar.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-[15px] text-tekst font-medium"
                >
                  <span className="text-groen text-[15px] flex-shrink-0">
                    ✔️
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="text-[13px] text-subtekst leading-[1.6] mt-5 pt-[18px] border-t border-black/[0.07]">
              Met de 7LIFE-methodiek maken we zichtbaar hoe mensen
              communiceren, leren en veranderen. Zo ontstaat inzicht dat leidt
              tot ontwikkeling, verbinding en duurzame impact.
            </div>
          </div>
        </div>

        <div className="text-center mt-11">
          <a
            href="#flow"
            className="text-oranje text-sm font-medium no-underline hover:underline"
          >
            Ontdek de 7LIFE-methodiek →
          </a>
        </div>
      </div>
    </section>
  );
}
