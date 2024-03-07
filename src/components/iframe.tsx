import { FC } from "react"

export interface IframeProps {
    link: string
}

export const Iframe:FC<IframeProps> = ({ link }) => {

    return (

        <iframe
            src={link}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
    )
}
