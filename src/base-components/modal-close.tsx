import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from '../utils/hooks/selector-hooks'
import { ModalContextObject } from './modal-context'

interface IModalCloseProps {
    open?: boolean,
    callback?: (e: any) => any
    className?: string,
    children?: React.ReactNode
}

function ModalClose(props: IModalCloseProps) {
    const { setOpen } = useContext(ModalContextObject)

    function handleOpen(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        setOpen(false)
        props.callback ? props.callback(e) : null
    }

    return (
        <div onClick={handleOpen} className={props.className}>

            {props.children}
        </div>
    )
}

export default ModalClose

export {
    IModalCloseProps
}