import React from "react"
import useSelector from "../utils/hooks/use-selector"

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
        <RootContainer {...props} className="flex-col flex relative text-zinc-200 w-full" />,
    checkbox: (props: RootProps) =>
        <RootContainer {...props} className="flex justify-between relative text-zinc-200 gap-3" />
}

const InputRoot = useSelector<keyof typeof rootVariations,RootProps>(rootVariations)

export default InputRoot