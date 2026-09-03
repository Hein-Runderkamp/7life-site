export type ProgrammaStap = {
  titel: string;
  body: string;
  locatie?: string;
};

export type Training = {
  slug: string;
  naam: string;
  categorie: "Basis" | "Specialty" | "Gratis";
  kleur: string;
  samenvatting: string;
  prijs: string;
  deelnemers: string;
  programma: ProgrammaStap[];
  data: string[];
  voorwaarden: string[];
  quote: string;
  flyer: string;
  afbeelding?: string;
  afbeeldingCaption?: string;
};

export const trainingen: Training[] = [
  {
    slug: "basisaccreditatie",
    naam: "Basisaccreditatie",
    categorie: "Basis",
    kleur: "#EE7E06",
    samenvatting:
      "Leer werken met het 7LIFE model, de scan en de zeven communicatiestijlen. Na afronding ontvang je je licentie voor een jaar.",
    prijs: "€1.495 ex btw",
    deelnemers: "6–10 deelnemers",
    programma: [
      {
        titel: "Intake",
        body: "Op basis van je eigen 7LIFE Scan, je motivatie en een persoonlijk gesprek met de docent. Online.",
      },
      {
        titel: "Online module",
        body: "Zelfstandig doorlopen: kennismaken met 7LIFE en de basisbegrippen, eerste oefeningen aan de hand van Communicatiekracht.",
      },
      {
        titel: "Drie dagen op locatie",
        body: "Dag 1 — het 7LIFE Model en de 7LIFE Scan. Dag 2 — ontwikkeling en groei, herkennen en werken met alarmgedrag. Dag 3 — veranderkracht en leerstijlen.",
        locatie: "Green Offices, Goede Reede 1, Harderwijk",
      },
      {
        titel: "Online dagdeel",
        body: "Dag 4 — samenwerken en het begeleiden van teams. 09.00–12.00 uur.",
      },
      {
        titel: "Licentie",
        body: "Je licentie wordt toegestuurd en ondertekend. Je bent 7LIFE trainer, voor een jaar.",
      },
    ],
    data: [
      "Ronde najaar 2026 — Intake t/m 29 okt · Dag 1: 10 nov · Dag 2: 11 nov · Dag 3: 24 nov · Online: 2 dec",
      "Ronde voorjaar 2027 — Intake t/m 19 feb · Dag 1: 9 mrt · Dag 2: 10 mrt · Dag 3: 23 mrt · Online: 7 apr",
    ],
    voorwaarden: [
      "Minimaal 5 jaar ervaring als coach, mentor of trainer",
      "Expertise in sociale vaardigheden en begeleiding",
      "Minimaal hbo werk- en denkniveau",
      "Actief binnen een zakelijke context",
    ],
    quote:
      "Waarom zou je jezelf vergelijken met anderen? Niemand in de hele wereld kan beter jou zijn dan jijzelf.",
    flyer: "/downloads/7LIFE_Flyer_Basisaccreditatie.pdf",
  },
  {
    slug: "leiderschapmodel",
    naam: "LeiderschapModel",
    categorie: "Specialty",
    kleur: "#0284C7",
    samenvatting:
      "Leer werken met het 7LIFE LeiderschapModel: jouw eigen LeiderschapScan, de dilemma's van leiderschap in de praktijk, en hoe je dat vertaalt naar je trainingspraktijk.",
    prijs: "€995 ex btw",
    deelnemers: "6–10 deelnemers",
    programma: [
      {
        titel: "Intake",
        body: "Op basis van je eigen 7LIFE Scan, je motivatie en een persoonlijk gesprek met de docent. Online.",
      },
      {
        titel: "Online module",
        body: "Zelfstandig doorlopen: verdieping in het 7LIFE LeiderschapModel.",
      },
      {
        titel: "Dag 1",
        body: "Leiderschapsverdieping en kennismaking met het LeiderschapModel.",
        locatie: "Green Offices, Goede Reede 1, Harderwijk",
      },
      {
        titel: "Dag 2",
        body: "Je eigen LeiderschapScan en werken met de dilemma's in de praktijk.",
        locatie: "Green Offices, Goede Reede 1, Harderwijk",
      },
      {
        titel: "Afsluiting",
        body: "Uitreiken van je licentie en bespreken van je eigen praktijk. Met persoonlijke intervisie: minimaal één online gesprek met de docent.",
      },
    ],
    data: ["27 & 28 januari 2027", "19 & 20 februari 2027", "12 & 13 mei 2027"],
    voorwaarden: [
      "Licentie 7LIFE — afgeronde basisaccreditatie",
      "Minimaal hbo werk- en denkniveau",
      "5+ jaar ervaring als coach, mentor of trainer",
      "5+ jaar ervaring in een leidinggevende positie",
      "Expertise in leiderschap en/of management development",
    ],
    quote: "Een goede leider laat anderen groter worden, niet zichzelf.",
    flyer: "/downloads/7LIFE_Flyer_Specialty_LeiderschapModel.pdf",
    afbeelding: "/opleiden/trainingen/leiderschapsmodel.jpg",
    afbeeldingCaption: "Het 7LIFE LeiderschapModel",
  },
  {
    slug: "talentscan-training",
    naam: "TalentScan",
    categorie: "Specialty",
    kleur: "#1B3B6F",
    samenvatting:
      "In één dag leer je werken met de 7LIFE TalentScan en de module TalentOntwikkeling — en hoe je dat direct inzet in jouw eigen praktijk.",
    prijs: "€495 ex btw",
    deelnemers: "6–12 deelnemers",
    programma: [
      {
        titel: "Intake",
        body: "Op basis van je eigen 7LIFE Scan, je motivatie en een persoonlijk gesprek met de docent. Online.",
      },
      {
        titel: "Introductie",
        body: "TalentOntwikkeling binnen zakelijke en persoonlijke context.",
      },
      {
        titel: "De TalentScan",
        body: "Gebruik en toepassen van de 7LIFE TalentScan.",
        locatie: "Green Offices, Goede Reede 1, Harderwijk",
      },
      {
        titel: "De module",
        body: "Werken met de module TalentOntwikkeling — en je eigen praktijk als trainer of coach.",
        locatie: "Green Offices, Goede Reede 1, Harderwijk",
      },
      {
        titel: "Afsluiting",
        body: "Uitreiken van je licentie en bespreken van je eigen praktijk. Met persoonlijke intervisie: minimaal één online gesprek met de docent.",
      },
    ],
    data: ["22 januari 2027", "21 april 2027"],
    voorwaarden: [
      "Licentie 7LIFE — afgeronde basisaccreditatie",
      "Minimaal hbo werk- en denkniveau",
      "5+ jaar ervaring als coach, mentor of trainer, en/of 5+ jaar met leiderschap, HRM of begeleiden naar werk",
      "Interesse in competenties en talentontwikkeling",
    ],
    quote: "Talent dat niet gezien wordt, verdwijnt. Talent dat gezien wordt, groeit.",
    flyer: "/downloads/7LIFE_Flyer_Specialty_TalentScan.pdf",
  },
  {
    slug: "social-impact-dashboard-training",
    naam: "Social Impact Dashboard",
    categorie: "Specialty",
    kleur: "#059644",
    samenvatting:
      "Ontdek wat Social Impact betekent voor organisaties, en leer werken met de 5 Social Impact Dimensies — van meten tot daadwerkelijk in beweging komen.",
    prijs: "€995 ex btw",
    deelnemers: "6–10 deelnemers",
    programma: [
      {
        titel: "Intake",
        body: "Op basis van je eigen 7LIFE Scan, je motivatie en een persoonlijk gesprek met de docent. Online.",
      },
      {
        titel: "Dag 1",
        body: "Wat is Social Impact? Kennismaken met het Social Impact Dashboard.",
        locatie: "Green Offices, Goede Reede 1, Harderwijk",
      },
      {
        titel: "Dag 2",
        body: "Werken met de 5 Social Impact Dimensies in de praktijk: tools, training, consultancy en coaching.",
        locatie: "Green Offices, Goede Reede 1, Harderwijk",
      },
      {
        titel: "Afsluiting",
        body: "Uitreiken van je licentie en bespreken van je eigen praktijk. Met persoonlijke intervisie: minimaal één online gesprek met de docent.",
      },
    ],
    data: ["12 & 13 januari 2027", "10 & 11 mei 2027"],
    voorwaarden: [
      "Licentie 7LIFE — afgeronde basisaccreditatie",
      "Minimaal hbo werk- en denkniveau",
      "5+ jaar ervaring als coach, mentor of trainer, en/of 5+ jaar met consultancy, verandertrajecten of dashboarding",
      "Affiniteit met Social Impact-thema's",
    ],
    quote: "Impact begint waar je durft te kijken naar wat écht telt.",
    flyer: "/downloads/7LIFE_Flyer_Specialty_SocialImpactDashboard.pdf",
    afbeelding: "/opleiden/trainingen/social-impact-dashboard.jpg",
    afbeeldingCaption: "Social Impact Dashboard",
  },
  {
    slug: "communicatie-360-scan",
    naam: "Communicatie 360 Scan",
    categorie: "Gratis",
    kleur: "#FACC15",
    samenvatting:
      "Eén dag, volledig gericht op feedback: hoe geef je het, hoe ontvang je het, en hoe zet je de 360Scan in om dat bespreekbaar te maken.",
    prijs: "Kosteloos voor geaccrediteerde 7LIFE trainers",
    deelnemers: "6–12 deelnemers · 09.00–17.00 uur",
    programma: [
      {
        titel: "Programma",
        body: "Tijdens deze training van één dag maak je kennis met de 360Scan van 7LIFE — en leer je er concreet mee werken. De scan is speciaal ontworpen om te trainen op het onderwerp feedback. Met onze trainer kijk je ook naar het werken met teams. Levert op: een verruiming van je licentie voor de 360Scans in het portaal.",
      },
    ],
    data: ["17 november 2026", "18 januari 2027", "15 april 2027"],
    voorwaarden: [
      "Volledige licentie 7LIFE",
      "Afgeronde basisaccreditatie",
      "Minimaal hbo werk- en denkniveau",
      "Tijdig aanmelden — zie agenda",
    ],
    quote: "Je grootste groei zit vaak in wat een ander over je durft te zeggen.",
    flyer: "/downloads/7LIFE_Flyer_Gratis_Communicatie_360Scan.pdf",
    afbeelding: "/opleiden/trainingen/360-feedback.jpg",
    afbeeldingCaption: "Werken met feedback en de 360Scan",
  },
  {
    slug: "communiceren-met-kinderen",
    naam: "Communiceren met Kinderen — Kluis7",
    categorie: "Gratis",
    kleur: "#DC2626",
    samenvatting:
      "Een dag lang duiken in de wereld van communicatiekracht voor kinderen, met het Kluis7-programma voor onderwijs, coaching en opvoeding.",
    prijs: "Kosteloos voor geaccrediteerde 7LIFE trainers",
    deelnemers: "6–12 deelnemers · 09.00–17.00 uur",
    programma: [
      {
        titel: "Programma",
        body: "Een dag lang duiken in de wereld van communicatiekracht voor kinderen. Met het Kluis7-programma kijk je naar de mogelijkheden voor onderwijs, coaching en het ondersteunen van opvoeding en ouderschap. Hoe maak je een brug naar de kinderen om je heen? Hoe werken de 7LIFE-stijlen voor deze doelgroep?",
      },
    ],
    data: ["12 februari 2027", "15 maart 2027", "13 april 2027"],
    voorwaarden: [
      "Volledige licentie 7LIFE",
      "Afgeronde basisaccreditatie",
      "Minimaal hbo werk- en denkniveau",
      "Tijdig aanmelden — zie agenda",
    ],
    quote: "Kinderen luisteren niet naar wat je zegt. Ze voelen wat je bedoelt.",
    flyer: "/downloads/7LIFE_Flyer_Gratis_CommunicatieMetKinderen_Kluis7.pdf",
    afbeelding: "/opleiden/trainingen/kluis7-memory.jpg",
    afbeeldingCaption: "Werken met het Kluis7-kwartet",
  },
  {
    slug: "gratis-7life-toolkit",
    naam: "Gratis 7LIFE Toolkit",
    categorie: "Gratis",
    kleur: "#7B5EA7",
    samenvatting:
      "Nieuwe spellen, kaarten, apps en leeromgevingen — in een dagdeel neem je alles door en ga je meteen aan de slag met hoe je het inzet in jouw eigen praktijk.",
    prijs: "Kosteloos voor geaccrediteerde 7LIFE trainers",
    deelnemers: "6–12 deelnemers · 13.00–17.00 uur",
    programma: [
      {
        titel: "Programma",
        body: "Ieder jaar worden nieuwe instrumenten en toepassingen ontwikkeld om de toolkit van onze 7LIFE trainers te verrijken. Maak kennis met de belangrijkste spellen, kaarten en toepassingen voor coaching en training — en onze nieuwe apps en online leeromgevingen. We laten niet alleen zien wat er is, maar helpen je het ook toe te passen in je eigen praktijk.",
      },
    ],
    data: ["25 november 2026", "22 december 2026", "12 april 2027"],
    voorwaarden: [
      "Volledige licentie 7LIFE",
      "Afgeronde basisaccreditatie",
      "Minimaal hbo werk- en denkniveau",
      "Tijdig aanmelden — zie agenda",
    ],
    quote:
      "Waarom zou je jezelf vergelijken met anderen? Niemand in de hele wereld kan beter jou zijn dan jijzelf.",
    flyer: "/downloads/7LIFE_Flyer_Gratis_7LIFE_Toolkit.pdf",
    afbeelding: "/opleiden/trainingen/toolkit.jpg",
    afbeeldingCaption: "Nieuwe instrumenten in de 7LIFE Toolkit",
  },
];

