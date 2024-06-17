import { useContext } from "react"
import { SidebarContextObject } from "./sidebar-context"
import React from "react"
import useSelector from "../utils/hooks/use-selector"

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

const hamburguerVariations = {
    default: (props: HamburguerProps) =>
        <HamburguerContainer {...props} className=" z-30 p-2 justify-end top-0 left-0 h-12 items-start fixed flex w-full bg-zinc-800 cursor-pointer " />
}

const NavbarHamburguer = useSelector<keyof typeof hamburguerVariations,HamburguerProps>(hamburguerVariations)

export default NavbarHamburguer