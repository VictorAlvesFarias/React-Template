import React from "react"
import { componentSelector } from "../utils/helpers/component-selector"

const ContentVariations = {
  default: (props: React.HTMLAttributes<HTMLDivElement>) =>
    <div {...props} className='h-full flex flex-col w-full relative pt-12 aria-hidden:hidden overflow-auto' />
}

const Content = componentSelector<keyof typeof ContentVariations, React.HTMLAttributes<HTMLDivElement>>(ContentVariations)

export default Content