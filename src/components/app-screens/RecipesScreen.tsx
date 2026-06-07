import { appColors, appFont, personas } from "./tokens";
import { Avatar } from "./Avatar";
import { Icon } from "./Icon";
import { Imgph } from "./Imgph";
import { StatusBar } from "./StatusBar";

// Recipe detail — hero, the nutritionist's memory note, nutrition, ingredients,
// and an "Ask the chef" surface. Ported from the app's proposed recipe screen
// (mobile-design-system/themes/feast/spec/screens/recipe.js).

const chef = personas.chef;
const sam = personas.sam;

const MONO_LABEL = {
  fontFamily: appFont.mono,
  fontSize: 10,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: appColors.text3,
} as const;

export function RecipesScreen() {
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
      <Hero />
      <div style={{ padding: "30px 20px 0" }}>
        <MetaRow />
        <h1 style={{ fontWeight: 800, fontSize: 32, lineHeight: 1.05, letterSpacing: "-0.028em", margin: "0 0 12px" }}>
          Lemon herb
          <br />
          chicken &amp; veg.
        </h1>
        <Stats />
        <SamNote />
        <NutritionStrip />
      </div>
      <BottomCta />
    </div>
  );
}

function Hero() {
  return (
    <div style={{ position: "relative", height: 220, flexShrink: 0 }}>
      <Imgph label="Lemon chicken" style={{ position: "absolute", inset: 0, borderRadius: 0 }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, transparent 25%, transparent 55%, rgba(10,10,11,0.85) 100%)",
        }}
      />
      <RoundButton style={{ top: 20, left: 16 }}>
        <Icon name="chev_l" size={20} />
      </RoundButton>
      <div style={{ position: "absolute", top: 20, right: 16, display: "flex", gap: 8 }}>
        <RoundButton>
          <Icon name="bookmark" size={18} />
        </RoundButton>
        <RoundButton>
          <Icon name="heart" size={18} />
        </RoundButton>
      </div>
      <AskChefPill />
    </div>
  );
}

function RoundButton({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <span
      style={{
        position: style ? "absolute" : "static",
        width: 38,
        height: 38,
        borderRadius: "50%",
        background: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(8px)",
        color: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      {children}
    </span>
  );
}

function AskChefPill() {
  return (
    <span
      style={{
        position: "absolute",
        bottom: -22,
        right: 16,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 14px 10px 8px",
        background: appColors.card,
        border: `1px solid ${appColors.hairline}`,
        borderRadius: 999,
        boxShadow: "0 12px 32px -8px rgba(0,0,0,0.35)",
      }}
    >
      <Avatar persona="chef" />
      <span style={{ fontSize: 13, fontWeight: 600 }}>Ask the chef</span>
      <span style={{ color: chef.tone }}>
        <Icon name="chev_r" size={14} />
      </span>
    </span>
  );
}

function MetaRow() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
      <span style={{ ...MONO_LABEL }}>Dinner</span>
      <span style={{ color: appColors.text3 }}>·</span>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 500, color: chef.tone }}>
        <Icon name="flame" size={11} /> You&apos;ll love this
      </span>
    </div>
  );
}

const STATS = [
  { icon: "timer", label: "35 min" },
  { icon: "flame", label: "520 cal" },
  { icon: "chef", label: "Easy" },
] as const;

function Stats() {
  return (
    <div style={{ display: "flex", gap: 18, fontSize: 13, color: appColors.text2, marginBottom: 18 }}>
      {STATS.map((stat) => (
        <span key={stat.label} style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
          <Icon name={stat.icon} size={14} /> {stat.label}
        </span>
      ))}
    </div>
  );
}

function SamNote() {
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        padding: "12px 14px",
        background: "rgba(124, 92, 255, 0.10)",
        border: "1px solid rgba(124, 92, 255, 0.22)",
        borderRadius: 14,
        marginBottom: 18,
      }}
    >
      <Avatar persona="sam" size={24} />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, lineHeight: 1.4 }}>
          You mentioned you&apos;re light on greens — I added a bunch of
          broccolini.
        </div>
        <div style={{ marginTop: 6, color: sam.tone, fontSize: 12, fontWeight: 600 }}>
          Why this recipe →
        </div>
      </div>
    </div>
  );
}

const NUTRITION = [
  ["Protein", "42g"],
  ["Carb", "28g"],
  ["Fat", "22g"],
  ["Fiber", "6g"],
] as const;

function NutritionStrip() {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      {NUTRITION.map(([label, value]) => (
        <div
          key={label}
          style={{
            flex: 1,
            padding: "10px 8px",
            background: appColors.card,
            border: `1px solid ${appColors.hairline}`,
            borderRadius: 12,
            textAlign: "center",
          }}
        >
          <div style={{ ...MONO_LABEL, fontSize: 9, letterSpacing: "0.1em" }}>{label}</div>
          <div style={{ fontSize: 16, fontWeight: 700, marginTop: 4, letterSpacing: "-0.02em" }}>{value}</div>
        </div>
      ))}
    </div>
  );
}

function BottomCta() {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        padding: "14px 16px 22px",
        background: "linear-gradient(180deg, transparent, #0A0A0B 30%)",
        display: "flex",
        gap: 10,
      }}
    >
      <span
        style={{
          flex: 1,
          height: 52,
          background: appColors.accent,
          color: appColors.textOnAccent,
          fontWeight: 700,
          borderRadius: 16,
          fontSize: 16,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}
      >
        <Icon name="flame" size={18} /> Start cooking
      </span>
      <span
        style={{
          height: 52,
          padding: "0 16px",
          color: appColors.text,
          border: `1px solid ${appColors.hairline}`,
          borderRadius: 16,
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontSize: 14,
          fontWeight: 500,
        }}
      >
        <Icon name="cart" size={16} /> Add
      </span>
    </div>
  );
}
