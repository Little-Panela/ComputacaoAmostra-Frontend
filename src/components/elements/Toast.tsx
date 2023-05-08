import * as ToastPrimitive from "@radix-ui/react-toast";
import { clsx } from "clsx";
import { useMediaQuery } from "../../hooks/useMediaQuery";


type ToastProps = {
  title: string;
  message: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export function Toast({ title, message, isOpen, setIsOpen }: ToastProps) {
  const isMd = useMediaQuery("(min-width: 768px)");

  return (
    <ToastPrimitive.Provider swipeDirection={isMd ? "right" : "down"}>
      <ToastPrimitive.Root
        open={isOpen}
        onOpenChange={setIsOpen}
        className={clsx(
          "fixed inset-x-4 bottom-4 z-[999] w-auto rounded-lg shadow-lg md:bottom-auto md:left-auto md:right-4 md:top-4 md:w-full md:max-w-sm",
          "bg-white dark:bg-gray-800",
          "radix-state-open:animate-toast-slide-in-bottom md:radix-state-open:animate-toast-slide-in-right",
          "radix-state-closed:animate-toast-hide",
          "radix-swipe-direction-right:radix-swipe-end:animate-toast-swipe-out-x",
          "radix-swipe-direction-right:translate-x-radix-toast-swipe-move-x",
          "radix-swipe-direction-down:radix-swipe-end:animate-toast-swipe-out-y",
          "radix-swipe-direction-down:translate-y-radix-toast-swipe-move-y",
          "radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease]",
          "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        )}
      >
        <div className="flex">
          <div className="flex w-0 flex-1 items-center py-4 pl-5">
            <div className="radix w-full">
              {title && (
                <ToastPrimitive.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {title}
                </ToastPrimitive.Title>
              )}
              <ToastPrimitive.Description className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                {message}
              </ToastPrimitive.Description>
            </div>
          </div>
          <div className="flex items-center">
            {/* <div className="flex flex-col space-y-1 px-3 py-2"> */}
              {/* <div className="h-0 flex-1 flex">
                <ToastPrimitive.Action
                  altText="view now"
                  className="w-full border border-transparent rounded-lg px-3 py-2 flex items-center justify-center text-sm font-medium text-purple-600 dark:text-purple-500 hover:bg-gray-50 dark:hover:bg-gray-900 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://github.com");
                  }}
                >
                  Review
                </ToastPrimitive.Action>
              </div> */}
              {/* <div className="flex h-0 flex-1"> */}
                <ToastPrimitive.Close className="flex w-full items-center justify-center rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 dark:text-gray-100 dark:hover:bg-gray-900">
                  Dispersar
                </ToastPrimitive.Close>
              {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </ToastPrimitive.Root>

      <ToastPrimitive.Viewport />
    </ToastPrimitive.Provider>
  );
}
