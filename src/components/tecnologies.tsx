import { FC } from "react"
import { TopicTitle } from "./topic-title"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { TecnologiesProps } from "@/@types"
import { technologies as tecs } from "@/lib/tecnologies"
import { TecnologyCard } from "./tecnology-card"
import { Animation } from "./animation"

export const Tecnologies: FC<TecnologiesProps> = ({ technologies }) => {

    return (

        <Card
            id={technologies}
            className="w-full border-2 border-primary drop-shadow-xl"
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
            <CardContent
                className="w-2/3 m-auto grid grid-cols-4 gap-6 max-lg:w-full max-md:grid-cols-3 max-sm:grid-cols-2 max-phone:grid-cols-1"
            >
                {tecs.map((tec, i) =>
                    <Animation
                        key={tec.id}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
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