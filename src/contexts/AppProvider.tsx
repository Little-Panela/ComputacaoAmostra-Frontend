import type { ReactNode } from "react";
import { GenerateSessionProvider } from "./GenerateSessionProvider";

import { ReactQueryProvider } from "./ReactQueryProvider";
import { ToastProvider } from "./ToastContext";

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ReactQueryProvider>
      <GenerateSessionProvider>
        <ToastProvider>{children}</ToastProvider>
      </GenerateSessionProvider>
    </ReactQueryProvider>
  );
}
