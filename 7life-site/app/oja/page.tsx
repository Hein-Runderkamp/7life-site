import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heroBadges = [
  { label: "★ EU Richtlijn 2023/970", gold: true },
  { label: "ISO 27001 gecertificeerde infrastructuur" },
  { label: "GDPR-compliant · Data in EU" },
  { label: "SOC 2 Type II" },
];

const uitdagingen = [
  {
    kleur: "#EE7E06",
    titel: "Objectieve functiearchitectuur",
    tekst: "Geen willekeurige functietitels meer, maar een gestructureerd huis met normfuncties, archetypes en grades gebaseerd op de FuWa-methode.",
  },
  {
    kleur: "#EE7E06",
    titel: "EU-conforme loonkloof analyse",
    tekst: "Within-group vergelijking per functie+niveau, bandpositie analyse en OJA normsalaris methode. Klaar voor rapportage aan toezichthouders.",
  },
  {
    kleur: "#EE7E06",
    titel: "Beveiligd & privacyveilig",
    tekst: "ISO 27001-gecertificeerde infrastructuur, GDPR-compliant dataopslag in de EU, 2FA voor alle gebruikers en strikte data-isolatie per klant.",
  },
];

const modules = [
  {
    titel: "📋 Normfuncties bibliotheek",
    tekst: "936+ normfuncties in 20 families, van HR en IT tot zorg (GGZ), accountancy en juridisch. Elk met rolprofiel, competenties, knowledge, experience en FuWa-scores op drie lagen (L1, L2, L3).",
    tags: ["936+ functies", "20 families", "6 archetypes", "G1–G10 grades"],
  },
  {
    titel: "🗂️ Functiepaspoort",
    tekst: "Volledig functieprofiel in 8 tabbladen: overzicht, rolprofiel, competenties, knowledge, experience, skills, FuWa & beloning en mobiliteitsanalyse. Met PDF-export en cascade-kalibratie per organisatieniveau.",
    tags: ["8 tabs", "PDF export", "Cascade-kalibratie"],
  },
  {
    titel: "📐 FuWa Functiewaardering",
    tekst: "Drie-laags waarderingsmodel: L1 (8 factoren, 100%), L2 Context & Performance (4 factoren) en L3 Impact & Development (5 factoren). Objectief, reproduceerbaar en auditeerbaar.",
    tags: ["L1 + L2 + L3", "8 factoren", "Auditeerbaar"],
  },
  {
    titel: "📊 Pay Equity Dashboard",
    tekst: "EU-conforme loonkloof analyse met drie methoden: ongecorrigeerd, within-group (EU vereist) en OJA normsalaris (diepste analyse). Inclusief bandpositie analyse en 5% drempelcheck per categorie.",
    tags: ["EU 2023/970", "Art. 9 & 10", "3 methoden"],
  },
  {
    titel: "🔗 Functiemapping",
    tekst: "Koppel bestaande functietitels van de klant aan normfuncties met AI-suggesties (Anthropic Claude). Cascade-model: mapping op organisatie-, divisie- of entiteitsniveau.",
    tags: ["AI-suggesties", "Cascade", "CSV import"],
  },
  {
    titel: "👥 Medewerkersbeheer",
    tekst: "CSV-import van medewerkerdata per entiteit met upsert en soft-delete logica. Bruto uurloon als basis voor zuivere loonanalyse, ongeacht contractvorm of werktijden.",
    tags: ["CSV import", "Upsert logica", "Per entiteit"],
  },
  {
    titel: "🏗️ Salarisformule & Indexen",
    tekst: "Configureerbare salarisformule met sector-, subsector- en regioindexen. Cascade-model van entiteit naar master. Historisch overzicht met ingangsdatums en bevestigingsflow.",
    tags: ["Sector-index", "Regio-index", "Historisch"],
  },
  {
    titel: "🔄 Mobiliteitsanalyse",
    tekst: "Automatische berekening van mobiliteitspaden tussen functies op basis van rolprofiel-overlap, competentiegaps en niveau-proximity. Max 8 aanbevolen paden per functie.",
    tags: ["Gap-analyse", "Rolprofiel-overlap", "Max 8 paden"],
  },
];

