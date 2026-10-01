import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Check, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { currentLanguage, languages } from "@/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { t, i18n } = useTranslation();
  const active = currentLanguage();

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger
        className={cn(
          "glass-panel items-center gap-2 rounded-full px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring",
          className,
        )}
        aria-label={t("language.label")}
      >
        <Languages className="h-4 w-4" aria-hidden="true" />
        {t(`language.${active}`)}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="glass-panel z-50 min-w-[10rem] rounded-2xl p-1 shadow-[var(--shadow-elegant)] data-[state=open]:animate-menu-in"
        >
          {languages.map((lng) => (
            <DropdownMenu.Item
              key={lng}
              onSelect={() => void i18n.changeLanguage(lng)}
              className="flex cursor-pointer items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm text-foreground outline-none transition-colors data-[highlighted]:bg-white/10"
            >
              {t(`language.${lng}`)}
              {lng === active && <Check className="h-4 w-4 text-primary" aria-hidden="true" />}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
