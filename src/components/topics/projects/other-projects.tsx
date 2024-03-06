"use client"

import { FC } from "react"
import { TypeProjectsProps, Project } from "@/@types"
import { Card, CardHeader, CardTitle } from "../../ui/card"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import { TopicTitle } from "../topic-title"

import { CarouselComponent } from "@/components/carousel"

export const OtherProjects: FC<TypeProjectsProps> = ({
    title
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
            className="w-full p-3 flex flex-col items-center gap-5 border-none"
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

            <CarouselComponent
                projects={projectsResponse}
            />
        </Card>
    )
}
