import { LucideLoaderCircle } from 'lucide-react';
import React, { LegacyRef, forwardRef } from 'react';
import { useSelector } from '../utils/hooks/selector-hooks';

interface ButtonProps {
  loading?: boolean
  loadingComponent?: React.ReactNode
  children: React.ReactNode
  className: string
  ref: any
  onClick?: (e: any) => any
  type?: "submit" | "reset" | "button" | undefined
  form?: string
}

const ButtonContainer = forwardRef((_: ButtonProps, ref: LegacyRef<HTMLButtonElement>) => {
  return (
    <button
      ref={ref}
      className={_.className}
      onClick={_.onClick}
      type={_.type}
      form={_.form}
      disabled={_.loading}
    >
      {_.loading ? _.loadingComponent : _.children}
    </button>
  );
})

const buttonVariations = {
  default: (props: ButtonProps, ref: any) => {
    return (
      <ButtonContainer
        {...props}
        ref={ref}
        loadingComponent={
          <LucideLoaderCircle className='w-6 h-6 rotating-div' />
        }
        className='bg-violet-500 text-nowrap px-2 w-full rounded shadow hover:bg-opacity-70 transition-all h-9 p-1 text-zinc-50 font-semibold flex justify-center items-center' />
    )
  },
  red: (props: ButtonProps, ref: any) => {
    return (
      <ButtonContainer
        {...props}
        ref={ref}
        loadingComponent={
          <LucideLoaderCircle className='w-6 h-6 rotating-div' />
        }
        className='bg-red-500 px-2 w-full rounded shadow hover:bg-opacity-70 transition-all h-9 p-1 text-zinc-50 font-semibold flex justify-center items-center' />
    )
  },
  href: (props: ButtonProps, ref: any) => {
    return (
      <ButtonContainer
        {...props}
        ref={ref}
        loadingComponent={
          <LucideLoaderCircle className='w-6 h-6 rotating-div' />
        }
        className='border-violet-500 p-2 px-3 rounded-full border text-sm bg-violet-500 bg-opacity-20 w-fit text-violet-500 hover:bg-opacity-30 transition-all' />
    )
  }
}

const Button = useSelector<keyof typeof buttonVariations, ButtonProps>(buttonVariations)

export default Button
