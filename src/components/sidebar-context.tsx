import React from "react"
import { createContext, useState } from "react"
import { useLocation } from "react-router-dom"

interface ContextType {
    open: boolean
    setOpen: (e: boolean) => any
    selected: string
}

interface ContextComponent {
    children: React.ReactNode
}

const SidebarContextObject = createContext<ContextType>({
    open: true,
    setOpen: () => { },
    selected: ""
});

function SidebarContext(props: ContextComponent) {
    const [open, setOpen] = useState(false)
    const { pathname } = useLocation()
    const context: ContextType = {
        open: open,
        setOpen: (e) => { setOpen(e) },
        selected: pathname
    }

    return <SidebarContextObject.Provider value={context} children={props.children} />
}

export default SidebarContext

export {
    SidebarContextObject
}
