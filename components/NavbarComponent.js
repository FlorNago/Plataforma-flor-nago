"use client"

import { useState } from "react"
import Link from "next/link"

import FlornagoLogo from "@/imagens/logo_plataforma.svg"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { signOut, useSession } from "next-auth/react"

function LoggedInComponent() {
 return (
  <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
   <Link
    href="/sessao"
    className="block py-3 px-4 font-medium text-center text-white bg-segunda active:shadow-none rounded-lg shadow md:inline"
   >
    Acessar
   </Link>

   <button
    className="block py-3 w-full text-center text-gray-700 border rounded-lg md:border-none"
    onClick={() => signOut()}
   >
    Sair
   </button>
  </div>
 )
}

function UnloggedInComponent() {
 return (
  <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
   <Link
    href="/login"
    className="block py-3 text-center text-gray-700 border rounded-lg md:border-none"
   >
    Faça Login
   </Link>

   <Link
    href="/signup"
    className="block py-3 px-4 font-medium text-center text-white bg-segunda active:shadow-none rounded-lg shadow md:inline"
   >
    Cadastre-se
   </Link>
  </div>
 )
}

export default () => {
 const pathname = usePathname()
 const { data: session } = useSession()

 const [state, setState] = useState(false)

 const navigation = [
  { title: "Sobre", path: "/sobre" },
  { title: "Planos", path: "/planos" },
  { title: "FAQ", path: "/faq" },
 ]

 if (
  pathname.startsWith("/login") ||
  pathname.startsWith("/signup") ||
  pathname.startsWith("/sessao")
 )
  return null

 return (
  <nav className="bg-white border-b w-full md:text-sm sticky top-0 z-[10]">
   <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
    <div className="flex items-center justify-between py-3 md:py-5 md:block">
     <Link href="/">
      <Image src={FlornagoLogo} width={120} height={50} alt="Float UI logo" />
     </Link>
     <div className="md:hidden">
      <button
       className="text-gray-500 hover:text-gray-800"
       onClick={() => setState(!state)}
      >
       {state ? (
        <svg
         xmlns="http://www.w3.org/2000/svg"
         className="h-6 w-6"
         viewBox="0 0 20 20"
         fill="currentColor"
        >
         <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
         />
        </svg>
       ) : (
        <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth={1.5}
         stroke="currentColor"
         className="w-6 h-6"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
         />
        </svg>
       )}
      </button>
     </div>
    </div>
    <div
     className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
      state ? "block" : "hidden"
     }`}
    >
     <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
      {navigation.map((item, idx) => {
       return (
        <li key={idx} className="text-gray-700 hover:text-segunda">
         <Link href={item.path} className="block">
          {item.title}
         </Link>
        </li>
       )
      })}
      <span className="hidden w-px h-6 bg-gray-300 md:block" />
      {session?.user ? <LoggedInComponent /> : <UnloggedInComponent />}
     </ul>
    </div>
   </div>
  </nav>
 )
}
