import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from '../utils/hooks/selector-hooks'
import { ModalContextObject } from './modal-context'

interface ModalCloseProps {
    open?: boolean,
    callback?: (e:any) => any
    className?: string,
    children?: React.ReactNode
}

function ModalClose(_: ModalCloseProps) {
    const {setOpen} = useContext(ModalContextObject) 

    function handleOpen(e:React.MouseEvent<HTMLDivElement, MouseEvent>){
        setOpen(false)
        _.callback?_.callback(e):null
    }

    return (
        <div onClick={handleOpen} className={_.className}>

            {_.children}
        </div>
    )
}

export default ModalClose