import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export async function POST(request, { params }) {
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({ message: "Você precisa estar em uma sessão para realizar essa ação" }, { status: 401 })

    const { id } = params
    const { text } = await request.json()

    const response = await fetch(`${process.env.BACKEND_URL}/comment/${id}/${session.user.user_id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
    })

    if (response.status !== 201) {
        const data = await response.json()
        return NextResponse.json({message: data.message}, { status: response.status })
    }

    return NextResponse.json({ message: "Comentário realizado com sucesso" }, { status: 201 })
}