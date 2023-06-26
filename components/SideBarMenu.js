"use client"

import FlornagoLogo from "@/imagens/logo_plataforma.svg"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FiSettings, FiUser } from "react-icons/fi"
import { GiPartyPopper } from "react-icons/gi"
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiLogOut } from "react-icons/bi"
import ModalComponent from "./ModalComponent"
import { useState } from "react"

const navigationList = [
 { nome: "HOME", href: "/sessao", icon: AiOutlineHome },
 { nome: "EVENTO", href: "/sessao/evento", icon: GiPartyPopper },
 { nome: "CONFIGURAÇÃO", href: "/sessao/configuracao", icon: FiSettings },
]

export default function BarraEsquerdaComponent() {
 const [modalOpen, setModalOpen] = useState(false)
 const currentPath = usePathname()
 const { data: session } = useSession()

 function closeModal() {
    setModalOpen(() => false)
 }

 return (
  <>
   <div className="flex h-screen flex-col justify-between border-e bg-white sticky left-0 top-0 max-sm:hidden">
    <div className="px-4 py-6">
     <Image src={FlornagoLogo} alt="" width={200} />

     <ul className="mt-6 space-y-1">
      {navigationList.map((item, index) => {
       return (
        <li key={index}>
         <Link
          href={item.href}
          className={`flex items-center gap-2 rounded px-4 py-2 text-sm font-medium text-segunda ${
           currentPath === item.href ? "bg-terceira/20" : "hover:bg-primaria/10"
          }`}
         >
          <item.icon />
          {item.nome}
         </Link>
        </li>
       )
      })}

      <li>
       <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-segunda hover:bg-primaria/10 hover:text-gray-700">
         <span className="text-sm font-medium flex items-center gap-2">
          <FiUser /> CONTA{" "}
         </span>

         <span className="shrink-0 transition duration-300 group-open:-rotate-180">
          <svg
           xmlns="http://www.w3.org/2000/svg"
           className="h-5 w-5"
           viewBox="0 0 20 20"
           fill="currentColor"
          >
           <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
           />
          </svg>
         </span>
        </summary>

        <ul className="mt-2 space-y-1 px-4">
         <li>
          <button
           onClick={() => signOut()}
           type="submit"
           className="w-full flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-segunda [text-align:_inherit] hover:bg-primaria/10"
          >
           <BiLogOut />
           SAIR
          </button>
         </li>
        </ul>
       </details>
      </li>
     </ul>
    </div>

    <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 w-full">
     <button className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50 w-full" onClick={() => setModalOpen(() => true)}>
      {session?.user?.image_url ? (
       <Image
        src={session.user.image_url}
        width={40}
        height={40}
        alt=""
        className="rounded-full w-10 h-10"
       />
      ) : (
       <AiOutlineUser size={40} className="rounded-full" />
      )}

      <div>
       <p className="text-xs">
        <strong className="block font-medium text-left">
         @{session?.user?.name}
        </strong>
        <span> {session?.user?.email} </span>
       </p>
      </div>
     </button>
    </div>
   </div>

   <ModalComponent session={session} open={modalOpen} callback={closeModal} />
  </>
 )
}
