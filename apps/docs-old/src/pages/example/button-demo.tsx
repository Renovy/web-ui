import { Button } from "@renovy/web-ui";

export default function ButtonDemo() {
  return (
    <div className="flex flex-col gap-y-3">
      <Button.Root>
        <Button.Content>Teste</Button.Content>
      </Button.Root>
    </div>
  );
}
