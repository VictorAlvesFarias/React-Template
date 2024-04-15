import React from 'react'
import { UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';

interface InputContainerProps extends Omit<React.ButtonHTMLAttributes<HTMLInputElement>,"children">  {
  register?: UseFormRegisterReturn
}

interface InputProps extends Omit<InputContainerProps,"className"> {
  variation: keyof typeof inputVariations;
}

const inputVariations = {
  default: (_:InputProps) => 
    <InputContainer {..._} className = "rounded border border-black text-black indent-1 p-1"/>,
  password: (_:InputProps) => 
    <InputContainer {..._} className = "rounded border border-black text-black indent-1 p-1"/>
}

function InputContainer( _: InputContainerProps ) {
  const register = {..._.register}
  const props= {..._,register:null}
  return (
    <input {...props}  {...register} />
  )
}

function Input( props : InputProps) {
  const Component = inputVariations[props.variation] || inputVariations.default;
  return <Component {...props} />;
}

export default Input