import { Sidebar } from "@renovy/web-ui";

export function SideNav() {
  return (
    <Sidebar.Root>
      <Sidebar.Content className="text-xl">
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
      </Sidebar.Content>
    </Sidebar.Root>
  );
}
