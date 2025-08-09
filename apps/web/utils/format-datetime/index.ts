export const formatDateTime = (inputDate: Date | number): string => {
  const date = new Date(inputDate);

  const formattedDate = date.toLocaleString("en-IN", {
    hour12: true,
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Kolkata",
    timeZoneName: "short",
  });

  return formattedDate;
};
