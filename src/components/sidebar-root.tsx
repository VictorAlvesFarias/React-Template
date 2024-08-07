import React from "react"
import { useSelector } from '../utils/hooks/selector-hooks'

const rootVariations = {
    default: (props: React.HTMLAttributes<HTMLDivElement>, ref) =>
        <nav {...props} ref={ref} className="flex flex-col md:flex-row w-screen h-screen " />
}

const SidebarRoot = useSelector<keyof typeof rootVariations, React.HTMLAttributes<HTMLDivElement>>(rootVariations)

export default SidebarRoot
