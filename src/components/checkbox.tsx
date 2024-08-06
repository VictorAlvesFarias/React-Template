import React, { LegacyRef, forwardRef, useEffect, useRef, useState } from "react"
import { useSelector } from "../utils/hooks/selector-hooks"
import { RefCallBack } from "react-hook-form"
import { set } from "zod"

interface CheckboxProps {
    readonly?: boolean
    disabled?: boolean
    name?: string
    onChange?: (e: any, i?: any) => any
    onBlur?: (e: any) => any
    ref?: any,
    value?: any
    checked?: boolean
    className?: string
    children: React.ReactNode
    data: any
}

const CheckboxContainer = forwardRef((props: CheckboxProps, ref: RefCallBack | LegacyRef<HTMLInputElement>) => {
    const internalRef = useRef<HTMLInputElement | null>(null);
    const [checked, setChecked] = useState(false)

    function handleRef(element: HTMLInputElement | null) {
        internalRef.current = element;
        if (ref instanceof Function) {
            ref(element);
        }
    };

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement> | any) {
        if (!props.disabled && (props.value == null || props.value == undefined)) {
            if (!checked) {
                e.target.value = true
            }
            else {
                e.target.value = false
            }

            props?.onChange ? props.onChange(e, props.data) : null
            setChecked(!checked)
        }
        else if (!props.disabled && (props.value != null && props.value != undefined)) {
            props?.onChange ? props.onChange(e, props.data) : null
        }
    }

    useEffect(() => {
        setChecked(internalRef.current?.value == "true")
    }, [internalRef.current?.value])

    useEffect(() => {
        setChecked(props.value)
    }, [props.value])

    return (
        <label aria-checked={checked} className={props.className}>
            <input
                {...props}
                children={null}
                className='hidden'
                ref={handleRef}
                onClick={handleOnChange}
            />
            {checked && props.children}
        </label>
    )
})

const checkboxVariations = {
    default: (props: CheckboxProps, ref) =>
        <CheckboxContainer
            {...props}
            ref={ref}
            className={'transition-all cursor-pointer bg-transparent aria-checked:border-transparent w-5 h-5 rounded border-2 border-zinc-600 flex items-center justify-center aria-checked:bg-violet-500 aria-checked:text-white'}
        />,
}

const Checkbox = useSelector<keyof typeof checkboxVariations, CheckboxProps>(checkboxVariations)

export default Checkbox
