import { Button, Sheet } from "@renovy/web-ui";
import { LuComponent } from "react-icons/lu";
import { HiMenuAlt1 } from "react-icons/hi";

export function MobileNav() {
  return (
    <nav>
      <Sheet.Root>
        <Sheet.Trigger>
          <Button.Root variant="ghost" size="icon">
            <Button.Icon className="text-xl">
              <HiMenuAlt1 />
            </Button.Icon>
          </Button.Root>
        </Sheet.Trigger>

        <Sheet.Content side="left" className="flex flex-col gap-y-10 text-xl">
          <div className="text-2xl flex items-center font-bold gap-x-3 text-accent dark:text-white">
            <LuComponent className="text-4xl" />
            <div>@renovy/web-ui</div>
          </div>

          <div className="flex flex-col gap-y-5">
            <ul className="flex flex-col gap-y-1">
              <li className="font-bold">Getting Started</li>
              <li className="text-zinc-400">Introdução</li>
              <li className="text-zinc-400">Instalação</li>
            </ul>

            <ul className="flex flex-col gap-y-1">
              <li className="font-bold">Componentes</li>
              <li className="text-zinc-400">
                <a href="">Button</a>
              </li>
              <li className="text-zinc-400">
                <a href="">Sidebar</a>
              </li>
            </ul>
          </div>
        </Sheet.Content>
      </Sheet.Root>
    </nav>
  );
}
