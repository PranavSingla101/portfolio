import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

/**
 * Marks `sectionName` active while the section crosses a thin horizontal
 * band ~40% down the viewport. Sections are stacked, so exactly one section
 * intersects the band at any scroll position — independent of how tall the
 * section is (a visible-fraction threshold breaks for sections taller than
 * the viewport).
 *
 * `_threshold` is kept for call-site compatibility and intentionally unused.
 */
export function useSectionInView(sectionName: SectionName, _threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-40% 0px -55% 0px",
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
