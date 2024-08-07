import React from "react"
import { useSelector } from "../utils/hooks/selector-hooks"

const headVariations = {
  default: (props: React.HTMLAttributes<HTMLTableCellElement>) =>
    <th {...props} className="" />,
  head: (props: React.HTMLAttributes<HTMLTableCellElement>) =>
    <th {...props} className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase" />,
  body: (props: React.HTMLAttributes<HTMLTableCellElement>) =>
    <th {...props} className="px-6 py-4 whitespace-nowrap text-sm text-gray-800" />,
  "body-end": (props: React.HTMLAttributes<HTMLTableCellElement>) =>
    <th {...props} className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 flex justify-end" />
}

const TableCell = useSelector<keyof typeof headVariations, React.HTMLAttributes<HTMLTableCellElement>>(headVariations)

export default TableCell