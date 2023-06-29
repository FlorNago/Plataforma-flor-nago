import { NextResponse } from "next/server"

export async function POST(request) {
    const { email, password, confirm_password, birth_date } = await request.json()

    if (!email || !password || !confirm_password || !birth_date) 
        return NextResponse.json({ message: "Preencha todos os campos!" }, { status: 400 })
        
    if (password !== confirm_password) return NextResponse.json({ message: "As senhas não coincidem!" }, { status: 400 })
    if (password.length < 8) return NextResponse.json({ message: "A senha deve ter no mínimo 8 caracteres!" }, { status: 400 })

    const response = await fetch(`${process.env.BACKEND_URL}/authentication/signup/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, birth_date })
    })

    
    if (response.status !== 201) {
        const data = await response.json()
        return NextResponse.json({ message: data.message }, { status: data.status })
    }    
        
    return NextResponse.json({message: "Usuário criado com sucesso!"}, { status: 201 })
}