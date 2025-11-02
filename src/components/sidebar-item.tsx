import { componentSelector } from "react-component-selector"
import React from 'react'
import { ISidebarItemContainerProps, SidebarSidebarItemContainerContainer } from 'react-base-components'

const itemVariations = {
    default: (props: ISidebarItemContainerProps) =>
        <SidebarSidebarItemContainerContainer
            {...props}
            className="w-full flex items-center gap-3 text-ellipsis overflow-hidden pl-3 p-2 min- rounded text-zinc-100 text-sm cursor-pointer  duration-300 transition-all aria-selected:font-semibold hover:bg-black hover:bg-opacity-30 aria-selected:bg-black aria-selected:bg-opacity-30 aria-selected:border-l-oikos-green aria-selected:border-l-8 aria-selected:shadow-lg aria-checked:bg-opacity-30 aria-checked:bg-black "
        />,
    accordion: (props: ISidebarItemContainerProps) =>
        <SidebarSidebarItemContainerContainer
            {...props}
            className="ml-3 flex-1 flex items-center gap-3 text-ellipsis overflow-hidden pl-3 p-2 min-h-9 rounded text-zinc-100 text-sm cursor-pointer duration-300 transition-all  aria-selected:font-semibold hover:bg-black hover:bg-opacity-30 aria-selected:bg-black aria-selected:bg-opacity-30 aria-selected:border-l-oikos-green aria-selected:border-l-8 "
        />,
}

const ISidebarItemContainerPropsItem = componentSelector<keyof typeof itemVariations, ISidebarItemContainerProps,"className">(itemVariations)

export default ISidebarItemContainerPropsItem
