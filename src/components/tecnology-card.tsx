import Image from "next/image"
import { Card, CardHeader, CardTitle } from "./ui/card"
import { FC } from "react"
import { TecnologyCardProps } from "@/@types"

export const TecnologyCard: FC<TecnologyCardProps> = ({ tec }) => {

    const { id, image, name } = tec

    return (

        <Card
            key={id}
            className="w-1/6 flex flex-col items-center justify-between capitalize border border-primary"
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
