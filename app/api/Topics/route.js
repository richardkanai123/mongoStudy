import { NextResponse } from "next/server";
import connectMBD from "../../Libs/MongoDb";
import Topic from "../../Models/Topic";

export async function POST(req) {
    const { title, details } = await req.json();
    await connectMBD()


    await Topic.create({
        title,
        details
    })

    return NextResponse.json({ message: "Topic Added" }, { status: 201 })
}


export async function GET() {
    await connectMBD()

    const data = await Topic.find()

    return NextResponse.json({ data }, { status: 200 })


}
