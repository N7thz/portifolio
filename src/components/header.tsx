import { FC } from "react"
import { LangToggle } from "./lang-toggle"
import { ModeToggle } from "./mode-toggle"
import { Card, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "./ui/sheet"
import { Menu } from "lucide-react"
import { Animation } from "./animation"
import Link from "next/link"
import { HeaderProps } from "@/@types"

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
                className="w-screen bg-gradient-to-r from-teal-500 to-teal-300  dark:from-violet-600 dark:to-indigo-600 pb-1 drop-shadow-2xl z-50 fixed top-0 left-0 right-0 bottom-auto"
            >
                <Card
                    className="border-none rounded-none p-2 flex justify-end max-phone:justify-center"
                >
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button 
                            variant="ghost"
                            >
                                <Animation
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className='m-auto'
                                >
                                    <Menu className="text-primary"/>
                                </Animation>
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <div className="w-full flex gap-3">
                                <LangToggle />
                                <ModeToggle />
                            </div>
                            <ul
                                className="w-full flex flex-col gap-6 capitalize pl-3 pt-12"
                            >
                                {options.map((option, index) =>

                                    <Link
                                        key={index}
                                        href={`#${option}`}
                                        scroll
                                    >
                                        <CardTitle
                                            className="text-primary hover:underline cursor-pointer duration-150 hover:scale-110"
                                        >
                                            {option}
                                        </CardTitle>
                                    </Link>
                                )}
                            </ul>
                        </SheetContent>
                    </Sheet>
                </Card>
            </header>
        </Animation>
    )
}
