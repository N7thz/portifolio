"use client"

import { FC } from "react"
import { FormProps } from "@/@types"
import { useForm } from "react-hook-form"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from "./ui/card"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Animation } from "./animation"

export const Form: FC<FormProps> = ({ form }) => {

    type FormType = z.infer<typeof formSchema>

    const {
        enter_contact,
        description,
        subject,
        subject_placeholder,
        message,
        message_placeholder,
        button_text,
        input_subject,
        input_message, 
    } = form

    const formSchema = z.object({
        subject: z.string().nonempty({
            message: input_subject
        }),
        message: z.string().nonempty({
            message: input_message
        }),
    })

    const {
        register,
        handleSubmit, 
        formState: { errors }
    } = useForm<FormType>({
        resolver: zodResolver(formSchema)
    })

    console.log(errors)

    function sendEmail(data: FormType) {

        console.log("email enviado", data)
    }

    return (

        <Card className="w-full capitalize drop-shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl">
                    {enter_contact}
                </CardTitle>
                <CardDescription className="normal-case text-lg">
                    {description}
                </CardDescription>
            </CardHeader>
            <form
                onSubmit={handleSubmit(sendEmail)}
            >
                <CardContent className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <Label className="pl-2 text-lg">
                            {subject}
                        </Label>
                        <Input
                            placeholder={subject_placeholder}
                            {...register("subject")}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label className="pl-2 text-lg">
                            {message}
                        </Label>
                        <Textarea
                            className="max-h-[400px]"
                            placeholder={message_placeholder}
                            {...register("message")}
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Animation
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Button
                            variant={"outline"}
                            className="scale-125 border-primary hover:scale-105 duration-300"
                        >
                            {button_text}
                        </Button>
                    </Animation>
                </CardFooter>
            </form>
        </Card>
    )
}
