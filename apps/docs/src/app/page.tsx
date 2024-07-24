import { Button } from "@renovy/web-ui";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="space-y-20">
      <div>
        <h1 className="font-bold text-5xl">Renovy Web-UI</h1>
        <h3>Biblioteca de componentes</h3>
      </div>

      <div className="space-y-5">
        <p className="text-lg max-w-[1024px]">
          A @renovy/web-ui é uma biblioteca de componentes padrão da Renovy, feita visando padronizar o comportamento
          dos componentes utilizados por nossa equipe, e também possibilitar a customização de acordo com cada projeto.
        </p>

        <div className="space-x-3">
          <Link href="/components/Button">
            <Button.Root>
              <Button.Content>Componentes</Button.Content>
            </Button.Root>
          </Link>

          <Link href="https://github.com/Renovy/web-ui" target="_blank">
            <Button.Root variant="ghost">
              <Button.Content>GitHub</Button.Content>
            </Button.Root>
          </Link>
        </div>
      </div>
    </div>
  );
}
