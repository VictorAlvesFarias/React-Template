export function number(value) {
    if (/^[0-9]+$/.test(value)) {
        return true;
    }
    else {
        return false;
    }
}