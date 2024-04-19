import React, { useState, memo, createContext, useContext } from 'react'
import { DropdownOption } from '../interfaces/data/DropdownOption';
import { UseFormRegisterReturn, UseFormSetValue } from 'react-hook-form';

interface DefaultInputComponentProps {
    readonly?: boolean
    disabled?: boolean
    name?: string
    onChange?: (e: any) => any
    onBlur?: (e: any) => any
    ref?: any,
    value?: any
}

interface OptionContainerProps {
    value: string | number,
    label: string,
    onClick?: (e: DropdownOption) => any,
    className: string
}

interface OptionVariation extends Omit<OptionContainerProps, "className"> {

}

interface OptionComponent extends OptionVariation {
    variation?: keyof typeof optionVariations;
}

function OptionContainer(props: OptionContainerProps) {
    const { setOpen } = useContext(DropdownContext)

    function handleSetOption() {
        props.onClick? props.onClick({ value: props.value, label: props.label }):null
        setOpen(false)
    }

    return (
        <div onClick={handleSetOption} className={props.className} >
            {props.label}
        </div>
    )
}

function Option(props: OptionComponent) {
    const Component = optionVariations[props.variation??"default"] 
    return <Component {...props} />;
}

const optionVariations = {
    default: (props: OptionComponent) =>
        <OptionContainer {...props} className='h-8 pl-1 hover:bg-zinc-200 rounded cursor-pointer' />,
}

interface RootContainerProps {
    register: DefaultInputComponentProps;
    children: React.ReactElement<MenuContainerProps>
    className: string
};

interface RootVariation extends Omit<RootContainerProps, "className"> {

}

interface RootComponent extends RootVariation {
    variation?: keyof typeof rootVariations;
}

function RootContainer(props: RootContainerProps) {
    const {open, setOpen } = useContext(DropdownContext)
    return (
        <>
            <div className='w-full relative '>
                <p className={props.className} onClick={() => setOpen(!open)} >
                    {props.register.value?.label}
                </p>
                <input className='hidden' {...props.register} value={props.register.value||""} />
                {open && <div className={'absolute w-full h-full z-20'}>
                    {props.children}
                </div>}
            </div>
            {open && <div onClick={() => setOpen(!open)} className='fixed w-full top-0 left-0 h-full z-10'>
            </div>}
        </>
    )
}

function Root(props: RootComponent) {
    console.log(props.register.value)
    const Component = rootVariations[props.variation ?? "default"]
    return (
        <Context>
            <Component {...props} />
        </Context>
    )
}

const rootVariations = {
    default: (_: RootVariation) =>
        <RootContainer {..._} className='h-9 rounded border bg-white cursor-pointer border-black text-black indent-1 p-1 gap-2' />,
}

interface MenuContainerProps {
    onValueChange?: (_: DropdownOption) => void
    children: React.ReactElement<OptionContainerProps> | React.ReactElement<OptionContainerProps>[],
    className: string
};

interface MenuVariation extends Omit<MenuContainerProps, "className" | "onValueChange"> {

}

interface MenuComponent extends MenuVariation {
    variation?: keyof typeof menuVariations;
}

const menuVariations = {
    default: (props: MenuComponent) =>
        <MenuContainer
            {...props}
            className='rounded border bg-white border-black text-black indent-1 p-1 gap-2'
        />
}

function MenuContainer(props: MenuContainerProps) {
    return (
        <div className={'w-full flex flex-col ' + props.className}>
            {Array.isArray(props.children) ?
                props.children.map(e =>
                    e
                ) :
                props.children
            }
        </div>
    )
}

function Menu(props: MenuComponent) {
    const Component = menuVariations[props.variation ?? "default"]
    return <Component {...props} />;
}

interface ContextType {
    setOpen: (e: boolean) => any
    open: boolean
}

interface ContextComponent {
    children: React.ReactNode
}

function Context(props: ContextComponent) {
    const [open, setOpen] = useState<boolean>(false)
    const context: ContextType = {
        setOpen: (e) => { setOpen(e) },
        open: open
    }

    return <DropdownContext.Provider value={context} children={props.children} />
}

const DropdownContext = createContext<ContextType>({
    open: false,
    setOpen: () => { }
});

export default {
    Option,
    Root,
    Menu
}