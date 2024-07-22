import { ButtonDemo } from "@/app/example/button-demo";
import { Tabs } from "@renovy/web-ui";
import { readFile } from "fs/promises";
import { Code } from "../Code";

export async function ComponentPreview() {
  const buttonFile = await readFile("./src/app/example/button-demo.tsx");

  return (
    <div>
      <Tabs.Root defaultValue="preview">
        <Tabs.List>
          <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
          <Tabs.Trigger value="code">Code</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="preview">
          <div className="min-h-32 w-full flex items-center justify-center border border-zinc-500 rounded-md">
            <ButtonDemo />
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
