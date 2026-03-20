// Border-radius scales proportionally with phone size:
// lg (260px) = spec values 32px/24px, md/sm scale down proportionally
const SIZES = {
  sm: { width: "w-[160px]", padding: "p-[6px]", outerRadius: "rounded-[20px]", innerRadius: "rounded-[14px]" },
  md: { width: "w-[180px]", padding: "p-[8px]", outerRadius: "rounded-[24px]", innerRadius: "rounded-[18px]" },
  lg: { width: "w-[260px]", padding: "p-3", outerRadius: "rounded-[32px]", innerRadius: "rounded-[24px]" },
};

export function PhoneMockup({
  size = "lg",
  glow = false,
  className = "",
  children,
}: {
  size?: "sm" | "md" | "lg";
  glow?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const s = SIZES[size];

  return (
    <div className={`${s.width} shrink-0 ${className}`}>
      <div
        className={`bg-v2-card ${s.outerRadius} border-2 border-v2-border ${s.padding}`}
        style={{
          boxShadow: glow
            ? "0 8px 32px rgba(0,0,0,0.4), 0 4px 16px rgba(0,211,127,0.08)"
            : "0 8px 32px rgba(0,0,0,0.4)",
        }}
      >
        <div className={`bg-v2-background ${s.innerRadius} overflow-hidden`}>
          {children}
        </div>
      </div>
    </div>
  );
}
