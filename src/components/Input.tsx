import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputContainerProps extends Omit<React.ButtonHTMLAttributes<HTMLInputElement>, "children"> {
  register?: UseFormRegisterReturn
  readOnly?: boolean
  fake?: "true" | "false"
}

interface InputProps extends Omit<InputContainerProps, "className"> {
  variation: keyof typeof inputVariations;
}

const inputVariations = {
  default: (_: InputProps) =>
    <InputContainer {..._} className="h-9 rounded border bg-white border-black text-black indent-1 p-1  " />,
  password: (_: InputProps) =>
    <InputContainer {..._} className="h-9 rounded border border-black text-black indent-1 p-1" />,
  dropdown: (_: InputProps) =>
    <InputContainer {..._} className="cursor-pointer h-9 rounded border bg-white border-black text-black indent-1 p-1 text-ellipsis overflow-hidden" />,
}

function InputContainer(_: InputContainerProps) {
  const register = { ..._.register }
  const props = { ..._, register: null }

  return (
    !_.fake ?
      <input {...props}  {...register} />
      :
      <>
        <p {...props}>
          {props.value}
        </p>
        <input className='hidden' {..._.register} />
      </>
  )
}

function Input(props: InputProps) {
  const Component = inputVariations[props.variation] || inputVariations.default;
  return <Component {...props} />;
}

export {
  Input,
  InputContainerProps
}