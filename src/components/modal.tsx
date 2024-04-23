import React, { useEffect, useState } from 'react'

interface ModalContainerProps {
    timer: number,
    open: boolean,
    callback: () => {},
    className:string,
    children: React.ReactNode
}

interface ModalVariation extends Omit<ModalContainerProps,"className"> {

}

interface ModalComponent extends ModalContainerProps {
    variation: keyof typeof modalVariations;
}

function ModalContainer(_: ModalContainerProps) {
    const [style, setStyle] = useState("opacity-0")
    const [opened, setOpened] = useState(false)

    function handleOpen() {
        setOpened(true)
        setTimeout(() => {
            setStyle("opacity-100")
        }, _.timer);
    }
    function handleClose() {
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

function Modal(props: ModalComponent) {
    const Component = modalVariations[props.variation] || modalVariations.default;
    return <Component {...props} />;
}

const modalVariations = {
    default: (props: ModalVariation) => 
    <ModalContainer {...props}  className=''/>
}

export {
    Modal
}