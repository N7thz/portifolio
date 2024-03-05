import { MainProps } from "@/@types"
import { FC } from "react"
import "./z_animations.css"
import { Tecnologies } from "./tecnologies"
import { CardHome } from "./card-home"
import { About } from "./about"
import { Projects } from "./projects"

export const Main: FC<MainProps> = ({
    main: {
        message_animation, summary, aboutText
    },
    header: {
        about, contact, projects, technologies
    }
}) => {
    return (

        <main className="p-4 flex flex-col gap-8 pt-32">

            <CardHome
                message_animation={message_animation}
                summary={summary}
            />

            <About
                about={about}
                aboutText={aboutText}
            />

            <Tecnologies
                technologies={technologies}
            />

            <Projects
                projects={projects}
            />
        </main>
    )
}


