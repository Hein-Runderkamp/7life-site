export type PartnerProgramma = {
  naam: string;
  kleur: string;
};

export const partnerProgrammas: PartnerProgramma[] = [
  { naam: "Kluis7", kleur: "#EE7E06" },
  { naam: "ExcelleerScan", kleur: "#3E8FA3" },
  { naam: "Academie voor Bestuur & Leiderschap", kleur: "#7B5EA7" },
  { naam: "Student Journey App", kleur: "#2E7D52" },
  { naam: "Geldscan", kleur: "#D7263D" },
  { naam: "MoneyValues", kleur: "#F2C12E" },
];

export type PartnerDetail = {
  slug: string;
  programma: string;
  kleur: string;
  punten: string[];
};

export const partnerDetails: PartnerDetail[] = [
  {
    slug: "alex-ten-cate",
    programma: "Academie voor Bestuur & Leiderschap",
    kleur: "#7B5EA7",
    punten: [
      "Managing partner van de Academie voor Bestuur & Leiderschap",
      "Samen met oprichter Maroesja van der Pols ontwikkelaar van de 7LIFE LeiderschapScan",
      "Ruim twintig jaar management- en bestuurservaring in bedrijfsleven (media, telecom, financiële sector) én not-for-profit (brancheorganisaties, politieke organisatie, kerkgenootschap)",
      "Executive MBA aan Nyenrode Business Universiteit — thesis over de maatschappelijke rol van organisaties in de private en publieke sector",
      "Affiliate facilitator voor Core Leadership Institute in 'Leading from Purpose'",
      "Geaccrediteerd trainer in het 7LIFE Netwerk, verantwoordelijk voor de trainersaccreditatie op de LeiderschapScan",
      "Verzorgt individuele executive coaching en trajecten voor teamontwikkeling en organisatieverandering — met aandacht voor maatschappelijke impact",
      "Verzorgt inspiratiesessies en keynotes voor trainers en publieke events",
    ],
  },
  {
    slug: "monique-aalberts",
    programma: "Kluis7",
    kleur: "#EE7E06",
    punten: [
      "Draagt de Kluis7-methodiek uit voor kinderen, scholen en gezinnen",
      "Kindercoach bij Josia",
      "Vertaalt de 7LIFE-communicatiestijlen naar de belevingswereld van kinderen",
    ],
  },
  {
    slug: "gideon-beeftink",
    programma: "ExcelleerScan",
    kleur: "#3E8FA3",
    punten: [
      "Werkt met de ExcelleerScan, speciaal ontwikkeld voor tieners",
      "Eigenaar van Huiswerkbegeleiding Haarlem",
      "Begeleidt leerlingen en ouders bij het ontdekken van unieke leer- en communicatiestijlen",
    ],
  },
  {
    slug: "tika-dobbelaar",
    programma: "Student Journey App",
    kleur: "#2E7D52",
    punten: [
      "Partner in de ontwikkeling van de Student Journey App",
      "Gericht op begeleiding van studenten in het onderwijs",
    ],
  },
  {
    slug: "hugo-bot",
    programma: "Student Journey App",
    kleur: "#2E7D52",
    punten: [
      "Adviseur bij de ontwikkeling van de Student Journey App",
      "Eigenaar van BOTH Coaching",
    ],
  },
  {
    slug: "marc-wilhelmus",
    programma: "Geldscan & MoneyValues",
    kleur: "#D7263D",
    punten: [
      "Ontwikkelaar van de 7LIFE Geldtype Scan (MoneyValues) — voor échte gesprekken over geld",
      "Business partner en trainer voor financieel adviseurs en planners",
      "Auteur van het boek 'Voor hetzelfde geld gelukkig!'",
      "Ontwikkelde het praktische trainingsprogramma 'Geld gedrag en adviseren met geldtypen'",
    ],
  },
  {
    slug: "jo-krill",
    programma: "Organisatieontwikkeling",
    kleur: "#F2C12E",
    punten: [
      "Business strategist en partner bij 7LIFE Nederland",
      "Gericht op organisatieontwikkeling en strategie",
    ],
  },
];
