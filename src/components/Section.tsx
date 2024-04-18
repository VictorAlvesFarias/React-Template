import React from 'react'

interface SectionContainerProps {
  className:string
  children: React.ReactNode
}

interface SectionVariation extends Omit<SectionContainerProps,"className"> {

}

interface SectionComponent extends SectionVariation {
  variation?: keyof typeof sectionVariations;
}

const sectionVariations = {
  default: (_: SectionVariation) =>
    <SectionContainer {..._} className='max-w-7xl w-11/12 h-full lg:px-0 px-5 items-center justify-center flex flex-col py-20' />,
}

function SectionContainer(props: SectionContainerProps) {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  )
}

function Section(props: SectionComponent) {
  const Component = sectionVariations[props.variation??"default"]
  return <Component {...props} />;
}

export {
  Section
}