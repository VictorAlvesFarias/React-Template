import React from "react"
import { useSelector } from "../utils/hooks/selector-hooks"

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
        <TableRootContainer {...props} className="min-w-full divide-y h-fit divide-black divide-opacity-10" />
}

const TableRoot = useSelector<keyof typeof rootVariations, TableRootProps>(rootVariations)

export default TableRoot