import { FC } from "react"
import {
    Card, CardContent,CardHeader, CardTitle
} from "@/components/ui/card"

interface EmailTemplateProps {

    subject: string
    message: string
}

export const EmailTemplate: FC<EmailTemplateProps> = async ({
    subject, message
}) => {

    return (

        <Card
            className="w-full border-2 border-primary drop-shadow-xl"
        >
            <CardHeader>
                <CardTitle>
                    {subject}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {message}
            </CardContent>
        </Card>
    )
}
