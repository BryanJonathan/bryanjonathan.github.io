import { Cloud, Code, Database, Sparkles, type LucideIcon } from "lucide-react";

// Dados que não mudam com o idioma. Os textos ficam em src/i18n/locales/*.json.

export const profile = {
  name: "Jonathan Bryan de Castro Andrade",
  initials: "JB",
  birthYear: "1999",
  yearsOfExperience: 4,
  email: "bryan.jonathan97@gmail.com",
  whatsapp: "5531998436264",
  phoneDisplay: "(31) 9 9843-6264",
  linkedin: "https://www.linkedin.com/in/jonathan-bryan-ca/",
  linkedinDisplay: "in/jonathan-bryan-ca",
  mapsUrl: "https://maps.google.com/?q=Belo+Horizonte,+MG,+Brazil",
} as const;

export const sectionIds = ["about", "skills", "experience", "education", "contact"] as const;
export type SectionId = (typeof sectionIds)[number];

export type Skill = { id: string; icon: LucideIcon; level: number };

// `level` é a porcentagem exibida na barra de cada card de expertise.
export const skills: Skill[] = [
  { id: "frontend", icon: Code, level: 90 },
  { id: "backend", icon: Database, level: 85 },
  { id: "cloud", icon: Cloud, level: 75 },
  { id: "ai", icon: Sparkles, level: 80 },
];

export const competencies = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10"] as const;

export type Experience = {
  id: string;
  company: string;
  // "AAAA-MM"; `end: null` significa emprego atual.
  start: string;
  end: string | null;
};

// Ordem cronológica, do mais antigo para o mais recente (como no site de referência).
export const experiences: Experience[] = [
  { id: "upEngineer", company: "UP Estate", start: "2023-01", end: "2024-06" },
  { id: "leeg", company: "Leeg", start: "2023-01", end: "2024-01" },
  { id: "upLead", company: "UP Estate", start: "2024-06", end: "2024-10" },
  { id: "blings", company: "Blings", start: "2024-10", end: null },
];

export const education = {
  institution: "UNOPAR",
  completed: "2022",
} as const;

export const objective = ["p1", "p2", "p3", "p4"] as const;

// `cefr` é o nível no Quadro Europeu (A1–C2); quando existe, aparece em destaque no card.
export type SpokenLanguage = { id: string; code: string; cefr?: string };

export const spokenLanguages: SpokenLanguage[] = [
  { id: "pt", code: "PT" },
  { id: "en", code: "EN", cefr: "C1" },
  { id: "es", code: "ES" },
];

export const certifications = [
  { id: "cybersecurity", issuer: "Coursera", year: "2025" },
  { id: "laravel", issuer: "Udemy", year: "2024" },
  { id: "react", issuer: "Coursera", year: "2023" },
  { id: "nextjs", issuer: "Origamid", year: "2023" },
  { id: "dataAnalysis", issuer: "Coursera", year: "2023" },
] as const;
