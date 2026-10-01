import { useInView } from "framer-motion";
import { ArrowRight, MapPin, Mouse } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { competencies, experiences, profile, skills } from "@/data/resume";
import { useCountUp } from "@/hooks/useCountUp";
import { Avatar } from "../Avatar";
import { Reveal } from "../Reveal";

function Stat({ value, label, suffix }: { value: number; label: string; suffix?: string }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(value, inView);

  return (
    <article ref={ref} className="rounded-2xl border border-white/10 bg-[#12141c]/80 px-4 py-4">
      <p className="font-display text-3xl font-semibold text-primary">
        <span>{count}</span>
        {suffix}
      </p>
      <p className="mt-2 text-[0.68rem] font-medium uppercase leading-tight tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
    </article>
  );
}

export function Hero() {
  const { t } = useTranslation();

  const stats = [
    { value: profile.yearsOfExperience, label: t("hero.stats.years"), suffix: "+" },
    { value: experiences.length, label: t("hero.stats.experiences") },
    { value: skills.length, label: t("hero.stats.areas") },
    { value: competencies.length, label: t("hero.stats.competencies") },
  ];

  return (
    <section id="about" className="section-anchor relative flex min-h-screen items-center px-6 pb-16 pt-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal from="left">
            <p className="animate-fade-in text-sm font-medium uppercase tracking-[0.28em] text-primary">
              {t("hero.greeting")}
            </p>
          </Reveal>
          <Reveal from="left" delay={0.05}>
            <h1 className="text-gradient mt-4 animate-slide-in-left font-display text-4xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
          </Reveal>
          <Reveal from="left" delay={0.1}>
            <p className="mt-4 animate-fade-in-up text-lg text-foreground md:text-2xl">{t("hero.role")}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">{t("hero.bio")}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-auto"
              >
                {t("hero.ctaContact")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#experience"
                className="glass-panel inline-flex h-11 w-full items-center justify-center gap-2 rounded-2xl border-white/10 !bg-[#12141c] px-5 text-sm font-medium text-foreground transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-auto"
              >
                {t("hero.ctaExperience")}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <Stat key={stat.label} {...stat} />
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-6 flex items-end justify-between gap-4">
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                {t("profile.location")}
              </p>
              <a
                href="#skills"
                className="flex flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.35em] text-muted-foreground"
              >
                {t("hero.scroll")}
                <Mouse className="h-6 w-6 animate-blink" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal from="scale" delay={0.1} className="flex justify-center">
          <Avatar />
        </Reveal>
      </div>
    </section>
  );
}
