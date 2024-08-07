import React from 'react'
import { LoaderCircle } from 'lucide-react';

interface ILoadingContainerProps {
  className: string
}

function LoadingContainer(props: ILoadingContainerProps) {
  return (
    <div className={props.className}>
      <LoaderCircle />
    </div>
  )
}

export default LoadingContainer

export {
  ILoadingContainerProps
}