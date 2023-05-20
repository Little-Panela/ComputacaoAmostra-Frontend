import type { LinkHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import Link from 'next/link';

export interface LinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
    route: string;
    asChild?: boolean;
    className?: string; // Adicionado className à interface
}

export function LinkComponent ({
    children,
    route,
    asChild,
    className,
    ...props
}: LinkProps) {
    const Comp = asChild ? Slot : Link;

    return (
        <Comp
            href={route}
            passHref
            className={clsx(
                "w-full text-white hover:text-pallete-primary focus:border-2 border-pallete-primary py-2 px-3 text-sm font-semibold transition-colors outline-none",
                className
            )
            }
            {...props}
        >
            {children}
        </Comp>
    );
}
