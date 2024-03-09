/* eslint-disable @next/next/no-img-element */
import { FC } from "react"
import {
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card"
import { useQuery } from "@tanstack/react-query"

interface EmailTemplateProps {

    firstName: string
}

export const EmailTemplate: FC<EmailTemplateProps> = async ({ firstName }) => {

    return (

        <div
            className="min-h-screen flex items-center justify-center"
        >
            <Card
                className="border border-indigo-400 bg-indigo-400 m-3"
            >

            </Card>
        </div>
    )
}
