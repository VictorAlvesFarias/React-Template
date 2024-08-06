import React, { LegacyRef, useContext, useEffect, useRef, useState } from 'react'
import { useSelector } from '../utils/hooks/selector-hooks'
import { ModalContextObject } from './modal-context'

interface ModalRootProps {
    callback?: () => {},
    className: string,
    children: React.ReactNode
}

function ModalRootContainer(_: ModalRootProps) {
    const  {open} = useContext(ModalContextObject)

    return (
        open &&
        <div aria-checked={open} className={_.className + ' z-50 w-full top-0 left-0 h-screen fixed flex' }>
            {_.children}
        </div>
    )
}

const modalRootVariations = {
    default: (props: ModalRootProps) =>
        <ModalRootContainer {...props} className='bg-opacity-35 bg-black center ' />
}

const ModalRoot = useSelector<keyof typeof modalRootVariations,ModalRootProps>(modalRootVariations)

export default ModalRoot