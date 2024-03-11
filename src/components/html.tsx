"use client"

import { ReactNode } from "react"
import { usePathname } from "next/navigation"

export const Html = ({ children }: { children: ReactNode }) => {

    const pathname = usePathname()
    const lang = pathname[1]+pathname[2]

    return (

        <html
            lang={lang}
            className="scroll-smooth"
        >
            {children}
        </html>
    )
}
