import React from "react"
import { createContext, useState } from "react"
import { IDropdownOptionValue } from "./dropdown-option"

interface DropdownContextType {
    setOpen: (e: boolean) => any
    setFilter: (e: string) => any
    open: boolean
    filter: string
    selected: IDropdownOptionValue | null
    setSelected: (e: IDropdownOptionValue | null) => any
}

interface DropdownContextComponent {
    children: React.ReactNode
    onChange?: (e: any) => any
}

function DropdownContext(props: DropdownContextComponent) {
    const [open, setOpen] = useState<boolean>(false)
    const [selected, setSelected] = useState<IDropdownOptionValue | null>(null)
    const [filter, setFilter] = useState<string>("")

    function handleSetSelected(e: IDropdownOptionValue | null) {
        props?.onChange ? props.onChange(e?.value) : null
        setSelected(e)
    }

    const context: DropdownContextType = {
        setOpen: setOpen,
        open: open,
        setSelected: handleSetSelected,
        selected: selected,
        filter: filter,
        setFilter: setFilter
    }

    return <DropdownContextObject.Provider value={context} children={props.children} />
}

const DropdownContextObject = createContext<DropdownContextType>({
    open: false,
    setOpen: () => { },
    setSelected: () => { },
    setFilter: () => { },
    selected: null,
    filter: ""
});

export default DropdownContext

export {
    DropdownContextObject
}