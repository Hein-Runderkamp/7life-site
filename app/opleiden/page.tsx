"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const vragen = [
  "Ik wil werken met een bewezen methodiek die wetenschappelijk is onderbouwd",
  "Ik wil onderdeel zijn van een netwerk van gelijkgestemde professionals",
  "Ik zoek tools en assessments die ik kan inzetten bij mijn eigen klanten",
  "Ik wil mijn leiderschapsontwikkeling verdiepen via een serieus programma",
  "Ik wil bijdragen aan de ontwikkeling van nieuwe producten en programma's",
  "Ik zoek een plek waar ondernemen en inhoud hand in hand gaan",
  "Ik wil een assessment dat gericht is op communicatie, ontwikkeling en veranderkracht",
  "Ik wil investeren in mensen en organisaties in beweging brengen",
];

const oplossingen = [
  {
    icon: "/opleiden/logo-oranje.png",
    titel: "Trainer worden",
    body: "Word gecertificeerd 7LIFE Trainer en bouw je eigen praktijk — met de 7LIFE-methodiek, tools en een actief netwerk als fundament.",
    items: [
      "Gecertificeerde opleiding (accreditatie)",
      "Eigen portal en software-omgeving",
      "Vermelding op 7life.nl",
      "Jaarlijkse certificatiedag",
      "Toegang tot alle scans en materialen",
    ],
  },
  {
    icon: "/opleiden/logo-blauw.png",
    titel: "Certificering",
    body: "Al trainer? Houd je certificering actueel en verdiep je in nieuwe instrumenten — van de LeiderschapScan tot de GeldScan.",
    items: [
      "Jaarlijkse certificatiedag verplicht",
      "Aanvullende accreditaties mogelijk",
      "LeiderschapScan certificering",
      "GeldScan certificering",
      "Netwerk- en leerbijeenkomsten",
    ],
  },
  {
    icon: "/opleiden/logo-groen.png",
    titel: "Academie voor Bestuur & Leiderschap",
    body: "Diepgaande leiderschapsontwikkeling voor directeuren, bestuurders en leidinggevenden — gebaseerd op de LeiderschapScan.",
    items: [
      "LeiderschapScan als vertrekpunt",
      "Masterclasses en leergangen",
      "Be Excellent programma",
      "Social Impact Theater",
      "Coaching en mentorschap",
    ],
  },
  {
    icon: "/opleiden/logo-geel.png",
    titel: "Innovatiepartners",
    body: "Co-creëer nieuwe programma's en producten binnen het 7LIFE-ecosysteem. Voor thought leaders die meer willen dan uitvoeren.",
    items: [
      "Advisor — expertise en reflectie",
      "Pilotpartner — toegang tot doelgroep",
      "Co-ontwikkelaar — meebouwen",
      "Lead Developer — projectleiding",
    ],
  },
];

import { trainingen } from "@/lib/trainingen";

const impactStats = [
  { n: "40+", l: "gecertificeerde trainers en coaches actief in Nederland" },
  { n: "9.000+", l: "assessments afgenomen door het 7LIFE-netwerk" },
  { n: "16 jaar", l: "ervaring in het opleiden van professionals" },
];

