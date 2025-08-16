import React from "react";
import { Link } from "react-router-dom";

interface IHrefContainerProps {
    children: React.ReactNode
    className?: string
    to: string
}

function HrefContainer(_: IHrefContainerProps) {
    return (
        <Link to={_.to} >
            {
                <div className={_.className}>
                    {_.children}
                </div>
            }
        </Link>
    )
}

export default HrefContainer

export {
    IHrefContainerProps
}