import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({ error: "Você precisa estar em uma sessão para realizar esta ação" }, { status: 401 })

    const { id } = params

    const response = await fetch(`${process.env.BACKEND_URL}/post/action/${id}/${session.user.user_id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
    })

    const data = await response.json()

    if (response.status !== 200) {
        return NextResponse.json({ message: data.message }, { status: response.status })
    }

    return NextResponse.json({message: data}, { status: 200 })
}