export default function OpleidenPagina() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative flex items-end overflow-hidden bg-donker min-h-[520px] px-[5%] pt-[170px] pb-16">
          <Image
            src="/opleiden/hero-achtergrond.jpg"
            alt="Opleiden & Certificeren"
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
                Opleiden &amp; Certificeren
              </div>
              <h1 className="font-serif text-[clamp(38px,5vw,64px)] font-light text-white leading-[1.1] tracking-[-1px] mb-4">
                Bouw verder.
                <br />
                <em className="text-oranje not-italic italic">Vanuit 7LIFE.</em>
              </h1>
              <p className="text-white/50 text-base leading-[1.75] max-w-[560px] mb-7">
                Word gecertificeerd trainer, word innovatiepartner, of
                verdiep je via de Academie voor Bestuur &amp; Leiderschap.
                7LIFE biedt de methodiek, het netwerk en de tools om écht
                impact te maken.
              </p>
              <div className="flex gap-2.5 flex-wrap">
                <a
                  href="#oplossing"
                  className="bg-oranje text-white px-6 py-[11px] rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
                >
                  Bekijk de mogelijkheden
                </a>
                <a
                  href="#cta"
                  className="bg-transparent text-white border-[1.5px] border-white/20 px-6 py-[11px] rounded-full text-sm font-medium hover:border-white/50 transition-colors"
                >
                  Plan een gesprek
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* DE VRAAG */}
        <section className="px-[5%] py-[72px] bg-achtergrond" id="vraag">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-stretch">
            <div>
              <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
                De vraag
              </div>
              <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] font-light leading-[1.15] mb-3">
                Herken jij dit?
              </h2>
              <p className="text-[15px] text-subtekst leading-[1.7] max-w-[560px] mb-9">
                Of je nu trainer bent, coach, leidinggevende of educator —
                er is een moment waarop je meer wil dan wat je nu hebt.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {vragen.map((v, idx) =>
                  v ? (
                    <div
                      key={v}
                      className="bg-kaart border-[1.5px] border-black/[0.07] rounded-2xl px-5 py-[18px] flex items-start gap-3"
                    >
                      <div className="w-[9px] h-[9px] rounded-full border-2 border-oranje flex-shrink-0 mt-1.5" />
                      <div className="text-sm leading-[1.55]">{v}</div>
                    </div>
                  ) : (
                    <div
                      key={`placeholder-${idx}`}
                      className="border-[1.5px] border-dashed border-black/[0.12] rounded-2xl px-5 py-[18px] flex items-center justify-center"
                    >
                      <div className="text-xs text-subtekst/50 italic">
                        Binnenkort ingevuld
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="bg-kaart border border-black/[0.07] rounded-2xl overflow-hidden flex flex-col">
              <div className="relative h-[220px] flex-shrink-0">
                <Image
                  src="/opleiden/testimonial.jpg"
                  alt="Impact in de praktijk"
                  fill
                  className="object-cover object-[center_15%]"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <div className="text-xs font-semibold text-oranje uppercase tracking-wide mb-3">
                  Impact in de praktijk
                </div>
                <blockquote className="font-serif text-lg italic text-tekst leading-snug mb-4">
                  &ldquo;Ik werkte al jaren als coach, maar had geen
                  methodiek die ik volledig kon vertrouwen. Sinds mijn
                  certificering bij 7LIFE heb ik niet alleen betere
                  gesprekken — ik heb ook een netwerk van mensen die
                  dezelfde taal spreken.&rdquo;
                </blockquote>
                <p className="text-sm text-subtekst leading-[1.65]">
                  Een gecertificeerde 7LIFE Trainer, actief in
                  leiderschaps- en teamontwikkeling. De combinatie van
                  wetenschappelijke onderbouwing en praktische tools maakt
                  het verschil — voor haar én voor haar klanten.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DE OPLOSSING */}
        <section className="bg-donker px-[5%] py-[72px]" id="oplossing">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 items-start">
            <div className="flex flex-row lg:flex-col gap-2.5 flex-wrap">
              {impactStats.map((s) => (
                <div
                  key={s.n}
                  className="bg-white/5 border border-white/[0.08] rounded-2xl px-5 py-4 flex-1 lg:flex-none min-w-[180px]"
                >
                  <div className="font-serif text-[28px] text-oranje leading-none">
                    {s.n}
                  </div>
                  <div className="text-xs text-white/40 mt-1 leading-[1.4]">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="text-[11px] font-semibold tracking-[2px] text-oranje/85 uppercase mb-2.5">
                De oplossing
              </div>
              <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] font-light text-white leading-[1.15] mb-3">
                Vier wegen om verder te bouwen
              </h2>
              <p className="text-white/45 text-[15px] leading-[1.7] mb-7">
                Van certificering tot co-creatie — kies de rol die bij jou
                past.
              </p>

              <div className="flex flex-col gap-1.5">
                {oplossingen.map((o, i) => {
                  const isOpen = open === i;
                  return (
                    <div
                      key={o.titel}
                      className={`rounded-xl overflow-hidden cursor-pointer border transition-colors ${
                        isOpen ? "border-oranje" : "border-white/[0.07] hover:border-white/20"
                      }`}
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      <div className="flex items-center gap-3 px-4 py-3.5 bg-white/[0.04]">
                        <div className="relative w-8 h-8 flex-shrink-0 rounded-lg overflow-hidden">
                          <Image src={o.icon} alt="" fill className="object-cover" />
                        </div>
                        <div className="text-[15px] font-semibold text-white flex-1">
                          {o.titel}
                        </div>
                        <div
                          className={`text-white/30 text-[13px] transition-transform ${
                            isOpen ? "rotate-90 text-oranje" : ""
                          }`}
                        >
                          ›
                        </div>
                      </div>
                      {isOpen && (
                        <div className="px-4 pb-5 pl-[52px] bg-white/[0.03]">
                          <p className="text-[13px] text-white/50 leading-[1.65] mb-3 mt-3">
                            {o.body}
                          </p>
                          <ul>
                            {o.items.map((it, j) => (
                              <li
                                key={it}
                                className={`text-[13px] text-white/55 py-1 pl-3.5 relative before:content-['·'] before:absolute before:left-0 before:text-oranje ${
                                  j < o.items.length - 1 ? "border-b border-white/[0.06]" : ""
                                }`}
                              >
                                {it}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ONS OPLEIDINGSAANBOD */}
        <section className="px-[5%] py-[72px] bg-achtergrond" id="aanbod">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Ons opleidingsaanbod
            </div>
            <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] font-light leading-[1.15] mb-3">
              Van basisaccreditatie tot specialistische verdieping
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[640px] mb-9">
              Het volledige aanbod aan 7LIFE-trainingen voor (aankomend)
              trainers en coaches. Actuele data vind je in de agenda op
              het trainersportaal.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {trainingen.map((t) => (
                <div
                  key={t.naam}
                  className="rounded-[18px] p-[26px] bg-kaart border border-black/[0.07] flex flex-col"
                  style={{ borderTop: `3px solid ${t.kleur}` }}
                >
                  <div
                    className="inline-flex self-start items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-lg mb-3 uppercase tracking-wide"
                    style={{
                      color: t.kleur,
                      background: `${t.kleur}14`,
                      border: `1px solid ${t.kleur}33`,
                    }}
                  >
                    {t.categorie}
                  </div>
                  <div className="text-[16px] font-semibold text-tekst mb-2 leading-snug">
                    {t.naam}
                  </div>
                  <p className="text-[13px] text-subtekst leading-[1.6] mb-4 flex-1">
                    {t.samenvatting}
                  </p>
                  <div className="text-sm font-semibold text-tekst mb-3.5">
                    {t.prijs}
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Link
                      href={`/opleiden/${t.slug}`}
                      className="text-xs font-medium px-3.5 py-2 rounded-full bg-donker text-white hover:opacity-85 transition-opacity"
                    >
                      Meer info
                    </Link>
                    <a
                      href={t.flyer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium px-3.5 py-2 rounded-full border border-black/15 text-tekst hover:border-oranje hover:text-oranje transition-colors"
                    >
                      ↓ Flyer
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/agenda"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-oranje hover:opacity-75 transition-opacity"
              >
                Bekijk de volledige agenda →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-donker px-[5%] py-20 text-center overflow-hidden" id="cta">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 110%, rgba(238,126,6,0.12) 0%, transparent 65%)",
            }}
          />
          <div className="relative z-10">
            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light text-white leading-[1.1] mb-3">
              Klaar om verder
              <br />
              te <em className="text-oranje not-italic italic">bouwen?</em>
            </h2>
            <p className="text-white/45 text-[15px] max-w-[420px] mx-auto mb-7 leading-[1.7]">
              Vertel ons waar je staat en waar je naartoe wil. Dan kijken
              we samen welke weg het beste bij jou past.
            </p>
            <div className="flex gap-2.5 justify-center flex-wrap">
              <a
                href="mailto:info@7life.nl?subject=Interesse Opleiden en Certificeren"
                className="bg-oranje text-white px-6 py-[11px] rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
              >
                Plan een kennismaking
              </a>
              <Link
                href="/"
                className="bg-transparent text-white border-[1.5px] border-white/20 px-6 py-[11px] rounded-full text-sm font-medium hover:border-white/50 transition-colors"
              >
                Terug naar 7LIFE
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
