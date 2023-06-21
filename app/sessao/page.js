import Link from "next/link";
import { headers } from "next/headers"

import { getServerSession } from "next-auth";
import { authOptions } from "../../app/api/auth/[...nextauth]/route";
import BotaoLogOut from "../components/LogOutComponent";

async function Publicacao() {
  const response = await fetch("http://localhost:3000/api/post", {
    method: "POST",
    headers: headers()
  })

  const data = await response.json()
  console.log(response.status, data)
}

export default async function SessaoStatus() {
  const session = await getServerSession(authOptions);
  await Publicacao()

  return (
    <section>
      <h1>Sessão status:</h1>
      <h1>Usando rendereizalção do servidor</h1>
      {session ? (
        <>
        <div>
            Inforção da sessão:{" "}
            <div>{JSON.stringify(session.user)}</div>
        </div>
        <BotaoLogOut />
        </>
      ) : (
        <Link href="/login">Iniciar sessão</Link>
      )}
    </section>
  );
}