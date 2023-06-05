import { useState, useEffect } from 'react';

const useScrollPosition = () => {
  if (typeof window === "undefined") {
    return 0;
  }
  const [scroll, setScroll] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scroll;
};

export default useScrollPosition;
