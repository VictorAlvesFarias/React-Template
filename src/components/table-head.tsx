import React from "react"
import useSelector from "../utils/hooks/use-selector"

interface TableHeadProps {
    children: React.ReactNode
    className:string
}


function TableHeadContainer(props:TableHeadProps) {
    return (
        <thead className={props.className}>
            {props.children}
        </thead>
    )
}


const headVariations = {
    default: (props: TableHeadProps) =>
        <TableHeadContainer {...props} className="min-w-full divide-b divide-gray-200 bg-zinc-100" />,
    sticky: (props: TableHeadProps) =>
        <TableHeadContainer {...props} className="min-w-full divide-b divide-gray-200 bg-zinc-100 sticky top-0 " />
}

const TableHead = useSelector<keyof typeof headVariations, TableHeadProps>(headVariations)

export default TableHead