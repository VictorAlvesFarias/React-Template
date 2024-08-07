import React, { LegacyRef, forwardRef} from "react";
import { useRef } from "react";
import { RefCallBack } from "react-hook-form";

interface ITextContainerProps {
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

const TextContainer = forwardRef((props: ITextContainerProps, ref: RefCallBack | LegacyRef<HTMLTextAreaElement>) => {
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

export default TextContainer;

export {
    ITextContainerProps
}