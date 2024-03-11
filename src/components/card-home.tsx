import { FC } from "react"
import { Card, CardTitle, CardDescription, CardFooter } from "./ui/card"
import { Button } from "./ui/button"
import Image from "next/image"
import Link from "next/link"
import { Animation } from "./animation"
import { CardHomeProps } from "@/@types"
import "./z_animations.css"
import Gif from "@/assets/images/gif-home.gif"

export const CardHome: FC<CardHomeProps> = ({ message_animation, summary }) => {

    return (

        <Card
            className="flex border-2 border-primary drop-shadow-xl overflow-hidden 2xl:justify-between max-md:flex-col-reverse"
        >
            <div
                className="w-1/2 flex flex-col gap-4 max-md:w-full"
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
                <CardFooter
                    className="h-full flex justify-end 2xl:items-end"
                >
                    <Animation
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5 }}
                    >
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
                    </Animation>
                </CardFooter>
            </div>
            <Image
                src={Gif}
                width={600}
                height={600}
                alt="gif home"
                className="w-1/2 2xl:w-1/3 max-md:w-2/3 max-md:m-auto max-md:p-4 max-md:rounded-lg" 
            />
        </Card>
    )
}
