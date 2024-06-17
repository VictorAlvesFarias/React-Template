import React from "react"
import useSelector from "../utils/hooks/use-selector"

interface TableRowProps {
    children: React.ReactNode
    className: string
}

function TableRowContainer(props: TableRowProps) {
    return (
        <tr className={props.className}>
            {props.children}
        </tr>
    )
}

const rowVariations = {
    default: (props: TableRowProps) =>
        <TableRowContainer {...props} className="px-6" />
}

const TableRow = useSelector<keyof typeof rowVariations, TableRowProps>(rowVariations)

export default TableRow
