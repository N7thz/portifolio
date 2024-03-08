import { FC } from "react"
import { Card, CardHeader, CardTitle } from "./ui/card"
import { TecnologyCardProps } from "@/@types"
import Image from "next/image"

export const TecnologyCard: FC<TecnologyCardProps> = ({ tec }) => {

    const { image, name } = tec

    return (

        <Card
            className="w-48 flex flex-col items-center justify-between capitalize border-2 border-border duration-500 hover:border-primary drop-shadow-md"
        >
            <Image
                src={image}
                width={100}
                height={100}
                alt={name}
                className="w-28 h-28 mt-3"
            />
            <CardHeader>
                <CardTitle>
                    {name}
                </CardTitle>
            </CardHeader>
        </Card>
    )
}
