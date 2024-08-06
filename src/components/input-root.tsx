import React from "react"
import { useSelector } from "../utils/hooks/selector-hooks"

interface RootProps {
    className: string
    children: React.ReactNode
}

function RootContainer(_: RootProps) {
    return (
        <div {..._}>
            {_.children}
        </div>
    )
}

const rootVariations = {
    default: (props: RootProps) =>
        <RootContainer {...props} className="flex-col flex relative w-full" />,
    "default-full": (props: RootProps) =>
        <RootContainer {...props} className="flex-col flex relative w-full h-full" />,
    checkbox: (props: RootProps) =>
        <RootContainer {...props} className="flex justify-between relative gap-3" />
}

const InputRoot = useSelector<keyof typeof rootVariations,RootProps>(rootVariations)

export default InputRoot