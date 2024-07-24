import { Tabs } from "@renovy/web-ui";
import { readFile } from "fs/promises";
import { Code } from "../Code";
import { lazy, Suspense } from "react";

export async function ComponentPreview({ name, title }: { name: string; title: string }) {
  const buttonFile = await readFile(`./src/app/example/${name}.tsx`);
  const Component = lazy(() => import(`@/app/example/${name}`));

  return (
    <div>
      <h3>{title}</h3>

      <Tabs.Root defaultValue="preview">
        <Tabs.List>
          <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
          <Tabs.Trigger value="code">Code</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="preview">
          <div className="min-h-48 w-full flex items-center justify-center border border-zinc-500 rounded-md">
            <Suspense fallback={<div>Carregando...</div>}>
              <Component />
            </Suspense>
          </div>
        </Tabs.Content>

        <Tabs.Content value="code">
          <Code
            code={`\`\`\`tsx
${buttonFile}`}
          />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
