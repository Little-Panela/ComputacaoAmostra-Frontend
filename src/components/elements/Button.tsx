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
				{"box-border w-32 h-16 p-1 flex justify-center items-center transition-colors outline-none ring-pallete-primary focus:ring-2": variant === "primary"})}
			{...props}
		>
			<div className={clsx(
				{"flex justify-center items-center w-full h-full px-7 py-3 gap-2 font-montserrat text-sm text-white font-bold border-2 border-pallete-primary rounded-full \
					hover:bg-pallete-primary-dark hover:border-pallete-primary-dark \
					active:bg-pallete-primary-xdark active:border-pallete-primary-xdark \
					transition-colors": variant === "primary"},
				className
			)}>
				{children}
			</div>
		</Comp>
	);
}