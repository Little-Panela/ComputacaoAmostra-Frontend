import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
  asChild?: boolean;
}

export function Button({
  variant = "primary",
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        {
          "box-border w-fit h-fit flex text-center justify-center items-center gap-2 rounded-full border-2 border-pallete-primary px-7 py-3 font-montserrat text-sm font-bold text-white \
					transition-colors hover:border-pallete-primary-dark \
					hover:bg-pallete-primary-dark active:border-pallete-primary-xdark \
					active:bg-pallete-primary-xdark \
					focus:outline-3 outline-white ring-transparent": variant === "primary",
        },
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
