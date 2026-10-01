import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { sectionIds, type SectionId } from "@/data/resume";
import { currentLanguage, languages } from "@/i18n";
import { cn } from "@/lib/utils";

export function MobileMenu({ active }: { active: SectionId }) {
  const { t, i18n } = useTranslation();
  const language = currentLanguage();

  return (
    <Dialog.Root>
      <Dialog.Trigger
        className="glass-panel inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
        aria-label={t("nav.open")}
      >
        <Menu className="h-4 w-4" aria-hidden="true" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=closed]:animate-overlay-out data-[state=open]:animate-overlay-in" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-xs flex-col gap-8 border-l border-white/10 bg-[#0c0d14]/95 p-6 backdrop-blur-xl data-[state=closed]:animate-sheet-out data-[state=open]:animate-sheet-in"
        >
          <div className="flex items-center justify-between">
            <Dialog.Title className="font-display text-sm uppercase tracking-[0.28em] text-muted-foreground">
              {t("nav.menu")}
            </Dialog.Title>
            <Dialog.Close
              className="glass-panel grid h-10 w-10 place-items-center rounded-full text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={t("nav.close")}
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </Dialog.Close>
          </div>

          <nav className="flex flex-col gap-1" aria-label={t("nav.menu")}>
            {sectionIds.map((id) => (
              <Dialog.Close asChild key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "location" : undefined}
                  className={cn(
                    "rounded-2xl px-4 py-3 font-display text-lg transition-colors",
                    active === id ? "bg-white/10 text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {t(`nav.${id}`)}
                </a>
              </Dialog.Close>
            ))}
          </nav>

          <div className="mt-auto">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {t("language.label")}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lng) => (
                <button
                  key={lng}
                  type="button"
                  onClick={() => void i18n.changeLanguage(lng)}
                  aria-pressed={lng === language}
                  className={cn(
                    "rounded-full border px-3 py-2 text-sm transition-colors",
                    lng === language
                      ? "border-primary/50 bg-primary/15 text-foreground"
                      : "border-white/10 text-muted-foreground hover:text-foreground",
                  )}
                >
                  {t(`language.${lng}`)}
                </button>
              ))}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
