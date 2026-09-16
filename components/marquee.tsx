"use client";

import React from "react";
import { Icon } from "@iconify/react";
import clsx from "clsx";

type Item = { name: string; icon: string };

type MarqueeProps = {
  items: readonly Item[];
  reverse?: boolean;
  className?: string;
};

/** Infinite horizontal scroller of icon+label chips. Pauses on hover. */
export default function Marquee({ items, reverse, className }: MarqueeProps) {
  // Duplicate so the -50% translate loops seamlessly.
  const track = [...items, ...items];

  return (
    <div className={clsx("marquee-mask w-full overflow-hidden", className)}>
      <div
        className={clsx(
          "flex w-max gap-3 animate-marquee hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {track.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-white/70 whitespace-nowrap backdrop-blur-sm"
          >
            <Icon icon={item.icon} height={18} className="shrink-0" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
