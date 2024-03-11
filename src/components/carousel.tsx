"use client"

import { useState, useEffect, FC } from "react"
import { CarouselComponentProps, Project } from "@/@types"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "./ui/carousel"
import { OtherProjectsItem } from "./other-projects-item"
import { WindowProject } from "./window-project"

export const CarouselComponent: FC<CarouselComponentProps> = ({
    go_to_code, projects
}) => {

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
            className="w-2/3 flex flex-col items-center justify-center gap-2 max-sm:gap-1 p-4"
        >
            <Carousel
                setApi={setApi}
                className="w-3/4 max-lg:w-3/5 max-md:w-1/2 max-sm:w-2/5 max-phone:w-1/5"
            >
                <CarouselContent>
                    {
                        projects.map(project =>
                            <CarouselItem
                                key={project.id}
                                className="drop-shadow-2xl"
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
