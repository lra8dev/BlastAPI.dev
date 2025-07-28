export const percentile = (sortedArray: number[], p: number): number => {
  if (sortedArray.length === 0) {
    return 0;
  }

  const index = Math.ceil((p / 100) * sortedArray.length) - 1;

  return sortedArray[Math.max(0, Math.min(index, sortedArray.length - 1))] || 0;
};