const rollen = [
  {
    titel: "Enterprise",
    label: "7LIFE Nederland BV",
    tekst: "Volledige toegang tot alle klanten, master normfuncties, kalibratie, indices en systeeminstellingen. Beheer van alle gebruikers.",
    gradient: "linear-gradient(135deg, #FF8C2A, #EE7E06)",
  },
  {
    titel: "Partner",
    label: "Administratiekantoor / Adviseur",
    tekst: "Toegang tot meerdere klantorganisaties. Kan kalibreren, functiemappingen beheren en rapportages inzien voor de eigen klantportfolio.",
    gradient: "linear-gradient(135deg, #2A3F6F, #1a2e4a)",
  },
  {
    titel: "Klant",
    label: "HR-manager / Controller",
    tekst: "Toegang tot de eigen organisatie, divisie of entiteit. Kalibreren, salarisparameters beheren, medewerkers importeren en rapportages inzien.",
    gradient: "linear-gradient(135deg, #059669, #047857)",
  },
];

const euArtikelen = [
  {
    nr: "Artikel 9",
    titel: "Rapportageverplichting",
    tekst: "Ongecorrigeerde loonkloof, mediaan, deeltijdverschillen. Minimumgroep 5 medewerkers voor privacybescherming.",
  },
  {
    nr: "Artikel 10",
    titel: "5% drempelcheck",
    tekst: "Per functie+niveau gecorrigeerde loonkloof. Bij >5%: joint pay assessment verplicht.",
  },
  {
    nr: "OJA Methode",
    titel: "Diepste analyse",
    tekst: "Afwijking van objectief normsalaris (FuWa L1+L2) — het puur onverklaarde deel van de loonkloof.",
  },
];

const security = [
  {
    icon: "🏛️",
    titel: "ISO/IEC 27001:2022 gecertificeerd",
    tekst: "De database-infrastructuur (Supabase) is gecertificeerd conform de internationale standaard voor informatiebeveiliging. Dekt het volledige platform inclusief Database, Auth en Storage.",
  },
  {
    icon: "🔐",
    titel: "SOC 2 Type II — alle leveranciers",
    tekst: "Supabase, Vercel en GitHub zijn allen SOC 2 Type II gecertificeerd. Dit garandeert onafhankelijk geauditeerde beveiliging, beschikbaarheid en vertrouwelijkheid.",
  },
  {
    icon: "🇪🇺",
    titel: "GDPR-compliant dataopslag",
    tekst: "Alle klantdata en medewerkergegevens worden opgeslagen in de EU (Ireland, eu-west-1). Data verlaat nooit de EEA. Supabase DPA beschikbaar voor verwerkersovereenkomsten.",
  },
  {
    icon: "🔑",
    titel: "Verplichte 2FA voor alle gebruikers",
    tekst: "TOTP-authenticatie (Google Authenticator / Authy) verplicht voor alle rollen. Wachtwoordbeleid: minimaal 12 tekens met complexiteitsvereisten. Sessies verlopen na 30 minuten inactiviteit.",
  },
  {
    icon: "🧱",
    titel: "Row Level Security — volledige data-isolatie",
    tekst: "PostgreSQL RLS ingeschakeld op alle tabellen. Klant A kan fysiek nooit data van Klant B inzien — ook niet via de browser console of directe API-calls.",
  },
  {
    icon: "📋",
    titel: "Audit logging",
    tekst: "Alle gebruikersacties worden gelogd in de audit_log tabel: wie deed wat, wanneer. Volledig traceerbaar voor compliance-doeleinden en interne audits.",
  },
  {
    icon: "🔒",
    titel: "Versleuteld transport",
    tekst: "Alle verbindingen verlopen via HTTPS met TLS 1.3. Automatische SSL-certificaten via Vercel. Geen onversleuteld verkeer mogelijk.",
  },
  {
    icon: "💾",
    titel: "Automatische dagelijkse backups",
    tekst: "Supabase Pro plan met dagelijkse automatische backups. Point-in-time recovery beschikbaar. Geen risico op dataverlies bij incidenten.",
  },
];

