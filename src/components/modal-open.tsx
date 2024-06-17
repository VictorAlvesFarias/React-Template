import React, { useContext, useEffect, useState } from 'react'
import useSelector from '../utils/hooks/use-selector'
import { ModalContextObject } from './modal-context'

interface ModalOpenProps {
    callback?: (e:any) => any
    className?: string,
    children?: React.ReactNode[]|React.ReactNode
}

function ModalOpen(_: ModalOpenProps) {
    const {setOpen} = useContext(ModalContextObject) 

    function handleOpen(e:React.MouseEvent<HTMLDivElement, MouseEvent>){
        setOpen(true)
        _.callback?(e):null
    }

    return (
        <div onClick={handleOpen} className={_.className}>

            {_.children}
        </div>
    )
}

export default ModalOpen