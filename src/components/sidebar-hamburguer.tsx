import SidebarHamburguerContainer, { SidebarHamburguerContainerProps } from '../base-components/sidebar-hamburguer'
import { componentSelector } from "../utils/helpers/component-selector"

const hamburguerVariations = {
    default: (props: SidebarHamburguerContainerProps) =>
        <SidebarHamburguerContainer {...props} className="md:hidden cursor-pointer" />
}

const SidebarHamburguer = componentSelector<keyof typeof hamburguerVariations, SidebarHamburguerContainerProps>(hamburguerVariations)

export default SidebarHamburguer