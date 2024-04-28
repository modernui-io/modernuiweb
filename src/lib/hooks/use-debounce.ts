"use client";

import { useRef } from "react";

export default function useDebounce() {
  const timeout = useRef<NodeJS.Timeout>();

  function debounce<Arg = unknown>(func: (args: Arg) => void, delay = 600) {
    return (args: Arg) => {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        func(args);
      }, delay);
    };
  }

  return debounce;
}
