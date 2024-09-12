import { useContext, useEffect, useLayoutEffect } from "react";
import { AuthContext } from "../../auth/auth-context";
import { useNavigate } from "react-router-dom";
import IClaimsKeys from "../../interfaces/shared/claims";
import { AUTH } from "../../config/auth-config";

function usePermission(claim: IClaimsKeys | undefined | IClaimsKeys[]) {
    const { permissions } = useContext(AuthContext)
    const navigate = useNavigate()
    let authorized = false

    if(Array.isArray(claim)) {
        for (let i = 0; i < claim.length; i++) {
            if(permissions != null){
                if (permissions[claim[i]] == true || AUTH.DISABLE_AUTH) {
                    authorized = true
    
                    break
                }
            }
        }

    }
    else {
        authorized = (permissions != null && claim != null && permissions[claim]) || AUTH.DISABLE_AUTH
    }
    
    useEffect(() => {
        if (!authorized) {
            navigate("/405")
        }
    }, [])
}
function useAuthenticateComponent() {
    const { permissions } = useContext(AuthContext)

    function isAuthenticated(claim: IClaimsKeys | undefined | IClaimsKeys[]) {
        if (permissions != null && claim != null) {
            if (Array.isArray(claim)) {
                let result = false  

                for (let i = 0; i < claim.length; i++) {
                    if (permissions[claim[i]] == true || AUTH.DISABLE_AUTH) {
                        result = true

                        break
                    }
                }

                return result
            }
            else {
                return permissions[claim] ?? AUTH.DISABLE_AUTH
            }
        }
    }

    return isAuthenticated
}

export {
    usePermission,
    useAuthenticateComponent
}