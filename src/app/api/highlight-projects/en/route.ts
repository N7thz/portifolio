import { NextResponse } from "next/server"
import { highLightProjects } from "@/lib/projects"

export async function GET() {

    return NextResponse.json(highLightProjects.en)
}