import { useEffect, useState } from "react";

const UseResizeWindow = () => {
  const [resize, setResize] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setResize(window.innerWidth);
    window.addEventListener('resize', handleResize);

    const timeOut = setTimeout(() => {
      handleResize();
    }, 3000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeOut);
    }
  }, []);

  return resize;
};

export default UseResizeWindow;