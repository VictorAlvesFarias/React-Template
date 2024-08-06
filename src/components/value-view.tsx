import React, { LegacyRef, forwardRef, useContext } from 'react';
import { useSelector } from '../utils/hooks/selector-hooks';

interface ValueViewProps {
    children: React.ReactNode
    className: string
    ref: any
}

const ValueViewContainer = forwardRef((_: ValueViewProps, ref: LegacyRef<HTMLDivElement>) => {
    return (
        <div
            ref={ref}
            className={_.className}
        >
            {_.children}
        </div>
    );
})

const valueViewVariants = {
    default: (props: ValueViewProps, ref: any) => {
        return (
            <ValueViewContainer
                {...props}
                ref={ref}
                className=' text-zinc-800 min-h-9 rounded px-3 flex items-center bg-zinc-300 border-none shadow-sm ' />
        )
    }
}

const ValueView = useSelector<keyof typeof valueViewVariants, ValueViewProps>(valueViewVariants)

export default ValueView