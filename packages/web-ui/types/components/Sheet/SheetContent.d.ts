import * as SheetPrimitive from "@radix-ui/react-dialog";
import { VariantProps } from "class-variance-authority";
import React from "react";
declare const sheetVariants: (props?: {
    side?: "top" | "bottom" | "left" | "right";
} & import("class-variance-authority/types").ClassProp) => string;
export interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>, VariantProps<typeof sheetVariants> {
}
export declare const SheetContent: React.ForwardRefExoticComponent<SheetContentProps & React.RefAttributes<HTMLDivElement>>;
export {};
