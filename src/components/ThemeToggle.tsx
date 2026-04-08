"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/Button";
import * as React from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const effective = theme === "system" ? resolvedTheme : theme;

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      aria-label="Toggle theme"
      onClick={() => setTheme(effective === "dark" ? "light" : "dark")}
      className="relative h-10 w-10 rounded-full p-0"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}

