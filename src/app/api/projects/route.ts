import { NextResponse } from "next/server";
import { projects } from "@/dictionaries/projects"

export async function GET() {

    return NextResponse.json(projects)
}