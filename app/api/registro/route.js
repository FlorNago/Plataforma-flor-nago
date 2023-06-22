import { NextResponse } from "next/server"

export async function POST(request) {
 const {
  email,
  senha,
  dataNascimento,
  confirmarSenha,
  cpf,
  instagram,
  segmento,
  celular,
  profissional,
 } = await request.json()

 if (profissional == true) {
  if (
   !email ||
   !senha ||
   !confirmarSenha ||
   !dataNascimento ||
   !cpf ||
   !instagram ||
   !segmento ||
   !celular
  ) {
   return NextResponse.json(
    { message: "Preencha todos os campos!" },
    { status: 400 }
   )
  }
 } else {
  if (!email || !senha || !confirmarSenha || !dataNascimento) {
   return NextResponse.json(
    { message: "Preencha todos os campos!" },
    { status: 400 }
   )
  }
 }

 if (senha !== confirmarSenha) {
  return NextResponse.json(
   { message: "As senhas não coincidem!" },
   { status: 400 }
  )
 }

 const response = await fetch(
  `${process.env.BACKEND_URL}/autenticacao/registro`,
  {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
   },
   body: JSON.stringify({
    email,
    senha,
    dataNascimento,
    cpf,
    instagram,
    segmento,
    celular,
    profissional,
   }),
  }
 )

 if (response.status !== 201) {
  const data = await response.json()
  return NextResponse.json(
   { message: data.message },
   { status: response.status }
  )
 }

 console.log("sucesso")
 return NextResponse.json(
  {
   data: "Conta criada com sucesso!",
  },
  { status: 201 }
 )
}
