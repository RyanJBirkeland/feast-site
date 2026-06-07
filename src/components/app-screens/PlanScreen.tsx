import { appColors, appFont } from "./tokens";
import { Icon } from "./Icon";
import { Imgph } from "./Imgph";
import { StatusBar } from "./StatusBar";
import { TabBar } from "./TabBar";

// The Plan screen — the week laid out as a day-by-day meal calendar. Ported from
// the app spec's week view (mobile-design-system/themes/feast/spec/screens/team.js).

const MONO_LABEL = {
  fontFamily: appFont.mono,
  fontSize: 10,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
} as const;

type PlannedDay = {
  day: string;
  meal: string;
  meta: string;
  today?: boolean;
};

const WEEK: PlannedDay[] = [
  { day: "Mon May 12", meal: "Tuscan white bean stew", meta: "25 min · dinner" },
  { day: "Tue May 13", meal: "Lemon herb chicken", meta: "35 min · dinner", today: true },
  { day: "Wed May 14", meal: "Miso salmon bowl", meta: "30 min · dinner" },
  { day: "Thu May 15", meal: "Sheet-pan harissa veg", meta: "40 min · dinner" },
  { day: "Fri May 16", meal: "Red lentil dahl", meta: "30 min · dinner" },
];

export function PlanScreen() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: appColors.bg,
        color: appColors.text,
        fontFamily: appFont.sans,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <StatusBar />
      <div style={{ flex: 1, overflow: "hidden", padding: "4px 20px 0" }}>
        <PlanHeader />
        {WEEK.map((planned) => (
          <DayCard key={planned.day} planned={planned} />
        ))}
      </div>
      <TabBar active="plan" />
    </div>
  );
}

function PlanHeader() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "4px 0 22px" }}>
      <div>
        <div style={{ ...MONO_LABEL, color: appColors.text3 }}>May 12–18</div>
        <h1 style={{ fontWeight: 800, fontSize: 28, letterSpacing: "-0.025em", lineHeight: 1, margin: "6px 0 0" }}>
          This week
        </h1>
      </div>
      <span style={{ color: appColors.text }}>
        <Icon name="sliders" size={20} />
      </span>
    </div>
  );
}

function DayCard({ planned }: { planned: PlannedDay }) {
  const dayColor = planned.today ? appColors.accent : appColors.text3;
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ ...MONO_LABEL, fontSize: 10, letterSpacing: "0.14em", color: dayColor, marginBottom: 8 }}>
        {planned.day}
        {planned.today ? " · today" : ""}
      </div>
      <div
        style={{
          background: appColors.card,
          border: `1px solid ${appColors.hairline}`,
          borderRadius: 18,
          padding: 14,
          display: "flex",
          gap: 12,
          alignItems: "center",
        }}
      >
        <Imgph label="M" style={{ width: 64, height: 64, flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em" }}>{planned.meal}</div>
          <div style={{ ...MONO_LABEL, fontSize: 9, letterSpacing: "0.1em", color: appColors.text3, marginTop: 3 }}>
            {planned.meta}
          </div>
        </div>
        <span style={{ color: appColors.text3 }}>
          <Icon name="chev_r" size={18} />
        </span>
      </div>
    </div>
  );
}
