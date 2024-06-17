import React from "react"
import SidebarContext from "./sidebar-context"
import useSelector from "../utils/hooks/use-selector"

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
    default: (props: RootProps) =>
        <RootContainer {...props} className="flex flex-col w-screen" />
}

const NavbarRoot = useSelector<keyof typeof rootVariations,RootProps>(rootVariations)

export default NavbarRoot
