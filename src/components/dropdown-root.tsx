import { LegacyRef, forwardRef, useContext, useRef } from "react"
import { DropdownContextObject } from "./dropdown-context"
import { DropdownMenuProps } from "./dropdown-menu"
import useSelector from "../utils/hooks/use-selector"
import React from "react"
import { RefCallBack } from "react-hook-form"

interface RootProps {
    readonly?: boolean
    disabled?: boolean
    name?: string
    onChange?: (e: any) => any
    onBlur?: (e: any) => any
    ref?: any,
    value?: any
    children: React.ReactElement<DropdownMenuProps>[] | React.ReactElement<DropdownMenuProps>
    className: string
    placeholder?: string
};

const RootContainer = forwardRef((props: RootProps, ref: RefCallBack | LegacyRef<HTMLInputElement>) => {
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
                <div aria-hidden={!open}  className={'absolute w-full h-full z-20 aria-hidden:hidden'}>
                    {props.children}
                </div>
            </div>
            <div aria-hidden={!open} onClick={() => setOpen(!open)} className='fixed w-full top-0 left-0 h-full z-10 aria-hidden:hidden'>
            </div>
        </>
    )
})

const dropdownRootVariations = {
    default: (_: RootProps, ref) =>
        <RootContainer {..._} ref={ref} className='h-9 rounded border bg-transparent border-zinc-500 outline-oikos-white-blue text-zinc-900 p-1 w-full flex items-center outline-2 focus-within:border-opacity-0 focus-within:outline pl-2 cursor-text aria-disabled:bg-zinc-300 ' />,
}

const DropdownRoot = useSelector<keyof typeof dropdownRootVariations, RootProps>(dropdownRootVariations)

export default DropdownRoot