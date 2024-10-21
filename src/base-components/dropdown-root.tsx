import { LegacyRef, forwardRef, useContext, useEffect, useRef, useState } from "react"
import { DropdownContextObject } from "./dropdown-context"
import { IDropdownMenuContainerProps } from "./dropdown-menu"
import React from "react"
import { RefCallBack } from "react-hook-form"
import { useEffectLog } from "../utils/hooks/log-hooks"

interface IDropdownRootContainerProps {
    readonly?: boolean
    disabled?: boolean
    name?: string
    onChange?: (e: any) => any
    onBlur?: (e: any) => any
    ref?: any,
    value?: any
    children: React.ReactElement<IDropdownMenuContainerProps>
    className?: string
    placeholder?: string
};

const DropdownRootContainer = forwardRef((props: IDropdownRootContainerProps, ref: RefCallBack | LegacyRef<HTMLInputElement>) => {
    const { open, setOpen, selected, setSelected, filter, setFilter } = useContext(DropdownContextObject)
    const internalRef = useRef<HTMLInputElement | null>()
    const helperInputRef: any = useRef()
    const inputProps = { ...props, children: null }

    function handleRef(element: HTMLInputElement | null) {
        internalRef.current = element;
        if (ref instanceof Function) {
            ref(element);
        }
    };
    function handleOnChangeFilter(e) {
        setSelected(null)
        setFilter(e.target.value)

        if (internalRef.current?.value) {
            internalRef.current.value = ""

            if (ref instanceof Function) {
                ref(internalRef.current);
            }
        };
    }
    function onClick() {
        setOpen(true)
        helperInputRef.current?.focus()
    }

    useEffect(() => {
        if(inputProps.value != null){
            setSelected({ value: inputProps.value, label: "Procurando valor"})
        }
    }, [])

    return (
        <>
            <div className='w-full relative'>
                <div aria-disabled={props.disabled} className={props.className + " z-[9] relative"} onClick={props.disabled ? () => null : onClick} >
                    <input
                        ref={helperInputRef}
                        className="bg-transparent outline-none w-full "
                        type="text"
                        disabled={props.disabled}
                        onChange={handleOnChangeFilter}
                        value={selected?.label ? selected.label : filter}
                        placeholder={props.placeholder}
                    />
                    <input
                        {...inputProps}
                        aria-hidden={props.value && props.value != "" ? true : false}
                        className='bg-transparent outline-none w-0'
                        disabled={props.disabled}
                        value={inputProps.value || ''}
                        ref={handleRef}
                        onChange={(e) => {
                            e.target.value
                            props?.onChange ? props.onChange(e) : null
                        }}
                    />
                </div>
                <div aria-hidden={!open} className={'absolute w-full h-full aria-hidden:hidden z-[12] '}>
                    {props.children}
                </div>
            </div>
            <div aria-hidden={!open} onClick={() => setOpen(!open)} className='z-[10] fixed w-full top-0 left-0 h-full aria-hidden:hidden'>
            </div>
        </>
    )
})

export default DropdownRootContainer

export {
    IDropdownRootContainerProps
}