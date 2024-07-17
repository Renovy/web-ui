import * as SheetPrimitive from "@radix-ui/react-dialog";
export declare const Sheet: {
    Root: import("react").FC<SheetPrimitive.DialogProps>;
    Trigger: import("react").ForwardRefExoticComponent<SheetPrimitive.DialogTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
    Close: import("react").ForwardRefExoticComponent<SheetPrimitive.DialogCloseProps & import("react").RefAttributes<HTMLButtonElement>>;
    Portal: import("react").FC<SheetPrimitive.DialogPortalProps>;
    Overlay: import("react").ForwardRefExoticComponent<Omit<SheetPrimitive.DialogOverlayProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    Content: import("react").ForwardRefExoticComponent<import("./SheetContent").SheetContentProps & import("react").RefAttributes<HTMLDivElement>>;
    Header: {
        ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Footer: {
        ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Title: import("react").ForwardRefExoticComponent<Omit<SheetPrimitive.DialogTitleProps & import("react").RefAttributes<HTMLHeadingElement>, "ref"> & import("react").RefAttributes<HTMLHeadingElement>>;
};