const specTabel = [
  { component: "Database & Backend", leverancier: "Supabase (PostgreSQL)", regio: "🇮🇪 eu-west-1 Ireland (EEA)", certs: ["ISO 27001:2022", "SOC 2 Type II"] },
  { component: "Frontend & CDN", leverancier: "Vercel", regio: "🌍 Wereldwijd CDN", certs: ["SOC 2 Type II"] },
  { component: "Versiebeheer", leverancier: "GitHub", regio: "🇺🇸 Privé repository", certs: ["SOC 2 Type II", "ISO 27001"] },
  { component: "AI functiebeschrijvingen", leverancier: "Anthropic Claude", regio: "Server-side only", certs: ["API only", "Geen klantdata"] },
  { component: "E-mail (auth)", leverancier: "Gmail SMTP", regio: "Google Cloud EU", certs: ["ISO 27001", "SOC 2"] },
  { component: "Authenticatie", leverancier: "Supabase Auth + TOTP", regio: "eu-west-1 Ireland", certs: ["2FA verplicht", "RLS isolatie"] },
];

const voorWie = [
  {
    icon: "🏥",
    titel: "Zorg- en GGZ-instellingen",
    tekst: "Volledig uitgewerkte normfunctiebibliotheek voor GGZ (244 functies) en bredere zorgsector. Inclusief BIG-registraties, NIP, BPSW en specifieke F7-weging voor psychische belasting.",
    tags: ["244 GGZ functies", "BIG / NIP / BPSW"],
  },
  {
    icon: "🏢",
    titel: "Zakelijke dienstverlening",
    tekst: "Normfuncties voor accountancy, audit, fiscaal en juridisch (240 functies). Inclusief gespecialiseerde subfamilies voor belastingrecht, arbeidsrecht, notariaat en compliance.",
    tags: ["FF19 Accountancy", "FF20 Fiscaal & Juridisch"],
  },
  {
    icon: "⚙️",
    titel: "Corporate & Industrie",
    tekst: "HR, IT, Finance, Operations en Facilitair. De corporate functiefamilies vormen de basis van het OJA systeem met sector- en regio-indexen voor nauwkeurige marktvergelijking.",
    tags: ["FF1–FF8", "Sector-indexen"],
  },
  {
    icon: "🔧",
    titel: "HR Advies- en Administratiekantoren",
    tekst: "Via de Partner-rol kunnen adviseurs voor meerdere klanten tegelijk werken. AI-gestuurde functiemapping versnelt onboarding van nieuwe klanten aanzienlijk.",
    tags: ["Multi-klant", "AI mapping"],
  },
];

