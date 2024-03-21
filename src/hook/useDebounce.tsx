import { useState, useEffect, useRef } from "react";

function useDebounce(changedValue: any, delayTime: any) {
  const [debouncedValue, setDebouncedValue] = useState(changedValue);
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (changedValue != true) {
      timeoutRef.current = setTimeout(() => {
        setDebouncedValue(changedValue);
      }, delayTime);
    } else {
      setDebouncedValue(changedValue);
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [changedValue, delayTime, timeoutRef]);

  return debouncedValue;
}

export default useDebounce;
