import { NextResponse, NextRequest } from "next/server";


export async function GET(request:NextRequest){
    const param = request.nextUrl.searchParams.get("q")
    return NextResponse.json({
        name:param,
        age:26
    })
}

export async function POST(request:NextRequest){
    const {name, age} = await request.json();

    return NextResponse.json({
        name, age
    })
}

