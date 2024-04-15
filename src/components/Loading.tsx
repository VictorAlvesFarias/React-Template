import React from 'react'
import  {LoaderCircle}  from 'lucide-react';

interface LoadingContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  visible:boolean
}

interface LoadingProps extends Omit<LoadingContainerProps, "className"> {
  variation: keyof typeof loadingVariations;
}

const loadingVariations = {
  default: (props: LoadingProps) =>
    <LoadingContainer {...props} className='mb-1 font-semibold px-1' />,
}

function LoadingContainer(_:LoadingContainerProps) {
  const visible = _.visible
  return (
    visible&&
    <div {..._}>
        <LoaderCircle/>
    </div>
  )
}

function Loading( props : LoadingProps) {
  const Component = loadingVariations[props.variation] || loadingVariations.default;
  return <Component {...props} />;
}

export default Loading