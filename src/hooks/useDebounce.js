import { useEffect, useRef } from 'react';

function useDebounce(callback, delay, deps) {
  const callbackRef = useRef();

  // Always keep the latest callback
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (callbackRef.current) {
        callbackRef.current();
      }
    }, delay);

    // Cleanup if dependencies change or component unmounts
    return () => {
      clearTimeout(handler);
    };
  }, [...(deps || []), delay]);
}

export default useDebounce;
