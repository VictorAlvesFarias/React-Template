import { Link } from "react-router-dom"
import useSelector from "../utils/hooks/use-selector"
import { useContext } from "react"
import { SidebarContextObject } from "./sidebar-context"
import React from "react"

interface ItemProps {
    className: string
    children: React.ReactNode
    href: string
    selected?: string
    onClick?: (e: any) => any
}

function ItemContainer(props: ItemProps) {
    const { selected } = useContext(SidebarContextObject)

    return (
        <Link
            onClick={props.onClick}
            to={props.href}
            aria-selected={selected.split("/")[1] == props.href.split("/")[1]}
            className={props.className}
        >
            {props.children}
        </Link>
    )
}

const itemVariations = {
    default: (props: ItemProps) =>
        <ItemContainer
            {...props}
            className="w-full flex items-center gap-3 text-ellipsis overflow-hidden pl-3 p-2 h-fit rounded text-zinc-400 text-md cursor-pointer hover:text-white font-semibold duration-300 transition-all aria-selected:text-white "
        />,
    "spacing-top": (props: ItemProps) =>
        <ItemContainer
            {...props}
            className="w-full flex mt-auto items-center gap-3 text-ellipsis overflow-hidden pl-3 p-2 h-fit rounded text-zinc-400 text-md cursor-pointer hover:text-white font-semibold duration-300 transition-all"
        />,
}

const NavbarItem = useSelector<keyof typeof itemVariations,ItemProps>(itemVariations)

export default NavbarItem
