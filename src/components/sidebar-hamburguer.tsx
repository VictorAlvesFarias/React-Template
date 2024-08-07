import React from "react"
import SidebarHamburguerContainer, { SidebarHamburguerContainerProps } from '../base-components/sidebar-hamburguer'
import { useSelector } from "../utils/hooks/selector-hooks"

const hamburguerVariations = {
    default: (props: SidebarHamburguerContainerProps) =>
        <SidebarHamburguerContainer {...props} className="md:hidden cursor-pointer" />
}

const SidebarHamburguer = useSelector<keyof typeof hamburguerVariations, SidebarHamburguerContainerProps>(hamburguerVariations)

export default SidebarHamburguer