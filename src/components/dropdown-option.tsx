import { useContext, useEffect } from "react"
import useSelector from "../utils/hooks/use-selector"
import { DropdownContextObject } from "./dropdown-context"
import React from "react"

interface DropdownOption {
    value: any,
    label: string,
}

interface OptionProps {
    value: any,
    label: string,
    onClick?: (e: DropdownOption | any) => any,
    className: string
    defaultValue?: boolean
}

function OptionContainer(props: OptionProps) {
    const { setOpen, setSelected, selected } = useContext(DropdownContextObject)

    function handleSetOption() {
        props.onClick ? props.onClick(props.value) : null
        setSelected(props)
        setOpen(false)
    }

    useEffect(() => {
        if (props.defaultValue==true&&(selected==null || selected == undefined) ) {
            setSelected(props)
        }
    }, [])

    return (
        <span onClick={handleSetOption} className={props.className} >
            {props.label}
        </span>
    )
}

const optionVaritions = {
    default: (props: OptionProps) =>
        <OptionContainer {...props} className='h-8 pl-1 hover:bg-zinc-200 rounded cursor-pointer flex items-center' />,
}

const Option = useSelector<keyof typeof optionVaritions, OptionProps>(optionVaritions)

export default Option

export {
    DropdownOption,
    OptionProps
}