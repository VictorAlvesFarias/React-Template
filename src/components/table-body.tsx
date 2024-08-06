import React from "react"
import { useSelector } from "../utils/hooks/selector-hooks"

interface TableBodyProps {
    children: React.ReactNode
    className: string
}


function TableBodyContainer(props: TableBodyProps) {
    return (
        <tbody className={props.className}>
            {props.children}
        </tbody>
    )
}


const bodyVariations = {
    default: (props: TableBodyProps) =>
        <TableBodyContainer {...props} className="divide-y divide-black divide-opacity-10 h-fit  rounded" />
}

const TableBody = useSelector<keyof typeof bodyVariations, TableBodyProps>(bodyVariations)

export default TableBody