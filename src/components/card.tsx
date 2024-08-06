import React from "react"
import { useSelector } from "../utils/hooks/selector-hooks"

interface CardProps {
    ref?: any,
    value?: any
    className: string
    children: React.ReactNode
}

function CardContainer(props: CardProps) {
    return (
        <div {...props} />
    )
}

const CardVariations = {
    default: (props: CardProps) =>
        <CardContainer
            {...props}
            className={"p-6 flex-1 shadow-md h-full rounded bg-black bg-opacity-5 flex-col gap-3 flex"}
        />,
}

const Card = useSelector<keyof typeof CardVariations, CardProps>(CardVariations)

export default Card
