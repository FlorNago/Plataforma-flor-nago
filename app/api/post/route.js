import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

// Exemplo de rota que requer que o usuário esteja logado
export async function POST(request) {
    const session = await getServerSession(authOptions);
    const formData = await request.formData()
    
    if (!session) return NextResponse.json({ message: "Operação não autorizada, você não possui uma conta"}, {status: 401})
    if (!session.user.professional) return NextResponse.json({ message: "Você precisa ser um profissional para criar publicações"}, {status: 401})
    if (!formData) return NextResponse.json({ message: "Nenhum dado foi enviado" }, { status: 400 })
    if (!formData.get("image") ||formData.get("image") === "null") return NextResponse.json({ message: "Nenhuma imagem foi enviada" }, { status: 400 })
    if (!formData.get("data") || formData.get("data") === "null") return NextResponse.json({ message: "Nenhum dado foi enviado" }, { status: 400 })

    const dataForm = JSON.parse(formData.get("data"))
    if (!Object.values(dataForm).every(value => value.length > 0)) return NextResponse.json({ message: "Nenhum dado foi enviado" }, { status: 400 })
    
    const newFormData = new FormData()
    newFormData.append("image", formData.get("image"))
    newFormData.append("content", JSON.stringify(dataForm))

    const response = await fetch(`${process.env.BACKEND_URL}/post/create/${session.user.user_id}`, {
        method: "POST",
        body: newFormData
    })

    const data = await response.json()

    if (response.status !== 201) {
        return NextResponse.json({ message: data.message }, { status: response.status })
    }

    return NextResponse.json({message: data}, { status: 201 })
}