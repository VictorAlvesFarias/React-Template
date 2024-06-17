import React from "react";
import { forwardRef } from "react";

function useSelector<T,K>(components) {
    type Selector = K & {
        variation?: T;
        ref:any
    };

    const Data = forwardRef((e:Omit<Selector,"className">,ref) => components[e.variation??"default"](e,ref))

    return Data
}

export default useSelector