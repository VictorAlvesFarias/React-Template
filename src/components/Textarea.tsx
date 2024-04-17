import React from 'react'
import { UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';

interface TextareaContainerProps  {
  register?: UseFormRegisterReturn,
  className?:string
}

interface TextareaVariation extends Omit<TextareaContainerProps,"className"> {

}

interface TextareaComponent extends TextareaVariation {
  variation: keyof typeof TextareaVariations;
}

const TextareaVariations = {
  default: (props:TextareaVariation) => 
    <TextareaContainer register={props.register} className = "rounded border border-black text-black indent-1 p-1"/>,
  password: (props:TextareaVariation) => 
    <TextareaContainer register={props.register}  className = "rounded border border-black text-black indent-1 p-1"/>
}

function TextareaContainer(props: TextareaContainerProps) {
  return (
    <textarea className={props.className}  {...props.register} />
  )
}

function Textarea( props : TextareaComponent) {
  const Component = TextareaVariations[props.variation] || TextareaVariations.default;
  return <Component {...props} />;
}

export {
  Textarea
}