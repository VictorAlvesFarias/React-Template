import React from "react"

interface IIfProps {
    conditional: boolean | undefined | null
    children: React.ReactNode
}

function If(props: IIfProps) {
    return (
        props.conditional &&
        <>
            {props.children}
        </>
    )
}

export default If