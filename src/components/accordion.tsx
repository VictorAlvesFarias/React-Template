import { LucideLoaderCircle } from 'lucide-react';
import React, { LegacyRef, forwardRef, useContext, useState } from 'react';
import { useSelector } from '../utils/hooks/selector-hooks';
import { AccordionContextObject } from './accordion-context';

interface AccordionProps {
    children: React.ReactNode
    className: string
    ref: any
    onClick?: (e: any) => any
}

const AccordionContainer = forwardRef((_: AccordionProps, ref: LegacyRef<HTMLDivElement>) => {
    const {open} = useContext(AccordionContextObject)

    return (
        <div
            ref={ref}
            className={_.className+' aria-hidden:max-h-96 gap-3  aria-hidden:py-3 flex max-h-0 overflow-hidden flex-col transition-all duration-300'}
            aria-hidden={open}
        >
            { _.children}
        </div>
    );
})
export default AccordionContainer
