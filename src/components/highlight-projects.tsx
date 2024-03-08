"use client"

import { FC } from "react"
import { TypeProjectsProps, Project } from "@/@types"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import { TopicTitle } from "./topic-title"
import { HighlightProjectsItem } from "./highlight-projects-item"
import { Animation } from "@/components/animation"
import { WindowProject } from "@/components/window-project"

export const HighLightProjects: FC<TypeProjectsProps> = ({
    title, go_to_code
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
            <CardContent
                className="flex flex-col gap-8 justify-center items-center"
            >
                {
                    projectsResponse.map((project, i) =>
                        <Animation
                            key={project.id}
                            initial={{ opacity: 0, x: i % 2 ? -300 : 300 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: i % 2 ? -300 : 300 }}
                            transition={{ duration: 0.7 }}
                        >
                            <WindowProject
                                project={project}
                                go_to_code={go_to_code}
                            >
                                <HighlightProjectsItem project={project} />
                            </WindowProject>
                        </Animation>
                    )
                }
            </CardContent>
        </Card>
    )
}
