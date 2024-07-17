import { ReactNode } from "react";
import { useSidebar } from "../../stores";
import { cn } from "../../util";

export type SidebarContentProps = {
  children: ReactNode;
};

export function SidebarContent({ children }: SidebarContentProps) {
  const { isOpen } = useSidebar();

  const classes = cn(
    "fixed lg:hidden md:left-0 z-20 h-full flex-col bg-alt w-[280px] min-w-[280px] max-w-[280px] md:flex transition-all duration-300",
    isOpen ? "left-0" : "-left-[350px]",
  );

  return <nav className={classes}>{children}</nav>;
}
