import React from "react"
import { componentSelector } from "../utils/helpers/component-selector"

const sectionVariations = {
  default: (_: React.HTMLAttributes<HTMLDivElement>) =>
    <div {..._} className='max-w-7xl w-11/12 h-full lg:px-0 px-5 py-16' />,
}

const Section = componentSelector<keyof typeof sectionVariations, React.HTMLAttributes<HTMLDivElement>>(sectionVariations)

export default Section