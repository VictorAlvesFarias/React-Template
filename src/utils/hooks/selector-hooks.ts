import React from "react";
import { forwardRef } from "react";
import { useAuthenticateComponent } from "./permission-hooks";
import IClaimsKeys from "../../interfaces/shared/claims";

function useSelector<T, K>(components) {
    type Selector = K & {
        variation?: T;
        ref: any,
        claim?: IClaimsKeys | IClaimsKeys[]
        locked?: boolean
    };

    const Data = forwardRef((e: Omit<Selector, "className">, ref) => {
        const isAuthenticated = useAuthenticateComponent(e.claim)

        return (
            e.locked ?
                isAuthenticated() && components[e.variation ?? "default"](e, ref)
                : components[e.variation ?? "default"](e, ref)
        )
    })

    return Data
}

export {
    useSelector
}