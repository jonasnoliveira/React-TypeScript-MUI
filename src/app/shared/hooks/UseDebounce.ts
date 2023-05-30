import { get } from 'https';
import { useCallback, useRef } from 'react';

export const useDebounce = (delay = 300, notDelayInFirstTime = true) => {
  const isFirstTime = useRef(notDelayInFirstTime);
  const deboucing = useRef<NodeJS.Timeout>();

  const debounce = useCallback((func: () => void) => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
    } else {
      if (deboucing.current) {
        clearTimeout(deboucing.current);
      }

      deboucing.current = setTimeout(() => func(), delay);
    }
  }, []);
  return { debounce };
};
