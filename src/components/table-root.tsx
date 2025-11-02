import { componentSelector } from "react-component-selector"
import React from "react"

const rootVariations = {
    default: (props: React.HTMLAttributes<HTMLTableElement>) =>
        <table {...props} className="min-w-full divide-y h-fit divide-black divide-opacity-10" />
}

const TableRoot = componentSelector<keyof typeof rootVariations, React.HTMLAttributes<HTMLTableElement>>(rootVariations)

export default TableRoot