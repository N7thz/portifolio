import { FC } from "react"
import { LangToggle } from "./lang-toggle"
import { ModeToggle } from "./mode-toggle"
import { Card, CardTitle } from "../ui/card"
import Link from "next/link"
import { HeaderProps } from "@/@types"
import { Animation } from "../animation"

export const Header: FC<HeaderProps> = ({
    header: { about, contact, projects, technologies }
}) => {

    const options: string[] = [about, technologies, projects, contact]

    return (

        <Animation
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <header
                className="bg-gradient-to-r from-teal-500 to-green-300  dark:from-violet-600 dark:to-indigo-600 pb-1 drop-shadow-2xl z-50 fixed top-0 left-0 right-0 bottom-auto"
            >
                <Card
                    className="border-none rounded-none p-3 flex justify-between"
                >
                    <ul
                        className="w-full flex gap-6 items-center capitalize pl-3"
                    >
                        {options.map(option =>

                            <Link
                                key={option}
                                href={`#${option}`}
                            >
                                <CardTitle

                                    className=" bg-gradient-to-b from-teal-500 to-green-300 dark:from-violet-600 dark:to-indigo-600 bg-clip-text text-transparent underline cursor-pointer duration-150 hover:scale-110"
                                >
                                    {option}
                                </CardTitle>
                            </Link>
                        )}
                    </ul>
                    <div
                        className="flex gap-4"
                    >
                        <LangToggle />
                        <ModeToggle />
                    </div>
                </Card>
            </header>
        </Animation>
    )
}
