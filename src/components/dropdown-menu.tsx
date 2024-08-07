import React from "react"
import { useSelector } from "../utils/hooks/selector-hooks"
import DropdownMenuContainer, { IDropdownMenuContainerProps } from '../base-components/dropdown-menu'

const dropdownMenuVariations = {
    default: (props: IDropdownMenuContainerProps) =>
        <DropdownMenuContainer
            {...props}
            className='rounded border bg-zinc-100 text-zinc-800 p-1 gap-2 mt-1 shadow-lg max-h-40 overflow-auto'
        />
}

const DropdownMenu = useSelector<keyof typeof dropdownMenuVariations, IDropdownMenuContainerProps>(dropdownMenuVariations)

export default DropdownMenu
