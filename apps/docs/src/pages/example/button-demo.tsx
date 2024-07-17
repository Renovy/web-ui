import { Button } from "@renovy/web-ui";

export default function ButtonDemo() {
  return (
    <div className="flex flex-col gap-y-3">
      <Button.Root variant="accent">
        <Button.Content>Teste</Button.Content>
      </Button.Root>

      <Button.Root variant="danger">
        <Button.Content>Teste</Button.Content>
      </Button.Root>

      <Button.Root variant="ghost">
        <Button.Content>Teste</Button.Content>
      </Button.Root>

      <Button.Root variant="success">
        <Button.Content>Teste</Button.Content>
      </Button.Root>

      <Button.Root>
        <Button.Content>Teste</Button.Content>
      </Button.Root>
    </div>
  );
}
