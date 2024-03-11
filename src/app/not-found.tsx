import Image from "next/image"
import gif from "@/assets/images/gif-not-found.gif"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {

    const message = "page not-found :("

    return (

        <div className="min-h-screen bg-black">
            <Image
                src={gif}
                width={600}
                height={600}
                quality={100}
                alt="image not-found"
                className="w-11/12 overflow-hidden m-auto"
            />
            <Card
                className="border-primary w-10/12 fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]"
            >
                <CardHeader>
                    <CardTitle className="capitalize text-5xl">
                        {message}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Image
                        src={gif}
                        width={600}
                        height={600}
                        quality={100}
                        alt="image not-found"
                        className="w-10/12 m-auto rounded-md"
                    />
                </CardContent>
            </Card>
        </div>
    )
}