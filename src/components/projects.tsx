"use client"

import { FC } from "react"
import { ProjectsProps } from "@/@types"
import { TopicTitle } from "./topic-title"
import { 
    Card, CardHeader, CardTitle, CardContent 
} from "./ui/card"
import { BestProjects } from "./best-projects"

export const Projects: FC<ProjectsProps> = ({ projects }) => {

    return (

        <Card
            id={projects}
            className="border-2 border-primary drop-shadow-xl"
        >
            <CardHeader>
                <CardTitle className="capitalize text-3xl flex items-center">
                    <TopicTitle
                        topic={projects}
                    />
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap justify-around gap-4">
                <BestProjects />
            </CardContent>
        </Card>
    )
}
