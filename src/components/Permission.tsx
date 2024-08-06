import React, { useContext } from "react"
import { AuthContext } from "../auth/auth-context"
import { IClaimsKeys } from "../interfaces/shared/claims"
import { useAuthenticateComponent } from "../utils/hooks/permission-hooks"

interface PermissionProps {
    claim: IClaimsKeys | undefined | IClaimsKeys[]
    children: React.ReactNode
}

function Permission(props: PermissionProps) {
    const isAuthenticated = useAuthenticateComponent(props.claim)

    return (
        isAuthenticated() &&
        <>
            {props.children}
        </>
    )
}

export default Permission
