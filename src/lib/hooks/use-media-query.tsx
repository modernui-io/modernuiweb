"use client";

import * as React from "react";
import { useEffect, useState } from "react";

export function useMediaQuery(query?: string) {
  const [value, setValue] = useState(false);
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop" | null>(
    null,
  );
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    const checkDevice = () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        setDevice("mobile");
      } else if (
        window.matchMedia("(min-width: 641px) and (max-width: 1024px)").matches
      ) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    // Initial detection
    checkDevice();

    // Listener for windows resize
    window.addEventListener("resize", checkDevice);

    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches);
    }

    let result: MediaQueryList;

    if (query) {
      const result = matchMedia(query);
      result.addEventListener("change", onChange);
      setValue(result.matches);
    }

    return () => {
      window.removeEventListener("resize", checkDevice);

      if (result) {
        result.removeEventListener("change", onChange);
      }
    };
  }, [query]);

  return {
    isMatch: value,
    device,
    width: dimensions?.width,
    height: dimensions?.height,
    isMobile: device === "mobile",
    isTablet: device === "tablet",
    isDesktop: device === "desktop",
  };
}
