import React from 'react'
import { LoaderCircle } from 'lucide-react';

interface LoadingContainerProps {
  visible: boolean
  className:string
}

interface LoadingVariation extends Omit<LoadingContainerProps, "className"> {

}

interface LoadingComponent extends LoadingVariation  {
  variation: keyof typeof loadingVariations;
}

const loadingVariations = {
  default: (props: LoadingVariation) =>
    <LoadingContainer {...props} className='mb-1 font-semibold px-1' />,
}

function LoadingContainer(props: LoadingContainerProps) {
  return (
    props.visible &&
    <div className={props.className}>
      <LoaderCircle />
    </div>
  )
}

function Loading(props: LoadingComponent) {
  const Component = loadingVariations[props.variation] || loadingVariations.default;
  return <Component {...props} />;
}

export {
  Loading
}