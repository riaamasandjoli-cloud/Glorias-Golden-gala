/* GENERATED FROM tokens.json -- DO NOT EDIT. Run scripts/build-tokens.mjs. */
// Portable design tokens (colors as hex). Web consumes the theme via
// src/index.css; mobile (Expo) and any other platform import this object so the
// whole product shares one source of truth.
export const tokens = {
  "color": {
    "light": {
      "background": "#F7F0DF",
      "foreground": "#2B080B",
      "border": "#D4AF37",
      "card": "#FFF9EE",
      "cardForeground": "#2B080B",
      "popover": "#FFF9EE",
      "popoverForeground": "#2B080B",
      "primary": "#D4AF37",
      "primaryForeground": "#2B080B",
      "secondary": "#2B080B",
      "secondaryForeground": "#F7F0DF",
      "muted": "#E9DDC8",
      "mutedForeground": "#6E5650",
      "accent": "#F2DC8A",
      "accentForeground": "#2B080B",
      "destructive": "#9E1824",
      "destructiveForeground": "#FFF9EE",
      "input": "#C8B58E",
      "ring": "#D4AF37",
      "chart1": "#D4AF37",
      "chart2": "#2B080B",
      "chart3": "#9E1824",
      "chart4": "#876D1C",
      "chart5": "#B8A486",
      "sidebar": "#2B080B",
      "sidebarForeground": "#F7F0DF",
      "sidebarBorder": "#5B1B24",
      "sidebarPrimary": "#D4AF37",
      "sidebarPrimaryForeground": "#2B080B",
      "sidebarAccent": "#4A1017",
      "sidebarAccentForeground": "#F7F0DF",
      "sidebarRing": "#F2DC8A"
    },
    "dark": {
      "background": "#2B080B",
      "foreground": "#F7F0DF",
      "border": "#876D1C",
      "card": "#430D13",
      "cardForeground": "#F7F0DF",
      "popover": "#3A0B10",
      "popoverForeground": "#F7F0DF",
      "primary": "#D4AF37",
      "primaryForeground": "#2B080B",
      "secondary": "#5A0A12",
      "secondaryForeground": "#F7F0DF",
      "muted": "#4A1017",
      "mutedForeground": "#CBBDA8",
      "accent": "#F2DC8A",
      "accentForeground": "#2B080B",
      "destructive": "#A71D2A",
      "destructiveForeground": "#FFF9EE",
      "input": "#6B3A2A",
      "ring": "#F2DC8A",
      "chart1": "#D4AF37",
      "chart2": "#F2DC8A",
      "chart3": "#9E1824",
      "chart4": "#B8A486",
      "chart5": "#876D1C",
      "sidebar": "#180406",
      "sidebarForeground": "#F7F0DF",
      "sidebarBorder": "#4A1017",
      "sidebarPrimary": "#D4AF37",
      "sidebarPrimaryForeground": "#2B080B",
      "sidebarAccent": "#4A1017",
      "sidebarAccentForeground": "#F7F0DF",
      "sidebarRing": "#F2DC8A"
    }
  },
  "fontFamily": {
    "sans": [
      "DM Sans",
      "sans-serif"
    ],
    "serif": [
      "Cinzel",
      "Georgia",
      "serif"
    ],
    "mono": [
      "DM Sans",
      "sans-serif"
    ]
  },
  "radius": "0.125rem",
  "spacing": "0.25rem"
} as const;

export type Tokens = typeof tokens;
export default tokens;
