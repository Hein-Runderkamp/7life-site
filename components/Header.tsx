import Image from "next/image";
import Link from "next/link";

const navItem =
  "text-white/65 text-[15px] px-3 py-[7px] rounded-md cursor-pointer whitespace-nowrap transition-all hover:text-oranje hover:bg-white/[0.07]";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[999] flex items-center justify-between px-[5%] py-3 bg-donker/[0.97] backdrop-blur-md">
      <Link href="/" className="flex items-center gap-2.5">
        <Image
          src="/logo-badge.png"
          alt="7LIFE"
          height={88}
          width={88}
          className="rounded-xl h-[88px] w-[88px]"
          priority
        />
      </Link>

      <div className="hidden lg:flex gap-0.5 items-center">
        {/* 7LIFE */}
        <div className="relative group">
          <span className={navItem}>
            7LIFE <span className="ml-1 text-[11px] opacity-50">▾</span>
          </span>
          <div className="absolute top-full left-0 min-w-[250px] bg-white rounded-b-xl p-2 pt-3 shadow-xl border border-black/5 border-t-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none group-hover:pointer-events-auto">
            <DdLink href="/wie-zijn-wij" dotKleur="#EE7E06">Wie zijn wij</DdLink>
            <DdLink href="/methodiek" dotKleur="#EE7E06">7LIFE Methodiek</DdLink>
            <DdLink href="/onze-mensen" dotKleur="#EE7E06">Onze mensen</DdLink>
            <DdLink href="/build-strong-individueel" dotKleur="#EE7E06">Build Strong Individueel</DdLink>
            <DdLink href="/jongeren" dotKleur="#EE7E06">Build Strong Jongeren</DdLink>
            <DdLink href="/organisaties" dotKleur="#EE7E06">Build Strong Organisaties</DdLink>
          </div>
        </div>

        {/* Zakelijk & B2B */}
        <div className="relative group">
          <span className={navItem}>
            Zakelijk &amp; B2B <span className="ml-1 text-[11px] opacity-50">▾</span>
          </span>
          <div className="absolute top-full left-0 min-w-[220px] bg-white rounded-b-xl p-2 pt-3 shadow-xl border border-black/5 border-t-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none group-hover:pointer-events-auto">
            <DdLink href="/impact-check" dotKleur="#3E8FA3">Impact Check</DdLink>
            <DdLink href="/ids" dotKleur="#3E8FA3">Impact Dynamics Scan</DdLink>
            <DdLink href="/social-impact-dashboard" dotKleur="#3E8FA3">Social Impact Dashboard</DdLink>
            <DdLink href="/oja" dotKleur="#3E8FA3">Open Job Architecture</DdLink>
          </div>
        </div>

        {/* Academie */}
        <div className="relative group">
          <span className={navItem}>
            Academie <span className="ml-1 text-[11px] opacity-50">▾</span>
          </span>
          <div className="absolute top-full left-0 min-w-[250px] bg-white rounded-b-xl p-2 pt-3 shadow-xl border border-black/5 border-t-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none group-hover:pointer-events-auto">
            <DdLink href="/leiderschap" dotKleur="#6B7B45">Academie voor Bestuur en Leiderschap</DdLink>
            <DdLink href="/social-impact-theater" dotKleur="#6B7B45">Social Impact Theater</DdLink>
            <DdLink href="/opleiden" dotKleur="#6B7B45">Trainer worden</DdLink>
            <DdLink href="/opleidingsaanbod" dotKleur="#6B7B45">Opleidingsaanbod</DdLink>
            <DdLink href="/agenda" dotKleur="#6B7B45">Opleidingsagenda</DdLink>
          </div>
        </div>

        <Link href="/foundation" className={navItem}>
          7LIFE Foundation
        </Link>

        <Link href="/#contact" className={navItem}>
          Contact &amp; Kwaliteit
        </Link>
      </div>

      <a
        href="#cta"
        className="ml-3.5 bg-oranje text-white border-none px-5 py-2 rounded-full text-[13px] font-medium hover:bg-[#d4710a] transition-colors"
      >
        Plan een gesprek
      </a>
    </nav>
  );
}

function DdLink({
  href,
  children,
  dotKleur = "#EE7E06",
}: {
  href: string;
  children: React.ReactNode;
  dotKleur?: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-[13px] text-tekst hover:bg-achtergrond transition-colors"
    >
      <span
        className="w-[5px] h-[5px] rounded-full flex-shrink-0"
        style={{ background: dotKleur }}
      />
      {children}
    </Link>
  );
}
