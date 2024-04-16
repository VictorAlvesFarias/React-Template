import React from 'react'

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
}

interface SectionProps extends Omit<SectionContainerProps, "className"> {
  variation: keyof typeof sectionVariations;
}

const sectionVariations = {
  default: (_: SectionContainerProps) =>
    <SectionContainer {..._} className='max-w-7xl w-11/12 h-full lg:px-0 px-5 items-center justify-center flex flex-col y-20' />,
}

function SectionContainer(_: SectionContainerProps) {
  return (
    <div {..._}>
      {_.children}
    </div>
  )
}

function Section(props: SectionProps) {
  const Component = sectionVariations[props.variation] || sectionVariations.default;
  return <Component {...props} />;
}

export {
  Section
}