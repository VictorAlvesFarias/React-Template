import React from 'react'

interface SpanContainerProps extends React.HTMLAttributes<HTMLSpanElement> {

}

interface SpanProps extends Omit<SpanContainerProps, "className"> {
  variation: keyof typeof spanVariations;
}

const spanVariations = {
  default: (props: SpanProps) =>
    <SpanContainer {...props} className='mb-1 font-semibold px-1' />,
  error: (props: SpanProps) =>
    <SpanContainer {...props} className='text-red-400' />,
}

function SpanContainer(_: SpanContainerProps) {
  return (
    <span {..._} />
  )
}

function Span(props: SpanProps) {
  const Component = spanVariations[props.variation] || spanVariations.default;
  return <Component {...props} />;
}

export {
  Span
}