"use client"

import { useState, useEffect, FC } from "react"
import { Project } from "@/@types"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import { OtherProjectsItem } from "./topics/projects/other-projects-item"
import { WindowProject } from "./window-project"

export interface CarouselComponentProps {

    projects: Project[]
    go_to_code: string
}

export const CarouselComponent: FC<CarouselComponentProps> = ({ go_to_code, projects }) => {

    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {

        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => setCurrent(api.selectedScrollSnap() + 1))

    }, [api])

    return (

        <div
            className="w-2/3 flex flex-col items-center justify-center gap-2 p-4"
        >
            <Carousel
                setApi={setApi}
                className="w-3/4 "
            >
                <CarouselContent>
                    {
                        projects.map(project =>
                            <CarouselItem
                                key={project.id}
                            >
                                <WindowProject
                                    project={project}
                                    go_to_code={go_to_code}
                                >
                                    <OtherProjectsItem
                                        project={project}
                                    />
                                </WindowProject>
                            </CarouselItem>
                        )
                    }
                </CarouselContent>
                <CarouselPrevious className="border border-primary" />
                <CarouselNext className="border border-primary" />
            </Carousel>
            <div
                className="py-2 text-center text-lg text-muted-foreground italic"
            >
                Slide {current} of {count}
            </div>
        </div>
    )
}
