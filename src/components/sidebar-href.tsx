import React from "react"
import { componentSelector } from "react-component-selector"

const hrefVariations = {
    default: (props: React.HTMLAttributes<HTMLDivElement>) =>
        <div {...props} className=" text-md flex gap-3" />
}

const SidebarHref = componentSelector<keyof typeof hrefVariations, React.HTMLAttributes<HTMLDivElement>>(hrefVariations)

export default SidebarHref