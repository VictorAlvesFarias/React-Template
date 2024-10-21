import React, { useContext } from "react"
import { useSelector } from "../utils/hooks/selector-hooks"
import { IDropdownOptionValue } from "./dropdown-option"
import { DropdownContextObject } from "./dropdown-context"

interface IDropdownMenuContainerProps {
    onValueChange?: (_: IDropdownOptionValue) => void
    children: React.ReactElement<IDropdownOptionValue> | React.ReactElement<IDropdownOptionValue>[],
    className: string
};

function DropdownMenuContainer(props: IDropdownMenuContainerProps) {
    const { filter } = useContext(DropdownContextObject)
    const items = Array.isArray(props.children) ? props.children : [props.children]

    return (
        <div className={'w-full flex flex-col ' + props.className}>
            {items.filter(e => e.props.label.toLowerCase().includes(filter.toLowerCase())).map(e =>
                e
            )}
        </div>
    )
}

export default DropdownMenuContainer

export {
    IDropdownMenuContainerProps
}