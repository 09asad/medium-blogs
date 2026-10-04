import { NextRequest } from "next/server";

export async function POST(req: NextRequest){
    // extract the body
    const body = await req.json();
    // store the data in the database
    console.log(body)

    return Response.json({
        message: "You are logged in!",
        data: body
    })
}