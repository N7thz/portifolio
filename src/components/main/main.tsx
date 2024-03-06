import { FC } from "react"
import { MainProps } from "@/@types"
import { Tecnologies } from "../topics/techlogies/tecnologies"
import { CardHome } from "./card-home"
import { About } from "../topics/about/about"
import { Projects } from "../topics/projects/projects"
import { Animation } from "../animation"

export const Main: FC<MainProps> = ({
    main: {
        message_animation, summary, aboutText, highlihgt, other
    },
    header: {
        about, contact, projects, technologies
    }
}) => {

    return (

        <main className="p-4 flex flex-col gap-8 pt-32">

            <Animation
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <CardHome
                    message_animation={message_animation}
                    summary={summary}
                />
            </Animation>

            <Animation
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <About
                    about={about}
                    aboutText={aboutText}
                />
            </Animation>

            <Animation
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Tecnologies
                    technologies={technologies}
                />
            </Animation>

            <Animation
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Projects
                    other={other}
                    highlihgt={highlihgt}
                    projects={projects}
                />
            </Animation>
        </main>
    )
}


