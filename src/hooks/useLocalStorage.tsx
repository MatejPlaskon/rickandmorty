import { Dispatch, useCallback, useEffect, useState } from "react";

export enum LocalStorageData {
  SelectedEpisode = "selectedEpisode",
}

export const useLocalStorage = <T extends object>(
  key: LocalStorageData,
  initialValue = {} as T,
): [T, Dispatch<T>] => {
  const getStorageValue = (): T => {
    const item = window.localStorage.getItem(key);
    if (!item) return {} as T;
    try {
      return JSON.parse(item) as T;
    } catch {
      return {} as T;
    }
  };

  const [value, setValue] = useState(() => getStorageValue());

  const setItem = (newValue: T) => {
    setValue(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  };

  const handleStorage = useCallback(
    (event: StorageEvent) => {
      if (
        event.key === key &&
        event.newValue &&
        JSON.parse(event.newValue) !== value
      ) {
        setValue(JSON.parse(event.newValue) || initialValue);
      }
    },
    [key, initialValue, value],
  );

  useEffect(() => {
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [handleStorage]);

  return [value, setItem];
};
