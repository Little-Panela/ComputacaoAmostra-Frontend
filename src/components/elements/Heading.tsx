import type { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface HeadingProps {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Heading ({
  size = "md",
  children,
  asChild,
  className,
}: HeadingProps) {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      className={clsx(
        "font-montserrat font-bold",
        {
          "text-lg": size === "sm",
          "text-xl": size === "md",
          "text-2xl": size === "lg",
          "text-3xl": size === "xl",
          "text-4xl": size === "2xl",
        },
        className
      )}
    >
      {children}
    </Comp>
  );
}
