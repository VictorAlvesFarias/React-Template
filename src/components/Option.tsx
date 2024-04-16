
import React from 'react'

interface OptionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | number,
  label: string
}

interface OptionProps extends Omit<OptionContainerProps, "className"> {
  variation: keyof typeof optionVariations;
}

const optionVariations = {
  default: (_: OptionContainerProps) =>
    <OptionContainer {..._} className='h-7 items-center bg-red-400 rounded pl-1 text-ellipsis overflow-hidden w-full cursor-pointer hover:bg-red-300' />,
}

function OptionContainer(_: OptionContainerProps) {
  return (
    <div {..._}>
      {_.label}
    </div>
  )
}

function Option(props: OptionProps) {
  const Component = optionVariations[props.variation] || optionVariations.default;
  return <Component {...props} />;
}

export {
  Option,
  OptionContainerProps
}