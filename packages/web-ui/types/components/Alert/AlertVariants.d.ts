import { VariantProps } from "class-variance-authority";
export declare const alertVariants: (props?: {
    variant?: "default" | "success" | "info" | "danger" | "warning";
} & import("class-variance-authority/types").ClassProp) => string;
export type AlertVariantProps = VariantProps<typeof alertVariants>;
