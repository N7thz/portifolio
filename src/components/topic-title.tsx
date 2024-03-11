import { FC } from "react"
import { TopicProps } from "@/@types"
import { ChevronLeft, ChevronRight, Slash } from "lucide-react"

export const TopicTitle: FC<TopicProps> = ({ topic }) => {

    return (

        <div className="flex gap-4 items-center max-phone:gap-3">
            <div className="flex justify-center relative pl-2">
                <ChevronLeft
                    size={32}
                    className="absolute -left-4 top-1"
                />
                <span className="italic text-primary-foreground">
                    {topic}
                </span>
            </div>
            <div className="relative" >
                <Slash
                    size={28}
                    className="absolute top-0.5 right-4 -rotate-12"
                />
                <ChevronRight size={32} />
            </div>
        </div>

    )
}
