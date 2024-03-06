import { ReactNode } from "react"
import type { Metadata } from "next"
import { Fira_Code } from "next/font/google"
import "../globals.css"
import { ThemeProvider } from "@/context/theme-provider"
import { twMerge } from "tailwind-merge"

const firaCode = Fira_Code({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portifolio",
  description: "Portifolio for Nathan Ferreira",
}

export default function RootLayout(
  { children, params: { lang } }: Readonly<{
    children: ReactNode, params: { lang: string }
  }>) {

  return (

    <html lang={lang} className="scroll-smooth">
      <body
        className={twMerge(
          "scrollbar scrollbar-thumb-primary scrollbar-thumb-rounded-full scrollbar-w-2 overflow-x-hidden",
          firaCode.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
