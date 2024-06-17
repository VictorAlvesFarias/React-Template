import React from "react"
import useSelector from "../utils/hooks/use-selector"

interface TableRootProps {
    children: React.ReactNode
    className: string
}

function TableRootContainer(props: TableRootProps) {
    return (
        <table className={props.className} >
            {props.children}
        </table>
    )
}

const rootVariations = {
    default: (props: TableRootProps) =>
        <TableRootContainer {...props} className="min-w-full divide-y h-fit divide-gray-200 relative" />
}

const TableRoot = useSelector<keyof typeof rootVariations, TableRootProps>(rootVariations)

export default TableRoot