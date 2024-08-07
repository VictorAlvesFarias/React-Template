import React from "react"
import { useSelector } from '../utils/hooks/selector-hooks'
import SidebarMenuContainer, { IMenuContainerProps } from '../base-components/sidebar-menu'

const menuVariations = {
    default: (props: IMenuContainerProps) =>
        <SidebarMenuContainer
            {...props}
            className="w-60 flex-col h-full p-2 bg-zinc-800 border-r-zinc-300 border-r gap-2"
        />,
    white: (props: IMenuContainerProps) =>
        <SidebarMenuContainer
            {...props}
            className="w-60 flex-col h-full p-2 bg-zinc-100 border-r-zinc-300 border-r gap-2"
        />
}

const SidebarMenu = useSelector<keyof typeof menuVariations, IMenuContainerProps>(menuVariations)

export default SidebarMenu
