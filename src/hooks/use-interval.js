import { useRef, useEffect } from 'react';

export function useInterval(callback, delay) {
  const ref = useRef();

  // Remember the latest callback.
  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      ref.current?.();
    }

    if (delay !== null) {
      const id = window.setInterval(tick, delay);
      return () => {
        window.clearInterval(id);
      };
    }

    return () => {};
  }, [delay]);
}
