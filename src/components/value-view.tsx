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

export default ValueViewContainer