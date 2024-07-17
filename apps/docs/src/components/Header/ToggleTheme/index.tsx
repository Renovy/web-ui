import { Button, useDarkMode } from "@renovy/web-ui";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

export function ToggleTheme() {
  const { isDark, toggleIsDark } = useDarkMode();

  return (
    <Button.Root variant="ghost" size="icon" onClick={toggleIsDark}>
      <Button.Icon className="text-xl">{isDark ? <FaRegMoon /> : <MdOutlineWbSunny />}</Button.Icon>
    </Button.Root>
  );
}
