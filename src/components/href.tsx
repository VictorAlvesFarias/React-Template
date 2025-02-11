import { componentSelector } from "../utils/helpers/component-selector"
import SidebarItemContainer, { IHrefContainerProps } from '../base-components/href'
import React from "react"

const HrefVariations = {
    default: (props: IHrefContainerProps) =>
        <SidebarItemContainer {...props} className='border-violet-500 p-2 px-3 rounded-full border text-sm bg-violet-500 bg-opacity-20 w-fit text-violet-500 hover:bg-opacity-30 transition-all' />,
}

const Href = componentSelector<keyof typeof HrefVariations, IHrefContainerProps>(HrefVariations)

export default Href