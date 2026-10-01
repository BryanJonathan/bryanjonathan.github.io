import { useInView } from "framer-motion";
import { Check } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { competencies, profile, skills, type Skill } from "@/data/resume";
import { useCountUp } from "@/hooks/useCountUp";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

function SkillCard({ skill }: { skill: Skill }) {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const percent = useCountUp(skill.level, inView, 1150);
  const Icon = skill.icon;

  return (
    <article className="glass-panel h-full rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-glow)]">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-5 font-display text-xl">{t(`resume.skills.${skill.id}.title`)}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{t(`resume.skills.${skill.id}.stack`)}</p>
      <div ref={ref} className="mt-6">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{percent}%</span>
        </div>
        <div
          className="h-2 overflow-hidden rounded-full bg-white/10"
          role="progressbar"
          aria-valuenow={skill.level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={t(`resume.skills.${skill.id}.title`)}
        >
          <div
            className="h-full rounded-full bg-[image:var(--gradient-primary)]"
            style={{
              width: inView ? `${skill.level}%` : "0%",
              transition: "width 1.15s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        </div>
      </div>
    </article>
  );
}

function Competencies() {
  const { t } = useTranslation();

  return (
    <div className="mt-24">
      <SectionHeading
        align="left"
        eyebrow={t("sections.competencies.eyebrow")}
        title={t("sections.competencies.title")}
        subtitle={t("sections.competencies.subtitle", { years: profile.yearsOfExperience })}
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {competencies.map((id) => (
          <Reveal key={id}>
            <article className="flex h-full items-center gap-4 rounded-2xl border border-white/10 bg-[#12141c] px-5 py-4">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-primary)] text-white">
                <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
              </span>
              <p className="text-sm leading-relaxed text-foreground/90 md:text-base">
                {t(`resume.competencies.${id}`)}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="section-anchor px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("sections.skills.eyebrow")}
          title={t("sections.skills.title")}
          subtitle={t("sections.skills.subtitle")}
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <Reveal key={skill.id} className="h-full" delay={index * 0.08}>
              <SkillCard skill={skill} />
            </Reveal>
          ))}
        </div>
        <Competencies />
      </div>
    </section>
  );
}
