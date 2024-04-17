import React, { useState } from 'react'
import { DropdownOption } from '../interfaces/data/DropdownOption';
import { UseFormRegisterReturn, UseFormSetValue } from 'react-hook-form';

interface OptionContainerProps {
    value: string | number,
    label: string,
    onClick?: (e: DropdownOption) => any,
    className: string
}

interface OptionVariation extends Omit<OptionContainerProps, "className"> {

}

interface OptionComponent extends OptionVariation {
    variation: keyof typeof optionVariations;
}

interface MenuContainerProps {
    onValueChange?: (_: DropdownOption) => void
    children: React.ReactElement<OptionContainerProps>,
    className: string
};

interface MenuVariation extends Omit<MenuContainerProps, "className" | "onValueChange"> {

}

interface MenuComponent extends MenuVariation {
    variation?: keyof typeof menuVariations;
}

interface RootContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    setValue: UseFormSetValue<any>;
    register: UseFormRegisterReturn;
    children: React.ReactElement<MenuContainerProps>
};

interface RootVariation extends Omit<RootContainerProps, "className"> {

}

interface RootComponent extends RootVariation {
    variation?: keyof typeof rootVariations;
}

const menuVariations = {
    default: (props: MenuComponent) =>
        <MenuContainer
            {...props}
            className='rounded border bg-white border-black text-black indent-1 p-1 gap-2'
        />
}

const optionVariations = {
    default: (props: OptionComponent) =>
        <OptionContainer {...props} className='h-8 pl-1 hover:bg-zinc-200 rounded cursor-pointer' />,
}

const rootVariations = {
    default: (_: RootVariation) =>
        <RootContainer {..._} className='h-9 rounded border bg-white cursor-pointer border-black text-black indent-1 p-1 gap-2' />,
}

function MenuContainer(props: MenuContainerProps) {
    return (
        <div className={'w-full flex flex-col ' + props.className}>
            {
                Array.isArray(props.children) ?
                    props.children.map((child: React.ReactElement<OptionContainerProps>, i) => {
                        return React.cloneElement(child, {
                            key: i,
                            onClick: (e: DropdownOption) => props.onValueChange ? props.onValueChange(e) : null
                        })
                    }) :
                    React.cloneElement(props.children, {
                        onClick: (e: DropdownOption) => props.onValueChange ? props.onValueChange(e) : null
                    })
            }
        </div>
    )
}

function OptionContainer(props: OptionContainerProps) {
    return (
        <div onClick={() => props.onClick?props.onClick({ value: props.value, label: props.label }):null} className={props.className} >
            {props.label}
        </div>
    )
}

function RootContainer(props: RootContainerProps) {
    const [drop, setDrop] = useState(false)
    const [selected, setSelected] = useState<DropdownOption>()

    function selectItem(i: DropdownOption) {
        setSelected(i)
        props.setValue(props.register.name, String(i.value), {
            shouldValidate: true
        })
        setDrop(false)
    }

    return (
        <>
            <div className='w-full relative '>
                <p {...props} onClick={() => setDrop(!drop)} >
                    {selected?.label}
                </p>
                <input className='hidden' {...props.register} />

                {drop && <div className={'absolute w-full h-full z-50'}>
                    {
                        React.cloneElement(props.children, {
                            onValueChange: (e) => selectItem(e)
                        })
                    }
                </div>}
            </div>
            {drop && <div onClick={() => setDrop(!drop)} className='fixed w-full top-0 left-0 h-full z-10'>
            </div>}
        </>
    )
}

function Option(props: OptionComponent) {
    const Component = optionVariations[props.variation] || optionVariations.default;
    return <Component {...props} />;
}

function Menu(props: MenuComponent) {
    const Component = menuVariations[props.variation ?? "default"]
    return <Component {...props} />;
}

function Root(props: RootComponent) {
    const Component = rootVariations[props.variation ?? "default"]
    return <Component {...props} />;
}

export default {
    Option,
    Root,
    Menu
}