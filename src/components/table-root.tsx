import { useSelector } from "../utils/hooks/selector-hooks"
import React from "react"

const rootVariations = {
    default: (props: React.HTMLAttributes<HTMLTableElement>) =>
        <table {...props} className="min-w-full divide-y h-fit divide-black divide-opacity-10" />
}

const TableRoot = useSelector<keyof typeof rootVariations, React.HTMLAttributes<HTMLTableElement>>(rootVariations)

export default TableRoot