import { LuComponent } from "react-icons/lu";

import { MobileNav } from "./MobileNav";
import { Search } from "./Search";
import { ToggleTheme } from "./ToggleTheme";

export function Header() {
  return (
    <header className="flex gap-x-3">
      <div className="lg:hidden">
        <MobileNav />
      </div>

      <div className="hidden lg:block py-2">
        <div className="text-2xl flex items-center font-bold gap-x-3 text-accent dark:text-white">
          <LuComponent className="text-4xl" />
          <div>@renovy/web-ui</div>
        </div>
      </div>

      <div className="flex-1 flex md:justify-end">
        <Search />
      </div>

      <ToggleTheme />
    </header>
  );
}
