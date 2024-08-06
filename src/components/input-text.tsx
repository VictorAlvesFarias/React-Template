import React, { LegacyRef, forwardRef, memo, useEffect, useLayoutEffect } from "react"
import { useRef } from "react"
import { useSelector } from "../utils/hooks/selector-hooks"
import { RefCallBack } from "react-hook-form"

interface TextProps {
    readonly?: boolean
    disabled?: boolean
    name?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any
    onBlur?: (e: any) => any
    ref?: any,
    value?: any
    className: string
    placeholder?: string
    mask?: [RegExp, string]
    type?: string
    loading?: boolean
}

const TextContainer = forwardRef((props: TextProps, ref: RefCallBack | LegacyRef<HTMLInputElement>) => {
    const internalRef = useRef<HTMLInputElement | null>(null);

    function handleRef(element: HTMLInputElement | null) {
        if(props.mask&&element){
            const [regex, replacement] = props.mask;
            element.value = element.value.replace(/\D/g, '')
            element.value = element.value.replace(regex, replacement)
        }

        internalRef.current = element;
        if (ref instanceof Function) {
            ref(element);
        }
    };

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        if(props.mask){
            const [regex, replacement] = props.mask;
            e.target.value = e.target.value.replace(/\D/g, '')
            e.target.value = e.target.value.replace(regex, replacement)
        }
        else {
            e.target.value = e.target.value
        }
    
        props?.onChange ? props.onChange(e) : null
    }

    return (
        <div
            onClick={() => internalRef.current?.focus()}
            className={props.className}
            aria-disabled={props.disabled}
            aria-atomic={props.loading}
        >
            <input
                {...props}
                className="bg-transparent outline-none w-full h-full"
                placeholder={props.placeholder}
                ref={handleRef}
                onChange={handleOnChange}
            />
        </div>
    )
})

const inputTextVariations = {
    default: (props: TextProps, ref) =>
        <TextContainer {...props} ref={ref} className="h-9 rounded border bg-transparent border-zinc-500  text-zinc-900 p-1 w-full flex items-center outline-2 focus-within:outline focus-within:border-transparent outline-violet-500 pl-2 cursor-text aria-disabled:bg-zinc-300 aria-disabled:border-none aria-disabled:shadow-sm aria-[atomic]:animate-pulse" />,
    "default-full": (props: TextProps, ref) =>
        <TextContainer {...props} ref={ref} className="h-full rounded border bg-transparent border-zinc-500  text-zinc-900 p-1 w-full flex items-center outline-2 focus-within:outline focus-within:border-transparent outline-violet-500 pl-2 cursor-text aria-disabled:bg-zinc-300 aria-disabled:border-none aria-disabled:shadow-sm aria-[atomic]:animate-pulse" />,
    'ultra-rounded': (props: TextProps, ref) =>
        <TextContainer {...props} ref={ref} className="h-9 rounded-full bg-white pl-6 items-center flex outline-2 focus-within:outline outline-violet-500 cursor-text text-zinc-900 focus-within:border-transparent aria-[atomic]:animate-pulse" />,
}

const Text = useSelector<keyof typeof inputTextVariations, TextProps>(inputTextVariations)

export default Text