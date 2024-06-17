import React from 'react'
import useSelector from '../utils/hooks/use-selector'

interface FormProps {
    className: string
    onSubmit: (e: any) => any
    children: React.ReactNode
    id?: string
}

function FormContainer(props: FormProps) {
    return (
        <form id={props.id} className={props.className} onSubmit={props.onSubmit} >
            {props.children}
        </form>
    )
}

const formVariation = {
    default: (props: FormProps) =>
        <FormContainer {...props} className='flex flex-col gap-3' />
}

const Form = useSelector<keyof typeof formVariation, FormProps>(formVariation)

export {
    Form
}