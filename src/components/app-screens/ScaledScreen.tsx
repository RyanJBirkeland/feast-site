"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

// Every app screen is authored on a fixed 360 × 780 logical canvas, using the
// real app's pixel sizes (393:852 phone aspect, status bar, type scale). The
// phone frames on this site, though, range from ~160px to ~260px wide. Rather
// than re-tune every font and gap per frame, ScaledScreen renders the canvas at
// its native size and uniformly scales it down to whatever width the frame
// gives it — so the screen stays pixel-proportional to the real app at any size.
const CANVAS_WIDTH = 360;
const CANVAS_HEIGHT = 780;

// A reasonable first-paint guess (typical md frame) until the real width is
// measured in useLayoutEffect, before the browser paints.
const INITIAL_SCALE = 0.6;

export function ScaledScreen({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(INITIAL_SCALE);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const fitToContainer = () => setScale(container.clientWidth / CANVAS_WIDTH);
    fitToContainer();

    const observer = new ResizeObserver(fitToContainer);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: `${CANVAS_WIDTH} / ${CANVAS_HEIGHT}`,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: CANVAS_WIDTH,
          height: CANVAS_HEIGHT,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
