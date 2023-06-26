import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"

export async function PUT(request) {
    const session = await getServerSession(authOptions);
    const formData = await request.formData()

    if (!session) return NextResponse.json({ message: "Operação não autorizada, você não possui uma conta..." }, { status: 401 })
    if (!formData || !formData.get("image")) return NextResponse.json({ message: "Nenhuma imagem foi enviada..." }, { status: 400 })

    const image = formData.get("image")

    const newFormData = new FormData()
    newFormData.append("image", image)

    const response = await fetch(`${process.env.BACKEND_URL}/user/update/image/${session.user.user_id}`, {
        method: "PUT",
        body: newFormData
    })

    if (response.status !== 200) {
        const data = await response.json()
        return NextResponse.json({ message: data.message }, { status: response.status })
    }

    return new NextResponse("Foto de perfil atualizada com sucesso!")
}

export async function DELETE(request) {
    const session = await getServerSession(authOptions)

    if (!session) return NextResponse.json({ message: "Operação não autorizada, você não possui uma conta..." }, { status: 401 })

    const response = await fetch(`${process.env.BACKEND_URL}/user/delete/image/${session.user.user_id}`, {
        method: "DELETE"
    })

    if (response.status !== 204) {
        const data = await response.json()
        return NextResponse.json({ message: data.message }, { status: response.status })
    }

    return new NextResponse("Foto de perfil removido com sucesso")
}
