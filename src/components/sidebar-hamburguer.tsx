import { useContext } from "react"
import { SidebarContextObject } from "./sidebar-context"
import React from "react"
import { useSelector } from "../utils/hooks/selector-hooks"

interface HamburguerProps {
    className: string,
    children: React.ReactNode
}

function HamburguerContainer(props: HamburguerProps) {
    const { setOpen, open } = useContext(SidebarContextObject)
    return (
        <div onClick={() => setOpen(!open)} className={props.className}>
            {props.children}
        </div>
    )
}

export default HamburguerContainer