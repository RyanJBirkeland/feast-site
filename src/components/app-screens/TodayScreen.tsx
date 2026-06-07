import { appColors, appFont, personas } from "./tokens";
import { Avatar } from "./Avatar";
import { Icon } from "./Icon";
import { Imgph } from "./Imgph";
import { StatusBar } from "./StatusBar";
import { TabBar } from "./TabBar";

// The Today / home screen — a daily brief from the nutritionist, tonight's
// suggested meal, and a glance at the week. Faithful port of the app's proposed
// home screen (mobile-design-system/themes/feast/spec/screens/home.js).

const MONO_LABEL = {
  fontFamily: appFont.mono,
  fontSize: 10,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: appColors.text3,
} as const;

export function TodayScreen() {
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
        <DateStrip />
        <TodayBrief />
        <ReplyRow />
        <TonightsPlate />
        <WeekStats />
      </div>
      <TabBar active="home" />
    </div>
  );
}

function DateStrip() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "4px 0 24px" }}>
      <span style={{ ...MONO_LABEL }}>Wed · May 13</span>
      <span style={{ color: appColors.text2 }}>
        <Icon name="bell" size={20} />
      </span>
    </div>
  );
}

function TodayBrief() {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 16 }}>
        <Avatar persona="sam" />
        <div>
          <div style={{ fontSize: 13, fontWeight: 600 }}>Sam</div>
          <div style={{ ...MONO_LABEL, fontSize: 10, letterSpacing: "0.1em" }}>
            Your Nutritionist · 8:02 am
          </div>
        </div>
      </div>
      <p style={{ fontWeight: 600, fontSize: 24, lineHeight: 1.22, letterSpacing: "-0.022em", margin: "0 0 4px" }}>
        Morning, Ryan. You&apos;re four meals in this week — feeling good on
        protein, light on greens.
      </p>
      <p style={{ fontWeight: 500, fontSize: 18, lineHeight: 1.3, letterSpacing: "-0.015em", color: personas.sam.tone, margin: 0 }}>
        Want me to swap Friday&apos;s pasta for something with more leaf?
      </p>
    </div>
  );
}

const REPLY_CHIPS = ["Yes, swap it", "Keep it", "Show options", "Not now"];

function ReplyRow() {
  return (
    <>
      <div style={{ display: "flex", gap: 8, overflow: "hidden", marginBottom: 10 }}>
        {REPLY_CHIPS.map((chip, index) => (
          <span key={chip} style={chipStyle(index === 0)}>
            {chip}
          </span>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          gap: 8,
          alignItems: "center",
          padding: "8px 8px 8px 16px",
          background: "rgba(255, 255, 255, 0.04)",
          borderRadius: 24,
          border: `1px solid ${appColors.hairline}`,
          marginBottom: 26,
        }}
      >
        <span style={{ flex: 1, fontSize: 15, color: appColors.text3 }}>Tell Sam anything…</span>
        <span style={sendButtonStyle(personas.sam.tone)}>
          <Icon name="arrow_up" size={16} />
        </span>
      </div>
    </>
  );
}

function chipStyle(active: boolean) {
  return {
    height: 36,
    padding: "0 14px",
    borderRadius: 999,
    fontSize: 14,
    fontWeight: active ? 600 : 500,
    whiteSpace: "nowrap" as const,
    display: "inline-flex",
    alignItems: "center",
    background: active ? personas.sam.tone : "transparent",
    color: active ? "#FFFFFF" : appColors.text,
    border: active ? "0" : `1px solid ${appColors.hairline}`,
  };
}

function sendButtonStyle(background: string) {
  return {
    width: 32,
    height: 32,
    borderRadius: "50%",
    background,
    color: "#FFFFFF",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  };
}

function TonightsPlate() {
  return (
    <>
      <div style={{ ...MONO_LABEL, marginBottom: 10 }}>Tonight&apos;s plate</div>
      <div
        style={{
          borderRadius: 24,
          overflow: "hidden",
          background: appColors.card,
          border: `1px solid ${appColors.hairline}`,
          marginBottom: 24,
        }}
      >
        <Imgph label="Lemon chicken · 35 min" style={{ height: 150, borderRadius: 0 }} />
        <div style={{ padding: "16px 16px 18px" }}>
          <h2 style={{ fontWeight: 700, fontSize: 22, lineHeight: 1.12, letterSpacing: "-0.02em", margin: "0 0 6px" }}>
            Lemon herb chicken, roasted veg.
          </h2>
          <p style={{ fontSize: 14, color: appColors.text2, margin: "0 0 14px", lineHeight: 1.4 }}>
            35 min · 520 cal · uses thighs &amp; sheet-pan veg you already have.
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            <span
              style={{
                flex: 1,
                height: 48,
                fontSize: 15,
                fontWeight: 600,
                background: appColors.accent,
                color: appColors.textOnAccent,
                borderRadius: 14,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              <Icon name="flame" size={16} /> Start cooking
            </span>
            <span
              style={{
                height: 48,
                padding: "0 16px",
                borderRadius: 14,
                border: `1px solid ${appColors.hairline}`,
                color: appColors.text,
                fontSize: 14,
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Icon name="swap" size={16} /> Swap
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

const WEEK_STATS = [
  { label: "Groceries", value: "23/41", persona: "chef", icon: "cart" },
  { label: "Protein", value: "88g", persona: "sam", icon: "leaf" },
  { label: "Plan", value: "4/7", persona: "dietitian", icon: "plan" },
] as const;

function WeekStats() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
        <span style={{ ...MONO_LABEL }}>The week so far</span>
        <span style={{ fontSize: 12, color: appColors.text2, textDecoration: "underline" }}>All insights</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
        {WEEK_STATS.map((stat) => (
          <div
            key={stat.label}
            style={{
              background: appColors.card,
              border: `1px solid ${appColors.hairline}`,
              borderRadius: 18,
              padding: 14,
            }}
          >
            <div style={{ color: appColors.text3, marginBottom: 8 }}>
              <Icon name={stat.icon} size={16} />
            </div>
            <div style={{ ...MONO_LABEL, fontSize: 9, letterSpacing: "0.12em", marginBottom: 4 }}>
              {stat.label}
            </div>
            <div style={{ fontWeight: 700, fontSize: 22, lineHeight: 1, letterSpacing: "-0.025em", marginBottom: 10 }}>
              {stat.value}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, fontWeight: 500, color: personas[stat.persona].tone }}>
              <Avatar persona={stat.persona} size={14} />
              <span>Ask</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
