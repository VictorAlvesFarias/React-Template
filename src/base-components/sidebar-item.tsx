import { Link } from "react-router-dom"
import { useContext } from "react"
import { SidebarContextObject } from "./sidebar-context"
import React from "react"
import { AccordionContextObject } from "./accordion-context"

interface ISidebarItemContainerProps {
    className?: string
    children: React.ReactNode
    href?: string
    selected?: string
    menu?: boolean
    unselectable?: boolean
    onClick?: (e: any) => any
    disable?: boolean
    commons?: string[]
}

function SidebarSidebarItemContainerContainer(props: ISidebarItemContainerProps) {
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

export default SidebarSidebarItemContainerContainer

export {
    ISidebarItemContainerProps
}
