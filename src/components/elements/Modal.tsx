import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import clsx from "clsx";
import Image from "next/image";

import { Heading } from "./Heading";
import { Text } from "./Text";
import { useRouter } from "next/router";

export type ModalProps = {
  trigger: React.ReactNode;
  title?: string;
  description?: string;
  closeButton?: boolean;
  course: string;
  // githubLink?: string;
  children: React.ReactNode;
};

export function Modal({
  trigger,
  title,
  description,
  closeButton,
  course,
  // githubLink,
  children,
}: ModalProps) {
  const router = useRouter();
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
              onClick={() => {
                void router.push(`/voting?course=${course}`, undefined, { scroll: false });
              }}
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
            {/* max-h-[600px]  */}
            <DialogPrimitive.Content
              forceMount
              className={clsx(
                "fixed z-50",
                "w-[95vw] max-w-6xl rounded-lg p-6 max-h-[95vh] max-sm:w-11/12 max-sm:p-4",
                "overflow-y-auto overflow-x-hidden",
                "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                "flex flex-col gap-9 max-sm:gap-2",
                "bg-white text-gray-950 shadow-lg shadow-black/25 ",
                "focus:outline-none",
              )}
            >
              {title && (
                <div className="flex gap-3 self-center">
                  <DialogPrimitive.Title asChild>
                    <Heading size="2xl" className="text-gray-950">{title}</Heading>
                  </DialogPrimitive.Title>
                </div>
              )}
              {description && (
                <DialogPrimitive.Description asChild>
                  <Text>{description}</Text>
                </DialogPrimitive.Description>
              )}
              {children}
              {closeButton && (
                <DialogPrimitive.Close asChild>
                  <button
                    className="absolute right-3 top-3 inline-flex h-6 w-6 items-center justify-center rounded-full transition-colors hover:bg-gray-300 focus:shadow-sm"
                    aria-label="Close"
                    onClick={() => {
                      void router.push(`/voting?course=${course}`, undefined, { scroll: false });
                    }}
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
