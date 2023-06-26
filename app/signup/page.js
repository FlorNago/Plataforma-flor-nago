import Image from "next/image"

import FlornagoLogo from "@/imagens/logo_plataforma.svg"
import Background from "@/imagens/Background.jpg"
import MulherFlornago from "@/imagens/FlorLogoFinal.svg"

import FormularioRegistro from "@/components/FormularioRegistro"
import Link from "next/link"

export default function SignUpPage() {
 return (
  <section className="bg-white">
   <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
     <Image
      alt=""
      src={Background}
      className="absolute inset-0 h-full w-full object-cover opacity-80"
     />
    </section>

    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
     <div className="max-w-xl lg:max-w-3xl grid">
      <div className="relative -mt-16 block lg:hidden">
       <a
        className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
        href="/"
       >
        <span className="sr-only">Home</span>
        <Image src={MulherFlornago} height={40} className="h-8 sm:h-10" />
       </a>

       <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"></h1>

       <p className="mt-6 leading-relaxed text-gray-500">
        A plataforma a onde a nossa arte é sua beleza!
       </p>
      </div>

      <Link href="/" className="place-self-center mt-8">
       <Image src={FlornagoLogo} alt="" />
      </Link>

      <FormularioRegistro />
     </div>
    </main>
   </div>
  </section>
 )
}
