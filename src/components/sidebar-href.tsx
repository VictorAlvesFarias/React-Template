import React from "react"
import { useSelector } from "../utils/hooks/selector-hooks"

interface HrefProps {
    className: string,
    children: React.ReactNode
}

function HrefContainer(props: HrefProps) {
    return (
        <p className={props.className}>
            {props.children}
        </p>
    )
}

const hrefVariations = {
    default: (props: HrefProps) =>
        <HrefContainer {...props} className=" text-md flex gap-3" />
}

const SidebarHref = useSelector<keyof typeof hrefVariations, HrefProps>(hrefVariations)

export default SidebarHref