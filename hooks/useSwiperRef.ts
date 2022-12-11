import React, { useRef, useState, useEffect } from 'react';

const useSwiperRef = <T extends HTMLElement>(): [T | null, React.Ref<T>] => {
  const [wrapper, setWrapper] = useState<T | null>(null);
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      setWrapper(ref.current);
    }
  }, []);

  return [wrapper, ref];
};

export default useSwiperRef;
