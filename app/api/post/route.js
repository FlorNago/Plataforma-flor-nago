import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

// Exemplo de rota que requer que o usuário esteja logado
export async function POST(request) {
    const session = await getServerSession(authOptions);
    
    if (!session) {
        return NextResponse.json({
            message: "Operação não autorizada, você não possui uma conta..."
        }, {
            status: 401
        })
    }

    return NextResponse.json({message: "Sucesso!"})
}