import React from 'react'
import useSelector from '../utils/hooks/use-selector'

interface ContentContainerProps {
    className?: string
    children?: React.ReactNode
}

function ContentContainer(props:ContentContainerProps) {
  return (
    <div {...props}/>
  )
}

const ContentVariations = {
    default: (props: ContentContainerProps) =>
        <ContentContainer
            {...props}
            className='h-full flex flex-col overflow-y-auto w-full relative '
        />
}

const Content = useSelector<keyof typeof ContentVariations, ContentContainerProps>(ContentVariations)

export default Content