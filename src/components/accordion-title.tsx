import React from 'react'
import { IAccordionTitleContainerProps, AccordionTitleContainer } from 'react-base-components'
import { componentSelector } from "react-component-selector"

const AccordionTitleVariations = {
    default: (props: IAccordionTitleContainerProps, ref: any) => {
        return (
            <AccordionTitleContainer
                {...props}
                ref={ref}
                className='' />
        )
    }
}

const AccordionTitle = componentSelector<keyof typeof AccordionTitleVariations, IAccordionTitleContainerProps, "className">(AccordionTitleVariations)

export default AccordionTitle
