import React from "react"
import { createContext, useState } from "react"
import { useLocation } from "react-router-dom"

interface ISidebarContext {
    open: boolean
    setOpen: (e: boolean) => any
    selected: string
}

interface ISiderbarContextComponent {
    children: React.ReactNode
}

const SidebarContextObject = createContext<ISidebarContext>({
    open: true,
    setOpen: () => { },
    selected: ""
});

function SidebarContext(props: ISiderbarContextComponent) {
    const [open, setOpen] = useState(false)
    const { pathname } = useLocation()
    const context: ISidebarContext = {
        open: open,
        setOpen: (e) => { setOpen(e) },
        selected: pathname
    }

    return <SidebarContextObject.Provider value={context} children={props.children} />
}

export default SidebarContext

export {
    SidebarContextObject,
    ISidebarContext,
    ISiderbarContextComponent
}
