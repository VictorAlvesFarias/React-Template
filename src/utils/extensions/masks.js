export function setMask(value, [regex, replacement]) {
    value = value?.replace(/\D/g, '')
    value = value?.replace(regex, replacement)

    return value
}