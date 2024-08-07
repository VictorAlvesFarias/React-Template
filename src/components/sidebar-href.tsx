import React from "react"
import { useSelector } from "../utils/hooks/selector-hooks"

const hrefVariations = {
    default: (props: React.HTMLAttributes<HTMLDivElement>) =>
        <div {...props} className=" text-md flex gap-3" />
}

const SidebarHref = useSelector<keyof typeof hrefVariations, React.HTMLAttributes<HTMLDivElement>>(hrefVariations)

export default SidebarHref