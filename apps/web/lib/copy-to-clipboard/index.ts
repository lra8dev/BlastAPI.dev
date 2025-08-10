export const copyToClipboard = async (text: string): Promise<string | undefined> => {
  try {
    text = text.trim();
    await navigator.clipboard.writeText(text);
    return text;
  } catch (error) {
    console.error("Clipboard copy failed", { error });
    return undefined;
  }
};
