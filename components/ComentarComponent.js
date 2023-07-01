"use client"

import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { AiOutlineUser } from "react-icons/ai"
import { toast } from "react-toastify"
import CirculoCarregamentoComponent from "./CirculoCarregamentoComponent"

export default function ComentarComponent({ id }) {
 const router = useRouter()
 const { data: session } = useSession()
 const [textContent, setTextContent] = useState("")
 const [loading, setLoading] = useState(false)

 async function onSubmit(event) {
  event.preventDefault()
  setLoading(() => true)

  if (!textContent) {
   setLoading(() => false)
   toast.error("Por favor não envie um comentário vazio!")
   return
  }

  const response = await fetch(`/api/post/comment/${id}`, {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
   },
   body: JSON.stringify({ text: textContent }),
  })

  const data = await response.json()

  if (response.status !== 201) {
   // TODO: handle error
   setLoading(() => false)
   toast.error(data.message)
   return
  }

  setLoading(() => false)
  toast.success("Comentario publicado!")
  router.refresh()
 }

 return (
  <form
   onSubmit={onSubmit}
   className="relative flex items-center self-center w-full p-4 overflow-hidden text-gray-600 focus-within:text-gray-400"
  >
   {session?.user?.image_url ? (
    <Image
     src={session.user.image_url}
     width={40}
     height={40}
     alt=""
     className="rounded-full w-10 h-10 shadow mr-2 cursor-pointer"
    />
   ) : (
    <AiOutlineUser size={40} className="rounded-full" />
   )}
   {loading ? (
    <span
     style={{ borderRadius: 25 }}
     className="w-full flex items-center py-2 text-sm bg-segunda border border-transparent appearance-none rounded-tg text-white px-4"
    >
     <CirculoCarregamentoComponent />
     Publicando comentário...
    </span>
   ) : (
    <input
     type="search"
     className="w-full py-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
     style={{ borderRadius: 25 }}
     placeholder="Comentar algo"
     autoComplete="off"
     onChange={(event) => setTextContent(event.target.value)}
    />
   )}
  </form>
 )
}
