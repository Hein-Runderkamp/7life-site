export type PartnerProgramma = {
  naam: string;
  kleur: string;
  link?: string;
};

export const partnerProgrammas: PartnerProgramma[] = [
  { naam: "Kluis7", kleur: "#EE7E06", link: "/jongeren#kluis7" },
  { naam: "ExcelleerScan", kleur: "#3E8FA3", link: "/jongeren#excelleerscan" },
  { naam: "Academie voor Bestuur & Leiderschap", kleur: "#7B5EA7", link: "/academie" },
  { naam: "Student Journey App", kleur: "#2E7D52", link: "/jongeren#student-journey-app" },
  { naam: "Geldscan", kleur: "#D7263D", link: "/build-strong-individueel#geldscan" },
  { naam: "MoneyValues", kleur: "#F2C12E", link: "/onze-mensen/marc-wilhelmus" },
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
      "Ruim twintig jaar management- en bestuurservaring, in zowel bedrijfsleven als not-for-profit organisaties",
      "Executive MBA aan Nyenrode Business Universiteit",
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
      "Begeleidt scholen en gezinnen bij het herkennen van talent op jonge leeftijd",
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
      "Onderwijs, coaching en begeleiding van leerlingen, ouders en stellen",
    ],
  },
  {
    slug: "tika-dobbelaar",
    programma: "Student Journey App",
    kleur: "#2E7D52",
    punten: [
      "Partner in de ontwikkeling van de Student Journey App",
      "Gericht op begeleiding van studenten in het onderwijs",
      "Vertaalt zelfkennis naar concrete studie- en loopbaankeuzes",
      "Nauwe samenwerking met scholen in het voortgezet en beroepsonderwijs",
    ],
  },
  {
    slug: "hugo-bot",
    programma: "Student Journey App",
    kleur: "#2E7D52",
    punten: [
      "Adviseur bij de ontwikkeling van de Student Journey App",
      "Eigenaar van BOTH Coaching",
      "Brengt jarenlange coachingservaring in bij de doorontwikkeling van de app",
      "Klankbord voor de aansluiting op de praktijk van studiebegeleiding",
    ],
  },
  {
    slug: "marc-wilhelmus",
    programma: "Geldscan & MoneyValues",
    kleur: "#D7263D",
    punten: [
      "Ontwikkelaar van de training in de 7LIFE Geldtype Scan (MoneyValues) — voor échte gesprekken over geld",
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
      "Adviseert over de koers en groei van het 7LIFE-netwerk",
      "Verbindt commerciële en inhoudelijke ontwikkeling",
    ],
  },
];
