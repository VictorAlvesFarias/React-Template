import React from 'react'
import { IModalRootContainerProps, ModalRootContainer } from 'react-base-components'
import { componentSelector } from "react-component-selector"

const modalRootVariations = {
    default: (props: IModalRootContainerProps) =>
        <ModalRootContainer {...props} className='bg-opacity-35 bg-black center ' />
}

const ModalRoot = componentSelector<keyof typeof modalRootVariations, IModalRootContainerProps>(modalRootVariations)

export default ModalRoot