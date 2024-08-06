import React, { useContext } from "react"
import { AccordionContextObject } from "./accordion-context"

interface AccordionActivateIconProps {
    children: React.ReactNode
}

function AccordionActivateIcon(props: AccordionActivateIconProps) {
    const {open} = useContext(AccordionContextObject)

    return (
        open &&
        <>
            {props.children}
        </>
    )
}

export default AccordionActivateIcon