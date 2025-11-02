import { componentSelector } from "react-component-selector"
import React from 'react'
import { IMenuContainerProps, MenuContainer } from 'react-base-components'

const menuVariations = {
    default: (props: IMenuContainerProps) =>
        <MenuContainer
            {...props}
            className="w-60 flex-col h-full p-2 bg-zinc-800 border-r-zinc-300 border-r gap-2"
        />,
    white: (props: IMenuContainerProps) =>
        <MenuContainer
            {...props}
            className="w-60 flex-col h-full p-2 bg-zinc-100 border-r-zinc-300 border-r gap-2"
        />
}

const SidebarMenu = componentSelector<keyof typeof menuVariations, IMenuContainerProps, "className">(menuVariations)

export default SidebarMenu
