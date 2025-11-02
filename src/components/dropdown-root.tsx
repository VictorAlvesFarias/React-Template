import React from 'react'
import { componentSelector } from "react-component-selector"
import { IDropdownRootContainerProps, DropdownRootContainer } from 'react-base-components'

const dropdownRootVariations = {
    default: (_: IDropdownRootContainerProps, ref: any) =>
        <DropdownRootContainer {..._} ref={ref} className='h-9 rounded border text-nowrap bg-transparent border-zinc-500 outline-violet-500 text-zinc-900 p-1 w-full flex items-center outline-2 focus-within:border-opacity-0 focus-within:outline pl-2 cursor-text aria-disabled:bg-zinc-300 aria-disabled:border-none aria-disabled:shadow-sm ' />,
}

const DropdownRoot = componentSelector<keyof typeof dropdownRootVariations, IDropdownRootContainerProps>(dropdownRootVariations)

export default DropdownRoot