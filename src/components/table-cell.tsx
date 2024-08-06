import React from "react"
import { useSelector } from "../utils/hooks/selector-hooks"

interface TableCellProps {
  children?: React.ReactNode
  className: string
}

function TableCellContainer(props: TableCellProps) {
  return (
    <td className={props.className}>
      {props.children}
    </td>
  )
}

const headVariations = {
  default: (props: TableCellProps) =>
      <TableCellContainer {...props} className="" />,
  head: (props: TableCellProps) =>
    <TableCellContainer {...props} className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase" />,
  body: (props: TableCellProps) =>
    <TableCellContainer {...props} className="px-6 py-4 whitespace-nowrap text-sm text-gray-800" />,
  "body-end": (props: TableCellProps) =>
    <TableCellContainer {...props} className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 flex justify-end" />
}

const TableCell = useSelector<keyof typeof headVariations, TableCellProps>(headVariations)

export default TableCell