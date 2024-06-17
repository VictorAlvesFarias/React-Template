import React from "react"
import { createContext, useState } from "react"

interface AccordionContextType {
    setOpen: (e: boolean) => any
    open: boolean
}

interface AccordionContextComponent {
    children: React.ReactNode[] | React.ReactNode
}

function AccordionContext(props: AccordionContextComponent) {
    const [open, setOpen] = useState<boolean>(false)
    const context: AccordionContextType = {
        setOpen: (e) => { setOpen(e) },
        open: open
    }

    return <AccordionContextObject.Provider value={context} children={props.children} />
}

const AccordionContextObject = createContext<AccordionContextType>({
    open: false,
    setOpen: () => { }
});

export default AccordionContext

export {
    AccordionContextObject
}