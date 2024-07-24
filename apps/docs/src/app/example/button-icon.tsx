import { Button } from "@renovy/web-ui";
import { FaBeerMugEmpty } from "react-icons/fa6";

export default function ButtonDemo() {
  return (
    <div className="space-x-3">
      <Button.Root size="icon">
        <Button.Icon>
          <FaBeerMugEmpty />
        </Button.Icon>
      </Button.Root>
      <Button.Root>
        <Button.Icon>
          <FaBeerMugEmpty />
        </Button.Icon>
        <Button.Content>Teste</Button.Content>
      </Button.Root>
      <Button.Root>
        <Button.Content>Teste</Button.Content>
        <Button.Icon>
          <FaBeerMugEmpty />
        </Button.Icon>
      </Button.Root>
    </div>
  );
}
