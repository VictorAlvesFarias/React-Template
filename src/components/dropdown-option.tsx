import React from "react"
import DropdownOptionContainer, { IDropdownOptionContainerProps } from "../base-components/dropdown-option"
import { useSelector } from "../utils/hooks/selector-hooks"

const optionVaritions = {
    default: (props: IDropdownOptionContainerProps) =>
        <DropdownOptionContainer {...props} className='min-h-8 text-nowrap  hover:bg-zinc-200 rounded cursor-pointer flex items-center px-3' />,
}

const Option = useSelector<keyof typeof optionVaritions, IDropdownOptionContainerProps>(optionVaritions)

export default Option