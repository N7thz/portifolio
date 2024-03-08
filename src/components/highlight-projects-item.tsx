import { FC } from "react"
import { 
    Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter 
} from "./ui/card"
import { TechCard } from "./tech-card"
import { Animation } from "./animation"
import Image from "next/image"
import { ProjectsItemProps } from "@/@types"

export const HighlightProjectsItem: FC<ProjectsItemProps> = ({
    project
}) => {

    const { cover, title, description, technologies } = project

    const h1s = ["<h1>", "</h1>"]
    const ps = ["<p>", "</p>"]

    return (

        <Card className="w-1/2 cursor-pointer hover:scale-95 duration-300 border border-primary">
            <CardContent>
                <Image
                    src={cover}
                    width={2000}
                    height={2000}
                    quality={100}
                    alt={title}
                    className="w-full rounded-lg p-1"
                />
            </CardContent>
            <CardHeader className="flex flex-col gap-3">
                <CardTitle className="flex gap-3">
                    <span className="text-primary">
                        {h1s[0]}
                        <span className="text-primary-foreground">{title}</span>
                        {h1s[1]}
                    </span>
                </CardTitle>
                <CardDescription className="text-lg">
                    <span
                        className="text-primary flex flex-col"
                    >
                        {ps[0]}
                        <span
                            className="text-muted-foreground pl-4 border-l border-primary"
                        >
                            {description}
                        </span>
                        {ps[1]}
                    </span>
                </CardDescription>
            </CardHeader>
            <CardFooter className="w-full flex flex-wrap justify-center gap-3">
                {
                    technologies.map((tech, index) =>
                        <Animation
                            key={index}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.2 }}
                        >
                            <TechCard
                                tech={tech}
                            />
                        </Animation>
                    )
                }
            </CardFooter>
        </Card>
    )
}
