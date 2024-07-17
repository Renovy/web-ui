import { HiMenuAlt1 } from "react-icons/hi";
import { Button, useSidebar } from "../..";
import { cn } from "../../util";

export type SidebarTriggerProps = {
  visible?: boolean;
};

export function SidebarTrigger({ visible }: SidebarTriggerProps) {
  const { toggleSidebar } = useSidebar();

  const classes = cn("lg:hidden", visible && "visible");

  return (
    <Button.Root variant="ghost" size="icon" className={classes} onClick={toggleSidebar}>
      <Button.Icon className="text-xl">
        <HiMenuAlt1 />
      </Button.Icon>
    </Button.Root>
  );
}
