interface CopyToClipboardProps {
  text: string;
  onCopy: () => void;
  onError?: () => void;
}

export const copyToClipboard = async ({ text, onCopy, onError }: CopyToClipboardProps) => {
  try {
    await navigator.clipboard.writeText(text);
    onCopy();
  } catch {
    onError?.();
  }
};
