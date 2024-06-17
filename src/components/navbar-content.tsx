import React from "react"
import useSelector from "../utils/hooks/use-selector"

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
        <ContentContainer {...props} className="h-full items-center justify-center flex-1 flex-col overflow-auto bg-zinc-100 mt-11" />
}

const NavbarContent = useSelector<keyof typeof contentVariations,ContentProps>(contentVariations)

export default NavbarContent
