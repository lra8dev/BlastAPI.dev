export const getRelativeTime = (inputDate: Date | number): string => {
  const now = new Date();
  const then = new Date(inputDate);
  const diffInMs = now.getTime() - then.getTime();

  const diffInSec = Math.floor(diffInMs / 1000);
  const diffInMin = Math.floor(diffInSec / 60);
  const diffInHour = Math.floor(diffInMin / 60);
  const diffInDay = Math.floor(diffInHour / 24);
  const diffInMonth = Math.floor(diffInDay / 30);
  const diffInYear = Math.floor(diffInDay / 365);

  if (diffInSec < 60) return `${diffInSec}s ago`;
  if (diffInMin < 60) return `${diffInMin}m ago`;
  if (diffInHour < 24) return `${diffInHour}h ago`;
  if (diffInDay === 1) return "Yesterday";
  if (diffInDay < 30) return `${diffInDay}d ago`;
  if (diffInMonth < 12) return `${diffInMonth}mo ago`;

  return `${diffInYear}yr ago`;
};
