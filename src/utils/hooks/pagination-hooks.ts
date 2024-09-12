import { useEffect, useLayoutEffect, useState } from "react"

interface IUsepaginaionProps {
    callback?: Function | null | undefined
    page?: number,
    totalPages?: number,
    counter?: number
}

function pagesCounter(page: number, totalPages: number, counter: number) {
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

function usePagination(props?: IUsepaginaionProps) {
    const [page, setPage] = useState(props?.page ?? 1)
    const [totalPages, setTotalPages] = useState(props?.totalPages ?? 0)
    const [counter, setCounter] = useState(props?.counter ?? 2)

    function handleSetCallback(newCallback: Function) {
        useEffect(() => {
            if (newCallback)  {
                newCallback()
            }
        }, [page])
    }
    function handleSetPage(value) {
        if (value != page) {
            setPage(value)
        }
    }

    return {
        pages: pagesCounter(page, totalPages, counter),
        filters: { page },
        totalPages,
        counter,
        setCounter,
        setTotalPages,
        setPage: handleSetPage,
        setCallback: handleSetCallback
    }
}

export {
    usePagination
}
