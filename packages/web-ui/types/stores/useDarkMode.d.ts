type Props = {
    isDark: boolean;
    toggleIsDark: () => void;
};
export declare const useDarkMode: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<Props>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<Props, Props>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: Props) => void) => () => void;
        onFinishHydration: (fn: (state: Props) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<Props, Props>>;
    };
}>;
export {};
