import { appFont } from "./tokens";

// iOS status bar — clock left, signal/wifi/battery right. Ported from the app
// spec's statusBar helper. Color is the spec's warm off-white for dark mode.
const STATUS_BAR_TEXT = "#F2EBDE";

export function StatusBar() {
  return (
    <div
      style={{
        height: 48,
        padding: "16px 28px 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        fontFamily: appFont.sans,
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: "-0.01em",
        color: STATUS_BAR_TEXT,
        flexShrink: 0,
      }}
    >
      <span>9:41</span>
      <span style={{ display: "flex", gap: 5, alignItems: "center" }}>
        <svg viewBox="0 0 18 12" width="18" height="11" fill="currentColor">
          <rect x="0" y="6" width="3" height="6" rx="1" />
          <rect x="4" y="4" width="3" height="8" rx="1" />
          <rect x="8" y="2" width="3" height="10" rx="1" />
          <rect x="12" y="0" width="3" height="12" rx="1" />
        </svg>
        <svg viewBox="0 0 16 12" width="15" height="11" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M1 4.5C3 2.5 13 2.5 15 4.5M3 7C5 5 11 5 13 7M5.5 9.5c1.5-1 4-1 5.5 0" />
          <circle cx="8" cy="11" r="0.8" fill="currentColor" />
        </svg>
        <svg viewBox="0 0 26 12" width="26" height="11" fill="none">
          <rect x="0.5" y="0.5" width="22" height="11" rx="2.5" stroke="currentColor" />
          <rect x="2.5" y="2.5" width="14" height="7" rx="1" fill="currentColor" />
          <rect x="23.5" y="4" width="1.5" height="4" rx="0.5" fill="currentColor" />
        </svg>
      </span>
    </div>
  );
}
