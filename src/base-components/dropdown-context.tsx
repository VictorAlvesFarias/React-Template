import React from "react"
import { createContext, useState } from "react"
import { IDropdownOptionValue } from "./dropdown-option"

interface DropdownContextType {
    setOpen: (e: boolean) => any
    open: boolean
    selected: IDropdownOptionValue | undefined
    setSelected: (e: IDropdownOptionValue) => any
}

interface DropdownContextComponent {
    children: React.ReactNode
}

function DropdownContext(props: DropdownContextComponent) {
    const [open, setOpen] = useState<boolean>(false)
    const [selected, setSelected] = useState<IDropdownOptionValue>()
    const context: DropdownContextType = {
        setOpen:setOpen,
        open: open,
        setSelected : setSelected,
        selected: selected
    }

    return <DropdownContextObject.Provider value={context} children={props.children} />
}

const DropdownContextObject = createContext<DropdownContextType>({
    open: false,
    setOpen: () => { },
    setSelected: () => { },
    selected:undefined
});

export default DropdownContext

export {
    DropdownContextObject
}