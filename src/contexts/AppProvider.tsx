import type { ReactNode } from "react";
import { GenerateSessionProvider } from "./GenerateSessionProvider";

import { ReactQueryProvider } from "./ReactQueryProvider";

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ReactQueryProvider>
      <GenerateSessionProvider>{children}</GenerateSessionProvider>
    </ReactQueryProvider>
  );
}
