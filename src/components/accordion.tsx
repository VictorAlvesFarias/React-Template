import { LucideLoaderCircle } from 'lucide-react';
import React, { LegacyRef, forwardRef, useContext, useState } from 'react';
import useSelector from '../utils/hooks/use-selector';
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
            className={_.className+' aria-hidden:max-h-96 max-h-0 overflow-hidden flex-col transition-all duration-300'}
            aria-hidden={open}
        >
            { _.children}
        </div>
    );
})

const AccordionVariations = {
    default: (props: AccordionProps, ref: any) => {
        return (
            <AccordionContainer
                {...props}
                ref={ref}
                className='' />
        )
    }
}

const Accordion = useSelector<keyof typeof AccordionVariations, AccordionProps>(AccordionVariations)

export default Accordion
