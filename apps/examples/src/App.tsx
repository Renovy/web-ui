import { Button } from "@renovy/web-ui";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
