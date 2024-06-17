import React from "react"
import useSelector from "../utils/hooks/use-selector"

interface CheckboxProps {
    readonly?: boolean
    disabled?: boolean
    name?: string
    onChange?: (e: any) => any
    onBlur?: (e: any) => any
    ref?: any,
    value?: any
    className: {
        checked: string
        base: string
    }
    children: React.ReactNode
}

function CheckboxContainer(props: CheckboxProps) {
    return (
        <label className={(props.value ? props.className.checked : props.className.base) + " transition-all cursor-pointer"}>
            <input
                {...props}
                children={null}
                type='checkbox'
                className='hidden'
            />
            {props.value && props.children}
        </label>
    )
}

const checkboxVariations = {
    default: (props: CheckboxProps) =>
      <CheckboxContainer
        {...props}
        className={{
          base: 'bg-transparent w-5 h-5 rounded border-2 border-zinc-600 bg flex items-center justify-center   ',
          checked: 'bg-oikos-white-blue w-5 h-5 rounded flex items-center justify-center text-white'
        }}
      />,
}

const Checkbox = useSelector<keyof typeof checkboxVariations, CheckboxProps>(checkboxVariations)

export default Checkbox
