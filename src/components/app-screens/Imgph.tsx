import type { CSSProperties } from "react";
import { appFont } from "./tokens";

// Food-image placeholder — the diagonal-striped block the app spec uses where a
// recipe photo would go (`.imgph`). Keeps the mockups honest: no stock photos
// pretending to be real plated dishes.
export function Imgph({
  label,
  style,
}: {
  label?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        background:
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 6px, transparent 6px 12px), linear-gradient(160deg, #2A2A32, #14141A)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16,
        color: "rgba(255, 255, 255, 0.4)",
        fontFamily: appFont.mono,
        fontSize: 10,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        ...style,
      }}
    >
      {label}
    </div>
  );
}
