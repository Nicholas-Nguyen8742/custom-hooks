import { useEffect, useState, useRef } from 'react';

interface useDebounceProps {
  value: unknown;
  delay?: number;
}

export default function useDebounce({ value, delay }: useDebounceProps) {
  const [debouncedValue, setDebouncedValue] = useState<unknown>(value);
  const timerRef = useRef<number | undefined>();

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 1000);

    return () => {
      clearTimeout(timerRef.current);
    }
  }, [value, delay]);

  return debouncedValue;
}
