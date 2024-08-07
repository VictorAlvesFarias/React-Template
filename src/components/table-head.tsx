import React from "react"
import { useSelector } from "../utils/hooks/selector-hooks"

const headVariations = {
    default: (props: React.HTMLAttributes<HTMLTableCellElement>) =>
        <th {...props} className="min-w-full divide-b divide-opacity-10 " />,
    sticky: (props: React.HTMLAttributes<HTMLTableCellElement>) =>
        <th {...props} className="min-w-full divide-b divide-opacity-10  sticky top-0 " />
}

const TableHead = useSelector<keyof typeof headVariations, React.HTMLAttributes<HTMLTableCellElement>>(headVariations)

export default TableHead