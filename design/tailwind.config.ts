import type { Config } from "tailwindcss";
import tokens from "./tokens.json";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: tokens.colors.primary,
        accent: tokens.colors.accent,
        background: tokens.colors.background,
        foreground: tokens.colors.foreground,
        muted: tokens.colors.muted
      },
      fontFamily: {
        sans: [tokens.typography.fontFamilySans],
      },
      borderRadius: {
        DEFAULT: tokens.radius
      }
    }
  },
  plugins: []
};

export default config;
