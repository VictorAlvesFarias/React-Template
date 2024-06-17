import { LucideLoaderCircle } from 'lucide-react';
import React, { LegacyRef, forwardRef, useContext, useState } from 'react';
import useSelector from '../utils/hooks/use-selector';
import { AccordionContextObject } from './accordion-context';

interface AccordionTitleProps {
    children: React.ReactNode
    className: string
    ref: any
    onClick?: (e: any) => any
}

const AccordionTitleContainer = forwardRef((_: AccordionTitleProps, ref: LegacyRef<HTMLDivElement>) => {
    const {open,setOpen} = useContext(AccordionContextObject)

    function handleOpenAccordionTitle(e:any) {
        setOpen(!open)
        _.onClick?_.onClick(e):null
    }

    return (
        <div
            ref={ref}
            className={_.className}
            onClick={handleOpenAccordionTitle}
        >
            {_.children}
        </div>
    );
})

const AccordionTitleVariations = {
    default: (props: AccordionTitleProps, ref: any) => {
        return (
            <AccordionTitleContainer
                {...props}
                ref={ref}
                className='' />
        )
    }
}

const AccordionTitle = useSelector<keyof typeof AccordionTitleVariations, AccordionTitleProps>(AccordionTitleVariations)

export default AccordionTitle
