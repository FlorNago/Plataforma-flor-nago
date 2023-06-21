"use client"

import { SessionProvider } from "next-auth/react"

export default function AuthContextProvider({ children }) {
 return <SessionProvider>{children}</SessionProvider>
}
