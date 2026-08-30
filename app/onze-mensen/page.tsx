"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StandaardCta from "@/components/StandaardCta";
import Link from "next/link";
import { mensen } from "@/lib/mensen";
import { partnerProgrammas, partnerDetails } from "@/lib/partners";

function initialen(naam: string) {
  return naam
    .split(" ")
    .filter((w) => w[0] === w[0].toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

export default function OnzeMensenPagina() {
  const [open, setOpen] = useState<number | null>(0);
  const partners = mensen.filter((m) => m.partner);
  const trainers = mensen
    .filter((m) => !m.partner)
    .sort((a, b) => {
      if (a.foto && !b.foto) return -1;
      if (!a.foto && b.foto) return 1;
      return 0;
    });

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative flex items-end overflow-hidden bg-donker min-h-[520px] px-[5%] pt-[170px] pb-16">
          <Image
            src="/onze-mensen/hero-achtergrond.jpg"
            alt="Onze mensen"
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
              <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
                Over 7LIFE
              </div>
              <h1 className="font-serif text-[clamp(32px,5vw,56px)] font-light text-white leading-[1.1] mb-4">
                Onze mensen.
              </h1>
              <p className="text-white/55 text-[15px] leading-[1.75] mb-7">
                7LIFE beschikt over een landelijk netwerk van
                gecertificeerde trainers, partners en ontwikkelaars. Zij
                dragen de methodiek uit, ontwikkelen nieuwe programma&apos;s,
                en werken samen in het begeleiden van jongeren,
                volwassenen, leidinggevenden en organisaties. Samen geven
                zij het gezicht aan 7LIFE.
              </p>
              <div className="flex gap-2.5 flex-wrap">
                <a
                  href="#trainers"
                  className="bg-oranje text-white px-[26px] py-3 rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
                >
                  Ontmoet onze trainers
                </a>
                <a
                  href="#partners"
                  className="bg-transparent text-white border-[1.5px] border-white/20 px-[26px] py-3 rounded-full text-sm font-medium hover:border-white/50 transition-colors"
                >
                  Ontmoet onze partners
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* IN DE SPOTLIGHT */}
        <section className="px-[5%] py-16 bg-achtergrond" id="spotlight">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 bg-donker rounded-card p-10">
              <Link href="/onze-mensen/marc-wilhelmus" className="group flex flex-col gap-3">
                <div className="text-[11px] font-semibold tracking-[2px] text-oranje/80 uppercase mb-1">
                  In de spotlight
                </div>
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/team/marc-wilhelmus.jpg"
                    alt="Marc Wilhelmus"
                    fill
                    className="object-cover group-hover:opacity-90 transition-opacity"
                  />
                </div>
                <div>
                  <div className="text-white font-serif text-lg">
                    Marc Wilhelmus
                  </div>
                  <div className="text-white/50 text-sm leading-snug">
                    Coach GeldScan en auteur van het boek &apos;Voor
                    hetzelfde geld gelukkig&apos;
                  </div>
                </div>
              </Link>

              <div className="flex flex-col justify-center">
                <h2 className="font-serif text-2xl sm:text-3xl text-white font-light leading-[1.25] mb-4">
                  Waarom mensen zich niet uitspreken over geld — en hoe
                  Marc dat doorbreekt.
                </h2>
                <p className="text-white/55 text-[15px] leading-[1.75] mb-4">
                  Marc Wilhelmus zag hoe geldgedrag en de mindset over
                  geld nauwelijks een plek kregen in financiële
                  adviesgesprekken — terwijl juist dat vaak de kern van
                  het probleem is. Vanuit die overtuiging werkt hij met
                  de 7LIFE Geldtype Scan en de MoneyValues Scan: een
                  instrument dat financieel adviseurs en hun cliënten
                  helpt om eindelijk het échte gesprek over geld te
                  voeren.
                </p>
                <p className="text-white/55 text-[15px] leading-[1.75] mb-6">
                  Als business partner en trainer begeleidt Marc
                  financieel adviseurs en planners door heel Nederland,
                  en schreef hij het boek &apos;Voor hetzelfde geld
                  gelukkig!&apos; — over hoe je een goede vriend wordt
                  van je eigen geld. Zijn missie: taboe, schaamte en ego
                  rondom geld doorbreken, en mensen helpen naar een
                  gezonde relatie met hun financiën.
                </p>
                <Link
                  href="/onze-mensen/marc-wilhelmus"
                  className="text-sm font-medium text-oranje hover:underline self-start"
                >
                  Lees het volledige profiel →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="px-[5%] py-16 bg-donker" id="partners">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje/85 uppercase mb-2.5">
              Partners
            </div>
            <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] font-light text-white leading-[1.15] mb-3">
              Strategische partners van 7LIFE
            </h2>
            <p className="text-white/45 text-[15px] leading-[1.7] max-w-[620px] mb-9">
              Onze partners ontwikkelen, dragen en verrijken specifieke
              onderdelen van het 7LIFE-ecosysteem — elk vanuit hun eigen
              vakgebied en netwerk.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 items-start">
              {/* Programma-overzicht links */}
              <div className="flex flex-col gap-2.5">
                {partnerProgrammas.map((p) => {
                  const extern = (p.link ?? "#").startsWith("http");
                  const itemClass =
                    "rounded-xl px-4 py-3.5 flex items-center justify-between gap-2 transition-transform hover:-translate-y-0.5";
                  const itemStyle = {
                    background: `${p.kleur}18`,
                    border: `1px solid ${p.kleur}40`,
                  };
                  const inhoud = (
                    <>
                      <div className="text-[13px] font-semibold" style={{ color: p.kleur }}>
                        {p.naam}
                      </div>
                      <span className="text-xs flex-shrink-0" style={{ color: p.kleur }}>
                        →
                      </span>
                    </>
                  );
                  return extern ? (
                    <a
                      key={p.naam}
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={itemClass}
                      style={itemStyle}
                    >
                      {inhoud}
                    </a>
                  ) : (
                    <Link
                      key={p.naam}
                      href={p.link ?? "#"}
                      className={itemClass}
                      style={itemStyle}
                    >
                      {inhoud}
                    </Link>
                  );
                })}
              </div>

              {/* Uitklappers rechts */}
              <div className="flex flex-col gap-1.5">
                {partners.map((partner, i) => {
                  const detail = partnerDetails.find(
                    (d) => d.slug === partner.slug
                  );
                  const isOpen = open === i;
                  const kleur = detail?.kleur ?? "#EE7E06";
                  return (
                    <div
                      key={partner.slug}
                      className={`rounded-xl overflow-hidden cursor-pointer border transition-colors ${
                        isOpen ? "" : "border-white/[0.07] hover:border-white/20"
                      }`}
                      style={isOpen ? { borderColor: kleur } : undefined}
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      <div className="flex items-center gap-3 px-4 py-3.5 bg-white/[0.04]">
                        <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-white/10">
                          {partner.foto ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={partner.foto}
                              alt={partner.naam}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-white text-xs font-serif">
                              {initialen(partner.naam)}
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[14px] font-semibold text-white">
                            {partner.naam}
                          </div>
                          {detail && (
                            <div
                              className="text-[11px] font-medium truncate"
                              style={{ color: kleur }}
                            >
                              {detail.programma}
                            </div>
                          )}
                        </div>
                        <div
                          className={`text-white/30 text-[13px] transition-transform flex-shrink-0 ${
                            isOpen ? "rotate-90" : ""
                          }`}
                          style={isOpen ? { color: kleur } : undefined}
                        >
                          ›
                        </div>
                      </div>
                      {isOpen && detail && (
                        <div className="px-4 pb-5 pt-1 bg-white/[0.03]">
                          <div className="flex flex-col sm:flex-row gap-5">
                            {partner.foto && (
                              <div className="relative w-[120px] h-[120px] mx-auto sm:mx-0 rounded-full overflow-hidden flex-shrink-0">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={partner.foto}
                                  alt={partner.naam}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                            <ul className="flex flex-col gap-2 flex-1">
                              {detail.punten.map((punt) => (
                                <li
                                  key={punt}
                                  className="text-[13px] text-white/60 leading-[1.55] pl-3.5 relative"
                                >
                                  <span
                                    className="absolute left-0"
                                    style={{ color: kleur }}
                                  >
                                    ·
                                  </span>
                                  {punt}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Link
                            href={`/onze-mensen/${partner.slug}`}
                            className="inline-block mt-4 text-xs font-medium"
                            style={{ color: kleur }}
                          >
                            Volledig profiel →
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* TRAINERS */}
        <section className="px-[5%] py-16 bg-achtergrond" id="trainers">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Trainers
            </div>
            <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] font-light leading-[1.15] mb-8">
              Ons landelijk netwerk
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {trainers.map((m) => (
                <Link
                  key={m.slug}
                  href={`/onze-mensen/${m.slug}`}
                  className="flex flex-col items-center text-center bg-kaart border-[1.5px] border-black/[0.07] rounded-card p-5 hover:border-oranje transition-colors"
                >
                  {m.foto ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={m.foto}
                      alt={m.naam}
                      className="w-20 h-20 rounded-full object-cover mb-3.5"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-donker text-white font-serif text-lg flex items-center justify-center mb-3.5">
                      {initialen(m.naam)}
                    </div>
                  )}
                  <div className="text-sm font-medium text-tekst leading-tight mb-1">
                    {m.naam}
                  </div>
                  <div className="text-xs text-subtekst leading-tight">
                    {m.org}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <StandaardCta donker />
      </main>
      <Footer />
    </>
  );
}
