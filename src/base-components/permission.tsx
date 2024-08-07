import React from "react"
import { useAuthenticateComponent } from "../utils/hooks/permission-hooks"
import IClaimsKeys from "../interfaces/shared/claims"

interface IPermissionProps {
    claim: IClaimsKeys | undefined | IClaimsKeys[]
    children: React.ReactNode
}

function Permission(props: IPermissionProps) {
    const isAuthenticated = useAuthenticateComponent(props.claim)

    return (
        isAuthenticated() &&
        <>
            {props.children}
        </>
    )
}

export default Permission

export {
    IPermissionProps
}