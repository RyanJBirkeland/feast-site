/**
 * Canonical site facts, shared by metadata, the sitemap, robots, the web
 * manifest, and the generated social images. One place to change the URL,
 * name, or messaging so they never drift apart across files.
 */
export const site = {
  url: "https://feast-meals.com",
  name: "Feast",
  title: "Feast — Your AI Kitchen Companion",
  tagline: "Plan smarter. Shop easier. Cook better.",
  description:
    "AI-powered meal planning for the modern kitchen. Your team of Nutritionist, Dietitian, Chef & Coach helps you plan, shop, and cook — all in one app.",
  themeColor: "#050505",
  brandGreen: "#00D37F",
} as const;
