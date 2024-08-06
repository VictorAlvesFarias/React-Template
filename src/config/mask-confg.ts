const MASK: { [key: string]: [RegExp, string]; } = {
    DOCUMENT: [/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'],
    PHONE: [/(^\d{2})(\d{4,5})(\d{4}$)/, '($1) $2-$3'],
    DATE: [/(^\d{2})(\d{2})(\d{4})/, '$1/$2/$3']
}

export {
    MASK
}