"use client"

import { useState } from "react"
import Link from "next/link"

import { signIn } from "next-auth/react"

import { BsEye, BsEyeFill } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

export default function FormularioRegistro() {
    const router = useRouter()
 const [formularioRegistro, setFormularioRegistro] = useState({
  email: "",
  password: "",
 })
 const [senhaVisivel, setSenhaVisivel] = useState(false)

 function onSubmit(event) {
  event.preventDefault()

  toast.promise(
   signIn("credentials", { ...formularioRegistro, redirect: false }).then(
    ({ ok, error }) => {
     if (!ok) {
      // A função não executou com sucesso...
      throw new Error("Ocorreu um erro ao realizar o login, por favor tente novamente mais tarde")
     }
     if (error) {
      // Algum erro, ou erro de credenciais aconteceu
      throw new Error(error)
     }

     // Login foi sucesso
     router.push("/sessao")
    }
   ),
   {
    success: "Login realizado com sucesso!",
    pending: "Realizando login...",
    error: {render({data}) {
        return data.message
    }}
   }
  )
 }

 function mudarValor(propriedade, valor) {
  setFormularioRegistro((valorAnterior) => {
   return {
    ...valorAnterior,
    [propriedade]: valor,
   }
  })
 }

 return (
  <form className="mt-8 grid grid-cols-6 gap-6" onSubmit={onSubmit} noValidate>
   <div className="col-span-6 relative">
    <label htmlFor="Email" className="block text-sm font-medium text-segunda">
     Email
    </label>

    <input
     type="email"
     value={formularioRegistro.email}
     onChange={(event) => mudarValor("email", event.target.value)}
     id="Email"
     name="email"
     placeholder="nome@exemplo.com"
     className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
    />
    <div className="text-segunda">
     <HiOutlineMail size={25} className="absolute right-4 top-[50%]" />
    </div>
   </div>

   <div className="col-span-6 relative">
    <label
     htmlFor="Password"
     className="block text-sm font-medium text-segunda"
     placeholder="Senha"
    >
     Senha
    </label>

    <input
     type={senhaVisivel ? "text" : "password"}
     value={formularioRegistro.password}
     onChange={(event) => mudarValor("password", event.target.value)}
     id="Password"
     name="password"
     className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
    />
    <button
     onClick={() => setSenhaVisivel((valorAnterior) => !valorAnterior)}
     className="text-segunda"
     type="button"
    >
     {senhaVisivel ? (
      <BsEye size={25} className="absolute right-4 top-[50%]" />
     ) : (
      <BsEyeFill size={25} className="absolute right-4 top-[50%]" />
     )}
    </button>
   </div>

   <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
    <button className="inline-block shrink-0 rounded-md border border-segunda bg-segunda px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-segunda focus:outline-none focus:ring active:text-segunda">
     Realizar login
    </button>

    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
     Não possui uma conta?{" "}
     <Link href="/signup" className="text-gray-700 underline">
      Registre-se
     </Link>
     .
    </p>
   </div>
  </form>
 )
}
