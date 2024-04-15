import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputRootContainerProps extends React.ButtonHTMLAttributes<HTMLDivElement>  {
 
}

interface InputRootProps extends Omit<InputRootContainerProps,"className"> {
  variation: keyof typeof inputRootVariations;
  register: UseFormRegisterReturn
}

const inputRootVariations = {
  default: (_:InputRootProps) => <InputRootContainer {..._} className = "flex-col flex relative text-zinc-200"/>
}

function InputRootContainer(_:InputRootContainerProps) {
  return (
    <div {..._}>
      {_.children}
    </div>
  )
}

function InputRoot( props : InputRootProps) {
  const Component = inputRootVariations[props.variation] || inputRootVariations.default;
  return <Component {...props} />;
}

export default InputRoot