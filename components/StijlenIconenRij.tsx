import Image from "next/image";

const iconRij = [
  { naam: "doordenker", label: "Doordenker" },
  { naam: "doener", label: "Doener" },
  { naam: "beheerder", label: "Beheerder" },
  { naam: "verbinder", label: "Verbinder" },
  { naam: "zorger", label: "Zorger" },
  { naam: "strateeg", label: "Strateeg" },
  { naam: "pionier", label: "Pionier" },
];

export default function StijlenIconenRij() {
  return (
    <div className="flex flex-wrap justify-center gap-x-14 gap-y-10">
      {iconRij.map((i) => (
        <div key={i.naam} className="flex flex-col items-center gap-3">
          <Image
            src={`/iconen/${i.naam}.png`}
            alt={i.label}
            width={56}
            height={56}
          />
          <span className="text-sm text-subtekst">{i.label}</span>
        </div>
      ))}
    </div>
  );
}
