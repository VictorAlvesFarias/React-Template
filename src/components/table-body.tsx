import React from "react"
import { componentSelector } from "../utils/helpers/component-selector"

const bodyVariations = {
    default: (props: React.HTMLAttributes<HTMLTableSectionElement>) =>
        <tbody {...props} className="divide-y divide-black divide-opacity-10 h-fit  rounded" />
}

const TableBody = componentSelector<keyof typeof bodyVariations, React.HTMLAttributes<React.HTMLAttributes<HTMLTableSectionElement>>>(bodyVariations)

export default TableBody