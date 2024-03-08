import { FC } from "react"
import { ContactCardProps } from "@/@types"
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card"

export const ContactCard: FC<ContactCardProps> = ({
    children, description
}) => {

    return (

        <Card
            className="w-64 hover:border-primary hover:scale-95 duration-300 group drop-shadow-lg"
        >
            <CardHeader className="flex flex-col items-center">
                <CardTitle className="group-hover:text-primary">
                    {children}
                </CardTitle>
                <CardDescription
                    className="text-sm italic group-hover:text-primary"
                >
                    {description}
                </CardDescription>
            </CardHeader>
        </Card>
    )
}
