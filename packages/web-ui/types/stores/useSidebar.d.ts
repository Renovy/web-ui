type Props = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    toggleSidebar: () => void;
};
export declare const useSidebar: import("zustand").UseBoundStore<import("zustand").StoreApi<Props>>;
export {};
