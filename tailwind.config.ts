import type { Config } from "tailwindcss";

const color = (name: string) => `hsl(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: color("ring"),
        background: color("background"),
        foreground: color("foreground"),
        primary: {
          DEFAULT: color("primary"),
          foreground: color("primary-foreground"),
          glow: color("primary-glow"),
        },
        secondary: { DEFAULT: color("secondary"), foreground: color("secondary-foreground") },
        muted: { DEFAULT: color("muted"), foreground: color("muted-foreground") },
        accent: { DEFAULT: color("accent"), foreground: color("accent-foreground") },
        destructive: { DEFAULT: color("destructive"), foreground: color("destructive-foreground") },
        card: { DEFAULT: color("card"), foreground: color("card-foreground") },
        popover: { DEFAULT: color("popover"), foreground: color("popover-foreground") },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0) scale(1)" },
          "33%": { transform: "translate(28px, -24px) scale(1.08)" },
          "66%": { transform: "translate(-20px, 18px) scale(.94)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(12px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-glow": {
          "0%, 100%": { opacity: ".2", transform: "scale(.94)" },
          "50%": { opacity: ".85", transform: "scale(1.05)" },
        },
        "sheet-in": { "0%": { transform: "translateX(100%)" }, "100%": { transform: "translateX(0)" } },
        "sheet-out": { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(100%)" } },
        "overlay-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        "overlay-out": { "0%": { opacity: "1" }, "100%": { opacity: "0" } },
        "menu-in": {
          "0%": { opacity: "0", transform: "translateY(-6px) scale(.97)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        blob: "blob 16s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
        "float-glow": "float-glow 8s ease-in-out infinite",
        "sheet-in": "sheet-in .35s cubic-bezier(.22, 1, .36, 1)",
        "sheet-out": "sheet-out .25s ease-in",
        "overlay-in": "overlay-in .3s ease-out",
        "overlay-out": "overlay-out .25s ease-in",
        "menu-in": "menu-in .18s cubic-bezier(.22, 1, .36, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
