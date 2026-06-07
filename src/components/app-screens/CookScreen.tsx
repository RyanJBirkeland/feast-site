import type { ReactNode } from "react";
import { appColors, appFont, personas } from "./tokens";
import { Avatar } from "./Avatar";
import { Icon } from "./Icon";
import { StatusBar } from "./StatusBar";

// Cooking mode — the Chef walks you through one step at a time and answers
// questions mid-recipe. Ported from the app's proposed cooking screen
// (mobile-design-system/themes/feast/spec/screens/cooking.js).

const chef = personas.chef;
const TOTAL_STEPS = 7;
const CURRENT_STEP = 3;

const MONO_LABEL = {
  fontFamily: appFont.mono,
  fontSize: 9,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
} as const;

export function CookScreen() {
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
      <CookHeader />
      <Stepper />
      <div style={{ flex: 1, overflow: "hidden", padding: "8px 18px 0" }}>
        <StepCard />
        <UserMessage>What if my chicken is still wet?</UserMessage>
        <ChefReply />
      </div>
      <CookInput />
    </div>
  );
}

function CookHeader() {
  return (
    <div style={{ padding: "6px 18px 14px", display: "flex", alignItems: "center", gap: 12 }}>
      <Icon name="chev_l" size={22} />
      <Avatar persona="chef" />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          Lemon herb chicken
        </div>
        <div style={{ ...MONO_LABEL, color: chef.tone }}>
          Cooking with chef · step {CURRENT_STEP} of {TOTAL_STEPS}
        </div>
      </div>
      <span style={{ background: appColors.accent, color: appColors.textOnAccent, borderRadius: 999, padding: "6px 12px", fontSize: 12, fontWeight: 600 }}>
        Finish
      </span>
    </div>
  );
}

function Stepper() {
  return (
    <div style={{ padding: "0 18px 14px", display: "flex", gap: 4 }}>
      {Array.from({ length: TOTAL_STEPS }, (_, step) => (
        <div
          key={step}
          style={{
            flex: 1,
            height: 3,
            borderRadius: 2,
            background: step < CURRENT_STEP ? chef.tone : appColors.hairline,
            opacity: step < CURRENT_STEP ? 1 : 0.5,
          }}
        />
      ))}
    </div>
  );
}

function StepCard() {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 10, marginBottom: 14 }}>
      <Avatar persona="chef" />
      <div style={{ flex: 1, maxWidth: "84%" }}>
        <div
          style={{
            background: appColors.card,
            border: `1px solid ${appColors.hairline}`,
            borderRadius: "18px 18px 18px 4px",
            padding: "14px 16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <span style={{ ...MONO_LABEL, fontSize: 10, letterSpacing: "0.14em", fontWeight: 600, color: chef.tone }}>
              Step {CURRENT_STEP}
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontFamily: appFont.mono, fontSize: 10, color: appColors.text3, letterSpacing: "0.08em" }}>
              <Icon name="timer" size={11} /> 4 min
            </span>
          </div>
          <div style={{ fontWeight: 600, fontSize: 17, lineHeight: 1.32, letterSpacing: "-0.015em" }}>
            Heat 2 tbsp olive oil in a large skillet over medium-high.
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.45, color: appColors.text2, marginTop: 6 }}>
            Pat the chicken dry, season both sides with salt &amp; pepper.
          </div>
        </div>
      </div>
    </div>
  );
}

function UserMessage({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 14 }}>
      <div
        style={{
          maxWidth: "80%",
          background: appColors.accent,
          color: appColors.textOnAccent,
          borderRadius: "18px 18px 4px 18px",
          padding: "12px 14px",
          fontSize: 15,
          fontWeight: 500,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function ChefReply() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 10, marginBottom: 6 }}>
        <Avatar persona="chef" />
        <div style={{ flex: 1, maxWidth: "84%" }}>
          <div
            style={{
              background: appColors.card,
              border: `1px solid ${appColors.hairline}`,
              borderRadius: "18px 18px 18px 4px",
              padding: "14px 16px",
              fontSize: 15,
              lineHeight: 1.45,
            }}
          >
            Pat it{" "}
            <span style={{ color: chef.tone, fontWeight: 600 }}>really dry</span>{" "}
            with paper towels — wet chicken steams instead of searing. Take an
            extra 30 seconds, it matters.
          </div>
        </div>
      </div>
      <div style={{ ...MONO_LABEL, fontSize: 9, letterSpacing: "0.1em", textTransform: "none", color: appColors.text3, margin: "2px 0 16px 44px" }}>
        Just now
      </div>
    </>
  );
}

const COOK_CHIPS = ["Got it", "Substitute?", "How do I know it's done?", "Make it spicier"];

function CookInput() {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(10, 10, 11, 0.95)",
        backdropFilter: "blur(20px)",
        borderTop: `1px solid ${appColors.hairline}`,
      }}
    >
      <StepNav />
      <div style={{ display: "flex", gap: 6, overflow: "hidden", padding: "8px 16px 4px" }}>
        {COOK_CHIPS.map((chip) => (
          <span
            key={chip}
            style={{
              height: 32,
              padding: "0 12px",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 500,
              whiteSpace: "nowrap",
              display: "inline-flex",
              alignItems: "center",
              color: appColors.text2,
              border: `1px solid ${appColors.hairline}`,
            }}
          >
            {chip}
          </span>
        ))}
      </div>
      <div style={{ padding: "8px 14px 22px", display: "flex", gap: 8, alignItems: "center" }}>
        <span style={iconButtonStyle(appColors.card, appColors.text)}>
          <Icon name="mic" size={18} />
        </span>
        <div
          style={{
            flex: 1,
            height: 40,
            display: "flex",
            alignItems: "center",
            padding: "0 16px",
            background: "rgba(255, 255, 255, 0.04)",
            border: `1px solid ${appColors.hairline}`,
            borderRadius: 20,
            fontSize: 14,
            color: appColors.text3,
          }}
        >
          Ask chef — substitution, timing, anything.
        </div>
        <span style={iconButtonStyle(chef.tone, chef.fg)}>
          <Icon name="arrow_up" size={18} />
        </span>
      </div>
    </div>
  );
}

function StepNav() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 16px 6px" }}>
      <span
        style={{
          background: appColors.card,
          border: `1px solid ${appColors.hairline}`,
          color: appColors.text,
          borderRadius: 999,
          padding: "6px 12px",
          fontSize: 12,
          fontWeight: 500,
          display: "inline-flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Icon name="chev_l" size={14} /> Step 2
      </span>
      <div style={{ flex: 1 }} />
      <span
        style={{
          background: chef.tone,
          color: chef.fg,
          borderRadius: 999,
          padding: "6px 14px",
          fontSize: 12,
          fontWeight: 700,
          display: "inline-flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        Step 4 <Icon name="chev_r" size={14} />
      </span>
    </div>
  );
}

function iconButtonStyle(background: string, color: string) {
  return {
    width: 40,
    height: 40,
    borderRadius: "50%",
    background,
    color,
    border: background === appColors.card ? `1px solid ${appColors.hairline}` : "0",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  };
}
