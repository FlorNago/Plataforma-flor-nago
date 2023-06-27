import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PUT(request) {
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({ message: "Você precisa estar em uma sessão para realizar esta ação" }, { status: 401 })

    const { username, biography } = await request.json()

    const response = await fetch(`${process.env.BACKEND_URL}/user/update/${session.user.user_id}`, {
        method: "PUT",
        body: JSON.stringify({ username, biography }),
        headers: { "Content-Type": "application/json" },
    })

    if (response.status !== 200) {
        const data = await response.json()
        return NextResponse.json({ message: data.message }, { status: 400 })
    }

    return new NextResponse("Perfil atualizado com sucesso!")
}