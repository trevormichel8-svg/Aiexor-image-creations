"use client";

export interface ToastOptions {
  message: string;
  type?: "success" | "error" | "info";
}

/**
 * useToast – custom hook for triggering toasts
 */
export function useToast() {
  function showToast({ message, type = "info" }: ToastOptions) {
    window.dispatchEvent(
      new CustomEvent("toast", {
        detail: { message, type },
      })
    );
  }

  return {
    success: (msg: string) => showToast({ message: msg, type: "success" }),
    error: (msg: string) => showToast({ message: msg, type: "error" }),
    info: (msg: string) => showToast({ message: msg, type: "info" }),
  };
}
