import { FC } from "react"

export interface IframeProps {
    link: string
    title: string
}

export const Iframe:FC<IframeProps> = ({ link, title }) => {

    return (

        <iframe
            width="560"
            height="315"
            src={link}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
    )
}
