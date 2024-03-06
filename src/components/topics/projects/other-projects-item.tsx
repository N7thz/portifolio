import { FC } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { TechCard } from "./tech-card"
import { ProjectsItemProps } from "@/@types"
import Image from "next/image"


export const OtherProjectsItem: FC<ProjectsItemProps> = ({ project }) => {

    const { cover, id, technologies, title } = project

    return (

        <Card
            key={id}
            className="flex w-full h-full cursor-pointer border border-primary overflow-hidden"
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
}
