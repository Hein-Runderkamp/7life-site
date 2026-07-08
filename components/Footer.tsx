import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-donker px-[5%] py-10 flex flex-col items-center gap-4 text-center">
      <div className="flex items-center gap-3 opacity-75">
        <Image src="/logo.png" alt="7LIFE" height={28} width={100} />
        <span className="text-white/70 text-sm">
          7LIFE Nederland BV · Zeeweg 24, 3853 LM Ermelo · info@7life.nl
        </span>
      </div>
      <p className="text-white/40 text-xs">
        © 2019–2026 Polsini Holding BV · 7life.nl
      </p>
    </footer>
  );
}
