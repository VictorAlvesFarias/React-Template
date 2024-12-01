import React from "react"
import { createContext, useState } from "react"
import { IDropdownOptionValue } from "./dropdown-option"

interface DropdownContextType {
    setOpen: (e: boolean) => any
    setFilter: (e: string) => any
    setStarted: (e: string) => any
    open: boolean
    started: string | null
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
    const [started, setStarted] = useState<string | null>(null)
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
        setFilter: setFilter,
        started,
        setStarted
    }

    return <DropdownContextObject.Provider value={context} children={props.children} />
}

const DropdownContextObject = createContext<DropdownContextType>({
    open: false,
    setOpen: () => { },
    setSelected: () => { },
    setStarted: () => { },
    setFilter: () => { },
    selected: null,
    filter: "",
    started: null
});

export default DropdownContext

export {
    DropdownContextObject
}
