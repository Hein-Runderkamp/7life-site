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
        {/* Onze aanpak */}
        <div className="relative group">
          <span className={navItem}>
            Inzicht <span className="ml-1 text-[11px] opacity-50">▾</span>
          </span>
          <div className="absolute top-full left-0 min-w-[210px] bg-white rounded-b-xl p-2 pt-3 shadow-xl border border-black/5 border-t-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none group-hover:pointer-events-auto">
            <DdLink href="/impact-check">Impact Check</DdLink>
            <DdLink href="/ids">Impact Dynamics Scan</DdLink>
          </div>
        </div>

        {/* Build Strong */}
        <div className="relative group">
          <span className={navItem}>
            Build Strong <span className="ml-1 text-[11px] opacity-50">▾</span>
          </span>
          <div className="absolute top-full left-0 min-w-[240px] bg-white rounded-b-xl p-2 pt-3 shadow-xl border border-black/5 border-t-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none group-hover:pointer-events-auto">
            <DdLink href="/build-strong-individueel">Build Strong Individueel</DdLink>
            <DdLink href="/jongeren">Build Strong Jongeren</DdLink>
            <DdLink href="/organisaties">Build Strong Organisaties</DdLink>
            <DdLink href="/leiderschap">Build Strong Leiderschap</DdLink>
            <DdLink href="/opleiden">Build Strong Trainers</DdLink>
          </div>
        </div>

        {/* Social Impact */}
        <div className="relative group">
          <span className={navItem}>
            Social Impact <span className="ml-1 text-[11px] opacity-50">▾</span>
          </span>
          <div className="absolute top-full left-0 min-w-[210px] bg-white rounded-b-xl p-2 pt-3 shadow-xl border border-black/5 border-t-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none group-hover:pointer-events-auto">
            <DdLink href="/social-impact-dashboard">Social Impact Dashboard</DdLink>
            <DdLink href="/oja">OJA</DdLink>
            <DdLink href="/social-impact-theater">Social Impact Theater</DdLink>
          </div>
        </div>

        {/* Over 7LIFE */}
        <div className="relative group">
          <span className={navItem}>
            Over 7LIFE <span className="ml-1 text-[11px] opacity-50">▾</span>
          </span>
          <div className="absolute top-full left-0 min-w-[210px] bg-white rounded-b-xl p-2 pt-3 shadow-xl border border-black/5 border-t-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none group-hover:pointer-events-auto">
            <DdLink href="/wie-zijn-wij">Wie zijn wij</DdLink>
            <DdLink href="/methodiek">7LIFE Methodiek</DdLink>
            <DdLink href="/onze-mensen">Onze mensen</DdLink>
            <DdLink href="/academie">Academie</DdLink>
            <DdLink href="/foundation">Foundation</DdLink>
          </div>
        </div>

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

function DdLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-[13px] text-tekst hover:bg-achtergrond transition-colors before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-oranje before:flex-shrink-0"
    >
      {children}
    </Link>
  );
}

function DdLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`text-[10px] font-semibold tracking-[1.2px] text-subtekst uppercase px-2.5 pt-1 pb-1 ${className}`}
    >
      {children}
    </div>
  );
}
