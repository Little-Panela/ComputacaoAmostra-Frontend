import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import clsx from "clsx";
import Image from "next/image";

import { Heading } from "./Heading";
import { Text } from "./Text";

export type ModalProps = {
  trigger: React.ReactNode;
  title?: string;
  description?: string;
  closeButton?: boolean;
  children: React.ReactNode;
};

export function Modal({
  trigger,
  title,
  description,
  closeButton,
  children,
}: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal forceMount>
        <Transition.Root show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogPrimitive.Overlay
              forceMount
              className="fixed inset-0 z-20 bg-black/50"
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPrimitive.Content
              forceMount
              className={clsx(
                "fixed z-50",
                "w-[95vw] max-w-md rounded-lg p-4 max-sm:w-11/12",
                "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                "bg-white text-gray-950 shadow-lg shadow-black/25 ",
                "focus:outline-none"
              )}
            >
              {title && (
                <DialogPrimitive.Title asChild>
                  <Heading className="text-gray-950">{title}</Heading>
                </DialogPrimitive.Title>
              )}
              {description && (
                <DialogPrimitive.Description asChild className="mb-5 mt-3">
                  <Text>{description}</Text>
                </DialogPrimitive.Description>
              )}
              {children}
              {closeButton && (
                <DialogPrimitive.Close asChild>
                  <button
                    className="absolute right-3 top-3 inline-flex h-6 w-6 items-center justify-center rounded-full transition-colors hover:bg-gray-300 focus:shadow-sm"
                    aria-label="Close"
                  >
                    <Image
                      src="/static/icons/cross.svg"
                      height={24}
                      width={24}
                      alt="close icon"
                    />
                  </button>
                </DialogPrimitive.Close>
              )}
            </DialogPrimitive.Content>
          </Transition.Child>
        </Transition.Root>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
