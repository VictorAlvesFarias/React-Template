import React, { useContext } from "react"
import { AuthContext } from "../auth/auth-context"
import { useAuthenticateComponent } from "../utils/hooks/permission-hooks"
import IClaimsKeys from "../interfaces/shared/claims"

interface PermissionProps {
    claim: IClaimsKeys | undefined | IClaimsKeys[]
    children: React.ReactNode
}

function Permission(props: PermissionProps) {
    const isAuthenticated = useAuthenticateComponent()

    return (
        isAuthenticated(props.claim) &&
        <>
            {props.children}
        </>
    )
}

export default Permission
