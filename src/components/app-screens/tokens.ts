// Feast mobile-app design tokens, mirrored from the app's design system
// (mobile-design-system/themes/feast). These are intentionally scoped to the
// in-phone app-screen mockups: inside the phone frame we render exactly like
// the real app, which uses a slightly different palette than this website's
// own brand tokens (e.g. app bg #0A0A0B / accent #3DDC97 vs the site's
// #050505 / #00D37F). Keeping them here prevents the two from drifting.

export const appColors = {
  bg: "#0A0A0B",
  bg2: "#0F0F12",
  surface: "#16161A",
  surface2: "#1B1B20",
  card: "#1E1E22",
  cardElevated: "#26262C",

  text: "#FFFFFF",
  text2: "#BFBFC7",
  text3: "#71717A",
  textOnAccent: "#022416",

  border: "rgba(255, 255, 255, 0.08)",
  borderStrong: "rgba(255, 255, 255, 0.14)",
  hairline: "rgba(255, 255, 255, 0.06)",

  accent: "#3DDC97",
  accentPressed: "#2BC585",
  accentBg: "rgba(61, 220, 151, 0.14)",
  accentBgStrong: "rgba(61, 220, 151, 0.22)",
} as const;

export const appFont = {
  sans: "'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
  mono: "var(--font-jetbrains-mono), 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
} as const;

// The four AI personas, with the avatar gradient + accent tone the app uses to
// distinguish each voice. Marks and colors come straight from the app's
// persona palette (note the nutritionist presents as the named "Sam").
export type PersonaId = "sam" | "dietitian" | "chef" | "coach";

type Persona = {
  mark: string;
  label: string;
  tone: string;
  gradient: string;
  fg: string;
};

export const personas: Record<PersonaId, Persona> = {
  sam: {
    mark: "S",
    label: "Sam · Nutritionist",
    tone: "#7C5CFF",
    gradient: "linear-gradient(135deg, #9D85FF, #6D45FF)",
    fg: "#FFFFFF",
  },
  dietitian: {
    mark: "D",
    label: "Dietitian",
    tone: "#3DDC97",
    gradient: "linear-gradient(135deg, #65EBB0, #2BC585)",
    fg: "#022416",
  },
  chef: {
    mark: "C",
    label: "Chef",
    tone: "#FF8A3D",
    gradient: "linear-gradient(135deg, #FFB37D, #FF6A1F)",
    fg: "#2A0F00",
  },
  coach: {
    mark: "K",
    label: "Coach",
    tone: "#FF5C7A",
    gradient: "linear-gradient(135deg, #FF8DA3, #FF3D5F)",
    fg: "#2A0008",
  },
};
