import React from "react"
import useSelector from "../utils/hooks/use-selector"

interface TableBodyProps {
    children: React.ReactNode
    className:string
}


function TableBodyContainer(props:TableBodyProps) {
    return (
        <tbody className={props.className}>
            {props.children}
        </tbody>
    )
}


const bodyVariations = {
    default: (props: TableBodyProps) =>
        <TableBodyContainer {...props} className="divide-y divide-gray-200 h-fit" />
}

const TableBody = useSelector<keyof typeof bodyVariations, TableBodyProps>(bodyVariations)

export default TableBody