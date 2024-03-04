import { FC } from "react"
import { TopicTitle } from "./topic-title"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { TecnologiesProps } from "@/@types"
import { technologies as tecs } from "@/dictionaries/tecnologies"
import Image from "next/image"

export const Tecnologies: FC<TecnologiesProps> = ({ technologies }) => {

    return (

        <Card
            id={technologies}
            className="border-2 border-primary drop-shadow-xl"
        >
            <CardHeader>
                <CardTitle
                    className="capitalize text-3xl flex items-center"
                >
                    <TopicTitle
                        topic={technologies}
                    />
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap justify-around gap-4">
                {tecs.map(tec => {

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
                })}
            </CardContent>
        </Card>
    )
}