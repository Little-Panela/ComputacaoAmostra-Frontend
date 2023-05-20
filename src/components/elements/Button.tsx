import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	asChild?: boolean;
}

export function Button({
	children,
	asChild,
	className,
	...props
}: ButtonProps) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			className={clsx(
				"w-full rounded py-3 px-4 text-sm font-semibold text-white ring-pallete-primary-light transition-colors hover:bg-pallete-primary-light hover:text-gray-100 focus:ring-2",
				className
			)}
			{...props}
		>
			{children}
		</Comp>
	);
}