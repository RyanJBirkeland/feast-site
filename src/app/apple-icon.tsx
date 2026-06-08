import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * The home-screen icon iOS uses when someone saves the site to their phone.
 * A PNG "F" mark on the brand background — the SVG favicon alone isn't honored
 * by iOS for apple-touch-icon.
 */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: site.themeColor,
          color: site.brandGreen,
          fontSize: 120,
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        F
      </div>
    ),
    size,
  );
}
