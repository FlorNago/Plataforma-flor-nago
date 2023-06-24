import NavbarComponent from "../components/NavbarComponent"
import AuthContextProvider from "./context/AuthContext"
import ToastContextProvider from "./context/ToastifyContext"
import "./styles/globals.css"
import { Poppins } from "next/font/google"

const poppins = Poppins({
 weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
 subsets: ["latin"],
})

export const metadata = {
 title: "Flor Nagô",
 description: "Onde nossa arte é a sua beleza!",
 icons: {
    icon: [
        "/favicon.ico"
    ],
    apple: [
        "/apple-touch-icon.png?v=4"
    ],
    shortcut: [
        "/apple-touch-icon.png?v=4"
    ]
 },
 manifest: "/site.webmanifest"
}

export default function RootLayout({ children }) {
 return (
  <html lang="pt-BR">
   <body className={poppins.className}>
    <AuthContextProvider>
     <ToastContextProvider>
      <NavbarComponent />
      {children}
     </ToastContextProvider>
    </AuthContextProvider>
   </body>
  </html>
 )
}
