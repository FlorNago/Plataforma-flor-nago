"use client"

import { signOut } from "next-auth/react";

export default function BotaoLogOut() {
    return (
        <button onClick={() => signOut()}>Sair da sessão</button>
    )
}