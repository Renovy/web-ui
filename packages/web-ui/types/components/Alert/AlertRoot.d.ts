import React, { ReactNode } from "react";
import { type AlertVariantProps } from "./AlertVariants";
declare const AlertRoot: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & AlertVariantProps & {
    icon?: ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export { AlertRoot };
