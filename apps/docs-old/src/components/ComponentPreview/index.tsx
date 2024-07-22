import { Tabs } from "@renovy/web-ui";
import ButtonDemo from "../../pages/example/button-demo";

export function ComponentPreview() {
  return (
    <div>
      <Tabs.Root defaultValue="preview">
        <Tabs.List>
          <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
          <Tabs.Trigger value="code">Code</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="preview">
          <ButtonDemo />
        </Tabs.Content>

        <Tabs.Content value="code">{}</Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
