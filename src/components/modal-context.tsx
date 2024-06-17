import React from "react"
import { createContext, useState } from "react"

interface ModalContextType {
    setOpen: (e: boolean) => any
    open: boolean
}

interface ModalContextComponent {
    children: React.ReactNode[]
}

function ModalContext(props: ModalContextComponent) {
    const [open, setOpen] = useState<boolean>(false)
    const context: ModalContextType = {
        setOpen: (e) => { setOpen(e) },
        open: open
    }

    return <ModalContextObject.Provider value={context} children={props.children} />
}

const ModalContextObject = createContext<ModalContextType>({
    open: false,
    setOpen: () => { }
});

export default ModalContext

export {
    ModalContextObject
}