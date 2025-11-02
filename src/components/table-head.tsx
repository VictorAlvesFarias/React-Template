import React from "react"
import { componentSelector } from "react-component-selector"

const headVariations = {
    default: (props: React.HTMLAttributes<HTMLTableCellElement>) =>
        <th {...props} className="min-w-full divide-b divide-opacity-10 " />,
    sticky: (props: React.HTMLAttributes<HTMLTableCellElement>) =>
        <th {...props} className="min-w-full divide-b divide-opacity-10  sticky top-0 " />
}

const TableHead = componentSelector<keyof typeof headVariations, React.HTMLAttributes<HTMLTableCellElement>>(headVariations)

export default TableHead