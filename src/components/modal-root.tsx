const modalRootVariations = {
    default: (props: ModalRootProps) =>
        <ModalRootContainer {...props} className='bg-opacity-35 bg-black center ' />
}

const ModalRoot = useSelector<keyof typeof modalRootVariations,ModalRootProps>(modalRootVariations)

export default ModalRoot