import React from "react"
import { componentSelector } from "../utils/helpers/component-selector"

const CardVariations = {
    default: (props: React.HTMLAttributes<HTMLDivElement>) =>
        <div {...props} className={"p-6 flex-1 shadow-md h-full rounded bg-black bg-opacity-5 flex-col gap-3 flex"} />,
}

const Card = componentSelector<keyof typeof CardVariations, React.HTMLAttributes<HTMLDivElement>>(CardVariations)

export default Card
