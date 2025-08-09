export const generateFallbackChars = (input: string): string => {
  if (input.includes("@")) {
    const emailName = input.split("@")[0];
    return emailName.slice(0, 2).toUpperCase();
  }

  const nameParts = input.split(" ");

  if (nameParts.length === 1) {
    return (nameParts[0][0] + nameParts[0][1]).toUpperCase();
  } else {
    return (nameParts[0][0] + nameParts[1][0]).toUpperCase();
  }
};
