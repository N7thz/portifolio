import { NextResponse } from "next/server"
import { bestProjects } from "@/lib/projects"

export async function GET() {

    return NextResponse.json(bestProjects.en)
}