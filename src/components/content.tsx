import React from 'react'
import { useSelector } from '../utils/hooks/selector-hooks'

interface ContentContainerProps {
  className?: string
  children?: React.ReactNode
  visible?: boolean
}

function ContentContainer(props: ContentContainerProps) {
  return (
    <div children={props.children} className={props.className} aria-hidden={props.visible ? "true" : "false"} />
  )
}

const ContentVariations = {
  default: (props: ContentContainerProps) =>
    <ContentContainer {...props} className='h-full flex flex-col w-full relative pt-12 aria-hidden:hidden overflow-auto' />
}

const Content = useSelector<keyof typeof ContentVariations, ContentContainerProps>(ContentVariations)

export default Content