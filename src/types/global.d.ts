export {};

declare global {
  interface Window {
    google?: {
      accounts?: {
        id: {
          prompt: (callback: (notification: unknown) => void) => void;
        };
      };
    };
  }
}
