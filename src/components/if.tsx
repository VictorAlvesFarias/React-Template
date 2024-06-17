import React from "react"

interface IfProps {
    conditional: boolean | undefined | null
    children: React.ReactNode
}

function If(props: IfProps) {
    return (
        props.conditional &&
        <>
            {props.children}
        </>
    )
}

export default If