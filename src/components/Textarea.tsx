import React from 'react'
import { UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';

interface TextareaContainerProps extends Omit<React.ButtonHTMLAttributes<HTMLTextAreaElement>,"children">  {
  register?: UseFormRegisterReturn
}

interface TextareaProps extends Omit<TextareaContainerProps,"className"> {
  variation: keyof typeof TextareaVariations;
}

const TextareaVariations = {
  default: (_:TextareaProps) => 
    <TextareaContainer {..._} className = "rounded border border-black text-black indent-1 p-1"/>,
  password: (_:TextareaProps) => 
    <TextareaContainer {..._} className = "rounded border border-black text-black indent-1 p-1"/>
}

function TextareaContainer( _: TextareaContainerProps ) {
  const register = {..._.register}
  const props= {..._,register:null}
  return (
    <textarea {...props}  {...register} />
  )
}

function Textarea( props : TextareaProps) {
  const Component = TextareaVariations[props.variation] || TextareaVariations.default;
  return <Component {...props} />;
}

export {
  Textarea
}