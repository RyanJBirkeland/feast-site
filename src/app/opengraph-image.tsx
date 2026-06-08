import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The card shown when feast-meals.com is shared on social, Slack, or iMessage.
 * Rendered on the brand's dark background with the FEAST wordmark and tagline,
 * so a shared link reads as the product rather than a bare URL.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: site.themeColor,
          backgroundImage: `radial-gradient(circle at 50% 38%, rgba(0,211,127,0.18), transparent 60%)`,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 132,
            fontWeight: 800,
            letterSpacing: 8,
            color: site.brandGreen,
          }}
        >
          FEAST
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 52,
            fontWeight: 700,
            color: "#F5F5F7",
          }}
        >
          {site.tagline}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            color: "#98989F",
          }}
        >
          AI-powered meal planning
        </div>
      </div>
    ),
    size,
  );
}
