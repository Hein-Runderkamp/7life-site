import Link from "next/link";

export default function TrainerBanner() {
  return (
    <section className="px-[5%] py-10 bg-achtergrond">
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 bg-kaart border-[1.5px] border-black/[0.07] rounded-2xl px-8 py-6">
        <p className="text-[15px] text-tekst text-center sm:text-left">
          Wil je zelf trainer of partner worden?
        </p>
        <Link
          href="/opleidingsaanbod"
          className="bg-oranje text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors flex-shrink-0"
        >
          Bekijk het opleidingsaanbod →
        </Link>
      </div>
    </section>
  );
}
