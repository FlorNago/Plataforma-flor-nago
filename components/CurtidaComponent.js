"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import CirculoCarregamentoComponent from "./CirculoCarregamentoComponent"

export default function CurtidaComponent({ id, likesList }) {
 const router = useRouter()
 const [loading, setLoading] = useState(false)
 const [liked, setLiked] = useState(false)
 const { data: session } = useSession()

 useEffect(() => {
  if (!likesList) return
  const userLiked = likesList.find(
   (like) => like.user_id === session?.user?.user_id
  )

  if (userLiked) {
   setLiked(() => true)
  }
 }, [likesList, session?.user?.user_id])

 async function onSubmit(event) {
  event.preventDefault()
  setLoading(() => true)

  const response = await fetch(`/api/post/action/${id}`, {
   method: "PUT",
   headers: {
    "Content-Type": "application/json",
   },
  })

  const data = await response.json()

  if (response.status !== 200) {
   toast.error(data.error)
   setLoading(() => false)
   return
  }

  toast.success(
   `${data.message === true ? "Curtido" : "Descurtido"} com sucesso`
  )
  setLoading(() => false)
  setLiked(() => data.message)
  router.refresh()
 }

 if (loading) {
  return (
   <div className="py-2 px-6 flex items-center rounded-full bg-segunda text-white text-xs">
    <CirculoCarregamentoComponent /> Carregando...
   </div>
  )
 }

 return (
  <form
   onSubmit={onSubmit}
   className="transition relative ease-out duration-300 hover:bg-gray-50 bg-gray-100 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer"
  >
   <button>
    <svg
     className={`h-4 w-4 ${liked ? "fill-red-500" : "text-red-500"}`}
     fill="none"
     viewBox="0 0 24 24"
     stroke="currentColor"
     strokeWidth={2}
    >
     <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
     />
    </svg>
   </button>
  </form>
 )
}
