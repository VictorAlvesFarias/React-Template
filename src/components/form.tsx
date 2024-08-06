import React, { FormEvent, forwardRef, LegacyRef, useRef } from 'react'
import { useSelector } from '../utils/hooks/selector-hooks'
import { RefCallBack } from 'react-hook-form'

interface FormProps {
    className: string
    onSubmit: (e: any) => any
    children: React.ReactNode
    id?: string
}

const FormContainer = forwardRef((props: FormProps, ref: RefCallBack | LegacyRef<HTMLFormElement>) => {
    const internalRef = useRef<HTMLFormElement | null>(null);

    function handleRef(element: HTMLFormElement | null) {
        internalRef.current = element;
        if (ref instanceof Function) {
            ref(element);
        }
    };

    function handleOnSubmit(event: FormEvent) {
        event.preventDefault()
        if (props.onSubmit) {
            props.onSubmit(event)
        }
    }

    return (
        <form ref={handleRef} id={props.id} className={props.className} onSubmit={handleOnSubmit} >
            {props.children}
        </form>
    )
})

const formVariation = {
    default: (props: FormProps) =>
        <FormContainer {...props} className='flex flex-col gap-3 p-6' />,
    card: (props: FormProps) =>
        <FormContainer {...props} className='flex flex-col gap-3 ' />,
    "default-full": (props: FormProps) =>
        <FormContainer {...props} className='flex flex-col gap-3 h-full w-full p-6' />,
    row: (props: FormProps) =>
        <FormContainer {...props} className='flex gap-3 p-6' />
}

const Form = useSelector<keyof typeof formVariation, FormProps>(formVariation)

export {
    Form
}