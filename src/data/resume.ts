import {
  BrainCircuit,
  Cloud,
  Code,
  Database,
  Globe,
  Languages,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

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

// Diferenciais exibidos no topo. Os textos ficam em hero.highlights.<id>.
export type Highlight = { id: string; icon: LucideIcon };

export const highlights: Highlight[] = [
  { id: "international", icon: Globe },
  { id: "english", icon: Languages },
  { id: "leadership", icon: Users },
  { id: "ai", icon: BrainCircuit },
];

export type Skill = { id: string; icon: LucideIcon };

export const skills: Skill[] = [
  { id: "frontend", icon: Code },
  { id: "backend", icon: Database },
  { id: "cloud", icon: Cloud },
  { id: "ai", icon: Sparkles },
];

export const competencies = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10"] as const;

export type Experience = {
  id: string;
  company: string;
  // "AAAA-MM"; `end: null` significa emprego atual.
  start: string;
  end: string | null;
};

// Do mais recente para o mais antigo: quem lê o currículo procura primeiro o cargo atual.
// Os bullets ficam em resume.experience.<id>.highlights; use <b>…</b> para destacar números.
export const experiences: Experience[] = [
  { id: "blings", company: "Blings", start: "2024-10", end: null },
  { id: "upLead", company: "UP Estate", start: "2024-06", end: "2024-10" },
  { id: "upEngineer", company: "UP Estate", start: "2023-01", end: "2024-06" },
  { id: "leeg", company: "Leeg", start: "2023-01", end: "2024-01" },
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
