import { Clock, Wifi, WifiOff } from "lucide-react";

interface ConnectionStatusProps {
  isConnected: boolean;
  connectionState: "disconnected" | "connecting" | "connected";
}

export const ConnectionStatus = ({ isConnected, connectionState }: ConnectionStatusProps) => {
  const getStatusColor = () => {
    if (connectionState === "connecting") return "text-yellow-600";
    if (isConnected) return "text-green-600";
    return "text-red-600";
  };

  const getStatusText = () => {
    if (connectionState === "connecting") return "Connecting...";
    if (isConnected) return "Live Updates Active";
    return "Disconnected";
  };

  const StatusIcon = () => {
    if (connectionState === "connecting") return <Clock className="w-4 h-4 animate-spin" />;
    if (isConnected) return <Wifi className="w-4 h-4" />;
    return <WifiOff className="w-4 h-4" />;
  };

  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg">
      <StatusIcon />
      <span className={`text-sm font-medium ${getStatusColor()}`}>{getStatusText()}</span>
    </div>
  );
};
