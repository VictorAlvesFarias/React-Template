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

export default LoadingContainer