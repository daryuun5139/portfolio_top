// ダークモード切り替えボタン
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <button
        aria-label="ThemeButton"
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="w-fit rounded-full bg-black/70 px-5 py-1"
      >
        {mounted && (
          <>
            {theme === "dark" ? (
              <Moon className="stroke-white" />
            ) : (
              <Sun className="stroke-white" />
            )}
          </>
        )}
      </button>
    </>
  );
}
