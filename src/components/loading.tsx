import React from 'react'
import { componentSelector } from "react-component-selector"
import { LoaderCircle } from "lucide-react"

const loadingVariations = {
  default: (props: React.SVGProps<SVGSVGElement>) =>
    <LoaderCircle {...props} className='mb-1 font-semibold px-1 rotating-div text-white bg-transparent w-fit' />,
}

const Loading = componentSelector<keyof typeof loadingVariations, React.HTMLAttributes<HTMLDivElement>>(loadingVariations)

export default Loading