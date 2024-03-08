"use client"

import { Languages } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname, useRouter } from "next/navigation"
import { i18n } from "@/i18n-config"
import Link from "next/link"

export function LangToggle() {

    const { push } = useRouter()
    const pathName = usePathname()
    const redirectedPathName = (locale: string) => {

        if (!pathName) return "/"

        const segments = pathName.split("/")

        segments[1] = locale

        return segments.join("/")
    }

    return (

        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Languages
                        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-primary-foreground"
                    />
                    <Languages
                        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-primary-foreground"
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {i18n.locales.map((locale, index) =>
                    <DropdownMenuItem
                        key={index}
                        asChild
                    >
                        <Link
                            href={redirectedPathName(locale)}
                        >
                            {locale}
                        </Link>
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent >
        </DropdownMenu >
    )
}
