import { MainProps } from "@/@types"
import { FC } from "react"
import {
    Card, CardHeader, CardTitle, CardContent, CardDescription
} from "./ui/card"
import Image from "next/image"
import Gif from "../../public/gif-home.gif"
import "./z_animations.css"
import { Topic } from "./topic"

export const Main: FC<MainProps> = ({
    main: { message_animation, summary, aboutText },
    header: { about, contact, projects, technologies }
}) => {

    return (

        <main className="p-4 flex flex-col gap-8">
            <Card
                className="flex border-2 border-primary drop-shadow-xl overflow-hidden"
            >
                <div
                    className="w-1/2 flex flex-col gap-4"
                >
                    <CardTitle
                        className="text-4xl pt-8 px-3 relative"
                    >
                        {message_animation}
                        <div
                            className="w-1 h-8 bg-primary line absolute bottom-1 left-60"
                        />
                    </CardTitle>
                    <CardDescription
                        className="text-xl p-3"
                    >
                        {summary}
                    </CardDescription>
                </div>
                <Image
                    src={Gif}
                    width={600}
                    height={600}
                    alt="imagem ilustrativa"
                    className="w-1/2"
                />
            </Card>
            <Card
                id={about}
                className="border-2 border-primary drop-shadow-xl"
            >
                <CardHeader>
                    <CardTitle
                        className="capitalize text-3xl flex items-center"
                    >
                        <Topic
                            topic={about}
                        />
                    </CardTitle>
                </CardHeader>
                <CardContent
                    className="flex items-center justify-between"
                >
                    <p className="w-2/3 text-xl text-muted-foreground">
                        {aboutText}
                    </p>
                    <Image
                        src={"https://avatars.githubusercontent.com/n7thz"}
                        width={80}
                        height={80}
                        alt="foto perfil github"
                        className="w-44 rounded-full m-auto border border-primary"
                    />
                </CardContent>
            </Card>
            <Card
                id={technologies}
                className="border-2 border-primary drop-shadow-xl"
            >
                <CardHeader>
                    <CardTitle
                        className="capitalize text-3xl flex items-center"
                    >
                        <Topic
                            topic={technologies}
                        />
                    </CardTitle>
                </CardHeader>
            </Card>
        </main>
    )
}

