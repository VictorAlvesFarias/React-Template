import React from 'react'

interface FormContainerProps extends React.HTMLAttributes<HTMLFormElement> {

}

interface FormProps extends Omit<FormContainerProps, "className"> {
    variation: keyof typeof formsVariation;
}

const formsVariation = {
    default: (_: FormProps) =>
        <FormContainer {..._} className='space-y-4 md:space-y-6' />
}

function FormContainer(_: FormContainerProps) {
    return (
        <form {..._} />
    )
}

function Form(props: FormProps) {
    const Component = formsVariation[props.variation] || formsVariation.default;
    return <Component {...props} />;
}

export {
    Form
}