import React from "react"
import { useSelector } from "../utils/hooks/selector-hooks"

interface ContentProps {
    className: string,
    children?: React.ReactNode
}

function ContentContainer(props: ContentProps) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

const contentVariations = {
    default: (props: ContentProps) =>
        <ContentContainer {...props} className=" h-full items-center justify-center flex-1 flex-col md:flex-rol overflow-auto bg-zinc-100 md:mt-0 relative" />
}

const SidebarContent = useSelector<keyof typeof contentVariations,ContentProps>(contentVariations)

export default SidebarContent
