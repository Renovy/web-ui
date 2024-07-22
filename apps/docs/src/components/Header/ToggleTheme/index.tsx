"use client";

import { Button } from "@renovy/web-ui";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  function changeTheme() {
    if (theme === "dark") {
      return setTheme("light");
    }
    return setTheme("dark");
  }

  return (
    <Button.Root variant="ghost" size="icon" onClick={changeTheme}>
      <Button.Icon className="text-xl">{isDark ? <FaRegMoon /> : <MdOutlineWbSunny />}</Button.Icon>
    </Button.Root>
  );
}
