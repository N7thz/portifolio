import React, { FC } from 'react'
import { TopicTitle } from '../topic-title'
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card'
import Image from 'next/image'
import { AboutProps } from '@/@types'

export const About: FC<AboutProps> = ({ about, aboutText }) => {

    return (

        <Card
            id={about}
            className="border-2 border-primary drop-shadow-xl"
        >
            <CardHeader>
                <CardTitle
                    className="capitalize text-3xl flex items-center"
                >
                    <TopicTitle
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
                    quality={100}
                    alt="foto perfil github"
                    className="w-44 rounded-full m-auto border border-primary"
                />
            </CardContent>
        </Card>
    )
}
