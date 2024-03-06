import { NextResponse } from "next/server"
import { otherProjects } from "@/lib/projects"

export async function GET() {

    return NextResponse.json(otherProjects.pt)
}