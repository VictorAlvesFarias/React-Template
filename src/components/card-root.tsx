import React from "react"
import { useSelector } from "../utils/hooks/selector-hooks"

const CardRootVariations = {
    default: (props: React.HTMLAttributes<HTMLDivElement>) =>
        <div {...props} className={"px-6 inline-table"} />,
}

const CardRoot = useSelector<keyof typeof CardRootVariations, React.HTMLAttributes<HTMLDivElement>>(CardRootVariations)

export default CardRoot