export type AgendaItem = {
  datum: string;
  omschrijving: string;
  training: string;
  locatie: string;
};

export const agenda: AgendaItem[] = [
  { datum: "29 oktober 2026", omschrijving: "Basisaccreditatie — uiterste intake, najaarsronde", training: "Basisaccreditatie", locatie: "Green Offices, Harderwijk" },
  { datum: "10 november 2026", omschrijving: "Basisaccreditatie — dag 1", training: "Basisaccreditatie", locatie: "Green Offices, Harderwijk" },
  { datum: "11 november 2026", omschrijving: "Basisaccreditatie — dag 2", training: "Basisaccreditatie", locatie: "Green Offices, Harderwijk" },
  { datum: "17 november 2026", omschrijving: "Communicatie & 360Scan — 1 dag", training: "Communicatie & 360Scan", locatie: "Green Offices, Harderwijk" },
  { datum: "24 november 2026", omschrijving: "Basisaccreditatie — dag 3", training: "Basisaccreditatie", locatie: "Green Offices, Harderwijk" },
  { datum: "25 november 2026", omschrijving: "7LIFE Toolkit — dagdeel", training: "7LIFE Toolkit", locatie: "Green Offices, Harderwijk" },
  { datum: "2 december 2026", omschrijving: "Basisaccreditatie — online dagdeel", training: "Basisaccreditatie", locatie: "Online" },
  { datum: "22 december 2026", omschrijving: "7LIFE Toolkit — dagdeel", training: "7LIFE Toolkit", locatie: "Green Offices, Harderwijk" },
  { datum: "12 januari 2027", omschrijving: "Social Impact Dashboard — dag 1", training: "Social Impact Dashboard", locatie: "Green Offices, Harderwijk" },
  { datum: "13 januari 2027", omschrijving: "Social Impact Dashboard — dag 2", training: "Social Impact Dashboard", locatie: "Green Offices, Harderwijk" },
  { datum: "18 januari 2027", omschrijving: "Communicatie & 360Scan — 1 dag", training: "Communicatie & 360Scan", locatie: "Green Offices, Harderwijk" },
  { datum: "22 januari 2027", omschrijving: "TalentScan — 1 dag", training: "TalentScan", locatie: "Green Offices, Harderwijk" },
  { datum: "27 januari 2027", omschrijving: "LeiderschapModel — dag 1", training: "LeiderschapModel", locatie: "Green Offices, Harderwijk" },
  { datum: "28 januari 2027", omschrijving: "LeiderschapModel — dag 2", training: "LeiderschapModel", locatie: "Green Offices, Harderwijk" },
  { datum: "12 februari 2027", omschrijving: "Communicatie met kinderen — Kluis7, 1 dag", training: "Communicatie met kinderen", locatie: "Green Offices, Harderwijk" },
  { datum: "19 februari 2027", omschrijving: "Basisaccreditatie — uiterste intake, voorjaarsronde", training: "Basisaccreditatie", locatie: "Green Offices, Harderwijk" },
  { datum: "19 februari 2027", omschrijving: "LeiderschapModel — dag 1", training: "LeiderschapModel", locatie: "Green Offices, Harderwijk" },
  { datum: "20 februari 2027", omschrijving: "LeiderschapModel — dag 2", training: "LeiderschapModel", locatie: "Green Offices, Harderwijk" },
  { datum: "9 maart 2027", omschrijving: "Basisaccreditatie — dag 1", training: "Basisaccreditatie", locatie: "Green Offices, Harderwijk" },
  { datum: "10 maart 2027", omschrijving: "Basisaccreditatie — dag 2", training: "Basisaccreditatie", locatie: "Green Offices, Harderwijk" },
  { datum: "15 maart 2027", omschrijving: "Communicatie met kinderen — Kluis7, 1 dag", training: "Communicatie met kinderen", locatie: "Green Offices, Harderwijk" },
  { datum: "23 maart 2027", omschrijving: "Basisaccreditatie — dag 3", training: "Basisaccreditatie", locatie: "Green Offices, Harderwijk" },
  { datum: "7 april 2027", omschrijving: "Basisaccreditatie — online dagdeel", training: "Basisaccreditatie", locatie: "Online" },
  { datum: "12 april 2027", omschrijving: "7LIFE Toolkit — dagdeel", training: "7LIFE Toolkit", locatie: "Green Offices, Harderwijk" },
  { datum: "13 april 2027", omschrijving: "Communicatie met kinderen — Kluis7, 1 dag", training: "Communicatie met kinderen", locatie: "Green Offices, Harderwijk" },
  { datum: "15 april 2027", omschrijving: "Communicatie & 360Scan — 1 dag", training: "Communicatie & 360Scan", locatie: "Green Offices, Harderwijk" },
  { datum: "21 april 2027", omschrijving: "TalentScan — 1 dag", training: "TalentScan", locatie: "Green Offices, Harderwijk" },
  { datum: "10 mei 2027", omschrijving: "Social Impact Dashboard — dag 1", training: "Social Impact Dashboard", locatie: "Green Offices, Harderwijk" },
  { datum: "11 mei 2027", omschrijving: "Social Impact Dashboard — dag 2", training: "Social Impact Dashboard", locatie: "Green Offices, Harderwijk" },
  { datum: "12 mei 2027", omschrijving: "LeiderschapModel — dag 1", training: "LeiderschapModel", locatie: "Green Offices, Harderwijk" },
  { datum: "13 mei 2027", omschrijving: "LeiderschapModel — dag 2", training: "LeiderschapModel", locatie: "Green Offices, Harderwijk" },
];
