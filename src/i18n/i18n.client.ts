'use client'

import { useLocation } from "react-router-dom"

export function getPathClientSide() {
    const internationalizationPath =  useLocation().pathname

    return internationalizationPath
}