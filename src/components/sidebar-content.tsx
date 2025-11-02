import React from "react"
import { componentSelector } from "react-component-selector"

const contentVariations = {
    default: (props: React.HTMLAttributes<HTMLDivElement>) =>
        <div {...props} className=" h-full items-center justify-center flex-1 flex-col md:flex-rol overflow-auto bg-zinc-100 md:mt-0 relative" />
}

const SidebarContent = componentSelector<keyof typeof contentVariations, React.HTMLAttributes<HTMLDivElement>>(contentVariations)

export default SidebarContent
