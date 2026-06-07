import type { ReactNode } from "react";
import { appColors, appFont, personas, type PersonaId } from "./tokens";
import { Avatar } from "./Avatar";
import { Icon } from "./Icon";
import { StatusBar } from "./StatusBar";

// The "text your team" chat — the surface where the four AI personas talk to the
// user in one thread. A faithful, static port of the app's team-chat screen
// (mobile-design-system/themes/feast/spec/screens/team.js, proposed dark
// variant). Copy is the personas' real brand voice from the design system.

const MONO_LABEL = {
  fontFamily: appFont.mono,
  fontSize: 9,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
} as const;

export function ChatScreen() {
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
      <ChatHeader />
      <div style={{ flex: 1, overflow: "hidden", padding: "16px 18px 0" }}>
        <DateDivider label="Yesterday · 7:42 pm" />
        <IncomingMessage persona="coach">
          Three cooked dinners in a row — that&apos;s a streak. Want me to keep
          nudging at 6pm?
        </IncomingMessage>
        <UserMessage>
          Yeah please. Also heads up — going out of town Sat, can you skip that
          day?
        </UserMessage>
        <IncomingMessage persona="dietitian" timestamp="7:42 pm">
          <div style={{ marginBottom: 10 }}>
            Got it — Saturday&apos;s off the plan. I&apos;ll shift the salmon to
            Sunday so it doesn&apos;t spoil.
          </div>
          <PlanUpdatedCard from="Sat · Salmon" to="Sun · Salmon" />
        </IncomingMessage>
        <DateDivider label="Today · 8:02 am" />
        <IncomingMessage persona="sam" timestamp="8:02 am">
          Morning. Light on greens this week — swap Fri&apos;s pasta for
          something leafier?
        </IncomingMessage>
      </div>
      <ChatInput />
    </div>
  );
}

function ChatHeader() {
  return (
    <div style={{ padding: "6px 20px 14px", borderBottom: `1px solid ${appColors.hairline}` }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <Icon name="chev_d" size={22} />
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "-0.01em" }}>
            Your team
          </div>
          <div style={{ ...MONO_LABEL, color: appColors.text3 }}>
            Sam · Chef · Dietitian · Coach
          </div>
        </div>
        <Icon name="info" size={20} />
      </div>
      <PersonaFilters />
    </div>
  );
}

const FILTERS: Array<{ label: string; persona?: PersonaId }> = [
  { label: "All" },
  { label: "Sam", persona: "sam" },
  { label: "Chef", persona: "chef" },
  { label: "Diet", persona: "dietitian" },
  { label: "Coach", persona: "coach" },
];

function PersonaFilters() {
  return (
    <div style={{ display: "flex", gap: 8, overflow: "hidden" }}>
      {FILTERS.map((filter) => (
        <PersonaFilterPill key={filter.label} {...filter} />
      ))}
    </div>
  );
}

function PersonaFilterPill({ label, persona }: { label: string; persona?: PersonaId }) {
  const isAll = persona === undefined;
  const tone = isAll ? personas.sam.tone : personas[persona].tone;
  return (
    <div
      style={{
        height: 32,
        padding: "0 12px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 600,
        whiteSpace: "nowrap",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: isAll ? tone : "transparent",
        color: isAll ? "#FFFFFF" : appColors.text,
        border: `1px solid ${isAll ? tone : appColors.hairline}`,
      }}
    >
      {persona && <Avatar persona={persona} size={16} />}
      {label}
    </div>
  );
}

function DateDivider({ label }: { label: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 14 }}>
      <span
        style={{
          ...MONO_LABEL,
          letterSpacing: "0.14em",
          color: appColors.text3,
          background: appColors.cardElevated,
          padding: "4px 10px",
          borderRadius: 999,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function IncomingMessage({
  persona,
  timestamp,
  children,
}: {
  persona: PersonaId;
  timestamp?: string;
  children: ReactNode;
}) {
  const { label, tone } = personas[persona];
  return (
    <>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 8, marginBottom: timestamp ? 6 : 14 }}>
        <Avatar persona={persona} />
        <div style={{ flex: 1, maxWidth: "84%" }}>
          <div style={{ ...MONO_LABEL, color: tone, marginBottom: 4, paddingLeft: 4 }}>
            {label}
          </div>
          <div
            style={{
              background: appColors.card,
              border: `1px solid ${appColors.hairline}`,
              borderRadius: "18px 18px 18px 4px",
              padding: "12px 14px",
              fontSize: 15,
              lineHeight: 1.45,
            }}
          >
            {children}
          </div>
        </div>
      </div>
      {timestamp && (
        <div style={{ ...MONO_LABEL, letterSpacing: "0.1em", textTransform: "none", color: appColors.text3, margin: "2px 0 16px 44px" }}>
          {timestamp}
        </div>
      )}
    </>
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
          lineHeight: 1.45,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function PlanUpdatedCard({ from, to }: { from: string; to: string }) {
  return (
    <div
      style={{
        background: "rgba(61, 220, 151, 0.08)",
        border: "1px solid rgba(61, 220, 151, 0.2)",
        borderRadius: 12,
        padding: "10px 12px",
      }}
    >
      <div style={{ ...MONO_LABEL, color: appColors.accent, marginBottom: 6 }}>
        Plan updated
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 13, textDecoration: "line-through", opacity: 0.6 }}>{from}</span>
        <span style={{ color: appColors.accent }}>→</span>
        <span style={{ fontSize: 13, fontWeight: 600 }}>{to}</span>
      </div>
    </div>
  );
}

const QUICK_REPLIES = ["Sounds good", "Show me options", "I went out, ignore today", "Push to next week"];

function ChatInput() {
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
        padding: "10px 16px 22px",
      }}
    >
      <div style={{ display: "flex", gap: 8, overflow: "hidden", marginBottom: 10 }}>
        {QUICK_REPLIES.map((reply) => (
          <span
            key={reply}
            style={{
              height: 32,
              padding: "0 12px",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 500,
              whiteSpace: "nowrap",
              display: "inline-flex",
              alignItems: "center",
              border: `1px solid ${appColors.hairline}`,
              color: appColors.text,
            }}
          >
            {reply}
          </span>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: appColors.card,
            border: `1px solid ${appColors.hairline}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="mic" size={18} />
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            gap: 8,
            alignItems: "center",
            padding: "6px 6px 6px 14px",
            background: "rgba(255, 255, 255, 0.04)",
            borderRadius: 24,
            border: `1px solid ${appColors.hairline}`,
          }}
        >
          <span style={{ flex: 1, fontSize: 14, color: appColors.text3 }}>
            Say anything — your team listens
          </span>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: personas.sam.tone,
              color: "#FFFFFF",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="arrow_up" size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
