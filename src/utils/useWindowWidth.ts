import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
  if (typeof window === "undefined") {
    return -1;
  }
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return width;
};
