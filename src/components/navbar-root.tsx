import React from "react"
import SidebarContext from "./sidebar-context"
import { useSelector } from "../utils/hooks/selector-hooks"

interface RootProps {
    className: string,
    children: React.ReactNode
}

function RootContainer(props: RootProps) {
    return (
        <div className={props.className} >
            {props.children}
        </div>
    )
}

const rootVariations = {
}

const navbarRootSelector = (variations) => useSelector<keyof typeof rootVariations, RootProps>(variations)

export const NavbarRoot = navbarRootSelector({
    default: (props: RootProps) =>
        <RootContainer {...props} className="flex flex-col w-screen" />
})

