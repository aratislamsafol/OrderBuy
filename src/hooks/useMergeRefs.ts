import { useCallback } from "react";
import type { Ref } from "react";

export function useMergedRefs<T>(...refs: Ref<T>[]): Ref<T> {
  return useCallback((value: T) => {
    refs.forEach(ref => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(value);
      } else {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  }, [refs]);
}
