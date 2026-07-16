import Image from "next/image";
import Link from "next/link";

const navItem =
  "text-white/65 text-[13px] px-3 py-[7px] rounded-md cursor-pointer whitespace-nowrap transition-all hover:text-white hover:bg-white/[0.07]";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[999] flex items-center justify-between px-[5%] h-16 bg-donker/[0.97] backdrop-blur-md">
      <Link href="/" className="flex items-center gap-2.5 py-1">
        <Image src="/logo.png" alt="7LIFE" height={36} width={130} priority />
      </Link>

      <div className="hidden lg:flex gap-0.5 items-center">
        {/* Onze aanpak */}
        <div className="relative group">
          <span className={navItem}>
            Onze aanpak <span className="ml-1 text-[10px] opacity-50">▾</span>
          </span>
          <div className="absolute top-full left-0 min-w-[210px] bg-white rounded-b-xl p-2 pt-3 shadow-xl border border-black/5 border-t-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none group-hover:pointer-events-auto">
            <DdLink href="/impact-check">Impact Check</DdLink>
            <DdLink href="/ids">IDS</DdLink>
            <DdLink href="/#flow">Build Strong</DdLink>
          </div>
        </div>

        {/* Oplossingen — mega menu */}
        <div className="relative group">
          <span className={navItem}>
            Oplossingen <span className="ml-1 text-[10px] opacity-50">▾</span>
          </span>
          <div className="absolute top-full left-0 flex gap-6 bg-white rounded-b-xl p-5 shadow-xl border border-black/5 border-t-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none group-hover:pointer-events-auto min-w-[620px]">
            <div className="flex-1">
              <DdLabel>Jongeren &amp; Ontwikkeling</DdLabel>
              <DdLink href="/jongeren">Kluis7 — Basisonderwijs</DdLink>
              <DdLink href="/jongeren">Student Journey App — VO</DdLink>
              <DdLink href="/jongeren">Talentontwikkeling — MBO/HBO</DdLink>
              <DdLink href="/jongeren">Sociaal-emotionele ontwikkeling</DdLink>
            </div>
            <div className="flex-1">
              <DdLabel>Organisaties &amp; Teams</DdLabel>
              <DdLink href="/organisaties">Gemeenten &amp; Overheid</DdLink>
              <DdLink href="/organisaties">Zorg</DdLink>
              <DdLink href="/organisaties">Bedrijfsleven</DdLink>
            </div>
            <div className="flex-1">
              <DdLabel>Leiderschap &amp; Professionals</DdLabel>
              <DdLink href="/leiderschap">Leidinggevenden &amp; Bestuurders</DdLink>
              <DdLink href="/leiderschap">Teamleiders</DdLink>
              <DdLink href="/leiderschap">Coaches &amp; Adviseurs</DdLink>
              <DdLabel className="mt-2.5">Opleiden &amp; Certificeren</DdLabel>
              <DdLink href="/opleiden">Trainer worden</DdLink>
              <DdLink href="/opleiden">Certificering &amp; Accreditatie</DdLink>
              <DdLink href="/opleiden">Innovatiepartners</DdLink>
            </div>
          </div>
        </div>

        {/* Social Impact */}
        <div className="relative group">
          <span className={navItem}>
            Social Impact <span className="ml-1 text-[10px] opacity-50">▾</span>
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
            Over 7LIFE <span className="ml-1 text-[10px] opacity-50">▾</span>
          </span>
          <div className="absolute top-full left-0 min-w-[210px] bg-white rounded-b-xl p-2 pt-3 shadow-xl border border-black/5 border-t-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none group-hover:pointer-events-auto">
            <DdLink href="/wie-zijn-wij">Wie zijn wij</DdLink>
            <DdLink href="/methodiek">7LIFE Methodiek</DdLink>
            <DdLink href="/onze-mensen">Onze mensen</DdLink>
            <DdLink href="/leiderschap#academie">Academie</DdLink>
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
