import LoadingContainer, { ILoadingContainerProps } from '../base-components/loading'
import { componentSelector } from "../utils/helpers/component-selector"

const loadingVariations = {
  default: (props: ILoadingContainerProps) =>
    <LoadingContainer {...props} className='mb-1 font-semibold px-1 rotating-div text-white bg-transparent w-fit' />,
}

const Loading = componentSelector<keyof typeof loadingVariations, ILoadingContainerProps>(loadingVariations)

export default Loading