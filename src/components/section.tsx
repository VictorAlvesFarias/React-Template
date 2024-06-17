import React from 'react'
import useSelector from '../utils/hooks/use-selector'

interface SectionProps {
  className:string
  children: React.ReactNode
}

function SectionContainer(props: SectionProps) {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  )
}

const sectionVariations = {
  default: (_: SectionProps) =>
    <SectionContainer {..._} className='max-w-7xl w-11/12 h-full lg:px-0 px-5 py-16' />,
}

const Section = useSelector<keyof typeof sectionVariations,SectionProps>(sectionVariations)

export default Section