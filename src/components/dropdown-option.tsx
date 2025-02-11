import React from "react"
import DropdownOptionContainer, { IDropdownOptionContainerProps } from "../base-components/dropdown-option"
import { componentSelector } from "../utils/helpers/component-selector"

const optionVaritions = {
    default: (props: IDropdownOptionContainerProps) =>
        <DropdownOptionContainer {...props} className='min-h-8 text-nowrap  hover:bg-zinc-200 rounded cursor-pointer flex items-center px-3' />,
}

const Option = componentSelector<keyof typeof optionVaritions, IDropdownOptionContainerProps>(optionVaritions)

export default Option