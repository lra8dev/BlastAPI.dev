/**
 * Format number with appropriate suffix (K, M, B)
 */
export const formatNumberSuffix = (value: number, precision = 1): string => {
  if (value === 0) return "0";

  const abs = Math.abs(value);
  if (abs >= 1e9) return `${(value / 1e9).toFixed(precision)}B`;
  if (abs >= 1e6) return `${(value / 1e6).toFixed(precision)}M`;
  if (abs >= 1e3) return `${(value / 1e3).toFixed(precision)}K`;

  return value.toFixed(precision === 1 && value % 1 === 0 ? 0 : precision);
};
