
export function urlParams(params) {
    if (params) {
        const keys = Object.keys(params)
        const stringParams = keys.map(e => {
            return e + "=" + params[e]
        });

        return "?" + stringParams.join("&")
    }

    return ""
}