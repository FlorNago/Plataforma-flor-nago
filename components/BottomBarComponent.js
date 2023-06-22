"use client"

import { BiLogOut } from "react-icons/bi"
import { GiPartyPopper } from "react-icons/gi"

export default function BottombarComponent() {
 return (
  <div class="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-gray-50 border rounded-full bottom-4 left-1/2 sm:hidden">
   <div class="grid h-full max-w-lg grid-cols-4 mx-auto">
    <button
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
    </button>
    <div
     id="tooltip-home"
     role="tooltip"
     class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    >
     Home
     <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <button
     data-tooltip-target="tooltip-wallet"
     type="button"
     class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
    >
     <GiPartyPopper class="w-6 h-6 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
     <span class="sr-only">Wallet</span>
    </button>
    <div
     id="tooltip-wallet"
     role="tooltip"
     class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    >
     Wallet
     <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <div
     id="tooltip-new"
     role="tooltip"
     class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    >
     Create new item
     <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <button
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
    </button>
    <div
     id="tooltip-settings"
     role="tooltip"
     class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    >
     Settings
     <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <button
     data-tooltip-target="tooltip-profile"
     type="button"
     class="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 group"
    >
     <BiLogOut class="w-6 h-6 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
     <span class="sr-only">Profile</span>
    </button>
    <div
     id="tooltip-profile"
     role="tooltip"
     class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    >
     Profile
     <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
   </div>
  </div>
 )
}
