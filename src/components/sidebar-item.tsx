import { Link } from "react-router-dom"
import { useSelector } from "../utils/hooks/selector-hooks"
import { useContext, useEffect } from "react"
import { SidebarContextObject } from "./sidebar-context"
import React from "react"
import { AccordionContextObject } from "./accordion-context"

interface ItemProps {
    className: string
    children: React.ReactNode
    href?: string
    selected?: string
    menu?: boolean
    unselectable?: boolean
    onClick?: (e: any) => any
    disable?: boolean
    commons?: string[]
}

function ItemContainer(props: ItemProps) {
    const { selected } = useContext(SidebarContextObject)
    const { open, setOpen } = useContext(AccordionContextObject)

    function handleIsSelected() {
        let result = false

        if (props.href) {
            if (!props.unselectable && selected?.includes(props.href)) {
                result = true
            }
        }
        else {
            if (props.commons && selected) {
                for (let i = 0; i < props.commons.length; i++) {
                    if (selected?.includes(props.commons[i])) {
                        result = true
                        break
                    }
                }
            }
        }
        
        return result
    }

    return (
        !props.disable ?
            <Link
                onClick={props.onClick}
                to={props.href ?? ""}
                aria-selected={handleIsSelected()}
                aria-checked={open}
                className={props.className}
            >
                {props.children}
            </Link> :
            <div
                aria-selected={handleIsSelected()}
                onClick={props.onClick}
                aria-checked={open && props.menu == true}
                className={props.className}
            >
                {props.children}
            </div>
    )
}

const itemVariations = {
    default: (props: ItemProps) =>
        <ItemContainer
            {...props}
            className="w-full flex items-center gap-3 text-ellipsis overflow-hidden pl-3 p-2 min-h-9 rounded text-zinc-100 text-sm cursor-pointer  duration-300 transition-all aria-selected:font-semibold hover:bg-black hover:bg-opacity-30 aria-selected:bg-black aria-selected:bg-opacity-30 aria-selected:border-l-violet-500 aria-selected:border-l-8 aria-selected:shadow-lg aria-checked:bg-opacity-30 aria-checked:bg-black "
        />,
    accordion: (props: ItemProps) =>
        <ItemContainer
            {...props}
            className="ml-3 flex-1 flex items-center gap-3 text-ellipsis overflow-hidden pl-3 p-2 min-h-9 rounded text-zinc-100 text-sm cursor-pointer duration-300 transition-all  aria-selected:font-semibold hover:bg-black hover:bg-opacity-30 aria-selected:bg-black aria-selected:bg-opacity-30 aria-selected:border-l-violet-500 aria-selected:border-l-8 "
        />,
}

const SidebarItem = useSelector<keyof typeof itemVariations, ItemProps>(itemVariations)

export default SidebarItem
