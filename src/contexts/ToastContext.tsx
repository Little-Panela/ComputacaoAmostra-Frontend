import type { ReactNode } from "react";
import { useState } from "react";
import { createContext } from "react";
import { Toast } from "../components/elements/Toast";

type ToastContextDataProps = {
  handleOpenToast: (message: string, title: string) => void;
  handleCloseToast: () => void;
};

type ToastContextProviderProps = {
  children: ReactNode;
};

export const ToastContext = createContext<ToastContextDataProps>(
  {} as ToastContextDataProps
);

export function ToastProvider({ children }: ToastContextProviderProps) {
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [content, setContent] = useState({
    title: "",
    message: "",
  });

  const handleOpenToast = (title: string, message: string) => {
    if (isToastOpen) {
      setIsToastOpen(false);
      setTimeout(() => {
        setContent({ title, message });
        setIsToastOpen(true);
      }, 400);
    } else {
      setContent({ title, message });
      setIsToastOpen(true);
    }
  };

  const handleCloseToast = () => {
    setIsToastOpen(false);
  };

  return (
    <ToastContext.Provider
      value={{
        handleOpenToast,
        handleCloseToast,
      }}
    >
      <Toast
        isOpen={isToastOpen}
        setIsOpen={setIsToastOpen}
        title={content.title}
        message={content.message}
      />
      {children}
    </ToastContext.Provider>
  );
}
