import { FC } from "react"
import { LangToggle } from "./lang-toggle"
import { ModeToggle } from "./mode-toggle"
import { Card, CardTitle } from "./ui/card"
import Link from "next/link"
import { HeaderProps } from "@/@types"

export const Header: FC<HeaderProps> = ({
    header: { about, contact, projects }
}) => {

    const options: string[] = [about, projects, contact]

    return (

        <header
            className="bg-gradient-to-r from-teal-500 to-green-300  dark:from-violet-600 dark:to-indigo-600 pb-1 mb-12 drop-shadow-2xl"
        >
            <Card
                className="border-none rounded-none p-3 flex justify-between"
            >
                <ul
                    className="w-full flex gap-6 items-center capitalize pl-3"
                >
                    {options.map(option =>

                        <Link
                            href={`#${about}`}
                        >
                            <CardTitle
                                key={option}
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
    )
}
