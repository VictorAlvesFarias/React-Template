import React, { TableHTMLAttributes } from "react"
import { useSelector } from "../utils/hooks/selector-hooks"

const bodyVariations = {
    default: (props: React.HTMLAttributes<HTMLTableSectionElement>) =>
        <tbody {...props} className="divide-y divide-black divide-opacity-10 h-fit  rounded" />
}

const TableBody = useSelector<keyof typeof bodyVariations, React.HTMLAttributes<React.HTMLAttributes<HTMLTableSectionElement>>>(bodyVariations)

export default TableBody