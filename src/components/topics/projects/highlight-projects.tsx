"use client"

import { TypeProjectsProps, Project } from "@/@types"
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import Image from "next/image"
import { TechCard } from "./tech-card"
import { TopicTitle } from "../topic-title"
import { FC } from "react"
import { HighlightProjectsItem } from "./highlight-projects-item"

export const HighLightProjects: FC<TypeProjectsProps> = ({
    title
}) => {

    const lang = useParams().lang

    const { data: projectsResponse } = useQuery({
        queryKey: ["get-highlight-projects"],
        queryFn: async () => {

            const response = await fetch(`api/highlight-projects/${lang}`)

            const data: Project[] = await response.json()

            return data
        }
    })

    if (!projectsResponse) return

    return (

        <Card className="p-3 flex flex-col gap-5">

            <CardHeader>
                <CardTitle
                    className="text-2xl capitalize"
                >
                    <TopicTitle
                        topic={title}
                    />
                </CardTitle>
            </CardHeader>
            <CardContent>
                {projectsResponse.map(project =>
                    <HighlightProjectsItem
                        key={project.id}
                        project={project}
                    />
                )}
            </CardContent>
        </Card>
    )
}
