import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { competencies, profile, skills, type Skill } from "@/data/resume";
import { Reveal } from "../Reveal";
import { SectionHeading, SubsectionHeading } from "../SectionHeading";

function SkillCard({ skill }: { skill: Skill }) {
  const { t } = useTranslation();
  const stack = t(`resume.skills.${skill.id}.stack`, { returnObjects: true }) as string[];
  const Icon = skill.icon;

  return (
    <article className="glass-panel h-full rounded-3xl p-6">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-5 font-display text-xl">{t(`resume.skills.${skill.id}.title`)}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {stack.map((item) => (
          <li key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/85">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function Competencies() {
  const { t } = useTranslation();

  return (
    <div className="mt-16">
      <SubsectionHeading
        title={t("sections.competencies.title")}
        subtitle={t("sections.competencies.subtitle", { years: profile.yearsOfExperience })}
      />
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {competencies.map((id) => (
          <li key={id}>
            <Reveal className="h-full">
              <div className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-card px-5 py-4">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-base font-medium text-foreground">
                    {t(`resume.competencies.${id}.title`)}
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{t(`resume.competencies.${id}.detail`)}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
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
