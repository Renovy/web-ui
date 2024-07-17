import { ReactNode } from "react";

type SidebarRootProps = {
  children: ReactNode;
};

export function SidebarRoot({ children }: SidebarRootProps) {
  return <div>{children}</div>;
}
