import React from 'react'
import { AccordionContainer, IAccordionContainerProps, } from 'react-base-components'
import { componentSelector } from "react-component-selector"

const AccordionVariations = {
    default: (props: IAccordionContainerProps, ref: any) => {
        return (
            <AccordionContainer
                {...props}
                ref={ref}
                className=' bg-black bg-opacity-20 rounded aria-hidden:mt-1 pr-3' />
        )
    }
}

const Accordion = componentSelector<keyof typeof AccordionVariations, IAccordionContainerProps>(AccordionVariations)

export default Accordion
