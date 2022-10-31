export interface LocalStorage {
    cities?: string[];
}

export type LocalStorageKeys = keyof LocalStorage

export const setStoredCities = (cities: string[]): Promise<void> => {
    const vals: LocalStorage = {
        // will help us make sure we don't set unintended keys, also will help with our getter func
        cities,
    };
    return new Promise((resolve) => {
        chrome.storage.local.set(vals, () => {
            resolve();
        });
    });
};

export const getStoredCities = (): Promise<string[]> => {
    const keys =
};
