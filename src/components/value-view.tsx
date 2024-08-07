import { useSelector } from '../utils/hooks/selector-hooks'
import React from 'react'

const valueViewVariants = {
    default: (props: React.HTMLAttributes<HTMLDivElement>) => {
        return (
            <div {...props} className=' text-zinc-800 min-h-9 rounded px-3 flex items-center bg-zinc-300 border-none shadow-sm ' />
        )
    }
}

const ValueView = useSelector<keyof typeof valueViewVariants, React.HTMLAttributes<HTMLDivElement>>(valueViewVariants)

export default ValueView