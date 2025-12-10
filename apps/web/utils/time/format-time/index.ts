export const formatTime = (date: Date | number): string => {
  if (!date) return "";

  return new Date(date).toLocaleTimeString(undefined, {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};
