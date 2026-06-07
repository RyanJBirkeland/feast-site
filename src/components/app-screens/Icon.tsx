import type { CSSProperties } from "react";

// Stroke-only icons mirrored 1:1 from the app's icon helper
// (mobile-design-system/themes/feast/spec/screens/icons.js): 24×24 viewBox,
// 1.7px stroke, currentColor. The inner markup is a trusted static constant.
// More icons get added here as later screens need them.
const ICON_MARKUP = {
  chev_d: '<path d="m6 9 6 6 6-6"/>',
  chev_r: '<path d="m9 6 6 6-6 6"/>',
  info: '<circle cx="12" cy="12" r="8"/><path d="M12 10v6M12 7.5v.5"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0M12 18v3"/>',
  arrow_up: '<path d="M12 5v14M5 12l7-7 7 7"/>',
} as const;

export type IconName = keyof typeof ICON_MARKUP;

export function Icon({
  name,
  size = 18,
  stroke = 1.7,
  style,
}: {
  name: IconName;
  size?: number;
  stroke?: number;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      style={style}
      dangerouslySetInnerHTML={{ __html: ICON_MARKUP[name] }}
    />
  );
}
