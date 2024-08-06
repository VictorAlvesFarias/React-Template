import React from 'react'
import { LoaderCircle } from 'lucide-react';
import { useSelector } from '../utils/hooks/selector-hooks';

interface LoadingProps {
  className:string
}

function LoadingContainer(props: LoadingProps) {
  return (
    <div className={props.className}>
      <LoaderCircle />
    </div>
  )
}

const loadingVariations = {
  default: (props: LoadingProps) =>
    <LoadingContainer {...props} className='mb-1 font-semibold px-1 rotating-div text-white bg-transparent w-fit' />,
}

const Loading = useSelector<keyof typeof loadingVariations,LoadingProps>(loadingVariations)

export default Loading