const docs = [
  { naam: "Algemene voorwaarden", href: "/algemene-voorwaarden.pdf" },
  { naam: "Klachtenregeling", href: "/klachtenregeling.pdf" },
  { naam: "Privacyverklaring", href: "/privacyverklaring.pdf" },
  { naam: "Cookieverklaring", href: "/cookieverklaring.pdf" },
];

export default function ContactSectie() {
  return (
    <section className="px-[5%] py-[88px]" id="contact">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5 text-center">
          Contact & Kwaliteit
        </div>
        <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.15] mb-2.5 text-center max-w-[720px] mx-auto">
          Direct contact, transparante voorwaarden.
        </h2>
        <p className="text-[15px] text-subtekst leading-[1.7] mb-14 text-center max-w-[560px] mx-auto">
          7Life Nederland hecht grote waarde aan een zorgvuldige en
          professionele dienstverlening — bereikbaar, transparant en met
          heldere afspraken.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Kolom 1: contact */}
          <div>
            <h3 className="font-serif text-xl mb-5">Contactgegevens</h3>

            <div className="mb-4">
              <div className="text-xs font-semibold text-subtekst uppercase tracking-wide mb-1">
                7Life Nederland B.V.
              </div>
              <div className="text-sm text-tekst leading-[1.6]">
                Zeeweg 24
                <br />
                3853 LM Ermelo
                <br />
                Nederland
              </div>
            </div>

            <div className="mb-4">
              <div className="text-xs font-semibold text-subtekst uppercase tracking-wide mb-1">
                Telefoon
              </div>
              <a href="tel:+31651124431" className="text-sm text-oranje hover:underline">
                +31 6 51124431
              </a>
            </div>

            <div className="mb-4">
              <div className="text-xs font-semibold text-subtekst uppercase tracking-wide mb-1">
                E-mail
              </div>
              <a href="mailto:info@7life.nl" className="text-sm text-oranje hover:underline">
                info@7life.nl
              </a>
            </div>

            <div className="flex gap-8 mb-4">
              <div>
                <div className="text-xs font-semibold text-subtekst uppercase tracking-wide mb-1">
                  KvK-nummer
                </div>
                <div className="text-sm text-tekst">57783640</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-subtekst uppercase tracking-wide mb-1">
                  BTW-nummer
                </div>
                <div className="text-sm text-tekst">NL002149728B44</div>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-xs font-semibold text-subtekst uppercase tracking-wide mb-1">
                Directie
              </div>
              <div className="text-sm text-tekst leading-[1.6]">
                Maroesja van der Pols
                <br />
                Directeur 7Life Nederland
                <br />
                <a href="mailto:maroesja@7life.nl" className="text-oranje hover:underline">
                  maroesja@7life.nl
                </a>
              </div>
            </div>

            <div className="text-sm text-subtekst leading-[1.6] bg-achtergrond rounded-2xl p-4">
              <strong className="text-tekst">
                Bereikbaarheid en responstijd
              </strong>
              <br />
              U ontvangt binnen twee werkdagen een eerste inhoudelijke reactie
              of ontvangstbevestiging op uw vraag, verzoek of melding. Indien
              meer tijd nodig is voor een volledige afhandeling, informeren
              wij u tijdig over de verdere procedure en de verwachte termijn.
            </div>
          </div>

          {/* Kolom 2: kwaliteit */}
          <div>
            <h3 className="font-serif text-xl mb-3">
              Kwaliteit, voorwaarden &amp; privacy
            </h3>
            <p className="text-sm text-subtekst leading-[1.6] mb-5">
              Voor transparantie en kwaliteit stellen wij de volgende
              documenten beschikbaar. Deze zijn van toepassing op onze
              dienstverlening en opleidingen.
            </p>

            <div className="flex flex-col gap-2 mb-7">
              {docs.map((d) => (
                <a
                  key={d.naam}
                  href={d.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-kaart border border-black/[0.07] rounded-xl px-4 py-3 hover:border-oranje transition-colors"
                >
                  <span>📄</span>
                  <span className="text-sm text-tekst flex-1">{d.naam}</span>
                  <span className="text-xs font-medium text-groen bg-groen/10 px-2 py-0.5 rounded-full">
                    PDF
                  </span>
                </a>
              ))}
            </div>

            <div className="text-sm text-subtekst leading-[1.6] mb-6">
              <strong className="text-tekst">Klachtenregeling</strong>
              <br />
              Heeft u een klacht over onze dienstverlening of een opleiding?
              Dan kunt u deze schriftelijk indienen via{" "}
              <a href="mailto:info@7life.nl" className="text-oranje hover:underline">
                info@7life.nl
              </a>
              . Wij behandelen iedere klacht conform onze klachtenregeling. De
              volledige procedure vindt u in de documenten hierboven.
            </div>

            <div className="flex items-center gap-2.5 mb-6">
              <span className="text-xs font-semibold bg-tekst text-white px-2.5 py-1 rounded-full">
                CRKBO
              </span>
              <span className="text-xs text-subtekst">
                Centraal Register Kort Beroepsonderwijs
              </span>
            </div>

            <p className="text-xs text-subtekst leading-[1.6]">
              7Life Nederland streeft naar hoogwaardige dienstverlening en
              transparante communicatie. De relevante kwaliteitsdocumenten,
              waaronder de klachtenregeling, algemene voorwaarden en
              privacydocumentatie, zijn openbaar beschikbaar via deze website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
