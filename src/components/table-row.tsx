import React from "react"
import { componentSelector } from "../utils/helpers/component-selector"

const rowVariations = {
    default: (props: React.HTMLAttributes<HTMLTableRowElement>) =>
        <tr {...props} className="px-6 hover:bg-black hover:bg-opacity-10 cursor-pointer aria-selected:bg-black aria-selected:bg-opacity-10" />,
}

const TableRow = componentSelector<keyof typeof rowVariations, React.HTMLAttributes<HTMLTableRowElement>>(rowVariations)

export default TableRow
