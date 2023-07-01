"use client"

import CirculoCarregamentoComponent from "@/components/CirculoCarregamentoComponent"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"

export default function PaginaNovoUsaurio() {
 const [userInformation, setUserInformation] = useState({
  username: "",
  biography: "",
 })
 const [informationLoading, setInformationLoading] = useState(false)
 const { data: session, update } = useSession()
 const router = useRouter()

 if (
  session?.user?.username &&
  session?.user?.username !== "Usuário não informado"
 ) {
  router.push("/sessao")
  return <h1>Redirecionando...</h1>
 }

 async function updateUserInformation(event) {
  event.preventDefault()
  setInformationLoading(() => true)

  const response = await fetch("/api/user/edit/profile/information", {
   method: "PUT",
   body: JSON.stringify(userInformation),
   headers: { "Content-Type": "application/json" },
  })

  if (response.status !== 200) {
   const data = await response.json()
   toast.error(data.message)
   setInformationLoading(() => false)
   return
  }

  update()
  setInformationLoading(() => false)
  toast.success("Informações atualizadas com sucesso")
  router.push("/sessao")
 }

 function changeInput(property, value) {
  setUserInformation((previous) => ({ ...previous, [property]: value }))
 }

 return (
  <form
   onSubmit={updateUserInformation}
   className="flex flex-col gap-8 place-content-center p-4 md:p-8 lg:p-16"
  >
   <div className="bg-gray-100 rounded-md shadow p-16">
    <h1 className="text-segunda text-2xl max-w-prose font-bold">
     Por favor, insira pelo menos o seu nome de usuário para poder ter acesso a
     interações da nossa plataforma
    </h1>

    <div className="flex flex-col gap-4">
     <div>
      <label
       for="name"
       className="block mb-2 text-sm font-medium text-gray-900"
      >
       Nome de usuário
      </label>
      <div class="flex">
       <span class="self-stretch inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
        @
       </span>
       <input
        type="text"
        class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="meu_usuário"
        disabled={
         session?.user?.username &&
         session?.user?.username !== "Usuário não informado"
        }
        onChange={(e) => changeInput("username", e.target.value)}
       />
      </div>
     </div>
     <div>
      <label
       for="description"
       className="block mb-2 text-sm font-medium text-gray-900"
      >
       Biografia(opicional)
      </label>
      <textarea
       id="description"
       rows="5"
       className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
       placeholder="Fale um pouco sobre você"
       onChange={(e) => changeInput("biography", e.target.value)}
      />
     </div>

     <div>
      <button
       disabled={informationLoading}
       type="submit"
       className="text-white flex items-center bg-segunda focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
       {informationLoading && <CirculoCarregamentoComponent />}
       Concluir
      </button>
     </div>
    </div>
   </div>
  </form>
 )
}
