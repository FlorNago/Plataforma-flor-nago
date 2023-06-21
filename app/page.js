import MulherFlorNago from "@/imagens/img-lp.png"
import Image from "next/image"
import Link from "next/link"

export default () => {
 return (
  <div className="min-h-screen grid place-content-center">
   <section className="mx-auto max-w-screen-xl px-4 items-center grid justify-items-center lg:flex md:px-8">
    <div className="space-y-4 flex-1 sm:text-center lg:text-left">
     <h1 className="text-primaria font-bold text-5xl xl:text-7xl">
      <span className="text-terceira">A</span> plataforma <span className="text-terceira">aonde nossa</span> arte <span className="text-terceira">é a sua</span> beleza
     </h1>
     <p className="text-segunda max-w-xl text-2xl leading-relaxed sm:mx-auto lg:ml-0">
     Venha conhecer a plataforma de beleza afro mais famosa do Brasil.
     </p>
     <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
      <Link
       href="/"
       className="px-7 py-3 w-full bg-segunda text-quarta text-center rounded-md shadow-md block sm:w-auto"
      >
       Veja Agora
      </Link>
      <Link
       href="/"
       className="px-7 py-3 w-full bg-transparent border border-segunda text-segunda text-center rounded-md block sm:w-auto"
      >
       Saiba mais
      </Link>
     </div>
    </div>
    <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3 max-w-md">
     <Image
      src={MulherFlorNago}
      className="w-full mx-auto sm:w-10/12 lg:w-full"
     />
    </div>
   </section>
  </div>
 )
}
