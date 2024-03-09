import { ReqProps } from '@/@types'
import { EmailTemplate } from '@/components/email-template'
import { NextRequest } from 'next/server'
import { Resend } from "resend"

const RESEND_API_KEY="re_TdRiPZ7T_FE589fZfTww96Bp7ptXwzoUp"

const resend = new Resend(RESEND_API_KEY)

export async function POST(req: NextRequest) {

    const body: ReqProps = await req.json()

    const { message, subject } = body

    try {
        const data = await resend.emails.send({
            from: 'Nathan <onboarding@resend.dev>',
            to: ["nathanferreiradev@gmail.com"],
            subject: subject,
            react: EmailTemplate({ message, subject }) as React.ReactElement,
        })

        return Response.json(data)
    } catch (error) {
        return Response.json({ error: Error })
    }
}