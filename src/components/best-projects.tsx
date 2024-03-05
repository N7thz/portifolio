"use client"

import { Project } from "@/@types"
import {
    Card, CardHeader, CardTitle, CardContent, CardDescription
} from "./ui/card"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import Image from "next/image"
import { TechCard } from "./tech-card"

export const BestProjects = () => {

    const lang = useParams().lang

    const { data: projectsResponse } = useQuery({
        queryKey: ["get-projects"],
        queryFn: async () => {

            const response = await fetch(`api/best-projects/${lang}`)

            const data: Project[] = await response.json()

            return data
        }
    })

    if (!projectsResponse) return

    return (

        <div>
            {projectsResponse.map(project => {

                const { id, title, cover, technologies } = project

                return (

                    <Card
                        key={id}
                        className="flex w-full cursor-pointer border border-primary overflow-hidden"
                    >
                        <Image
                            src={cover}
                            width={300}
                            height={300}
                            quality={100}
                            alt={title}
                            className="w-1/3"
                        />
                        <div className="w-2/3">
                            <CardHeader >
                                <CardTitle className="capitalize p-2">
                                    {title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent
                                className="w-full flex flex-wrap items-center justify-center gap-3 text-lg m-2"
                            >
                                {technologies.map((tech, index) =>
                                    <TechCard
                                        key={index}
                                        tech={tech}
                                    />
                                )}
                            </CardContent>
                        </div>
                    </Card>
                )
            })}
        </div>
    )
}
