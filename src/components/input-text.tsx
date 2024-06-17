import React, { LegacyRef, forwardRef, memo, useEffect, useLayoutEffect } from "react"
import { useRef } from "react"
import useSelector from "../utils/hooks/use-selector"
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
}

const TextContainer = forwardRef((props: TextProps, ref: RefCallBack|LegacyRef<HTMLInputElement> ) => {
    const internalRef = useRef<HTMLInputElement | null>(null);

    function handleRef(element: HTMLInputElement | null) {
      internalRef.current = element;
      if (ref instanceof Function) {
        ref(element); // Call the ref callback if provided
      }
    };

    function handleOnChange(e:React.ChangeEvent<HTMLInputElement>) {
        e.target.value = props.mask ? e.target.value.replace(/\D/g, '').replace(props.mask[0], props.mask[1]) : e.target.value
        props?.onChange ? props.onChange(e) : null
    }
    
    return (
        <div
            onClick={() => internalRef.current?.focus()}
            className={props.className}
            aria-disabled={props.disabled}
        >
            <input
                {...props}
                className="bg-transparent outline-none w-full"
                placeholder={props.placeholder}
                ref={handleRef}
                onChange={handleOnChange}
            />
        </div>
    )
})

const inputTextVariations = {
    default: (props: TextProps, ref) =>
        <TextContainer {...props} ref={ref} className="h-9 rounded border bg-transparent border-zinc-500  text-zinc-900 p-1 w-full flex items-center outline-2 focus-within:outline focus-within:border-transparent outline-oikos-white-blue pl-2 cursor-text aria-disabled:bg-zinc-300" />,
    'ultra-rounded': (props: TextProps, ref) =>
        <TextContainer {...props} ref={ref} className="h-9 rounded-full bg-white pl-6 items-center flex outline-2 focus-within:outline outline-oikos-white-blue cursor-text text-zinc-900 focus-within:border-transparent " />,
}

const Text = useSelector<keyof typeof inputTextVariations, TextProps>(inputTextVariations)

export default Text