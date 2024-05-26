"use client";

import * as React from "react";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { ComputerIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "~/components/ui/button";

export function ThemeToggle() {
  const { setTheme, resolvedTheme = "light" } = useTheme();

  const stateMap = {
    light: {
      icon: <SunIcon className="size-4" />,
    },
    dark: {
      icon: <MoonIcon className="size-4" />,
    },
    system: {
      icon: <ComputerIcon className="size-4" />,
    },
  } satisfies Record<
    "light" | "dark" | "system",
    {
      icon: React.ReactNode;
    }
  >;

  return (
    <Button
      className="aspect-square"
      variant="outline"
      size="icon"
      aria-label={`mode-${resolvedTheme}`}
      onClick={() => {
        if (resolvedTheme === "dark") setTheme("light");
        if (resolvedTheme === "light") setTheme("system");
        if (resolvedTheme === "system") setTheme("dark");
      }}
    >
      {stateMap[resolvedTheme as keyof typeof stateMap].icon}
    </Button>
  );
}
