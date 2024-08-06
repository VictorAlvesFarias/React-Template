import React, { useContext } from "react"
import { AccordionContextObject } from "./accordion-context"

interface AccordionDesactivateIconProps {
    children: React.ReactNode
}

function AccordionDesactivateIcon(props: AccordionDesactivateIconProps) {
    const {open} = useContext(AccordionContextObject)

    return (
        !open &&
        <>
            {props.children}
        </>
    )
}

export default AccordionDesactivateIcon