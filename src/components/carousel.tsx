"use client"

import { Project } from "@/@types"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import { useState, useEffect } from "react"
import { OtherProjectsItem } from "./topics/projects/other-projects-item"

export const CarouselComponent = ({ projects }: { projects: Project[] }) => {

    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {

        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            console.log("current")
            setCurrent(api.selectedScrollSnap() + 1)
        })

    }, [api])

    return (

        <div
            className="w-full flex flex-col items-center justify-center gap-2 p-4"
        >
            <Carousel
                setApi={setApi}
                className="w-3/4 "
            >
                <CarouselContent>
                    {projects.map(project =>
                        <CarouselItem
                            key={project.id}
                        >
                            <OtherProjectsItem
                                project={project}
                            />
                        </CarouselItem>
                    )}
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
