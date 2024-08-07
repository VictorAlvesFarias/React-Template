import React from "react"
import LoadingContainer,{ILoadingContainerProps} from '../base-components/loading'
import { useSelector } from "../utils/hooks/selector-hooks"

const loadingVariations = {
  default: (props: ILoadingContainerProps) =>
    <LoadingContainer {...props} className='mb-1 font-semibold px-1 rotating-div text-white bg-transparent w-fit' />,
}

const Loading = useSelector<keyof typeof loadingVariations,ILoadingContainerProps>(loadingVariations)

export default Loading