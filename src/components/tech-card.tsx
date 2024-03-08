import { FC } from "react"
import { Card, CardTitle } from "./ui/card"

export interface TechCardProps {
    tech: string
}

export const TechCard: FC<TechCardProps> = ({ tech }) => {

    return (

        <Card
            className="w-44 flex items-center justify-center border border-primary drop-shadow-lg"
        >
            <CardTitle
                className="w-full p-2 capitalize text-lg text-center"
            >
                {tech}
            </CardTitle>
        </Card>
    )
}
