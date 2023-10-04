import { useRef, useEffect } from 'react';

/** This function is created to see previous values in
 * hooks where you only have access to current value */
export const usePreviousValue = value => {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};
