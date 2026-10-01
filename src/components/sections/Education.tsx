import { Award, Calendar, GraduationCap, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { certifications, education, objective, profile } from "@/data/resume";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { Languages } from "./Languages";

function Certifications() {
  const { t } = useTranslation();

  return (
    <div className="mt-16">
      <Reveal className="mb-6">
        <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">
          {t("sections.certifications.title")}
        </h3>
        <span className="mt-3 block h-0.5 w-12 rounded-full bg-[image:var(--gradient-primary)]" />
        <p className="mt-3 text-sm text-muted-foreground md:text-base">{t("sections.certifications.subtitle")}</p>
      </Reveal>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {certifications.map((cert, index) => (
          <Reveal key={cert.id} className="h-full" delay={index * 0.06}>
            <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#12141c] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                <Award className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="mt-4 font-display text-lg leading-tight text-foreground">
                {t(`resume.certifications.${cert.id}`)}
              </p>
              <div className="mt-auto flex items-center justify-between pt-4 text-sm">
                <span className="text-muted-foreground">{cert.issuer}</span>
                <span className="font-semibold text-primary">{cert.year}</span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function Education() {
  const { t } = useTranslation();

  return (
    <section id="education" className="section-anchor px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          align="left"
          title={t("sections.education.title")}
          subtitle={t("sections.education.subtitle")}
        />

        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <Reveal>
              <article className="rounded-3xl border border-white/10 bg-[#12141c] p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] text-white">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-5 inline-flex rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent">
                  {t("resume.education.type")}
                </p>
                <h3 className="mt-4 font-display text-2xl leading-tight text-foreground">
                  {t("resume.education.course")}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{education.institution}</p>
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                  <span className="text-muted-foreground">{t("sections.education.completed")}</span>
                  <span className="font-semibold text-primary">{education.completed}</span>
                </div>
              </article>
            </Reveal>

            <Reveal>
              <article className="space-y-4 rounded-3xl border border-white/10 bg-[#12141c] p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {t("sections.education.birth")}
                    </p>
                    <p className="text-sm font-semibold text-foreground">{profile.birthYear}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {t("sections.education.location")}
                    </p>
                    <p className="text-sm font-semibold text-foreground">{t("profile.location")}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>

          <div className="space-y-5">
            {objective.map((id) => (
              <Reveal key={id}>
                <p className="border-l-2 border-primary/80 pl-4 text-sm leading-relaxed text-foreground/85 md:text-base">
                  {t(`resume.objective.${id}`)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Languages />
        <Certifications />
      </div>
    </section>
  );
}