const screenshots = [
  { src: "/oja/login.png", url: "oja-platform.vercel.app/login", titel: "🔐 Beveiligde inlogpagina", tekst: "Split-screen loginpagina met OJA branding. 2FA verplicht voor alle gebruikers. GDPR-compliant infrastructuur in de EU." },
  { src: "/oja/rapportages.png", url: "oja-platform.vercel.app/rapportages", titel: "📊 Rapportages & Analyses overzicht", tekst: "Alle beschikbare rapportages op één plek: Pay Equity Dashboard, Compliance Rapport, Beloningsanalyse, Joint Pay Assessment en meer." },
  { src: "/oja/loonkloof.png", url: "oja-platform.vercel.app/rapportages/loonkloof", titel: "⚖️ Pay Equity Dashboard — drie methoden naast elkaar", tekst: "Ongecorrigeerde loonkloof (17.6%), EU-conforme gecorrigeerde kloof (2.7%) en OJA normsalaris gecorrigeerde kloof (4.6%) — allemaal in één overzicht. Inclusief OJA modus toggle en realtime filters op organisatie, divisie en niveau.", full: true },
  { src: "/oja/detailanalyse.png", url: "oja-platform.vercel.app/rapportages/loonkloof → Detailanalyse", titel: "🔍 Detailanalyse per functiecategorie", tekst: "Within-group loonkloof per functie+niveau combinatie. Gemiddelde én mediaan — beide verplichte indicatoren onder EU art. 9. Directe statusaanduiding (OK / Hoog) per categorie." },
  { src: "/oja/compliance.png", url: "oja-platform.vercel.app/rapportages/compliance", titel: "📋 Loonkloof Compliance Rapport", tekst: "Formeel rapportagedocument conform EU Richtlijn 2023/970. Inclusief organisatiegegevens, actie-vereiste beoordeling en EU-stempel. Exporteerbaar als PDF voor MT en toezichthouder." },
  { src: "/oja/fuwa-beloning.png", url: "oja-platform.vercel.app/normfuncties/[code]/paspoort → FuWa & Beloning", titel: "📐 Drie-laags FuWa Functiewaardering", tekst: "L1 Fair Work (8 factoren, bandbreedte), L2 Context & Performance (positie in band) en L3 Impact & Development (groeikracht) — alle drie zichtbaar in het functiepaspoort. Objectief, transparant en auditeerbaar.", full: true },
];

const usp = [
  { titel: "🎯 Drie-laags FuWa methode", tekst: "L1 (8 factoren) + L2 (Context & Performance) + L3 (Impact & Development) — een methode die verder gaat dan standaard functiewaardering en ook niet-financiële waarde meeneemt." },
  { titel: "🤖 AI-ondersteund", tekst: "Automatische functiebeschrijvingen en gedragsindicatoren via Anthropic Claude — gebaseerd op de ESCO-database van de EU als open source Europese kennisbasis. Functiemapping kan zowel per individuele functie als in bulk worden uitgevoerd, met AI-suggesties die de match-kwaliteit bewaken." },
  { titel: "📐 OJA Normsalaris methode", tekst: "De diepste loonkloof analyse — vergelijkt werkelijk salaris met objectief normsalaris op basis van FuWa L1+L2. Het puur onverklaarde deel, vrij van alle objectieve functiefactoren." },
  { titel: "🔄 Cascade architectuur", tekst: "Drie-laags organisatiemodel (organisatie → divisie → entiteit) met delta-overrides op elk niveau. Ideaal voor concerns, koepelorganisaties en gefedereerde structuren." },
  { titel: "🌐 Gebouwd op internationale normen", tekst: "OJA is niet alleen EU Richtlijn 2023/970-conform, maar sluit ook aan op de Sustainable Development Goals van de VN (SDG 8 en SDG 10) en de ESG-richtlijnen van de EU." },
  { titel: "🌍 EU-first platform", tekst: "Gebouwd met EU Richtlijn 2023/970 als vertrekpunt, niet als afterthought. Alle data in de EU, alle rapportages EU-conform, klaar voor de deadline van juni 2026." },
];

