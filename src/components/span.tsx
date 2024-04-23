import React from 'react'

interface SpanContainerProps {
  className:string,
  children: React.ReactNode
}

interface SpanVariation extends Omit<SpanContainerProps, "className"> {

}

interface SpanComponent extends SpanVariation {
  variation: keyof typeof spanVariations;
}

function SpanContainer(props: SpanContainerProps) {
  return (
    <span className={props.className}>
      {props.children}
    </span>
  )
}

function Span(props: SpanComponent) {
  const Component = spanVariations[props.variation] || spanVariations.default;
  return <Component {...props} />;
}

const spanVariations = {
  default: (props: SpanVariation) =>
    <SpanContainer children={props.children} className='mb-1 font-semibold px-1' />,
  error: (props: SpanVariation) =>
    <SpanContainer children={props.children} className='text-red-400' />,
}

export {
  Span
}