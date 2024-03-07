"use client"

import { FC } from "react"
import { TypeProjectsProps, Project } from "@/@types"
import { Card, CardHeader, CardTitle } from "../../ui/card"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import { TopicTitle } from "../topic-title"

import { CarouselComponent } from "@/components/carousel"
import { Animation } from "@/components/animation"

export const OtherProjects: FC<TypeProjectsProps> = ({
    title, go_to_code
}) => {

    const lang = useParams().lang

    const { data: projectsResponse } = useQuery({
        queryKey: ["get-other-projects"],
        queryFn: async () => {

            const response = await fetch(`api/other-projects/${lang}`)

            const data: Project[] = await response.json()

            return data
        }
    })

    if (!projectsResponse) return

    return (

        <Card
            className="w-2/3 p-3 flex flex-col items-center gap-5 border-none"
        >

            <CardHeader>
                <CardTitle
                    className="text-2xl capitalize"
                >
                    <TopicTitle
                        topic={title}
                    />
                </CardTitle>
            </CardHeader>

            <Animation
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5 }}
            >
                <CarouselComponent
                    go_to_code={go_to_code}
                    projects={projectsResponse}
                />
            </Animation>
        </Card>
    )
}
