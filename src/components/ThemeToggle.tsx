"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/Button";
import * as React from "react";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { resolved, toggle } = useTheme();

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      aria-label="Toggle theme"
      onClick={toggle}
      className="relative h-10 w-10 rounded-full p-0"
    >
      <span className="sr-only">Current theme: {resolved}</span>
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}

