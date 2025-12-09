"use client";

import { io, Socket } from "socket.io-client";
import { ConnectionState, SocketClientOptions, SocketEvents } from "@/types";

export class SocketClient {
  private socket: Socket | null = null;
  private isConnecting = false;
  private maxReconnectAttempts = 3;
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5001";
  }

  public async connect(options: SocketClientOptions = {}): Promise<void> {
    if (this.socket?.connected) {
      return;
    }

    if (this.isConnecting) {
      // Wait for current connection attempt
      return new Promise(resolve => {
        const checkConnection = setInterval(() => {
          if (!this.isConnecting) {
            clearInterval(checkConnection);
            resolve();
          }
        }, 100);
      });
    }

    this.isConnecting = true;

    try {
      this.socket = io(this.baseUrl, {
        autoConnect: options.autoConnect ?? true,
        reconnection: options.reconnection ?? true,
        reconnectionAttempts: this.maxReconnectAttempts,
        reconnectionDelay: options.reconnectionDelay ?? 1000,
        timeout: options.timeout ?? 20000,
        transports: ["websocket", "polling"],
      });

      this.socket.on("connect", () => {
        this.isConnecting = false;
      });

      this.socket.on("disconnect", reason => {
        this.isConnecting = false;
        if (reason === "io server disconnect") {
          this.reconnect();
        }
      });

      this.socket.on("connect_error", () => {
        this.isConnecting = false;
      });

      // Wait for connection to establish
      if (options.autoConnect !== false) {
        await new Promise<void>((resolve, reject) => {
          const timeout = setTimeout(() => {
            reject(new Error("Connection timeout"));
          }, options.timeout ?? 20000);

          this.socket!.once("connect", () => {
            clearTimeout(timeout);
            resolve();
          });

          this.socket!.once("connect_error", error => {
            clearTimeout(timeout);
            reject(error);
          });
        }).catch(() => {
          // Ignore timeout/error, connection will retry
        });
      }
    } catch (error) {
      this.isConnecting = false;
      throw error;
    }
  }

  public disconnect(): void {
    if (this.socket) {
      this.socket.removeAllListeners();
      this.socket.disconnect();
      this.socket = null;
    }
    this.isConnecting = false;
  }

  public async reconnect(): Promise<void> {
    this.disconnect();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await this.connect();
  }

  public on<K extends keyof SocketEvents>(event: K, listener: SocketEvents[K]): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.socket?.on(event, listener as any);
  }

  public off<K extends keyof SocketEvents>(event: K, listener?: SocketEvents[K]): void {
    if (listener) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.socket?.off(event, listener as any);
    } else {
      this.socket?.off(event);
    }
  }

  public emit(event: string, data?: unknown): void {
    if (this.socket?.connected) {
      this.socket.emit(event, data);
    }
  }

  public startTest(testRunId: string): void {
    this.emit("test:start", { testRunId });
  }

  public stopTest(testRunId: string): void {
    this.emit("test:stop", { testRunId });
  }

  public get isConnected(): boolean {
    return this.socket?.connected ?? false;
  }

  public get connectionState(): ConnectionState {
    if (this.isConnecting) return "connecting";
    return this.socket?.connected ? "connected" : "disconnected";
  }
}

let socketClient: SocketClient | null = null;

export const getSocketClient = (): SocketClient => {
  if (!socketClient) {
    socketClient = new SocketClient();
  }
  return socketClient;
};
