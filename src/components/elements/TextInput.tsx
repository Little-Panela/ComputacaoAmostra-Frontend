import type { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 h-12 py-4 px-3 rounded-lg bg-transparent border border-solid border-gray-400 w-full">
      {props.children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-zinc-500">
      {props.children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-800 text-xs placeholder:text-zinc-500 outline-none"
      {...props}
    />
  )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}