const dropdownRootVariations = {
    default: (_: RootProps, ref) =>
        <RootContainer {..._} ref={ref} className='h-9 rounded border text-nowrap bg-transparent border-zinc-500 outline-violet-500 text-zinc-900 p-1 w-full flex items-center outline-2 focus-within:border-opacity-0 focus-within:outline pl-2 cursor-text aria-disabled:bg-zinc-300 aria-disabled:border-none aria-disabled:shadow-sm ' />,
}

const DropdownRoot = componentSelector<keyof typeof dropdownRootVariations, RootProps>(dropdownRootVariations)

export default DropdownRoot