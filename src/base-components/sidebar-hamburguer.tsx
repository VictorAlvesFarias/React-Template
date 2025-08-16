import { useContext } from "react"
import { SidebarContextObject } from "./sidebar-context"
import React from "react"

interface SidebarHamburguerContainerProps {
    className?: string,
    children: React.ReactNode
}

function SidebarHamburguerContainer(props: SidebarHamburguerContainerProps) {
    const { setOpen, open } = useContext(SidebarContextObject)
    return (
        <div onClick={() => setOpen(!open)} className={props.className}>
            {props.children}
        </div>
    )
}

export default SidebarHamburguerContainer

export {
    SidebarHamburguerContainerProps
}