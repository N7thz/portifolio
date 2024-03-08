"use client"

import { FC } from "react"
import { ProjectsProps } from "@/@types"
import { TopicTitle } from "./topic-title"
import {
    Card, CardHeader, CardTitle, CardContent
} from "./ui/card"
import { HighLightProjects } from "./highlight-projects"
import { OtherProjects } from "./other-projects"

export const Projects: FC<ProjectsProps> = ({
    projects, highlihgt, other, go_to_code
}) => {

    return (

        <Card
            id={projects}
            className="w-full border-2 border-primary drop-shadow-xl"
        >
            <CardHeader>
                <CardTitle
                    className="capitalize text-3xl flex items-center"
                >
                    <TopicTitle
                        topic={projects}
                    />
                </CardTitle>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center gap-4">
                <HighLightProjects
                    go_to_code={go_to_code}
                    title={highlihgt}
                />
                <OtherProjects
                    go_to_code={go_to_code}
                    title={other}
                />
            </CardContent>
        </Card>
    )
}
