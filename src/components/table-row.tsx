import React from "react"
import { useSelector } from "../utils/hooks/selector-hooks"

const rowVariations = {
    default: (props: React.HTMLAttributes<HTMLTableRowElement>) =>
        <tr {...props} className="px-6 hover:bg-black hover:bg-opacity-10 cursor-pointer aria-selected:bg-black aria-selected:bg-opacity-10" />,
}

const TableRow = useSelector<keyof typeof rowVariations, React.HTMLAttributes<HTMLTableRowElement>>(rowVariations)

export default TableRow
