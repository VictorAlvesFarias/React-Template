import React, { useEffect, useState } from 'react'

interface ModalContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    timer: number,
    open: boolean,
    callback: () => {}
}

interface ModalProps extends Omit<ModalContainerProps,"className"> {
    variation: keyof typeof modalVariations;
}

const modalVariations = {
    default: (_: ModalProps) => <ModalContainer {..._}  className=''/>
}

function ModalContainer(_: ModalContainerProps) {

    const [style, setStyle] = useState("opacity-0")
    const [opened, setOpened] = useState(false)

    const handleOpen = () => {
        setOpened(true)
        setTimeout(() => {
            setStyle("opacity-100")
        }, _.timer);
    }
    const handleClose = () => {
        setStyle("opacity-0")
        setTimeout(() => {
            setOpened(false)
        }, _.timer);
    }

    useEffect(() => {
        _.open ? handleOpen() : handleClose()
    }, [_.open])

    return (
        opened &&
        <div className={_.className+' z-50 w-full top-0 flex items-center justify-center left-0 h-screen fixed  transition-all ' + style + ` duration-[${_.timer}]`}>
            {_.children}
        </div>
    )
}

function Modal(props: ModalProps) {
    const Component = modalVariations[props.variation] || modalVariations.default;
    return <Component {...props} />;
}

export default Modal