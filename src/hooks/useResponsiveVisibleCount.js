import { useEffect, useState } from "react";

export const useResponsiveVisibleCount = () => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(2);
      else if (width < 1024) setVisibleCount(4);
      else setVisibleCount(6);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);
  
  return visibleCount
};
