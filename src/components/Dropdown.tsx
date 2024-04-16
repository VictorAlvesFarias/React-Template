import React, { useState } from 'react'
import { UseFormRegisterReturn, UseFormSetValue } from 'react-hook-form';
import { DropdownOption } from '../interfaces/data/DropdownOption';
import { InputContainerProps, Input } from './Input';
import { OptionContainerProps } from './Option';
import {Option} from '../components/Option'

interface DropdownContainerProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
    inputComponent: (_: InputContainerProps) => React.ReactNode;
    optionComponent: (_: OptionContainerProps) => React.ReactNode;
    setValue: UseFormSetValue<any>;
    options: DropdownOption[];
    register: UseFormRegisterReturn;
};

interface DropdownProps extends Omit<DropdownContainerProps, "className" | "inputComponent" | "optionComponent"> {
    variation: keyof typeof dropdownVariations;
}

const dropdownVariations = {
    default: (props: DropdownProps) =>
        <DropdownContainer
            {...props}
            className='rounded border bg-white border-black text-black indent-1 p-1 gap-2'
            inputComponent={(_) =>
                <Input {..._} readOnly={true} variation={'dropdown'}></Input>
            }
            optionComponent={(_) =>
                <Option {..._} variation={'default'}></Option>
            }
        />
}

function DropdownContainer(_: DropdownContainerProps) {
    const [drop, setDrop] = useState(false)
    const [selected, setSelected] = useState<DropdownOption>()

    function selectItem(i: DropdownOption) {
        setSelected(i)
        _.setValue(_.register.name, String(i.value), {
            shouldValidate: true
        })
        setDrop(false)
    }

    return (
        <  >
            <div className='w-full relative '>
                <_.inputComponent value={selected?.label} fake="true" register={_.register} onClick={() => setDrop(!drop)} />
                {drop && <div className={'absolute w-full h-full z-50'}>
                    <div {..._} className={'w-full flex flex-col ' + _.className}>
                        {_.options.length > 0 ?
                            _.options.map((e, i) => {
                                return <_.optionComponent onClick={() => selectItem(e)} key={i} {...e} />
                            })
                            : "Vazio"}
                    </div>
                </div>}
            </div>
            {drop && <div onClick={() => setDrop(!drop)} className='fixed w-full top-0 left-0 h-full z-10'>
            </div>}
        </>
    )
}

function Dropdown(props: DropdownProps) {
    const Component = dropdownVariations[props.variation] || dropdownVariations.default;
    return <Component {...props} />;
}

export {
    Dropdown
}