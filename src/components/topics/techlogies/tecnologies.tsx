import { FC } from "react"
import { TopicTitle } from "../topic-title"
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card"
import { TecnologiesProps } from "@/@types"
import { technologies as tecs } from "@/lib/tecnologies"
import { TecnologyCard } from "./tecnology-card"
import { Animation } from "@/components/animation"

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
                {tecs.map((tec, i) =>
                    <Animation
                        key={tec.id}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                    >
                        <TecnologyCard
                            tec={tec}
                        />
                    </Animation>
                )}
            </CardContent>
        </Card>
    )
}