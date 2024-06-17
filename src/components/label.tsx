import React from "react";
import useSelector from "../utils/hooks/use-selector";

interface LabelProps {
    children: React.ReactNode
    className: string
}

function LabelContainer(_: LabelProps) {
    return (
        <label {..._} />
    )
}

const labelVariations = {
    default: (props: LabelProps) =>
        <LabelContainer {...props} className='mb-1 font-semibold px-1 text-zinc-800 text-sm' />,
    row: (props: LabelProps) =>
        <LabelContainer {...props} className='font-semibold px-1 text-zinc-800 text-sm' />,
}

const Label = useSelector<keyof typeof labelVariations,LabelProps>(labelVariations)

export default Label