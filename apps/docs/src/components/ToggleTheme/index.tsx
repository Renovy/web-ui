import { Button } from "@renovy/web-ui";
import { FaSun } from "react-icons/fa6";

export function ToggleTheme({ switchTheme }: { switchTheme: () => void }) {
  // function toggleDarkMode() {
  //   const element = document.querySelector("html");

  //   if (element?.classList.contains("dark")) {
  //     element?.classList.remove("dark");
  //   } else {
  //     element?.classList.add("dark");
  //   }
  // }

  return (
    <Button.Root onClick={switchTheme}>
      <Button.Icon>
        <FaSun />
      </Button.Icon>
    </Button.Root>
  );
}
