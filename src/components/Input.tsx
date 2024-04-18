import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form';

interface TextContainerProps {
  register?: UseFormRegisterReturn
  readOnly?: boolean
  className:string
  placeholder?:string
  disabled?:boolean
  mask?:[RegExp,string]
}

interface TextVariation extends Omit<TextContainerProps, "className"> {

}

interface TextComponent extends TextVariation{
  variation?:keyof typeof  inputVariations;
}

interface LabelContainerProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
}

interface LabelVariation extends Omit<LabelContainerProps, "className"> {

}

interface LabelComponent extends LabelVariation {
  variation?:keyof typeof  labelVariations;
}

interface RootContainerProps {
  className:string
  children:React.ReactNode
}

interface RootVariation extends Omit<RootContainerProps, "className"> {

}

interface RootComponent extends RootVariation {
  variation?:keyof typeof  rootVariations;
}

const rootVariations = {
  default: (props: RootVariation) =>
    <RootContainer {...props} className="flex-col flex relative text-zinc-200" />
}

const inputVariations = {
  default: (props: TextVariation) =>
    <TextContainer {...props} className="h-9 rounded border bg-white border-black text-black indent-1 p-1  " />,
  password: (props: TextVariation) =>
    <TextContainer {...props} className="h-9 rounded border border-black text-black indent-1 p-1" />,
  dropdown: (props: TextVariation) =>
    <TextContainer {...props} className="cursor-pointer h-9 rounded border bg-white border-black text-black indent-1 p-1 text-ellipsis overflow-hidden" />,
}

const labelVariations = {
  default: (props: LabelVariation) =>
    <LabelContainer {...props} className='mb-1 font-semibold px-1 text-zinc-800' />,
}

function LabelContainer(_: LabelContainerProps) {
  return (
    <label {..._} />
  )
}

function TextContainer(_: TextContainerProps) {
  const register = { ..._.register }
  const props = { ..._, register: null }

  return (
      <input 
        {...props}  
        {...register}
        onChange={(e)=>{ 
          e.target.value = props.mask? e.target.value.replace(/\D/g, '').replace(props.mask[0],props.mask[1]):e.target.value
          register.onChange?register.onChange(e):null
        }}
      />
  )
}


function RootContainer(_: RootContainerProps) {
  return (
    <div {..._}>
      {_.children}
    </div>
  )
}

function Label(props: LabelComponent) {
  const Component = labelVariations[props.variation ?? "default"]
  return <Component {...props} />;
}

function Text(props: TextComponent) {
  const Component = inputVariations[props.variation ?? "default"]
  return <Component {...props} />;
}

function Root(props: RootComponent) {
  const Component = rootVariations[props.variation ?? "default"]
  return <Component {...props} />;
}

export default {
  Text,
  Label,
  Root
}