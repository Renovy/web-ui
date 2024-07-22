import { ReactNode } from "react";
import { cn } from "../../util";

export type SidebarContentProps = {
  children: ReactNode;
  className?: string;
};

export function SidebarContent({ children, className }: SidebarContentProps) {
  const classes = cn("flex flex-col p-5 min-w-[240px]", className);

  return <nav className={classes}>{children}</nav>;
}
