import { ButtonContent } from "./ButtonContent";
import { ButtonIcon } from "./ButtonIcon";
export declare const Button: {
    Root: import("react").ForwardRefExoticComponent<import("react").ButtonHTMLAttributes<HTMLButtonElement> & import("class-variance-authority").VariantProps<(props?: {
        variant?: "default" | "accent" | "success" | "danger" | "ghost";
        size?: "default" | "sm" | "lg" | "icon";
    } & import("class-variance-authority/types").ClassProp) => string> & {
        isLoading?: boolean;
    } & import("react").RefAttributes<HTMLButtonElement>>;
    Content: typeof ButtonContent;
    Icon: typeof ButtonIcon;
};
