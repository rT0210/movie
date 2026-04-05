import { useState } from "react";

export const useSlider = (items, visibleCount) => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleItems = items.slice(startIndex, startIndex + visibleCount);

  const next = () => {
    setStartIndex((prev) => prev + 1);
  };

  const previous = () => {
    setStartIndex((prev) => prev - 1);
  };

  const isPrevDisabled = startIndex === 0;
  const isNextDisabled =
    items[items.length - 1] === visibleItems[visibleItems.length - 1];

  return {
    visibleItems,
    next,
    previous,
    isPrevDisabled,
    isNextDisabled,
  };
};
