import React from "react"
import { componentSelector } from "react-component-selector"

const CardRootVariations = {
    default: (props: React.HTMLAttributes<HTMLDivElement>) =>
        <div {...props} className={"px-6 inline-table"} />,
}

const CardRoot = componentSelector<keyof typeof CardRootVariations, React.HTMLAttributes<HTMLDivElement>>(CardRootVariations)

export default CardRoot
