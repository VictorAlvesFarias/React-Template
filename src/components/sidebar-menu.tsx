import { useContext } from "react"
import { useSelector } from "../utils/hooks/selector-hooks"
import { SidebarContextObject } from "./sidebar-context"
import React from "react"

interface MenuProps {
    className: string,
    children: React.ReactNode
}

function MenuContainer(props: MenuProps) {
    const { open, setOpen } = useContext(SidebarContextObject)

    return (
        <>
            <div className={'md:flex hidden overflow-y-auto ' + props.className}>
                {props.children}
            </div>
            <div className={`md:hidden fixed   z-50 w-full flex top-0 h-screen transition-all duration-500 ${open ? "right-0" : "right-full"}`}>
                <div className={'flex overflow-y-auto md:hidden ' + props.className} role="dialog" aria-modal="true">
                    {props.children}
                </div>
                <div className={'flex-1 pr-12 w-full h-full '} onClick={() => setOpen(false)}>
                </div>
            </div>
            <div className={'flex-1 pr-12 z-40 fixed flex md:hidden  top-0 h-full w-full transition-all ' + (open ? "right-0 delay-0" : "right-full delay-500 ")}>
                <div className={'flex-1 pr-12  fixed blur-sm h-full w-full bg-black transition-all duration-500 ' + (open ? "bg-opacity-30" : "bg-opacity-0")}>
                </div>
            </div>
        </>
    )
}

const menuVariations = {
    default: (props: MenuProps) =>
        <MenuContainer
            {...props}
            className="w-60 flex-col h-full p-2 bg-zinc-800 border-r-zinc-300 border-r gap-2"
        />,
    white: (props: MenuProps) =>
        <MenuContainer
            {...props}
            className="w-60 flex-col h-full p-2 bg-zinc-100 border-r-zinc-300 border-r gap-2"
        />
}

const SidebarMenu = useSelector<keyof typeof menuVariations, MenuProps>(menuVariations)

export default SidebarMenu
