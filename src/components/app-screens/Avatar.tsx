import { appFont, personas, type PersonaId } from "./tokens";

// A persona's circular avatar — its mark on the persona's signature gradient.
// Mirrors the app spec's `.avatar` element.
export function Avatar({
  persona,
  size = 28,
}: {
  persona: PersonaId;
  size?: number;
}) {
  const { mark, gradient, fg } = personas[persona];
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: gradient,
        color: fg,
        fontFamily: appFont.sans,
        fontWeight: 700,
        fontSize: Math.round(size * 0.43),
        letterSpacing: "-0.02em",
        flexShrink: 0,
      }}
    >
      {mark}
    </span>
  );
}
