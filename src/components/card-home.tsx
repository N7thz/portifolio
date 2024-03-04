import { FC } from "react"
import { Card, CardTitle, CardDescription, CardFooter } from "./ui/card"
import Image from "next/image"
import Link from "next/link"
import Gif from "@/assets/images/gif-home.gif"
import "./z_animations.css"
import { CardHomeProps } from "@/@types"

export const CardHome: FC<CardHomeProps> = ({ message_animation, summary }) => {

    return (

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
                <CardFooter>
                </CardFooter>
            </div>
            <Image
                src={Gif}
                width={600}
                height={600}
                alt="gif home"
                className="w-1/2"
            />
        </Card>
    )
}
