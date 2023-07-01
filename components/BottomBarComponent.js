"use client"

import { signOut } from "next-auth/react"
import Link from "next/link"
import { BiLogOut } from "react-icons/bi"
import { GiPartyPopper } from "react-icons/gi"

export default function BottombarComponent() {
 return (
  <div class="fixed w-full h-16 max-w-lg -translate-x-1/2 bg-gray-50 border rounded-full bottom-4 left-1/2 sm:hidden z-10">
   <div class="grid h-full max-w-lg grid-cols-4 mx-auto">
    <Link
     href="/sessao"
     data-tooltip-target="tooltip-home"
     type="button"
     class="inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 group"
    >
     <svg
      class="w-6 h-6 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
     >
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
     </svg>
     <span class="sr-only">Home</span>
    </Link>
    <Link
     href="/sessao/evento"
     data-tooltip-target="tooltip-wallet"
     type="button"
     class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
    >
     <GiPartyPopper class="w-6 h-6 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
     <span class="sr-only">Wallet</span>
    </Link>
    <Link
     href="/sessao/configuracao"
     data-tooltip-target="tooltip-settings"
     type="button"
     class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
    >
     <svg
      class="w-6 h-6 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
     >
      <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
     </svg>
     <span class="sr-only">Settings</span>
    </Link>
    <button
     onClick={() => signOut()}
     data-tooltip-target="tooltip-profile"
     type="button"
     class="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 group"
    >
     <BiLogOut class="w-6 h-6 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
     <span class="sr-only">Profile</span>
    </button>
   </div>
  </div>
 )
}
