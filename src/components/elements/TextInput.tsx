import type { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 h-14 p-4 bg-transparent border-b border-pallete-primary border-b-solid w-full justify-between">
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
    <Slot className="w-6 h-6 text-white">
      {props.children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>

function TextInputInput({placeholder, ...props}: TextInputInputProps) {
  return (
    <div className='flex relative w-full group'>
      <label className='z-[1] bottom-0 text-zinc-500 text-sm absolute font-montserrat group-focus-within:bottom-6 group-focus-within:block group-focus-within:text-pallete-primary transition-all duration-700'>{placeholder}</label>
      <input
        className="z-[10] bg-transparent flex-1 items-center text-white font-montserrat text-sm outline-none"
        {...props}
      />
    </div>
  )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}