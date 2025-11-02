import React from 'react'
import { componentSelector } from "react-component-selector"
import { IDropdownMenuContainerProps, DropdownMenuContainer } from 'react-base-components'

const dropdownMenuVariations = {
    default: (props: IDropdownMenuContainerProps) =>
        <DropdownMenuContainer
            {...props}
            className='rounded border bg-zinc-100 text-zinc-800 p-1 gap-2 mt-1 shadow-lg max-h-40 overflow-auto'
        />
}

const DropdownMenu = componentSelector<keyof typeof dropdownMenuVariations, IDropdownMenuContainerProps>(dropdownMenuVariations)

export default DropdownMenu
