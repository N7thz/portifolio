"use client"

import { FC } from "react"
import { ProjectsProps } from "@/@types"
import { TopicTitle } from "../topic-title"
import {
    Card, CardHeader, CardTitle, CardContent
} from "../../ui/card"
import { HighLightProjects } from "./highlight-projects"
import { OtherProjects } from "./other-projects"

export const Projects: FC<ProjectsProps> = ({ projects, highlihgt, other }) => {

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

                <HighLightProjects 
                    title={highlihgt}
                />

                <OtherProjects
                    title={other}
                />
            </CardContent>
        </Card>
    )
}
