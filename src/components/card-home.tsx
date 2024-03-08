import { FC } from "react"
import { Card, CardTitle, CardDescription, CardFooter } from "./ui/card"
import { Button } from "./ui/button"
import Image from "next/image"
import Link from "next/link"
import { CardHomeProps } from "@/@types"
import "./z_animations.css"
import Gif from "@/assets/images/gif-home.gif"

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
                <CardFooter className="h-full flex justify-end">
                    <Button
                        variant={"outline"}
                        className="scale-110 border-primary hover:scale-105 duration-300"
                    >
                        <Link
                            href="/pt/curriculo-nathan-ferreira.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="text-lg p-1"
                        >
                            Download CV
                        </Link>
                    </Button>
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
