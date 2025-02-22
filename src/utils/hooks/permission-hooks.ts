import { useContext, useEffect, useLayoutEffect } from "react";
import { AuthContext } from "../../auth/auth-context";
import { useNavigate } from "react-router-dom";
import IClaimsKeys from "../../interfaces/shared/claims";
import { AUTH } from "../../config/auth-config";
import { claimAuthentication } from "../helpers/claim-authentication";

function usePermission(claim: IClaimsKeys | undefined | IClaimsKeys[], redirect: () => void) {
    const { permissions }: any = useContext(AuthContext)
    const authorized = claimAuthentication(claim, AUTH.DISABLE_AUTH, permissions)

    useEffect(() => {
        if (authorized) {
            redirect()
        }
    }, [])
}
function useAuthenticateComponent() {
    const { permissions }: any = useContext(AuthContext)

    function isAuthenticated(claim: IClaimsKeys | undefined | IClaimsKeys[]) {
        return claimAuthentication(claim, AUTH.DISABLE_AUTH, permissions)
    }

    return isAuthenticated
}

export {
    usePermission,
    useAuthenticateComponent
}