import { ComponentProps, FC } from "react"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { Animation } from "./animation"
import { twMerge } from "tailwind-merge"

export interface ToasterProps extends ComponentProps<"div"> {
    toaster_title: string
    toaster_message: string
    variant: "default" | "destructive" | null | undefined
}

export const Toaster: FC<ToasterProps> = ({
    toaster_message, toaster_title, variant, className, children
}) => {

    return (

        <Animation
            className="absolute bottom-2 right-2"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
            transition={{ duration: .5 }}
        >
            <Alert
                variant={variant}
                className={twMerge(
                    "w-[40vw] flex justify-center items-center normal-case drop-shadow-2xl z-50 bg-zinc-50 dark:bg-zinc-950",
                    className
                )}
            >
                {children}
                <div>
                    <AlertTitle className="capitalize">{toaster_title}</AlertTitle>
                    <AlertDescription>
                        {toaster_message}
                    </AlertDescription>
                </div>
            </Alert>
        </Animation>
    )
}
