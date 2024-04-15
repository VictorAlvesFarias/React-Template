import React from 'react'

interface LabelContainerProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
}

interface LabelProps extends Omit<LabelContainerProps, "className"> {
  variation: keyof typeof labelVariations;
}

const labelVariations = {
  default: (props: LabelProps) =>
    <LabelContainer {...props} className='mb-1 font-semibold px-1' />,
}

function LabelContainer(_:LabelContainerProps) {
  return (
    <label {..._} />
  )
}

function Label( props : LabelProps) {
  const Component = labelVariations[props.variation] || labelVariations.default;
  return <Component {...props} />;
}

export default Label