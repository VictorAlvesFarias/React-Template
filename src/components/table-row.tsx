import React from "react"
import { useSelector } from "../utils/hooks/selector-hooks"

interface TableRowProps {
    children: React.ReactNode
    className: string
    onClick?: (e: any) => any
    selected?: boolean
}

function TableRowContainer(props: TableRowProps) {
    return (
        <tr aria-selected={props.selected} {...props} className={props.className}>
            {props.children}
        </tr>
    )
}

const rowVariations = {
    default: (props: TableRowProps) =>
        <TableRowContainer {...props} className="px-6" />,
    selectable: (props: TableRowProps) =>
        <TableRowContainer {...props} className="px-6 hover:bg-black hover:bg-opacity-10 cursor-pointer aria-selected:bg-black aria-selected:bg-opacity-10" />
}

const TableRow = useSelector<keyof typeof rowVariations, TableRowProps>(rowVariations)

export default TableRow

const navbarRootStyle = {
    teste:{
        className:""
    }
}