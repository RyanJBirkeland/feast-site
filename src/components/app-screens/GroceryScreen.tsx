import { appColors, appFont } from "./tokens";
import { Icon } from "./Icon";
import { StatusBar } from "./StatusBar";

// The grocery list — every planned recipe rolled into one checklist, grouped by
// aisle, ready to shop or send out. Composed from the app's design system (no
// pre-built spec screen), matching the app's grocery concept and the site's
// "pickup or delivery" copy.

const CHECKED_COUNT = 23;
const TOTAL_COUNT = 41;

const MONO_LABEL = {
  fontFamily: appFont.mono,
  fontSize: 10,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: appColors.text3,
} as const;

type Item = { name: string; qty: string; checked?: boolean };
type Category = { name: string; items: Item[] };

const CATEGORIES: Category[] = [
  {
    name: "Produce",
    items: [
      { name: "Lemons", qty: "2" },
      { name: "Broccolini", qty: "1 bunch", checked: true },
      { name: "Garlic", qty: "1 head", checked: true },
      { name: "Baby potatoes", qty: "1 lb" },
    ],
  },
  {
    name: "Protein",
    items: [
      { name: "Chicken thighs", qty: "4", checked: true },
      { name: "Salmon fillet", qty: "12 oz" },
    ],
  },
  {
    name: "Pantry",
    items: [
      { name: "Olive oil", qty: "1 bottle", checked: true },
      { name: "White beans", qty: "2 cans" },
    ],
  },
];

export function GroceryScreen() {
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
      <GroceryHeader />
      <div style={{ flex: 1, overflow: "hidden", padding: "4px 20px 0" }}>
        {CATEGORIES.map((category) => (
          <CategorySection key={category.name} category={category} />
        ))}
      </div>
      <OrderCta />
    </div>
  );
}

function GroceryHeader() {
  const progress = `${Math.round((CHECKED_COUNT / TOTAL_COUNT) * 100)}%`;
  return (
    <div style={{ padding: "6px 20px 16px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
        <Icon name="chev_l" size={22} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>Groceries</div>
          <div style={{ ...MONO_LABEL, fontSize: 9, letterSpacing: "0.12em", marginTop: 2 }}>
            {CHECKED_COUNT} of {TOTAL_COUNT} · 5 recipes
          </div>
        </div>
        <Icon name="search" size={20} />
      </div>
      <div style={{ height: 6, background: "rgba(255, 255, 255, 0.08)", borderRadius: 3, overflow: "hidden" }}>
        <div style={{ height: "100%", width: progress, background: appColors.accent, borderRadius: 3 }} />
      </div>
    </div>
  );
}

function CategorySection({ category }: { category: Category }) {
  const remaining = category.items.filter((item) => !item.checked).length;
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
        <span style={{ ...MONO_LABEL, fontSize: 10, letterSpacing: "0.14em" }}>{category.name}</span>
        <span style={{ ...MONO_LABEL, fontSize: 9, letterSpacing: "0.12em" }}>{remaining} left</span>
      </div>
      <div style={{ background: appColors.card, border: `1px solid ${appColors.hairline}`, borderRadius: 16, padding: "2px 14px" }}>
        {category.items.map((item, index) => (
          <GroceryItem key={item.name} item={item} divider={index < category.items.length - 1} />
        ))}
      </div>
    </div>
  );
}

function GroceryItem({ item, divider }: { item: Item; divider: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "11px 0",
        borderBottom: divider ? `1px solid ${appColors.hairline}` : "0",
      }}
    >
      <Checkbox checked={item.checked} />
      <span
        style={{
          flex: 1,
          fontSize: 15,
          color: item.checked ? appColors.text3 : appColors.text,
          textDecoration: item.checked ? "line-through" : "none",
        }}
      >
        {item.name}
      </span>
      <span style={{ ...MONO_LABEL, fontSize: 10, letterSpacing: "0.08em" }}>{item.qty}</span>
    </div>
  );
}

function Checkbox({ checked }: { checked?: boolean }) {
  if (checked) {
    return (
      <span
        style={{
          width: 20,
          height: 20,
          borderRadius: 6,
          background: appColors.accent,
          color: appColors.textOnAccent,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon name="check" size={13} stroke={2.4} />
      </span>
    );
  }
  return (
    <span
      style={{
        width: 20,
        height: 20,
        borderRadius: 6,
        border: `1.5px solid ${appColors.text3}`,
        flexShrink: 0,
      }}
    />
  );
}

function OrderCta() {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        padding: "14px 16px 22px",
        background: "linear-gradient(180deg, transparent, #0A0A0B 30%)",
      }}
    >
      <div
        style={{
          height: 52,
          background: appColors.accent,
          color: appColors.textOnAccent,
          fontWeight: 700,
          borderRadius: 16,
          fontSize: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <Icon name="cart" size={18} /> Order for pickup or delivery
      </div>
    </div>
  );
}
