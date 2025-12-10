export const formatDateTime = (
  date: Date | number,
  options?: Intl.DateTimeFormatOptions,
): string => {
  if (!date) return "";

  return new Date(date).toLocaleDateString(undefined, {
    hour12: true,
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
    ...options,
  });
};
