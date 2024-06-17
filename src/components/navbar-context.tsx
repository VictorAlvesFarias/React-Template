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

const NavbarContextObject = createContext<ContextType>({
    open: true,
    setOpen: () => { },
    selected: ""
});

function NavbarContext(props: ContextComponent) {
    const [open, setOpen] = useState(false)
    const { pathname } = useLocation()
    const context: ContextType = {
        open: open,
        setOpen: (e) => { setOpen(e) },
        selected: pathname
    }

    return <NavbarContextObject.Provider value={context} children={props.children} />
}

export default NavbarContext

export {
    NavbarContextObject
}
