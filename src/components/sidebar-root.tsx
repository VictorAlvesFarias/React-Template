import React from "react"
import { componentSelector } from "react-component-selector"

const rootVariations = {
    default: (props: React.HTMLAttributes<HTMLDivElement>, ref: any) =>
        <nav {...props} ref={ref} className="flex flex-col md:flex-row w-screen h-screen " />
}

const SidebarRoot = componentSelector<keyof typeof rootVariations, React.HTMLAttributes<HTMLDivElement>>(rootVariations)

export default SidebarRoot
