import React from "react"
import { useSelector } from "../utils/hooks/selector-hooks"
import { DropdownOption, OptionProps } from "./dropdown-option"

interface DropdownMenuProps {
    onValueChange?: (_: DropdownOption) => void
    children: React.ReactElement<OptionProps> | React.ReactElement<OptionProps>[] | any,
    className: string
};

function DropdownMenuContainer(props: DropdownMenuProps) {
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

const dropdownMenuVariations = {
    default: (props: DropdownMenuProps) =>
        <DropdownMenuContainer
            {...props}
            className='rounded border bg-zinc-100 text-zinc-800 p-1 gap-2 mt-1 shadow-lg max-h-40 overflow-auto'
        />
}

const DropdownMenu = useSelector<keyof typeof dropdownMenuVariations, DropdownMenuProps>(dropdownMenuVariations)

export default DropdownMenu

export {
    DropdownMenuProps
}