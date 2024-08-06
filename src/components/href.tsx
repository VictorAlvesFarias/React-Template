import React from "react";
import { useSelector } from "../utils/hooks/selector-hooks";
import { Link } from "react-router-dom";

interface HrefProps {
    children: React.ReactNode
    className: string
    to: string
}

function HrefContainer(_: HrefProps) {
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