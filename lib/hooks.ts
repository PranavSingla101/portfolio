import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

/** Mobile viewport: use lower threshold + rootMargin so navbar updates while scrolling (short viewport rarely hits 75% visible). */
function useMobileFriendlyOptions(threshold: number) {
  const [options, setOptions] = useState<{
    threshold: number;
    rootMargin?: string;
  }>(() => ({ threshold }));

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const apply = () => {
      if (mql.matches) {
        setOptions({
          threshold: 0.2,
          rootMargin: "0px 0px -50% 0px",
        });
      } else {
        setOptions({ threshold });
      }
    };
    apply();
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, [threshold]);

  return options;
}

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const observerOptions = useMobileFriendlyOptions(threshold);
  const { ref, inView } = useInView(observerOptions);
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
