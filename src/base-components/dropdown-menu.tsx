import React from "react"
import { useSelector } from "../utils/hooks/selector-hooks"
import { IDropdownOptionValue } from "./dropdown-option"

interface IDropdownMenuContainerProps {
    onValueChange?: (_: IDropdownOptionValue) => void
    children: React.ReactElement<IDropdownMenuContainerProps> | React.ReactElement<IDropdownMenuContainerProps>[] | any,
    className: string
};

function DropdownMenuContainer(props: IDropdownMenuContainerProps) {
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

export default DropdownMenuContainer

export {
    IDropdownMenuContainerProps
}