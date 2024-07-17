import { Button, Sheet } from "@renovy/web-ui";
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

        <Sheet.Content side="left">
          <ul>
            <li>Getting Started</li>
            <li>Introdução</li>
            <li>Instalação</li>

            <li>Componentes</li>
            <li>
              <a href="">Button</a>
            </li>
            <li>
              <a href="">Sidebar</a>
            </li>
          </ul>
        </Sheet.Content>
      </Sheet.Root>
    </nav>
  );
}
