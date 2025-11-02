import React from 'react'
import { SidebarHamburguerContainerProps, SidebarHamburguerContainer } from 'react-base-components'
import { componentSelector } from "react-component-selector"

const hamburguerVariations = {
    default: (props: SidebarHamburguerContainerProps) =>
        <SidebarHamburguerContainer {...props} className="md:hidden cursor-pointer" />
}

const SidebarHamburguer = componentSelector<keyof typeof hamburguerVariations, SidebarHamburguerContainerProps, "className">(hamburguerVariations)

export default SidebarHamburguer