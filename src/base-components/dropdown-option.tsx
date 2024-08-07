import { useContext, useEffect } from "react"
import { DropdownContextObject } from "./dropdown-context"
import React from "react"

interface IDropdownOptionValue {
    value: any,
    label: string,
}

interface IDropdownOptionContainerProps {
    value: any,
    label: string,
    onClick?: (e: IDropdownOptionValue | any) => any,
    className: string
    defaultValue?: boolean
}

function DropdownOptionContainer(props: IDropdownOptionContainerProps) {
    const { setOpen, setSelected, selected } = useContext(DropdownContextObject)

    function handleSetOption() {
        props.onClick ? props.onClick(props.value) : null
        setSelected(props)
        setOpen(false)
    }

    useEffect(() => {
        if (props.defaultValue == true && (selected == null || selected == undefined)) {
            setSelected(props)
        }
    }, [])

    return (
        <span onClick={handleSetOption} className={props.className} >
            {props.label}
        </span>
    )
}

export default DropdownOptionContainer

export {
    IDropdownOptionValue,
    IDropdownOptionContainerProps
}