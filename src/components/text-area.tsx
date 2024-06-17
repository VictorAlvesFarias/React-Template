import React from 'react'
import { UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';
import useSelector from '../utils/hooks/use-selector';

interface TextareaProps  {
  register?: UseFormRegisterReturn,
  className?:string
}

function TextareaContainer(props: TextareaProps) {
  return (
    <textarea className={props.className}  {...props.register} />
  )
}

const textareaVariations = {
  default: (props:TextareaProps) => 
    <TextareaContainer register={props.register} className = "rounded border border-black text-black indent-1 p-1"/>,
  password: (props:TextareaProps) => 
    <TextareaContainer register={props.register}  className = "rounded border border-black text-black indent-1 p-1"/>
}

const Textarea = useSelector<keyof typeof textareaVariations,TextareaProps>(textareaVariations)

export default Textarea