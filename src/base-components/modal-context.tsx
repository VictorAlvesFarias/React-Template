import React from "react"
import { createContext, useState } from "react"

interface IModalContextType {
    setOpen: (e: boolean) => any
    open: boolean
}

interface IModalContextComponent {
    children: React.ReactNode[] | React.ReactNode
}

function ModalContext(props: IModalContextComponent) {
    const [open, setOpen] = useState<boolean>(false)
    const context: IModalContextType = {
        setOpen: (e) => { setOpen(e) },
        open: open
    }

    return <ModalContextObject.Provider value={context} children={props.children} />
}

const ModalContextObject = createContext<IModalContextType>({
    open: false,
    setOpen: () => { }
});

export default ModalContext

export {
    ModalContextObject,
    ModalContext
}