export default function OjaPagina() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative bg-donker px-[5%] pt-[140px] pb-16 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 75% 30%, rgba(238,126,6,0.12) 0%, transparent 50%), radial-gradient(circle at 15% 70%, rgba(62,143,163,0.1) 0%, transparent 50%)",
            }}
          />
          <div className="max-w-[1100px] mx-auto relative z-10">
            <div className="flex justify-center mb-8">
              <Image
                src="/logos/oja-tool.svg"
                alt="OJA — Open Job Architecture"
                width={280}
                height={119}
                className="w-[240px] sm:w-[280px] h-auto"
              />
            </div>
            <div className="text-center max-w-[720px] mx-auto">
              <div className="text-[11px] font-semibold tracking-[2px] text-oranje/80 uppercase mb-3">
                Productpresentatie
              </div>
              <h1 className="font-serif text-[clamp(30px,4.5vw,46px)] font-light text-white leading-[1.2] mb-5">
                Het transparante functiehuis voor eerlijk,
                inclusief en duurzaam werk
              </h1>
              <p className="text-white/60 text-[15px] leading-[1.75] mb-8">
                OJA is een SaaS-platform dat organisaties helpt bij
                functiearchitectuur, objectieve functiewaardering en pay
                equity analyses — volledig conform EU Richtlijn 2023/970.
              </p>
              <div className="flex gap-2 flex-wrap justify-center">
                {heroBadges.map((b) => (
                  <span
                    key={b.label}
                    className={
                      b.gold
                        ? "text-[13px] px-4 py-2 rounded-full border bg-[#F2C12E]/20 border-[#F2C12E]/40 text-[#F2C12E]"
                        : "text-[13px] px-4 py-2 rounded-full border bg-white/10 border-white/20 text-white"
                    }
                  >
                    {b.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HET PROBLEEM */}
        <section className="px-[5%] py-[72px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Het probleem
            </div>
            <h2 className="font-serif text-[28px] font-light leading-[1.2] mb-3">
              Loontransparantie is geen keuze meer — het is wet
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[640px] mb-8">
              Per 7 juni 2026 zijn organisaties met 100+ medewerkers
              verplicht te rapporteren over de loonkloof. Maar eerlijk
              belonen begint bij een objectief fundament: een helder
              functiehuis met een transparante waarderingsmethodiek.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {uitdagingen.map((u) => (
                <div
                  key={u.titel}
                  className="bg-kaart border border-black/[0.07] rounded-2xl p-6"
                  style={{ borderTop: "3px solid " + u.kleur }}
                >
                  <h3 className="text-[15px] font-semibold mb-2">{u.titel}</h3>
                  <p className="text-[13.5px] text-subtekst leading-[1.6]">
                    {u.tekst}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MODULES */}
        <section className="px-[5%] py-[72px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Functionaliteiten
            </div>
            <h2 className="font-serif text-[28px] font-light leading-[1.2] mb-3">
              Alles wat u nodig heeft voor eerlijk beloningsbeleid
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[640px] mb-8">
              OJA biedt een volledig geïntegreerd platform van
              functiearchitectuur tot pay equity rapportage.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
              {modules.map((m) => (
                <div key={m.titel} className="border-l-4 border-oranje pl-5">
                  <h3 className="text-[16px] font-semibold mb-1.5">
                    {m.titel}
                  </h3>
                  <p className="text-[14px] text-subtekst leading-[1.65] mb-3">
                    {m.tekst}
                  </p>
                  <div className="flex gap-1.5 flex-wrap">
                    {m.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-black/[0.04] text-subtekst text-[11px] font-semibold px-2.5 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STANDALONE OF ALS ONDERDEEL VAN HET 7LIFE SYSTEEM (behouden uit vorige versie) */}
        <section className="bg-donker px-[5%] py-16">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje/85 uppercase mb-2.5">
              Flexibel inzetbaar
            </div>
            <h2 className="font-serif text-2xl font-medium text-white leading-[1.2] mb-3">
              Standalone of als onderdeel van het 7LIFE systeem
            </h2>
            <p className="text-white/50 text-[15px] max-w-[500px] leading-[1.6] mb-7">
              OJA werkt als zelfstandig HR-platform — en als de
              HR-ruggengraat van het Social Impact Dashboard.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="rounded-2xl p-6 bg-blauw/[0.08] border border-blauw/25">
                <h3 className="text-base font-medium mb-2.5 text-[#93c5fd]">
                  OJA Standalone
                </h3>
                <p className="text-[13px] text-white/60 leading-[1.6] mb-3.5">
                  Het complete HR-platform voor iedere organisatie die grip
                  wil op functies, rollen en beloning — direct inzetbaar,
                  geen andere 7LIFE-modules nodig.
                </p>
                <ul className="flex flex-col gap-1">
                  {[
                    "Functiehuis & functieprofielen",
                    "FuWa-berekening & grades",
                    "Salarisstructuur & Pay Gap",
                    "EU PTD compliance rapport",
                    "Mobiliteit & loopbaanpaden",
                  ].map((li) => (
                    <li
                      key={li}
                      className="text-[13px] text-white/55 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[11px]"
                    >
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl p-6 bg-paars/[0.08] border border-paars/30">
                <h3 className="text-base font-medium mb-2.5 text-[#c4b5fd]">
                  OJA + Social Impact Dashboard
                </h3>
                <p className="text-[13px] text-white/60 leading-[1.6] mb-3.5">
                  Koppel OJA aan het Dashboard en de IDS-data — dan ontstaat
                  een compleet beeld: niet alleen wie je mensen zijn, maar
                  ook hoe ze bewegen, groeien en bijdragen.
                </p>
                <ul className="flex flex-col gap-1">
                  {[
                    "Alles van standalone, plus:",
                    "Koppeling aan IDS-analyse",
                    "Live KPI's in het Dashboard",
                    "PING (Beoordelen & Belonen)",
                    "Organisatiebrede impact-rapportage",
                  ].map((li) => (
                    <li
                      key={li}
                      className="text-[13px] text-white/55 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[11px]"
                    >
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* GEBRUIKERSROLLEN */}
        <section className="px-[5%] py-[72px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Toegangsmodel
            </div>
            <h2 className="font-serif text-[28px] font-light leading-[1.2] mb-3">
              Drie gebruikersniveaus, één platform
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[640px] mb-8">
              OJA werkt met een gelaagd toegangsmodel — van
              platformbeheerder tot eindgebruiker bij de klant.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {rollen.map((r) => (
                <div
                  key={r.titel}
                  className="rounded-2xl p-7 text-center text-white"
                  style={{ background: r.gradient }}
                >
                  <h3 className="text-xl font-bold mb-1.5">{r.titel}</h3>
                  <div className="text-xs opacity-75 tracking-wide uppercase mb-4">
                    {r.label}
                  </div>
                  <p className="text-[13px] opacity-90 leading-[1.65]">
                    {r.tekst}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EU COMPLIANCE */}
        <section className="px-[5%] py-[72px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Wetgeving &amp; Compliance
            </div>
            <h2 className="font-serif text-[28px] font-light leading-[1.2] mb-3">
              Volledig conform EU Richtlijn 2023/970
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[640px] mb-8">
              De EU Richtlijn Loontransparantie stelt strenge eisen aan
              rapportage en analyse. OJA is van de grond af aan gebouwd om
              aan deze vereisten te voldoen.
            </p>
            <div
              className="rounded-[20px] p-8 sm:p-10 text-white"
              style={{
                background:
                  "linear-gradient(135deg, #1e3a5f 0%, #2A3F6F 100%)",
              }}
            >
              <h3 className="font-serif text-xl font-medium mb-2">
                EU Richtlijn 2023/970 — Loontransparantie
              </h3>
              <p className="text-white/70 text-sm leading-[1.7] mb-6">
                Deadline implementatie: 7 juni 2026. OJA ondersteunt alle
                verplichte indicatoren en rapportages.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {euArtikelen.map((a) => (
                  <div
                    key={a.nr}
                    className="bg-white/[0.08] border border-white/[0.15] rounded-xl p-5"
                  >
                    <div className="text-[11px] font-bold tracking-wide uppercase mb-1.5 text-[#F2C12E]">
                      {a.nr}
                    </div>
                    <h4 className="text-sm font-semibold mb-1.5">{a.titel}</h4>
                    <p className="text-xs text-white/60 leading-[1.5]">
                      {a.tekst}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BEVEILIGING */}
        <section className="bg-donker px-[5%] py-16">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] uppercase mb-2.5 text-[#F2C12E]">
              Veiligheid &amp; Governance
            </div>
            <h2 className="font-serif text-2xl font-medium text-white leading-[1.2] mb-3">
              Enterprise-grade beveiliging
            </h2>
            <p className="text-white/50 text-[15px] max-w-[560px] leading-[1.6] mb-8">
              OJA verwerkt gevoelige HR- en salarisdata. Beveiliging is
              daarom geen bijzaak maar de kern van het platform.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {security.map((s) => (
                <div
                  key={s.titel}
                  className="bg-white/[0.05] border border-white/10 rounded-xl p-5"
                >
                  <div className="text-2xl mb-2.5">{s.icon}</div>
                  <h4 className="text-[15px] font-semibold text-white mb-1.5">
                    {s.titel}
                  </h4>
                  <p className="text-[13px] text-white/60 leading-[1.65]">
                    {s.tekst}
                  </p>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left border-collapse min-w-[560px]">
                <thead>
                  <tr className="bg-[#1a2e4a]">
                    <th className="text-white text-[11px] tracking-wide uppercase px-5 py-3.5 font-medium">
                      Component
                    </th>
                    <th className="text-white text-[11px] tracking-wide uppercase px-5 py-3.5 font-medium">
                      Leverancier
                    </th>
                    <th className="text-white text-[11px] tracking-wide uppercase px-5 py-3.5 font-medium">
                      Regio / Hosting
                    </th>
                    <th className="text-white text-[11px] tracking-wide uppercase px-5 py-3.5 font-medium">
                      Certificeringen
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {specTabel.map((row, i) => (
                    <tr
                      key={row.component}
                      className={i % 2 === 1 ? "bg-white/[0.04]" : ""}
                    >
                      <td className="px-5 py-3.5 text-sm text-white/90 font-medium border-t border-white/10">
                        {row.component}
                      </td>
                      <td className="px-5 py-3.5 text-sm text-white/80 border-t border-white/10">
                        {row.leverancier}
                      </td>
                      <td className="px-5 py-3.5 text-sm text-white/80 border-t border-white/10">
                        {row.regio}
                      </td>
                      <td className="px-5 py-3.5 border-t border-white/10">
                        <div className="flex gap-1.5 flex-wrap">
                          {row.certs.map((c) => (
                            <span
                              key={c}
                              className="text-[11px] font-semibold bg-[#0f766e]/20 text-[#4ade80] border border-[#0f766e]/40 rounded-full px-2.5 py-0.5"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* VOOR WIE */}
        <section className="px-[5%] py-[72px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Doelgroepen
            </div>
            <h2 className="font-serif text-[28px] font-light leading-[1.2] mb-3">
              Voor wie is OJA gebouwd?
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[640px] mb-8">
              OJA ondersteunt organisaties in diverse sectoren die werken
              aan eerlijk, transparant en duurzaam beloningsbeleid.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {voorWie.map((v) => (
                <div
                  key={v.titel}
                  className="bg-kaart border border-black/[0.07] rounded-2xl p-6"
                  style={{ borderTop: "3px solid #3E8FA3" }}
                >
                  <div className="text-2xl mb-3">{v.icon}</div>
                  <h3 className="text-[15px] font-semibold mb-2">
                    {v.titel}
                  </h3>
                  <p className="text-[13.5px] text-subtekst leading-[1.6] mb-3">
                    {v.tekst}
                  </p>
                  <div className="flex gap-1.5 flex-wrap">
                    {v.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-black/[0.04] text-subtekst text-[11px] font-semibold px-2.5 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div
              className="bg-kaart border border-black/[0.07] rounded-2xl p-6"
              style={{ borderTop: "3px solid #3E8FA3" }}
            >
              <div className="text-2xl mb-3">🗺️</div>
              <h3 className="text-[15px] font-semibold mb-2">
                Heel Europa — organisaties met vestigingen in meerdere
                landen
              </h3>
              <p className="text-[13.5px] text-subtekst leading-[1.6] mb-3">
                De combinatie van de FuWa-methode met sector-, subsector- én
                regio-indexen per land maakt OJA uniek geschikt voor
                internationale organisaties. Elke vestiging krijgt een
                salarisnorm die rekening houdt met het lokale loonpeil —
                terwijl de onderliggende functiearchitectuur en
                waarderingsmethode overal gelijk blijft.
              </p>
              <div className="flex gap-1.5 flex-wrap">
                {[
                  "Regio-index per land",
                  "Sector-index",
                  "Subsector-index",
                  "Één methode, heel Europa",
                  "EU-vestigingen",
                ].map((t) => (
                  <span
                    key={t}
                    className="bg-black/[0.04] text-subtekst text-[11px] font-semibold px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SCREENSHOTS */}
        <section className="px-[5%] py-[72px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Het platform in beeld
            </div>
            <h2 className="font-serif text-[28px] font-light leading-[1.2] mb-3">
              OJA — zo ziet het er uit
            </h2>
            <p className="text-[15px] text-subtekst leading-[1.7] max-w-[640px] mb-8">
              Zes schermafbeeldingen van het live OJA platform — van
              beveiligde inlog tot diepgaande loonkloof analyse.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {screenshots.map((s) => (
                <div key={s.src} className={s.full ? "md:col-span-2" : ""}>
                  <div className="rounded-xl overflow-hidden border-2 border-black/[0.08]">
                    <div className="bg-donker px-4 py-2.5 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                      <span className="bg-white/10 rounded text-[11px] text-white/60 px-3 py-1 ml-2 flex-1 truncate">
                        {s.url}
                      </span>
                    </div>
                    <div className="relative w-full aspect-[16/10]">
                      <Image
                        src={s.src}
                        alt={s.titel}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="text-[15px] font-semibold mb-1">
                      {s.titel}
                    </div>
                    <div className="text-[13px] text-subtekst leading-[1.6]">
                      {s.tekst}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WAAROM OJA UNIEK IS */}
        <section className="px-[5%] py-[72px] bg-achtergrond">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[11px] font-semibold tracking-[2px] text-oranje uppercase mb-2.5">
              Onderscheidend vermogen
            </div>
            <h2 className="font-serif text-[28px] font-light leading-[1.2] mb-8">
              Waarom OJA uniek is
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {usp.map((u) => (
                <div
                  key={u.titel}
                  className="bg-kaart border border-black/[0.07] rounded-2xl p-6"
                  style={{ borderTop: "3px solid #F2C12E" }}
                >
                  <h3 className="text-[15px] font-semibold mb-2">
                    {u.titel}
                  </h3>
                  <p className="text-[13.5px] text-subtekst leading-[1.6]">
                    {u.tekst}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / FOOTER-INTRO */}
        <section className="bg-donker px-[5%] py-16 text-center" id="cta">
          <h2 className="font-serif text-[32px] font-medium text-white leading-[1.2] mb-3">
            Klaar om te starten?
          </h2>
          <p className="text-white/50 text-[15px] max-w-[440px] mx-auto mb-7 leading-[1.6]">
            Neem contact op voor een vrijblijvende demo of pilotovereenkomst.
          </p>
          <div className="flex gap-2.5 justify-center flex-wrap">
            <a
              href="mailto:hein@7life.nl"
              className="bg-oranje text-white px-6 py-[11px] rounded-full text-sm font-medium hover:bg-[#d4710a] transition-colors"
            >
              ✉ hein@7life.nl
            </a>
            <a
              href="https://www.7life.nl"
              className="bg-transparent text-white border-[1.5px] border-white/25 px-6 py-[11px] rounded-full text-sm font-medium hover:border-white/50 transition-colors"
            >
              🌐 www.7life.nl
            </a>
          </div>
          <p className="text-white/30 text-xs mt-6 leading-[1.6]">
            © 2026 7LIFE Nederland BV · OJA Platform · Alle rechten
            voorbehouden
            <br />
            Infrastructuur: Supabase (ISO 27001, SOC 2) · Vercel (SOC 2) ·
            GitHub (SOC 2, ISO 27001) · Data in EU (Ireland)
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
