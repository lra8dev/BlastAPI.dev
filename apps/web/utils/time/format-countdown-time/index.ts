export const formatCountdownTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  if (minutes === 0) {
    return {
      display: remainingSeconds.toString(),
      isSecondsOnly: true,
    };
  }

  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  return {
    display: `${formattedMinutes}:${formattedSeconds}`,
    isSecondsOnly: false,
  };
};
