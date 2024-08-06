import React from "react"
import { useSelector } from "../utils/hooks/selector-hooks"

interface CardProps {
    ref?: any,
    value?: any
    className: string
    children: React.ReactNode
}

function CardRootContainer(props: CardProps) {
    return (
        <div {...props} />
    )
}

const CardRootVariations = {
    default: (props: CardProps) =>
        <CardRootContainer
            {...props}
            className={"px-6 inline-table"}
        />,
}

const CardRoot = useSelector<keyof typeof CardRootVariations, CardProps>(CardRootVariations)

export default CardRoot
