import React, { useContext, useEffect } from "react"
import { componentSelector } from "../utils/helpers/component-selector"
import { IDropdownOptionValue } from "./dropdown-option"
import { DropdownContextObject } from "./dropdown-context"

interface IDropdownMenuContainerProps {
    onValueChange?: (_: IDropdownOptionValue) => void
    children: React.ReactElement<IDropdownOptionValue> | React.ReactElement<IDropdownOptionValue>[],
    className: string
};

function DropdownMenuContainer(props: IDropdownMenuContainerProps) {
    const { filter, started, setSelected } = useContext(DropdownContextObject)
    const items = Array.isArray(props.children) ? props.children : [props.children]

    useEffect(() => {
        if (started != null) {
            setSelected({ value: started, label: items.filter(e=>e.props.value == started)[0].props.label})
        }
    }, [started])

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
