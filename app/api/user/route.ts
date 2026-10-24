import { NextResponse, NextRequest } from "next/server";


export async function GET(request:NextRequest){
    const param = request.nextUrl.searchParams.get("q")
    return NextResponse.json({
        name:param,
        age:26
    })
}



