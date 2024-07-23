import React from "react";
import { type VariantProps } from "class-variance-authority";
declare const ButtonRoot: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<(props?: {
    variant?: "default" | "accent" | "success" | "danger" | "ghost";
    size?: "default" | "sm" | "lg" | "icon";
} & import("class-variance-authority/types").ClassProp) => string> & {
    isLoading?: boolean;
} & React.RefAttributes<HTMLButtonElement>>;
export { ButtonRoot };
