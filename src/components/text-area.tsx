import TextContainer, { ITextContainerProps } from '../base-components/text-area';
import { useSelector } from '../utils/hooks/selector-hooks'
import React from 'react'

const textAreaVariations = {
    default: (props: ITextContainerProps, ref) =>
        <TextContainer {...props} ref={ref} className="h-9 rounded border bg-transparent border-zinc-500 text-zinc-900 p-1 w-full flex items-center outline-2 focus-within:outline focus-within:border-transparent outline-violet-500 pl-2 cursor-text aria-disabled:bg-zinc-300 aria-disabled:border-none aria-disabled:shadow-sm aria-[atomic]:animate-pulse" />,
    "default-full": (props: ITextContainerProps, ref) =>
        <TextContainer {...props} ref={ref} className="h-full resize-none rounded border bg-transparent border-zinc-500 text-zinc-900 p-1 w-full flex items-center outline-2 focus-within:outline focus-within:border-transparent outline-violet-500 pl-2 cursor-text aria-disabled:bg-zinc-300 aria-disabled:border-none aria-disabled:shadow-sm aria-[atomic]:animate-pulse" />,
    'ultra-rounded': (props: ITextContainerProps, ref) =>
        <TextContainer {...props} ref={ref} className="h-9 rounded-full bg-white pl-6 items-center flex outline-2 focus-within:outline outline-violet-500 cursor-text text-zinc-900 focus-within:border-transparent aria-[atomic]:animate-pulse" />,
};

const TextArea = useSelector<keyof typeof textAreaVariations, ITextContainerProps>(textAreaVariations);

export default TextArea;
