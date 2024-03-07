import { FC } from "react"
import { Button } from "./ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import { ScrollArea, ScrollBar } from "./ui/scroll-area"
import { WindowProjectProps } from "@/@types"
import { Animation } from "./animation"
import { TechCard } from "./topics/projects/tech-card"
import { Terminal } from "lucide-react"
import Link from "next/link"

export const WindowProject: FC<WindowProjectProps> = ({
    children, project, go_to_code
}) => {

    const { title, description, video, technologies, repository } = project

    return (

        <Dialog>
            <DialogTrigger asChild>
                <div className="flex justify-center">
                    {children}
                </div>
            </DialogTrigger>
            <DialogContent className="w-10/12 flex">
                <video
                    src={video}
                    controls
                    className="w-2/3 border-2 rounded-lg"
                />
                <div className="flex flex-col w-1/3">
                    <div className="w-full flex flex-col gap-4 p-2">
                        <DialogHeader>
                            <DialogTitle className="text-3xl capitalize">
                                {title}
                            </DialogTitle>
                            <DialogDescription className="text-lg text-justify">
                                {description}
                            </DialogDescription>
                        </DialogHeader>
                        <ScrollArea
                            className="w-full whitespace-nowrap rounded-md border"
                        >
                            <div className="flex w-max space-x-4 p-4">
                                {
                                    technologies.map((tech, i) =>
                                        <Animation
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{
                                                opacity: 1, scale: 1
                                            }}
                                            exit={{ opacity: 0, scale: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <TechCard tech={tech} />
                                        </Animation>
                                    )
                                }
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </div>
                    <DialogFooter
                        className="w-full h-full flex items-center"
                    >
                        <Link
                            href={repository}
                            legacyBehavior
                        >
                            <a
                                className="bg-primary w-full flex justify-center items-center gap-2 rounded-md text-xl p-2 m-2 hover:scale-95 duration-200"
                                target="_blank"
                            >
                                {go_to_code}
                                <Terminal
                                    size={32}
                                />
                            </a>
                        </Link>
                    </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>
    )
}
