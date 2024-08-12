import { AlertIcon } from "./AlertIcon";
export declare const Alert: {
    Root: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLDivElement> & import("./AlertVariants").AlertVariantProps & {
        icon?: import("react").ReactNode;
    } & import("react").RefAttributes<HTMLDivElement>>;
    Title: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLHeadingElement> & import("react").RefAttributes<HTMLParagraphElement>>;
    Description: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLParagraphElement> & import("react").RefAttributes<HTMLParagraphElement>>;
    Icon: typeof AlertIcon;
};
