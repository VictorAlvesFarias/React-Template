import React, { useContext } from 'react'
import { ModalContextObject } from './modal-context'

interface IModalRootContainerProps {
    callback?: () => {},
    className: string,
    children: React.ReactNode
}

function ModalRootContainer(_: IModalRootContainerProps) {
    const { open } = useContext(ModalContextObject)

    return (
        open &&
        <div aria-checked={open} className={_.className + ' z-50 w-full top-0 left-0 h-screen fixed flex'}>
            {_.children}
        </div>
    )
}

export default ModalRootContainer

export {
    IModalRootContainerProps
}