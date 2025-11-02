import React from 'react'
import { ITextContainerProps, TextContainer } from 'react-base-components'
import { componentSelector } from "react-component-selector"

const inputTextVariations = {
    default: (props: ITextContainerProps, ref: any) =>
        <TextContainer {...props} ref={ref} className="h-9 rounded border bg-transparent border-zinc-500  text-zinc-900 p-1 w-full flex items-center outline-2 focus-within:outline focus-within:border-transparent outline-violet-500 pl-2 cursor-text aria-disabled:bg-zinc-300 aria-disabled:border-none aria-disabled:shadow-sm aria-[atomic]:animate-pulse" />,
    "default-full": (props: ITextContainerProps, ref: any) =>
        <TextContainer {...props} ref={ref} className="h-full rounded border bg-transparent border-zinc-500  text-zinc-900 p-1 w-full flex items-center outline-2 focus-within:outline focus-within:border-transparent outline-violet-500 pl-2 cursor-text aria-disabled:bg-zinc-300 aria-disabled:border-none aria-disabled:shadow-sm aria-[atomic]:animate-pulse" />,
    'ultra-rounded': (props: ITextContainerProps, ref: any) =>
        <TextContainer {...props} ref={ref} className="h-9 rounded-full bg-white pl-6 items-center flex outline-2 focus-within:outline outline-violet-500 cursor-text text-zinc-900 focus-within:border-transparent aria-[atomic]:animate-pulse" />,
}

const Text = componentSelector<keyof typeof inputTextVariations, ITextContainerProps, "className">(inputTextVariations)

export default Text