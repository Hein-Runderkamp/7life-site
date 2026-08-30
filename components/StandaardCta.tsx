import Link from "next/link";

export default function StandaardCta() {
  return (
    <section className="px-[5%] py-[88px] text-center bg-achtergrond" id="cta">
      <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-light leading-[1.15] mb-3.5">
        Benieuwd wat 7LIFE
        <br />
        voor jou kan betekenen?
      </h2>
      <p className="text-[15px] text-subtekst max-w-[480px] mx-auto mb-[30px] leading-[1.7]">
        Of je nu meer wilt weten over onze methodiek, op zoek bent naar
        een gecertificeerde professional of wilt samenwerken — we
        plannen graag een vrijblijvend kennismakingsgesprek.
      </p>
      <div className="flex gap-2.5 justify-center flex-wrap">
        <a
          href="mailto:info@7life.nl?subject=Kennismaking 7LIFE"
          className="bg-oranje text-white px-[26px] py-3 rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
        >
          Plan een gesprek
        </a>
        <Link
          href="/opleiden"
          className="bg-transparent text-tekst border-[1.5px] border-black/[0.07] px-[26px] py-3 rounded-full text-sm font-medium hover:border-oranje hover:text-oranje transition-colors"
        >
          Word partner of trainer
        </Link>
      </div>
    </section>
  );
}
