'use client'

import { useLocation } from "react-router-dom"

export function usePathClientSide() {
    const internationalizationPath =  useLocation().pathname

    return internationalizationPath
}