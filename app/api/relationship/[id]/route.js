import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export async function POST(request, { params }) {
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({ error: "Você precisa estar em uma sessão para realizar essa ação" }, { status: 401 })

    const { id } = params

    const response = await fetch(`${process.env.BACKEND_URL}/relationship/follow/${session.user.user_id}/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (response.status !== 200) {
        return NextResponse.json({ error: "Não foi possível seguir o usuário" }, { status: 500 })
    }

    return NextResponse.json({message: "Usuário seguido com sucesso!"}, {status: 200})
}

export async function DELETE(request, { params }) {
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({ error: "Você precisa estar em uma sessão para realizar essa ação" }, { status: 401 })

    const { id } = params

    const response = await fetch(`${process.env.BACKEND_URL}/relationship/unfollow/${session.user.user_id}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (response.status !== 204) {
        return NextResponse.json({ message: "Não foi possível deixar de seguir o usuário" }, { status: 500 })
    }

    return NextResponse.json({message: "Usuário não seguido com sucesso"}, {status: 200})
}