import React from 'react'
import { IFormContainerProps, FormContainer } from 'react-base-components'
import { componentSelector } from "react-component-selector"

const formVariation = {
    default: (props: IFormContainerProps) =>
        <FormContainer {...props} className='flex flex-col gap-3 p-6' />,
    card: (props: IFormContainerProps) =>
        <FormContainer {...props} className='flex flex-col gap-3 ' />,
    "default-full": (props: IFormContainerProps) =>
        <FormContainer {...props} className='flex flex-col gap-3 h-full w-full p-6' />,
    row: (props: IFormContainerProps) =>
        <FormContainer {...props} className='flex gap-3 p-6' />
}

const Form = componentSelector<keyof typeof formVariation, IFormContainerProps, "className">(formVariation)

export default Form