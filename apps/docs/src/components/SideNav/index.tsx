import { Sidebar } from "@renovy/web-ui";

export function SideNav() {
  return (
    <Sidebar.Root>
      <Sidebar.Content className="text-xl py-7">
        <div className="flex flex-col gap-y-10">
          <ul className="flex flex-col gap-y-1">
            <li className="font-bold">Getting Started</li>
            <li className="text-zinc-400">Introdução</li>
            <li className="text-zinc-400">Instalação</li>
          </ul>

          <ul className="flex flex-col gap-y-1">
            <li className="font-bold">Componentes</li>
            <li className="text-zinc-400">
              <a href="/components/Accordion">Accordion</a>
            </li>
            <li className="text-zinc-400">
              <a href="/components/Button">Button</a>
            </li>
            <li className="text-zinc-400">
              <a href="">Sidebar</a>
            </li>
          </ul>
        </div>
      </Sidebar.Content>
    </Sidebar.Root>
  );
}
