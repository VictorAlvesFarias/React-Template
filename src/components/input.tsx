import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form';

interface DefaultInputComponentProps {
  readonly?: boolean
  disabled?: boolean
  name?: string
  onChange?: (e: any) => any
  onBlur?: (e: any) => any
  ref?:any,
  value?:any
}

interface RootContainerProps {
  className: string
  children: React.ReactNode
}

interface RootVariation extends Omit<RootContainerProps, "className"> {

}

interface RootComponent extends RootVariation {
  variation?: keyof typeof rootVariations;
}

function RootContainer(_: RootContainerProps) {
  return (
    <div {..._}>
      {_.children}
    </div>
  )
}

function Root(props: RootComponent) {
  const Component = rootVariations[props.variation ?? "default"]
  return <Component {...props} />;
}

const rootVariations = {
  default: (props: RootVariation) =>
    <RootContainer {...props} className="flex-col flex relative text-zinc-200" />,
  row: (props: RootVariation) =>
    <RootContainer {...props} className="flex items-center relative text-zinc-200" />
}

interface LabelContainerProps {
  children: React.ReactNode
  className: string
}

interface LabelVariation extends Omit<LabelContainerProps, "className"> {

}

interface LabelComponent extends LabelVariation {
  variation?: keyof typeof labelVariations;
}

function Label(props: LabelComponent) {
  const Component = labelVariations[props.variation ?? "default"]
  return <Component {...props} />;
}

function LabelContainer(_: LabelContainerProps) {
  return (
    <label {..._} />
  )
}

const labelVariations = {
  default: (props: LabelVariation) =>
    <LabelContainer {...props} className='mb-1 font-semibold px-1 text-zinc-800 text-sm' />,
  row: (props: LabelVariation) =>
    <LabelContainer {...props} className='font-semibold px-1 text-zinc-800 text-sm' />,
}

interface CheckboxContainerProps {
  config:DefaultInputComponentProps
  className: {
    checked:string
    base:string
  }
  children: React.ReactNode
}

interface CheckboxVariation extends Omit<CheckboxContainerProps, "className" | "checked"> {

}

interface CheckboxComponent extends CheckboxVariation {
  variation?: keyof typeof checkboxVariations;
}

function CheckboxContainer(props: CheckboxContainerProps) {
  return (
    <label className={(props.config.value ? props.className.checked : props.className.base) + " transition-all cursor-pointer"}>
      <input
        {...props.config}
        type='checkbox'
        className='hidden'
      />
      {props.config.value && props.children}
    </label>
  )
}

function Checkbox(props: CheckboxComponent) {
  const Component = checkboxVariations[props.variation ?? "default"]
  return <Component {...props} />;
}

interface RootContainerProps {
  className: string
  children: React.ReactNode
}

interface RootVariation extends Omit<RootContainerProps, "className"> {

}

interface RootComponent extends RootVariation {
  variation?: keyof typeof rootVariations;
}

const checkboxVariations = {
  default: (props: CheckboxVariation) =>
    <CheckboxContainer
      {...props}
      className={{
        base:'bg-white w-5 h-5 rounded border-2 border-zinc-600 bg flex items-center justify-center   ',
        checked:'bg-indigo-600 w-5 h-5 rounded flex items-center justify-center text-white'
      }}
    />,
}

interface TextContainerProps {
  config:DefaultInputComponentProps
  className: string
  placeholder?: string
  mask?: [RegExp, string]
}

interface TextVariation extends Omit<TextContainerProps, "className"> {

}

interface TextComponent extends TextVariation {
  variation?: keyof typeof inputVariations;
}

function TextContainer(props: TextContainerProps) {
  return (
    <input
      {...props.config}
      className={props.className}
      onChange={(e) => {
        e.target.value = props.mask ? e.target.value.replace(/\D/g, '').replace(props.mask[0], props.mask[1]) : e.target.value
        props.config.onChange ? props.config.onChange(e) : null
      }}
    />
  )
}

function Text(props: TextComponent) {
  const Component = inputVariations[props.variation ?? "default"]
  return <Component {...props} />;
}

const inputVariations = {
  default: (props: TextVariation) =>
    <TextContainer {...props} className="h-9 rounded border bg-white border-black text-black indent-1 p-1  " />,
  password: (props: TextVariation) =>
    <TextContainer {...props} className="h-9 rounded border border-black text-black indent-1 p-1" />,
  dropdown: (props: TextVariation) =>
    <TextContainer {...props} className="cursor-pointer h-9 rounded border bg-white border-black text-black indent-1 p-1 text-ellipsis overflow-hidden" />,
}

export default {
  Text,
  Label,
  Root,
  Checkbox
}