"use client";

import React, { useCallback } from "react";
import clsx from "clsx";

type Radius = "2xl" | "3xl";
type Elevation = "soft" | "high";
type Hover = "none" | "glow" | "lift";

export type CardOptions = {
  /** Corner rounding. Large surfaces use 3xl, inline/list cards use 2xl. */
  radius?: Radius;
  /** Drop shadow weight. */
  elevation?: Elevation;
  /** Optional hover treatment. */
  hover?: Hover;
  /** Mouse-tracked radial highlight. On by default. */
  spotlight?: boolean;
  /** Spotlight tint as an `r g b` triple, e.g. "34 211 238". */
  spotColor?: string;
  className?: string;
};

const BASE = "glass gradient-border overflow-hidden";

const RADIUS: Record<Radius, string> = {
  "2xl": "rounded-2xl",
  "3xl": "rounded-[1.75rem]",
};

const ELEVATION: Record<Elevation, string> = {
  soft: "",
  high: "shadow-card",
};

const HOVER: Record<Hover, string> = {
  none: "",
  glow: "transition-shadow duration-500 hover:shadow-glow",
  lift: "transition-all duration-500 hover:-translate-y-1 hover:shadow-glow-lg",
};

/**
 * The shared card surface as a class string — for cases where the card is a
 * `motion` element or otherwise can't be the `<Card>` component itself.
 */
export function cardClasses({
  radius = "2xl",
  elevation = "soft",
  hover = "none",
  spotlight = true,
  className,
}: CardOptions = {}) {
  return clsx(
    BASE,
    spotlight && "spotlight",
    RADIUS[radius],
    ELEVATION[elevation],
    HOVER[hover],
    className
  );
}

/** Mouse handler that feeds the `.spotlight` CSS variables. */
export function useSpotlight() {
  return useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);
}

type CardProps = CardOptions &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof CardOptions>;

const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    radius,
    elevation,
    hover,
    spotlight = true,
    spotColor,
    className,
    children,
    style,
    onMouseMove,
    ...rest
  },
  ref
) {
  const track = useSpotlight();

  return (
    <div
      ref={ref}
      className={cardClasses({ radius, elevation, hover, spotlight, className })}
      style={
        spotColor
          ? ({ ...style, "--spot-color": `rgba(${spotColor} / 0.18)` } as React.CSSProperties)
          : style
      }
      onMouseMove={(e) => {
        if (spotlight) track(e);
        onMouseMove?.(e);
      }}
      {...rest}
    >
      {/* Content sits above the spotlight/border pseudo-elements */}
      <div className="relative z-[2] h-full w-full flex flex-col">{children}</div>
    </div>
  );
});

export default Card;
