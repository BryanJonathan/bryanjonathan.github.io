import { Mail, MapPin, MessageCircle, type LucideIcon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { useTranslation } from "react-i18next";
import { profile } from "@/data/resume";
import { LinkedinIcon } from "../LinkedinIcon";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

type ContactCard = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;
  external?: boolean;
};

export function Contact() {
  const { t } = useTranslation();

  const cards: ContactCard[] = [
    { label: t("contact.email"), value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    {
      label: t("contact.phone"),
      value: profile.phoneDisplay,
      href: `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(t("contact.whatsappMessage"))}`,
      icon: MessageCircle,
      external: true,
    },
    { label: t("contact.linkedin"), value: profile.linkedinDisplay, href: profile.linkedin, icon: LinkedinIcon, external: true },
    { label: t("contact.location"), value: t("profile.location"), href: profile.mapsUrl, icon: MapPin, external: true },
  ];

  return (
    <section id="contact" className="section-anchor px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("sections.contact.eyebrow")}
          title={t("sections.contact.title")}
          subtitle={t("sections.contact.subtitle")}
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ label, value, href, icon: Icon, external }, index) => (
            <Reveal key={href} className="h-full" delay={index * 0.06}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="glass-panel group flex h-full flex-col items-center rounded-3xl p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-glow)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="mt-5 font-display text-lg">{label}</span>
                <span className="mt-2 break-all text-sm text-muted-foreground">{value}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
