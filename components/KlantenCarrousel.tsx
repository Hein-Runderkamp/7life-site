"use client";

import Image from "next/image";

const logos = [
  { file: "logo-1.jpeg" },
  { file: "logo-2.jpeg" },
  { file: "logo-3.jpeg" },
  { file: "logo-4.jpeg" },
  { file: "logo-5.jpeg" },
  { file: "logo-6.jpeg" },
  { file: "logo-7.jpeg" },
  { file: "logo-8.jpeg" },
  { file: "logo-9.jpeg" },
  { file: "logo-10.jpeg" },
  { file: "logo-11.jpg" },
  { file: "logo-12.jpeg" },
  { file: "logo-13.jpeg" },
  { file: "logo-14.jpeg" },
  { file: "logo-15.jpeg" },
  { file: "logo-16.jpeg" },
  { file: "logo-17.jpeg" },
  { file: "logo-18.jpeg" },
  { file: "logo-19.jpeg" },
  { file: "logo-20.jpeg" },
  { file: "logo-21.jpeg" },
  { file: "logo-22.jpeg" },
  { file: "logo-23.jpeg" },
  { file: "logo-24.jpeg" },
  { file: "logo-25.jpeg" },
  { file: "logo-26.jpeg" },
  { file: "logo-27.jpeg" },
  { file: "logo-28.jpeg" },
  { file: "logo-29.jpeg" },
  { file: "logo-30.jpeg" },
  { file: "logo-31.jpeg" },
  { file: "logo-32.jpeg" },
  { file: "logo-33.jpeg" },
  { file: "logo-34.jpeg" },
  { file: "logo-35.jpg" },
];

export default function KlantenCarrousel() {
  // Rij verdubbelen zodat de loop naadloos aansluit
  const rij = [...logos, ...logos];

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-[5%] text-center mb-10">
        <h2 className="font-serif text-lg font-light text-donker">
          Zij gingen je voor
        </h2>
      </div>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-scroll-logos">
          {rij.map((l, i) => (
            <div
              key={`${l.file}-${i}`}
              className="flex items-center justify-center mx-8 h-24 w-[180px] flex-shrink-0"
            >
              <Image
                src={`/klanten/${l.file}`}
                alt="Klantlogo"
                width={180}
                height={90}
                className="max-h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
