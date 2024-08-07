import { LegacyRef, forwardRef, useContext, useRef } from "react"
import { DropdownContextObject } from "./dropdown-context"
import { IDropdownMenuContainerProps } from "./dropdown-menu"
import React from "react"
import { RefCallBack } from "react-hook-form"

interface IDropdownRootContainerProps {
    readonly?: boolean
    disabled?: boolean
    name?: string
    onChange?: (e: any) => any
    onBlur?: (e: any) => any
    ref?: any,
    value?: any
    children: React.ReactElement<IDropdownMenuContainerProps>[] | React.ReactElement<IDropdownMenuContainerProps>
    className: string
    placeholder?: string
};

const DropdownRootContainer = forwardRef((props: IDropdownRootContainerProps, ref: RefCallBack | LegacyRef<HTMLInputElement>) => {
    const { open, setOpen, selected, setSelected } = useContext(DropdownContextObject)
    const internalRef = useRef<HTMLInputElement | null>()
    const inputProps = { ...props, children: null }

    function onClick() {
        setOpen(!open)
        internalRef.current?.focus()
    }

    const handleRef = (element: HTMLInputElement | null) => {
        internalRef.current = element;
        if (ref instanceof Function) {
            ref(element);
        }
    };

    return (
        <>
            <div className='w-full relative '>
                <div aria-disabled={props.disabled} className={props.className} onClick={props.disabled ? () => null : onClick} >
                    {selected?.label || props.value?.label}
                    <input
                        {...inputProps}
                        aria-hidden={props.value && props.value != "" ? true : false}
                        className='bg-transparent outline-none w-full aria-hidden:w-0'
                        readOnly
                        value={inputProps.value || ''}
                        ref={handleRef}
                        onChange={(e) => {
                            e.target.value
                            props?.onChange ? props.onChange(e) : null
                        }}
                    />
                </div>
                <div aria-hidden={!open} className={'absolute w-full h-full z-20 aria-hidden:hidden'}>
                    {props.children}
                </div>
            </div>
            <div aria-hidden={!open} onClick={() => setOpen(!open)} className='fixed w-full top-0 left-0 h-full z-10 aria-hidden:hidden'>
            </div>
        </>
    )
})

export default DropdownRootContainer

export {
    IDropdownRootContainerProps
}