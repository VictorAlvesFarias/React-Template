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

const HrefVariations = {
    default: (props: HrefProps) =>
        <HrefContainer {...props} className='border-violet-500 p-2 px-3 rounded-full border text-sm bg-violet-500 bg-opacity-20 w-fit text-violet-500 hover:bg-opacity-30 transition-all' />,
}

const Href = useSelector<keyof typeof HrefVariations, HrefProps>(HrefVariations)

export default Href