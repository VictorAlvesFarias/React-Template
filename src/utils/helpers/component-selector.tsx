import { forwardRef } from "react";

function componentSelector<T, K>(components) {
    type Selector = K & {
        variation?: T;
        ref: any
    };
    const Data = forwardRef<any, Selector>((e, ref) => {

        return (
            components[e.variation ?? "default"](e, ref)
        )
    })

    return Data
}

export {
    componentSelector
}
