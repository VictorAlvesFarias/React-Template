import React, { LegacyRef, useContext, useEffect, useRef, useState } from 'react'
import { useSelector } from '../utils/hooks/selector-hooks'
import { AccordionContextObject } from './accordion-context'

interface AccordionRootProps {
    callback?: () => {},
    className: string,
    children: React.ReactNode
}

function AccordionRootContainer(_: AccordionRootProps) {
    return (
        <div {..._}>
            {_.children}
        </div>
    )
}

export default AccordionRootContainer