import { appColors, appFont } from "./tokens";
import { Icon, type IconName } from "./Icon";

// The app's floating bottom tab bar. Ported from the spec's `.tab-bar`.
type Tab = { id: string; label: string; icon: IconName };

const TABS: Tab[] = [
  { id: "plan", label: "Plan", icon: "plan" },
  { id: "home", label: "Today", icon: "home" },
  { id: "book", label: "Recipes", icon: "book" },
];

export function TabBar({ active }: { active: string }) {
  return (
    <nav
      style={{
        position: "absolute",
        bottom: 8,
        left: 12,
        right: 12,
        height: 64,
        borderRadius: 32,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "0 8px",
        background: "rgba(22, 22, 26, 0.78)",
        backdropFilter: "blur(20px)",
        border: `1px solid ${appColors.hairline}`,
        zIndex: 30,
      }}
    >
      {TABS.map((tab) => (
        <div
          key={tab.id}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            fontFamily: appFont.sans,
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.02em",
            color: active === tab.id ? appColors.accent : appColors.text3,
          }}
        >
          <Icon name={tab.icon} size={22} />
          <span>{tab.label}</span>
        </div>
      ))}
    </nav>
  );
}
