import React from 'react'
import { useSelector } from '../utils/hooks/selector-hooks'

interface SpanProps {
  className:string,
  children: React.ReactNode
}

function SpanContainer(props: SpanProps) {
  return (
    <span className={props.className}>
      {props.children}
    </span>
  )
}

const spanVariations = {
  default: (props: SpanProps) =>
    <SpanContainer children={props.children} className='mb-1 font-semibold px-1' />,
  error: (props: SpanProps) =>
    <SpanContainer children={props.children} className='text-red-400' />,
}

const Span = useSelector<keyof typeof spanVariations,SpanProps>(spanVariations)

export default Span