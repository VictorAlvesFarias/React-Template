import React from "react"
import { useSelector } from "../utils/hooks/selector-hooks"

const sectionVariations = {
  default: (_: React.HTMLAttributes<HTMLDivElement>) =>
    <div {..._} className='max-w-7xl w-11/12 h-full lg:px-0 px-5 py-16' />,
}

const Section = useSelector<keyof typeof sectionVariations, React.HTMLAttributes<HTMLDivElement>>(sectionVariations)

export default Section