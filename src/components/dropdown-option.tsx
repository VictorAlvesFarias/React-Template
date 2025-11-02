import React from 'react'
import { IDropdownOptionContainerProps, DropdownOptionContainer } from 'react-base-components'
import { componentSelector } from "react-component-selector"

const optionVaritions = {
    default: (props: IDropdownOptionContainerProps) =>
        <DropdownOptionContainer {...props} className='min-h-8 text-nowrap  hover:bg-zinc-200 rounded cursor-pointer flex items-center px-3' />,
}

const Option = componentSelector<keyof typeof optionVaritions, IDropdownOptionContainerProps>(optionVaritions)

export default Option