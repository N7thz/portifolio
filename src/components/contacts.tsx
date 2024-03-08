import { FC } from "react"
import { ContactsProps } from "@/@types"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Separator } from "./ui/separator"
import { TopicTitle } from "./topic-title"
import { Form } from "./form"
import { Animation } from "./animation"
import { ContactsLinks } from "./contacts-links"

export const Contacts: FC<ContactsProps> = ({ contact, or, form }) => {

    return (

        <Card
            id={contact}
            className="w-full border-2 border-primary drop-shadow-xl"
        >
            <CardHeader>
                <CardTitle
                    className="capitalize text-3xl flex items-center"
                >
                    <TopicTitle
                        topic={contact}
                    />
                </CardTitle>
            </CardHeader>
            <CardContent
                className="flex flex-col gap-3"
            >
                <ContactsLinks />

                <div
                    className="flex w-full justify-around items-center italic"
                >
                    <Separator className="w-2/5 px-2" />
                    <span className="text-xl">
                        {or}
                    </span>
                    <Separator className="w-2/5 px-2" />
                </div>
                <Animation
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: .7 }}
                >
                    <Form
                        form={form}
                    />
                </Animation>
            </CardContent>
        </Card >
    )
}
