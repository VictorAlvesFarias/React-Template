import React, { LegacyRef, forwardRef, memo, useEffect, useLayoutEffect } from "react";
import { useRef } from "react";
import { useSelector } from "../utils/hooks/selector-hooks";
import { RefCallBack } from "react-hook-form";

interface TextProps {
    readonly?: boolean;
    disabled?: boolean;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => any;
    onBlur?: (e: any) => any;
    ref?: any;
    value?: any;
    className: string;
    placeholder?: string;
    mask?: [RegExp, string];
    type?: string;
    loading?: boolean;
}

const TextContainer = forwardRef((props: TextProps, ref: RefCallBack | LegacyRef<HTMLTextAreaElement>) => {
    const internalRef = useRef<HTMLTextAreaElement | null>(null);

    function handleRef(element: HTMLTextAreaElement | null) {
        internalRef.current = element;
        if (ref instanceof Function) {
            ref(element);
        }
    }

    function handleOnChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        e.target.value = props.mask ? e.target.value.replace(/\D/g, '').replace(props.mask[0], props.mask[1]) : e.target.value;
        props?.onChange ? props.onChange(e) : null;
    }

    return (
        <div
            onClick={() => internalRef.current?.focus()}
            className={props.className}
            aria-disabled={props.disabled}
            aria-atomic={props.loading}
        >
            <textarea
                {...props}
                className="bg-transparent outline-none w-full h-full resize-none"
                placeholder={props.placeholder}
                ref={handleRef}
                onChange={handleOnChange}
            />
        </div>
    );
});

const textAreaVariations = {
    default: (props: TextProps, ref) =>
        <TextContainer {...props} ref={ref} className="h-9 rounded border bg-transparent border-zinc-500 text-zinc-900 p-1 w-full flex items-center outline-2 focus-within:outline focus-within:border-transparent outline-violet-500 pl-2 cursor-text aria-disabled:bg-zinc-300 aria-disabled:border-none aria-disabled:shadow-sm aria-[atomic]:animate-pulse" />,
    "default-full": (props: TextProps, ref) =>
        <TextContainer {...props} ref={ref} className="h-full resize-none rounded border bg-transparent border-zinc-500 text-zinc-900 p-1 w-full flex items-center outline-2 focus-within:outline focus-within:border-transparent outline-violet-500 pl-2 cursor-text aria-disabled:bg-zinc-300 aria-disabled:border-none aria-disabled:shadow-sm aria-[atomic]:animate-pulse" />,
    'ultra-rounded': (props: TextProps, ref) =>
        <TextContainer {...props} ref={ref} className="h-9 rounded-full bg-white pl-6 items-center flex outline-2 focus-within:outline outline-violet-500 cursor-text text-zinc-900 focus-within:border-transparent aria-[atomic]:animate-pulse" />,
};

const TextArea = useSelector<keyof typeof textAreaVariations, TextProps>(textAreaVariations);

export default TextArea;
