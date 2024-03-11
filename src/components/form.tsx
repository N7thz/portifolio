"use client"

import { FC, useState } from "react"
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
import { twMerge } from "tailwind-merge"
import { Toaster } from "./toaster"
import { Check, XCircle } from "lucide-react"

export const Form: FC<FormProps> = ({ form }) => {

    type FormType = z.infer<typeof formSchema>

    const [isSend, setIsSend] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)

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
        toaster_error_message,
        toaster_error_title,
        toaster_sucess_message,
        toaster_sucess_title
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
        reset,
        formState: { errors }
    } = useForm<FormType>({
        resolver: zodResolver(formSchema)
    })

    async function sendEmail(data: FormType) {

        if (!isSend) {

            setIsSend(true)

            const response = await fetch("/api/send", {
                method: "POST",
                body: JSON.stringify(data)
            })

            if (response.status == 200) {

                setIsOpen(true)

                reset()

                setTimeout(() => setIsOpen(false), 2000)
            } else {

                setIsError(true)

                setTimeout(() => {
                    setIsError(false)
                }, 2000)
            }

        } else {

            const timeout = 1000 * 60 * 10 // timeout for send email

            setIsError(true)

            setTimeout(() => {
                setIsError(false)
            }, 2000)

            setTimeout(() => setIsSend(false), timeout)
        }
    }

    return (

        <Card className="w-full capitalize drop-shadow-lg relative 2xl:w-11/12">
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
                            className={
                                errors.subject &&
                                "border-2 border-red-600 placeholder:text-red-600 italic"
                            }
                            placeholder={
                                errors.subject
                                    ? errors.subject.message
                                    : subject_placeholder
                            }
                            {...register("subject")}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label className="pl-2 text-lg">
                            {message}
                        </Label>
                        <Textarea
                            className={twMerge(
                                "max-h-[400px]",
                                errors.message &&
                                "border-2 border-red-600 placeholder:text-red-600 italic"
                            )}
                            placeholder={
                                errors.message
                                    ? errors.message?.message
                                    : message_placeholder
                            }
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
            {isOpen &&
                <Toaster
                    toaster_title={toaster_sucess_title}
                    toaster_message={toaster_sucess_message}
                    variant={"default"}
                    className="border border-primary"
                >
                    <Check />
                </Toaster>
            }
            {isError &&
                <Toaster
                    toaster_title={toaster_error_title}
                    toaster_message={toaster_error_message}
                    variant={"destructive"}
                >
                    <XCircle />
                </Toaster>
            }
        </Card>
    )
}
