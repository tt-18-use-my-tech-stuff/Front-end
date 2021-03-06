import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    } else {
      window.localStorage.setItem(key, initialValue);
      return initialValue;
    }
  });
  const setLocallyStoredValue = (newLocallyStoredValue) => {
    window.localStorage.setItem(key, JSON.stringify(newLocallyStoredValue));
    setStoredValue(newLocallyStoredValue);
  };

  return [storedValue, setLocallyStoredValue];
};
export default useLocalStorage;
