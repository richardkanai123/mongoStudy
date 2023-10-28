import connectMBD from "@/app/Libs/MongoDb"
import Topic from "@/app/Models/Topic"
import { NextResponse } from "next/server"

export async function GET(req, { params }) {

    const { id } = params

    await connectMBD()
    const res = await Topic.findById(id);
    const data = res;

    return NextResponse.json({ data }, { status: 200 })

}

export async function PUT(req, { params }) {

    const { id } = params

    const { newTitle: title, newDetails: details } = await req.json()

    await connectMBD()
    const res = await Topic.findByIdAndUpdate(id, {
        title, details
    })
    const data = res;

    return NextResponse.json({ message: "Topic Updated" }, { status: 200 })

}

export async function DELETE(req, { params }) {
    const { id } = params
    await connectMBD()
    await Topic.findByIdAndDelete(id)

    return NextResponse.json({ message: "Topic Deleted!" }, { status: 200 })

}