import type { CSSProperties } from "react";

// Stroke-only icons mirrored 1:1 from the app's icon helper
// (mobile-design-system/themes/feast/spec/screens/icons.js): 24×24 viewBox,
// 1.7px stroke, currentColor. The inner markup is a trusted static constant.
const ICON_MARKUP = {
  plan: '<rect x="3.5" y="4.5" width="17" height="16" rx="3"/><path d="M3.5 9.5h17"/><path d="M8 3v3M16 3v3"/>',
  home: '<path d="M3.5 11.5 12 4l8.5 7.5"/><path d="M5.5 10v9.5h13V10"/>',
  book: '<path d="M5 4h9a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M5 4v13a3 3 0 0 0 3 3"/>',
  chat: '<path d="M4 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-6l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/>',
  cart: '<path d="M3 4h2.5l2.4 11.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.5L21 8H6.5"/><circle cx="9.5" cy="20" r="1.3"/><circle cx="17.5" cy="20" r="1.3"/>',
  clock: '<circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/>',
  chev_r: '<path d="m9 6 6 6-6 6"/>',
  chev_l: '<path d="m15 6-6 6 6 6"/>',
  chev_d: '<path d="m6 9 6 6 6-6"/>',
  send: '<path d="M5 12 20 5l-3 15-5-6z"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0M12 18v3"/>',
  flame: '<path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-4 2-7 1 1 2 1 3-3Z"/>',
  leaf: '<path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14ZM5 19l8-8"/>',
  timer: '<circle cx="12" cy="13" r="7"/><path d="M12 9v4M9 3h6"/>',
  heart: '<path d="M12 19s-7-4.3-7-10a4 4 0 0 1 7-2.7A4 4 0 0 1 19 9c0 5.7-7 10-7 10Z"/>',
  sliders: '<path d="M4 7h10M18 7h2M4 12h2M10 12h10M4 17h12M20 17h0"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="12" r="2"/><circle cx="18" cy="17" r="2"/>',
  arrow_up: '<path d="M12 5v14M5 12l7-7 7 7"/>',
  bell: '<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 20a2 2 0 0 0 4 0"/>',
  check: '<path d="m5 12 5 5 9-10"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  chef: '<path d="M7 11a4 4 0 1 1 4-5 4 4 0 0 1 6 5"/><path d="M7 11v6h10v-6"/><path d="M7 17h10"/>',
  info: '<circle cx="12" cy="12" r="8"/><path d="M12 10v6M12 7.5v.5"/>',
  search: '<circle cx="11" cy="11" r="6"/><path d="m20 20-4.5-4.5"/>',
  swap: '<path d="M4 8h13l-3-3M20 16H7l3 3"/>',
  bookmark: '<path d="M6 4h12v17l-6-3-6 3z"/>',
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
