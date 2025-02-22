export function pagesCounter(page: number, totalPages: number, counter: number) {
    const pages: any[] = []

    for (let index = 1; index < counter; index++) {
        if (page - index > 0) {
            pages.push({
                page: page - index,
                current: false
            })
        }
    }

    pages.push({
        page: page,
        current: true
    })

    for (let index = 1; index < counter; index++) {
        if (page + index <= totalPages) {
            pages.push({
                page: page + index,
                current: false
            })
        }
    }

    return pages
}
