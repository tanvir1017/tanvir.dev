"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { AlignJustify, Moon, Sun, X } from "lucide-react";
const ThemeSwitch = () => {
  const [mount, setMount] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMount(true), [theme]);
  if (!mount) {
    return null;
  }
  return (
    <Button>
      {theme !== "dark" ? (
        <Moon
          className="text-gray-600"
          strokeWidth={1.5}
          onClick={() => setTheme("dark")}
        />
      ) : (
        <Sun
          strokeWidth={1.5}
          className="text-slate-200"
          onClick={() => setTheme("light")}
        />
      )}
    </Button>
  );
};

export default ThemeSwitch;
