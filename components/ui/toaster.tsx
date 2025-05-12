"use client"

import { useToast } from "@/hooks/use-toast"
import { Toast, ToastClose, ToastDescription, ToastTitle } from "@/components/ui/toast"

export function Toaster() {
  const { toasts, dismiss } = useToast()

  return (
    <div className="fixed top-0 z-[100] flex flex-col items-end gap-2 p-4 max-h-screen w-full">
      {toasts.map((toast, index) => (
        <Toast key={index} variant={toast.variant}>
          <div className="flex flex-col gap-1">
            {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
            {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
          </div>
          {toast.action}
          <ToastClose onClick={() => dismiss(index)} />
        </Toast>
      ))}
    </div>
  )
}
