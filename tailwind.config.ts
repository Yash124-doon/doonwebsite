import type { Config } from "tailwindcss";
import tokens from "./design/tokens.json";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: tokens.colors.primary,
        accent: tokens.colors.accent,
        background: tokens.colors.background,
        foreground: tokens.colors.foreground,
        muted: tokens.colors.muted,
      },
      fontFamily: {
        sans: [tokens.typography.fontFamilySans],
        heading: [tokens.typography.fontFamilyHeading],
        body: [tokens.typography.fontFamilySans],
      },
      fontSize: {
        h1: [tokens.typography.scale.h1, { lineHeight: '1.2', fontWeight: '700' }],
        'h1-sm': ['2.4rem', { lineHeight: '1.2', fontWeight: '700' }],
        h2: [tokens.typography.scale.h2, { lineHeight: '1.2', fontWeight: '700' }],
        'h2-sm': ['1.8rem', { lineHeight: '1.2', fontWeight: '700' }],
        h3: [tokens.typography.scale.h3, { lineHeight: '1.2', fontWeight: '700' }],
        'h3-sm': ['1.4rem', { lineHeight: '1.2', fontWeight: '700' }],
        h4: [tokens.typography.scale.h4, { lineHeight: '1.2', fontWeight: '700' }],
        'h4-sm': ['1rem', { lineHeight: '1.2', fontWeight: '700' }],
        h5: [tokens.typography.scale.h5, { lineHeight: '1.2', fontWeight: '700' }],
        'h5-sm': ['0.9rem', { lineHeight: '1.2', fontWeight: '700' }],
        h6: [tokens.typography.scale.h6, { lineHeight: '1.2', fontWeight: '700' }],
        'h6-sm': ['0.8rem', { lineHeight: '1.2', fontWeight: '700' }],
        body: [tokens.typography.scale.body, { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.945rem', { lineHeight: '1.6', fontWeight: '400' }],
        navbar: [tokens.typography.scale.navbar, { lineHeight: '1.6', fontWeight: '400' }],
        footer: [tokens.typography.scale.footer, { lineHeight: '1.6', fontWeight: '400' }],
        'btn-text': [tokens.typography.scale.button, { lineHeight: '1.6', fontWeight: '700' }],
        'btn-text-sm': ['0.9rem', { lineHeight: '1.6', fontWeight: '700' }],
        'hero-tagline': [tokens.typography.scale.heroTagline, { lineHeight: '1.6', fontWeight: '500' }],
      },
      borderRadius: {
        DEFAULT: tokens.radius
      }
    },
  },
  plugins: [],
};

export default config;
